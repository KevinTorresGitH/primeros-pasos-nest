import { Injectable } from '@nestjs/common';
import { Cat } from 'src/models/cat/cat.interface';

@Injectable()
export class CatsCompleteService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
