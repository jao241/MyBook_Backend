import { getRepository } from "typeorm";
import Comentario from "../module/Comentario";

interface comentario{
    feed_id:number;
    usuario:string;
    datetime:Date;
    conteudo:string;
}

export default class service{
    public async execute({feed_id, usuario, datetime, conteudo}:comentario):Promise<void>{
        const comentarioRepository = getRepository(Comentario);
        comentarioRepository.create({
            feed_id,
            usuario,
            datetime,
            conteudo
        });
    }
}