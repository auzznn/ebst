import { Controller, Get, Post, Patch, Param, Body, Req, UseGuards } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateMaterialDto, UpdateMaterialDto, StockAdjustmentDto, AddJobMaterialDto } from './dto/inventory.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get('materials')
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get('materials/:id')
  findOne(@Param('id') id: string) {
    return this.inventoryService.findOne(id);
  }

  @Post('materials')
  create(@Body() body: CreateMaterialDto) {
    return this.inventoryService.create(body);
  }

  @Patch('materials/:id')
  update(@Param('id') id: string, @Body() body: UpdateMaterialDto) {
    return this.inventoryService.update(id, body);
  }

  @Post('materials/:id/adjust')
  adjustStock(@Param('id') id: string, @Body() body: StockAdjustmentDto, @Req() req: any) {
    return this.inventoryService.adjustStock(id, req.user?.id || 'system', body);
  }

  @Post('job-allocation')
  addMaterialToJob(@Body() body: AddJobMaterialDto, @Req() req: any) {
    return this.inventoryService.addMaterialToJob(req.user?.id || 'system', body);
  }
}
