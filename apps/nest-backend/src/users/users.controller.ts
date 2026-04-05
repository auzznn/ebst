import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { HttpAuthGuard } from 'src/communication/guards/http-auth.guard';
import { UsersService } from './users.service';


@Controller('users')
@UseGuards(HttpAuthGuard)
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('search')
    search(@Query('q') q: string, @Req() req: any) {
        return this.usersService.search(q ?? '', req.user.id)
    }
}
