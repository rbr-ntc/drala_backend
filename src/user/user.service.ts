import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { hash, verify } from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ChangePasswordDto } from "./dto/change-password.dto";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        username: true,
        password: true,
        avatarUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }

    const settings = await this.prisma.userSettings.findUnique({
      where: { userId: id },
    });

    return { ...user, settings };
  }

  async getProfile(id: string) {
    const profile = await this.getById(id);
    if (!profile) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = profile;
    return result;
  }

  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(dto: CreateUserDto) {
    const user = {
      email: dto.email,
      username: dto.username,
      password: await hash(dto.password),
    };

    return this.prisma.user.create({
      data: {
        ...user,
        settings: {
          create: {
            notifications: true, // default value
            language: 'en', // default value
          },
        },
      },
      include: {
        settings: true,
      },
    });
  }

  async update(id: string, dto: Partial<UpdateUserDto>) {
    let data = dto;

    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) };
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
  }

  async changePassword(id: string, changePasswordDto: ChangePasswordDto): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        password: true, // Ensure password is included
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }

    const passwordMatch = await verify(user.password, changePasswordDto.oldPassword);

    if (!passwordMatch) {
      throw new BadRequestException('Old password is incorrect');
    }

    const newHashedPassword = await hash(changePasswordDto.newPassword);

    await this.prisma.user.update({
      where: { id },
      data: { password: newHashedPassword },
    });

    return true;
  }
}