import { getRepository } from "typeorm";
import Produtos from "../module/Produtos";

export default class service{
    public async execute(id:number):Promise<Produtos | undefined>{
        const feedRepository = getRepository(Produtos);
        const feed = await feedRepository.findOne(id);
        return feed;
    }
}