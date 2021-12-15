import { getRepository } from "typeorm";
import Produtos from "../module/Produtos";

export default class service{
    public async execute(id:Number):Promise<void>{
        const feedRepository = getRepository(Produtos);
        const feed = await feedRepository.findOne({
            where: {
                id
            }
        });
        if(feed){
            feed.likes++;
            await feedRepository.save(feed);
        }
    }
}