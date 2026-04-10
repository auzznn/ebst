import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJournalEntryDto } from './dto/create-journal-entry.dto';

@Injectable()
export class JournalService {
  constructor(private prisma: PrismaService) {}

  async findAll(period?: string) {
    return this.prisma.journalEntry.findMany({
      where: period ? { period } : undefined,
      include: {
        lines: {
          include: {
            account: true,
          },
        },
        createdBy: {
          select: { id: true, name: true },
        },
      },
      orderBy: { date: 'desc' },
    });
  }

  async findOne(id: string) {
    const entry = await this.prisma.journalEntry.findUnique({
      where: { id },
      include: {
        lines: {
          include: {
            account: true,
          },
        },
        createdBy: {
          select: { id: true, name: true },
        },
      },
    });

    if (!entry) {
      throw new NotFoundException(`Journal entry ${id} not found`);
    }

    return entry;
  }

  async create(dto: CreateJournalEntryDto, userId: string) {
    // Validate: total debits must equal total credits
    const totalDebit = dto.lines
      .filter((l) => l.isDebit)
      .reduce((sum, l) => sum + l.amount, 0);
    const totalCredit = dto.lines
      .filter((l) => !l.isDebit)
      .reduce((sum, l) => sum + l.amount, 0);

    if (Math.abs(totalDebit - totalCredit) > 0.01) {
      throw new BadRequestException(
        `Debit total (${totalDebit}) must equal credit total (${totalCredit})`,
      );
    }

    // Validate: all account IDs exist
    const accountIds = [...new Set(dto.lines.map((l) => l.accountId))];
    const accounts = await this.prisma.chartOfAccount.findMany({
      where: { id: { in: accountIds } },
    });

    if (accounts.length !== accountIds.length) {
      throw new BadRequestException('One or more account IDs are invalid');
    }

    // Create entry with lines atomically
    return this.prisma.journalEntry.create({
      data: {
        date: new Date(dto.date),
        description: dto.description,
        period: dto.period,
        createdById: userId,
        lines: {
          create: dto.lines.map((line) => ({
            accountId: line.accountId,
            amount: line.amount,
            isDebit: line.isDebit,
            description: line.description,
          })),
        },
      },
      include: {
        lines: {
          include: { account: true },
        },
        createdBy: {
          select: { id: true, name: true },
        },
      },
    });
  }

  async delete(id: string) {
    const entry = await this.prisma.journalEntry.findUnique({ where: { id } });
    if (!entry) {
      throw new NotFoundException(`Journal entry ${id} not found`);
    }

    await this.prisma.journalEntry.delete({ where: { id } });
    return { message: 'Journal entry deleted' };
  }
}
