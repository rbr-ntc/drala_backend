import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsOptional()
  username: string

  @MinLength(6, {
    message: 'Password must be at least 6 characters long'
  })
  @IsString()
  @IsNotEmpty()
  password: string
}
