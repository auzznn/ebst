import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { HttpAuthGuard } from 'src/communication/guards/http-auth.guard';

@Controller('machines')
@UseGuards(HttpAuthGuard)
export class MachinesController {
  constructor(private readonly machinesService: MachinesService) { }

  @Get()
  findAll() {
    return this.machinesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machinesService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateMachineDto) {
    return this.machinesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateMachineDto) {
    return this.machinesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machinesService.remove(id);
  }
}