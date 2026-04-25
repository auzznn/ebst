import { Controller, Get, Post, Patch, Param, Body, Req, UseGuards, Query } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateMaterialDto, UpdateMaterialDto, StockAdjustmentDto, AddJobMaterialDto } from './dto/inventory.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get('materials')
  findAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string
  ) {
    const pageNum = page ? parseInt(page, 10) : 1;
    const limitNum = limit ? parseInt(limit, 10) : 10;
    return this.inventoryService.findAll(pageNum, limitNum);
  }

  @Get('materials/:id')
  findOne(@Param('id') id: string) {
    return this.inventoryService.findOne(id);
  }

  @Get('materials/:id/ledger')
  getLedger(
    @Param('id') id: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string
  ) {
    const pageNum = page ? parseInt(page, 10) : 1;
    const limitNum = limit ? parseInt(limit, 10) : 20;
    return this.inventoryService.getMaterialLedger(id, pageNum, limitNum);
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
