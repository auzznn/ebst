import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { RoutingService } from './routing.service';
import { UpsertRoutingDto } from './dto/upsert-routing.dto';

@Controller('routing')
export class RoutingController {
  constructor(private readonly routingService: RoutingService) {}

  @Get(':partId')
  findByPartId(@Param('partId') partId: string) {
    return this.routingService.findByPartId(partId);
  }

  @Put(':partId')
  upsertRouting(@Param('partId') partId: string, @Body() body: UpsertRoutingDto) {
    return this.routingService.upsertRouting(partId, body);
  }
}