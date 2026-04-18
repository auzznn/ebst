import { Controller, Post, Body, UseGuards, Query, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { createCustomerDto } from './dto/create-customers.dto';
import { HttpAuthGuard } from 'src/communication/guards/http-auth.guard';

@Controller('customers')
@UseGuards(HttpAuthGuard)
export class CustomersController {
    constructor(private readonly customersService: CustomersService) { }

    @Get()
    async findAll() {
        return this.customersService.findAll();
    }

    @Get('/search')
    async search(@Query('q') query: string) {
        return this.customersService.search(query);
    }

    @Post()
    async create(@Body() data: createCustomerDto) {
        return this.customersService.create(data);
    }
}
