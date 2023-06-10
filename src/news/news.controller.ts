import { Body, Controller, Get, Post } from "@nestjs/common";
import { NewsRepository } from "./news.repository";
import { CriaNewsDTO } from "./dto/CriaNews.dto";

@Controller('/news')
export class NewsController {

    constructor(private newsRepository: NewsRepository) {}

    @Post()
    async createNews(@Body() dadosDoNews: CriaNewsDTO) {
        this.newsRepository.salvar(dadosDoNews);
        return dadosDoNews;
    }

    @Get()
    async listNews() {
        return this.newsRepository.listar()
    }
}