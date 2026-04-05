import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async search(query: string, currentUserId: string) {
        return this.prisma.user.findMany({
            where: {
                AND: [
                    { id: {not: currentUserId} },
                    {
                        OR: [
                            { displayUsername: {contains: query, mode: 'insensitive'}},
                            { email: {contains: query, mode: 'insensitive'}},
                            { name: {contains: query, mode: 'insensitive'}}
                        ]
                    }
                ]
            },
            select: {
                id: true,
                name: true,
                email: true,
                displayUsername: true,
                image: true
            }
        })
    }
}
