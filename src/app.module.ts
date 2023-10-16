import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsCompleteModule } from './cats-complete/cats-complete.module';

@Module({
  imports: [CatsCompleteModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
