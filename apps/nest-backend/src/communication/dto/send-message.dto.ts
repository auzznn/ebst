import { IsString, IsOptional, IsIn } from 'class-validator'

export class SendMessageDto {
  @IsString()
  channelId: string

  @IsString()
  content: string

  @IsOptional()
  @IsIn(['text', 'file'])
  type?: 'text' | 'file'

  @IsOptional()
  @IsString()
  fileUrl?: string

}