import { getRepository } from "typeorm";
import Comentario from "../module/Comentario";

interface comentario{
    id:number;
}

export default class service{
    public async execute(id:comentario):Promise<void>{
        const comentarioRepository = getRepository(Comentario);
        const comentario = await comentarioRepository.findOne(id);
        if(comentario){
            await comentarioRepository.remove(comentario);
        } 
    }
}