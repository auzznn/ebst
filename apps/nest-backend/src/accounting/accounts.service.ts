import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

// Default chart of accounts extracted from PT. BST's accounting files
const DEFAULT_ACCOUNTS: CreateAccountDto[] = [
  // ─── Assets (1.x) ────────────────────────────────────────────
  { code: '1.1.1', name: 'Kas', type: 'ASSET' as any },
  { code: '1.1.2', name: 'Bank Mandiri', type: 'ASSET' as any },
  { code: '1.1.3', name: 'Bank BRI', type: 'ASSET' as any },
  { code: '1.3', name: 'Piutang Usaha', type: 'ASSET' as any },
  { code: '1.3.1', name: 'Piutang Karyawan', type: 'ASSET' as any, parentCode: '1.3' },
  { code: '1.3.2', name: 'PPN Masukan', type: 'ASSET' as any, parentCode: '1.3' },
  { code: '1.3.3', name: 'Piutang Lain-Lain', type: 'ASSET' as any, parentCode: '1.3' },
  { code: '1.3.4', name: 'Pajak Dibayar Dimuka', type: 'ASSET' as any, parentCode: '1.3' },
  { code: '1.4', name: 'Tanah', type: 'ASSET' as any },
  { code: '1.4.1', name: 'Gedung', type: 'ASSET' as any, parentCode: '1.4' },
  { code: '1.4.1.1', name: 'Akumulasi Penyusutan Gedung', type: 'CONTRA_ASSET' as any, parentCode: '1.4.1' },
  { code: '1.5', name: 'Kendaraan', type: 'ASSET' as any },
  { code: '1.5.1', name: 'Akumulasi Penyusutan Kendaraan', type: 'CONTRA_ASSET' as any, parentCode: '1.5' },
  { code: '1.6', name: 'Mesin', type: 'ASSET' as any },
  { code: '1.6.1', name: 'Akumulasi Penyusutan Mesin', type: 'CONTRA_ASSET' as any, parentCode: '1.6' },
  { code: '1.7', name: 'Peralatan', type: 'ASSET' as any },
  { code: '1.7.1', name: 'Akumulasi Penyusutan Peralatan', type: 'CONTRA_ASSET' as any, parentCode: '1.7' },

  // ─── Liabilities (2.x) ───────────────────────────────────────
  { code: '2.1', name: 'Hutang Usaha', type: 'LIABILITY' as any },
  { code: '2.2', name: 'Hutang Bank', type: 'LIABILITY' as any },
  { code: '2.3', name: 'Hutang Pihak III', type: 'LIABILITY' as any },
  { code: '2.4', name: 'Hutang PPN / PPN Keluaran', type: 'LIABILITY' as any },
  { code: '2.5', name: 'Hutang Lain', type: 'LIABILITY' as any },
  { code: '2.6', name: 'Hutang Biaya', type: 'LIABILITY' as any },
  { code: '2.7', name: 'Hutang Leasing', type: 'LIABILITY' as any },

  // ─── Equity (3.x) ────────────────────────────────────────────
  { code: '3.1', name: 'Modal', type: 'EQUITY' as any },
  { code: '3.2', name: 'Laba Tahun Berjalan', type: 'EQUITY' as any },
  { code: '3.2.1', name: 'Laba/Rugi Bulan Ini', type: 'EQUITY' as any, parentCode: '3.2' },

  // ─── Revenue (4.x) ───────────────────────────────────────────
  { code: '4.1', name: 'Penjualan', type: 'REVENUE' as any },
  { code: '4.2', name: 'Pendapatan Bunga', type: 'REVENUE' as any },
  { code: '4.3', name: 'Pendapatan Lain', type: 'REVENUE' as any },

  // ─── Cost of Goods (5.x) ─────────────────────────────────────
  { code: '5.1', name: 'Pembelian', type: 'EXPENSE' as any },

  // ─── Expenses (6.x) ──────────────────────────────────────────
  { code: '6.1', name: 'Biaya Gaji', type: 'EXPENSE' as any },
  { code: '6.1.1', name: 'Lembur Karyawan', type: 'EXPENSE' as any, parentCode: '6.1' },
  { code: '6.2', name: 'Biaya Material', type: 'EXPENSE' as any },
  { code: '6.3', name: 'Biaya Listrik, Air', type: 'EXPENSE' as any },
  { code: '6.4', name: 'Biaya Telepon, Internet', type: 'EXPENSE' as any },
  { code: '6.5', name: 'Biaya Transportasi', type: 'EXPENSE' as any },
  { code: '6.6', name: 'Biaya Administrasi Kantor', type: 'EXPENSE' as any },
  { code: '6.7', name: 'THR Karyawan', type: 'EXPENSE' as any },
  { code: '6.8', name: 'Angsuran Leasing', type: 'EXPENSE' as any },
  { code: '6.9', name: 'Biaya Administrasi Bank', type: 'EXPENSE' as any },
  { code: '6.10', name: 'Biaya Penyusutan', type: 'EXPENSE' as any },
  { code: '6.11', name: 'Biaya Lain-Lain', type: 'EXPENSE' as any },
  { code: '6.12', name: 'Biaya Tunjangan ALM & BPJS', type: 'EXPENSE' as any },
  { code: '6.13', name: 'Biaya Pajak', type: 'EXPENSE' as any },
  { code: '6.14', name: 'Biaya Pemeliharaan Kantor', type: 'EXPENSE' as any },
  { code: '6.15', name: 'Komisi dan Fee', type: 'EXPENSE' as any },
  { code: '6.16', name: 'Biaya Bunga Leasing', type: 'EXPENSE' as any },
];

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return this.prisma.chartOfAccount.findMany({
      orderBy: { code: 'asc' },
    });
  }

  async findByCode(code: string) {
    return this.prisma.chartOfAccount.findUnique({
      where: { code },
    });
  }

  async create(dto: CreateAccountDto) {
    const existing = await this.prisma.chartOfAccount.findUnique({
      where: { code: dto.code },
    });
    if (existing) {
      throw new ConflictException(`Account with code ${dto.code} already exists`);
    }

    return this.prisma.chartOfAccount.create({
      data: {
        code: dto.code,
        name: dto.name,
        type: dto.type,
        parentCode: dto.parentCode,
        isActive: dto.isActive ?? true,
      },
    });
  }

  // async seed() {
  //   const existing = await this.prisma.chartOfAccount.count();
  //   if (existing > 0) {
  //     return { message: `Chart of accounts already seeded (${existing} accounts exist)`, seeded: 0 };
  //   }

  //   const created = await this.prisma.chartOfAccount.createMany({
  //     data: DEFAULT_ACCOUNTS.map((a) => ({
  //       code: a.code,
  //       name: a.name,
  //       type: a.type,
  //       parentCode: a.parentCode,
  //       isActive: a.isActive ?? true,
  //     })),
  //   });

  //   return { message: `Seeded ${created.count} accounts`, seeded: created.count };
  // }

  async update(id: string, dto: UpdateAccountDto) {
    const account = await this.prisma.chartOfAccount.findUnique({
      where: { id },
    });

    if (!account) {
      throw new NotFoundException(`Account ${id} not found`);
    }

    return this.prisma.chartOfAccount.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.type !== undefined && { type: dto.type }),
        ...(dto.parentCode !== undefined && { parentCode: dto.parentCode || null }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
  }
}
