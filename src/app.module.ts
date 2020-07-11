import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CatsController } from './cats/cats.controller';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [CatsController, AppController],
  providers: [],
})
export class AppModule { }
