import { Controller } from "@nestjs/common"

@Controller('/news')
export class NewsController {

    @Post()
    async createNews() {
        return 'notícia criada!';
    }
}