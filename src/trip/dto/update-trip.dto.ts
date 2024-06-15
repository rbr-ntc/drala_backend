import { IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
import { $Enums } from '../../../prisma/generated/client';
import Difficulty = $Enums.Difficulty;
import { Type } from 'class-transformer';


export class UpdateTripDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  endDate: Date;

  @IsEnum(Difficulty)
  @IsOptional()
  difficulty?: Difficulty;

  @IsString()
  @IsOptional()
  duration?: string;
}