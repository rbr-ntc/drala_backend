import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { TripService } from './trip.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guards';
import { Auth } from '../auth/decorators/auth.decorators';
import { CurrentUser } from '../auth/decorators/user.decorators';

@Controller('user/trip')
@UseGuards(JwtAuthGuard)
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Post()
  @Auth()
  @UsePipes(new ValidationPipe())
  @HttpCode(201)
  async create(@CurrentUser('id') userId: string, @Body() createTripDto: CreateTripDto) {
    return this.tripService.create({ ...createTripDto, userId });
  }

  @Get()
  @Auth()
  async findAll(@CurrentUser('id') userId: string) {
    return this.tripService.findAll(userId);
  }

  @Get(':id')
  @Auth()
  async findOne(@Param('id') id: string) {
    return this.tripService.findOne(id);
  }

  @Patch(':id')
  @Auth()
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  async update(@Param('id') id: string, @Body() updateTripDto: UpdateTripDto) {
    return this.tripService.update(id, updateTripDto);
  }

  @Delete(':id')
  @Auth()
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    return this.tripService.remove(id);
  }
}