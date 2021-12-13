import { getRepository } from "typeorm";
import Produtos from "../module/Produtos";

interface comentario{
    id:number;
}

export default class service{
    public async execute(id:comentario):Promise<void>{
        const feedRepository = getRepository(Produtos);
        const feed = await feedRepository.findOne(id);
        if(feed){
            feed.likes++;
            await feedRepository.save(feed);
        }
    }
}