import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createCustomerDto } from './dto/create-customers.dto';

@Injectable()
export class CustomersService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.customer.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                address: true
            },
            orderBy: { name: 'asc' }
        })
    }

    async search(query: string) {
        return this.prisma.customer.findMany({
            where: {
                OR: [
                    { name: { contains: query, mode: 'insensitive' } },
                    { email: { contains: query, mode: 'insensitive' } },
                ]
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                address: true
            }
        })
    }

    async create(data: createCustomerDto) {
        return this.prisma.customer.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: data.address,
            }
        })
    }
}
