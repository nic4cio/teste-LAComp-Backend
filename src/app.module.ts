import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';

@Module({
  imports: [],
  controllers: [NewsController],
  providers: [],
})
export class AppModule {}
