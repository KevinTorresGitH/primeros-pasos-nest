import {
  Controller,
  Get,
  Post,
  Req,
  Header,
  Redirect,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Post()
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('docs')
  @Redirect('https://nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param() id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Get()
  async findAllAsync(): Promise<any[]> {
    return [];
  }

  @Post()
  async createAsync(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}
