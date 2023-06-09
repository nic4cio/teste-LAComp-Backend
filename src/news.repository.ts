export class NewsRepository {
    private news = [];

    async salvar(news) {
        this.news.push(news);
        console.log(this.news);
    }
}