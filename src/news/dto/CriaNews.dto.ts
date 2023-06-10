import { IsString, IsNotEmpty } from "class-validator";

export class CriaNewsDTO {

    @IsNotEmpty()
    titulo: string;

    @IsString()
    subtitulo: string;

    @IsNotEmpty() 
    conteudoDaPostagem: string;

    @IsNotEmpty()
    nomeDoAutor: string;

    @IsString()
    dataDaPostagem: string;

    @IsString()
    ultimaAlteracao: string;
    }