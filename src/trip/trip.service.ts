import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { intervalToDuration } from 'date-fns';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TripService {
  constructor(private readonly prisma: PrismaService) {}
//TODO сделать подключение/создания оборудования!!
  async create(createTripDto: CreateTripDto) {
    const duration = this.calculateDuration(createTripDto.startDate, createTripDto.endDate);
    return this.prisma.trip.create({
      data: {
        ...createTripDto,
        duration
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.trip.findMany({
      where: { userId }
    });
  }

  async findOne(id: string) {
    const trip = await this.prisma.trip.findUnique({
      where: { id },
    });
    if (!trip) {
      throw new NotFoundException('Trip not found');
    }
    return trip;
  }
//TODO обновить подключение/создания оборудования
  async update(id: string, updateTripDto: UpdateTripDto) {
    const existingTrip = await this.findOne(id);

    const startDate = updateTripDto.startDate ?? existingTrip.startDate;
    const endDate = updateTripDto.endDate ?? existingTrip.endDate;

    const duration = this.calculateDuration(startDate, endDate);

    return this.prisma.trip.update({
      where: { id },
      data: {
        ...updateTripDto,
        duration
      },
    });
  }

  async remove(id: string) {
    const trip = await this.prisma.trip.delete({
      where: { id },
    });
    if (!trip) {
      throw new NotFoundException('Trip not found');
    }
    return trip;
  }

  private calculateDuration(startDate: Date, endDate: Date): string {
    const duration = intervalToDuration({ start: startDate, end: endDate });

    const parts = [];
    if (duration.years) parts.push(`${duration.years} ${duration.years > 1 ? 'years' : 'year'}`);
    if (duration.months) parts.push(`${duration.months} ${duration.months > 1 ? 'months' : 'month'}`);
    const weeks = Math.floor((duration.days ?? 0) / 7);
    const days = (duration.days ?? 0) % 7;
    if (weeks) parts.push(`${weeks} ${weeks > 1 ? 'weeks' : 'week'}`);
    if (days) parts.push(`${days} ${days > 1 ? 'days' : 'day'}`);

    return parts.join(', ');
  }
}