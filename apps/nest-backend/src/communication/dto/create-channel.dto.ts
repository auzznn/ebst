import { IsString, IsBoolean, IsOptional, IsArray } from 'class-validator'

export class CreateChannelDto {
  @IsOptional()
  @IsString()
  name?: string

  @IsBoolean()
  isDM: boolean

  @IsArray()
  @IsString({ each: true })
  memberIds: string[]   // user IDs to add on creation
}