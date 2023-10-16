import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { CreateCatsDto } from './dto/create-cat.dto';
import { ListAllCatsDto } from './dto/listAll.dto';
import { UpdateCatsDto } from './dto/update-cat.dto';
import { CatsCompleteService } from './cats-complete.service';
import { Cat } from 'src/models/cat/cat.interface';

@Controller('cats-complete')
export class CatsCompleteController {
  constructor(private catsCompleteService: CatsCompleteService) {}

  @Post()
  async create(@Body() createCatsDto: CreateCatsDto) {
    this.catsCompleteService.create(createCatsDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsCompleteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this action return a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatsDto: UpdateCatsDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
