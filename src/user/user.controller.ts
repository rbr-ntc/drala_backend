import { Body, Controller, Get, HttpCode, Patch, Put, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from './user.service';
import { Auth } from "../auth/decorators/auth.decorators";
import { CurrentUser } from "../auth/decorators/user.decorators";
import { JwtAuthGuard } from "../auth/guards/jwt.guards";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ChangePasswordDto } from "./dto/change-password.dto";


@Controller('user/profile')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Auth()
  async getProfile(@CurrentUser('id') id: string) {
    return this.userService.getProfile(id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put()
  @Auth()
  async updateProfile(@CurrentUser('id') id: string, @Body() dto: Partial<UpdateUserDto>) {
    return this.userService.update(id, dto)
  }

  @Patch('change-password')
  @Auth()
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  async changePassword(@CurrentUser('id') id: string, @Body() changePasswordDto: ChangePasswordDto) {
    return this.userService.changePassword(id, changePasswordDto);
  }

}
