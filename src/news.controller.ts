import { Body, Controller, Get, Post } from "@nestjs/common";
import { NewsRepository } from "./news.repository";

@Controller('/news')
export class NewsController {

    private newsRepository = new NewsRepository();

    @Post()
    async createNews(@Body() dadosDoNews) {
        this.newsRepository.salvar(dadosDoNews);
        return dadosDoNews;
    }
}