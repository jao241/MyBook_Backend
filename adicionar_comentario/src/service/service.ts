import { getRepository } from "typeorm";
import Comentario from "../module/Comentario";

interface comentario{
    id:number;
    feed_id:number;
    usuario:string;
    datetime:Date;
    conteudo:string;
}

export default class service{
    public async execute({id, feed_id, usuario, datetime, conteudo}:comentario):Promise<Comentario>{
        const comentarioRepository = getRepository(Comentario);
        const comentario = comentarioRepository.create({
            id,
            feed_id,
            usuario,
            datetime,
            conteudo
        });
        await comentarioRepository.save(comentario);
        return comentario;
    }
}