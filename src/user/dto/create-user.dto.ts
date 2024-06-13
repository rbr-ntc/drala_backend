// src/user/dto/create-user.dto.ts
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { IsUsernameValid } from '../validators/username.validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(20, { message: 'Password must not exceed 20 characters' })
  @Matches(/(?=.*[a-z])/, { message: 'Password must contain at least one lowercase letter' })
  @Matches(/(?=.*[A-Z])/, { message: 'Password must contain at least one uppercase letter' })
  @Matches(/(?=.*[0-9])/, { message: 'Password must contain at least one digit' })
  @Matches(/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/, { message: 'Password must contain at least one special character' })
  password: string;

  @IsNotEmpty()
  @IsUsernameValid({ message: 'Username must be between 5 and 20 characters long and contain only alphanumeric characters' })
  username: string;

  @IsOptional()
  @IsPhoneNumber()
  phone: string;

  @IsString()
  @IsOptional()
  @IsUrl({}, { message: 'Avatar URL must be a valid URL' })
  @Matches(/\.(jpg|jpeg|png|gif)$/, { message: 'Avatar URL must link to a valid image file' })
  avatarUrl?: string;
}