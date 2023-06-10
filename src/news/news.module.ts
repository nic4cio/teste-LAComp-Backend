import { Module } from "@nestjs/common";
import { NewsController } from "./news.controller";
import { NewsRepository } from "./news.repository";

@Module({
    controllers: [NewsController],
    providers: [NewsRepository]
})
export class NewsModule {}