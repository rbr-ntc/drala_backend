import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { $Enums } from '../../../prisma/generated/client';
import Difficulty = $Enums.Difficulty;
import { Type } from 'class-transformer';


export class CreateTripDto {
  @IsString()
  @IsNotEmpty()
  name: string;

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
  difficulty: Difficulty;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsOptional()
  duration?: string;
}