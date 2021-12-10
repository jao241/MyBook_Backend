import { getRepository } from "typeorm";
import Produtos from "../module/Produtos";

export default class service{
    public async execute():Promise<Produtos[]>{
        const feedRepository = getRepository(Produtos);
        const feeds = await feedRepository.find();
        return feeds;
    }
}