import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('/news')
export class NewsController {

    @Post()
    async createNews(@Body() dadosDoNews) {
        return dadosDoNews;
    }
}