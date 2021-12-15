import { getRepository } from "typeorm";
import Comentario from "../module/Comentario";

export default class service{
    public async execute(id:number):Promise<void>{
        const comentarioRepository = getRepository(Comentario);
        const comentario = await comentarioRepository.findOne(id);
        if(comentario){
            await comentarioRepository.remove(comentario);
        } 
    }
}