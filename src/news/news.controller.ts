import { Body, Controller, Get, Post } from "@nestjs/common";
import { NewsRepository } from "./news.repository";

@Controller('/news')
export class NewsController {

    constructor(private newsRepository: NewsRepository) {}

    @Post()
    async createNews(@Body() dadosDoNews) {
        this.newsRepository.salvar(dadosDoNews);
        return dadosDoNews;
    }

    @Get()
    async listNews() {
        return this.newsRepository.listar()
    }
}