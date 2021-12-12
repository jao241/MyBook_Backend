import { getRepository } from "typeorm";
import Comentario from "../module/Comentario";

export default class service{
    public async execute(id:number):Promise<Comentario[]>{
        const comentarioRepository = getRepository(Comentario);
        const comentario = await comentarioRepository.find({
            where:{
                feed_id: id
            }
        });
        return comentario;
    }
}