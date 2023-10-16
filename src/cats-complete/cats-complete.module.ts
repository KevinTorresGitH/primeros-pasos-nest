import { Module } from '@nestjs/common';
import { CatsCompleteController } from './cats-complete.controller';
import { CatsCompleteService } from './cats-complete.service';

@Module({
  controllers: [CatsCompleteController],
  providers: [CatsCompleteService],
  exports: [CatsCompleteService],
})
export class CatsCompleteModule {}
