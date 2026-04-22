import { Controller, Get, Post, Patch, Param, Body, Req, Delete } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobCardStatus } from '@ebst/db';
import { CreateJobDto } from './dto/create-job.dto';
import { StartOperationDto } from './dto/start-operation.dto';
import { SubmitQcDto } from './dto/submit-qc.dto';
import { CreateCheckSheetDto } from './dto/create-checksheet.dto';
import { AddJobMaterialDto } from './dto/add-job-material.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobsService.findOne(id);
  }

  @Post()
  createJob(@Body() body: CreateJobDto, @Req() req: any) {
    return this.jobsService.createJob({
      ...body,
      createdById: req.user.id
    });
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: JobCardStatus) {
    return this.jobsService.updateStatus(id, status);
  }

  @Patch('operations/:id/start')
  startOperation(@Param('id') id: string, @Body() body: StartOperationDto) {
    return this.jobsService.startOperation(id, body);
  }

  @Patch('operations/:id/complete')
  completeOperation(@Param('id') id: string, @Body('notes') notes?: string) {
    return this.jobsService.completeOperation(id, notes);
  }

  @Post('operations/:id/qc')
  submitQc(@Param('id') id: string, @Body() body: SubmitQcDto, @Req() req: any) {
    return this.jobsService.submitQc(id, body, req.user.id);
  }

  @Post('operations/:id/checksheet')
  createCheckSheet(@Param('id') id: string, @Body() body: CreateCheckSheetDto) {
    return this.jobsService.createCheckSheet(id, body);
  }

  @Post('items/:jobListId/materials')
  addJobMaterial(@Param('jobListId') jobListId: string, @Body() body: AddJobMaterialDto) {
    return this.jobsService.addJobMaterial(jobListId, body);
  }

  @Delete('materials/:id')
  removeJobMaterial(@Param('id') id: string) {
    return this.jobsService.removeJobMaterial(id);
  }
}