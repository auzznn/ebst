import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { HttpAuthGuard } from 'src/communication/guards/http-auth.guard';
import { RolesGuard } from 'src/communication/guards/roles.guard';
import { Roles } from 'src/communication/decorators/roles.decorator';

@Controller('accounting/assets')
@UseGuards(HttpAuthGuard, RolesGuard)
export class AssetsController {
  constructor(private assetsService: AssetsService) { }

  @Get()
  @Roles('FINANCE', 'EXECUTIVE')
  findAll() {
    return this.assetsService.findAll();
  }

  @Get(':id')
  @Roles('FINANCE', 'EXECUTIVE')
  findOne(@Param('id') id: string) {
    return this.assetsService.findOne(id);
  }

  @Post()
  @Roles('FINANCE', 'EXECUTIVE')
  create(@Body() dto: CreateAssetDto) {
    return this.assetsService.create(dto);
  }

  @Post('depreciate')
  @Roles('FINANCE', 'EXECUTIVE')
  depreciate() {
    return this.assetsService.depreciate();
  }
}
