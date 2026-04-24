import { Controller, Get, Post, Patch, Delete, Param, Body, UseInterceptors, UploadedFile, Query, Req, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PartsService } from './parts.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { HttpAuthGuard } from '../communication/guards/http-auth.guard';

@Controller('parts')
@UseGuards(HttpAuthGuard)
export class PartsController {
  constructor(private readonly partsService: PartsService) {}

  @Get()
  findAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('castingType') castingType?: string,
  ) {
    const pageNum = page ? parseInt(page, 10) : 1;
    const limitNum = limit ? parseInt(limit, 10) : 10;
    return this.partsService.findAll(pageNum, limitNum, search, castingType);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partsService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() body: CreatePartDto, @UploadedFile() file?: Express.Multer.File, @Req() req?: any) {
    const userId = req?.user?.id;
    return this.partsService.create(body, file, userId);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  update(@Param('id') id: string, @Body() body: UpdatePartDto, @UploadedFile() file?: Express.Multer.File, @Req() req?: any) {
    const userId = req?.user?.id;
    return this.partsService.update(id, body, file, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partsService.remove(id);
  }
}