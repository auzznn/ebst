import { Controller, Get, Post, Patch, Delete, Param, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PartsService } from './parts.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';

@Controller('parts')
export class PartsController {
  constructor(private readonly partsService: PartsService) {}

  @Get()
  findAll() {
    return this.partsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partsService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() body: CreatePartDto, @UploadedFile() file?: Express.Multer.File) {
    return this.partsService.create(body, file);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  update(@Param('id') id: string, @Body() body: UpdatePartDto, @UploadedFile() file?: Express.Multer.File) {
    return this.partsService.update(id, body, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partsService.remove(id);
  }
}