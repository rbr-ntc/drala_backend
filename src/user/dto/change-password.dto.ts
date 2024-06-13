import { IsString, IsNotEmpty, MinLength, MaxLength, Matches } from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  @IsNotEmpty()
  oldPassword: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'New password must be at least 8 characters long' })
  @MaxLength(20, { message: 'New password must not exceed 20 characters' })
  @Matches(/(?=.*[a-z])/, { message: 'New password must contain at least one lowercase letter' })
  @Matches(/(?=.*[A-Z])/, { message: 'New password must contain at least one uppercase letter' })
  @Matches(/(?=.*[0-9])/, { message: 'New password must contain at least one digit' })
  @Matches(/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/, { message: 'New password must contain at least one special character' })
  newPassword: string;
}