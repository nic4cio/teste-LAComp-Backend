import { Injectable } from "@nestjs/common";

@Injectable()
export class NewsRepository {
    private news = [];

    async salvar(news) {
        this.news.push(news);
    }

    async listar() {
        return this.news;
    }
}