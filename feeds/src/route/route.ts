import { Request, Response, Router } from "express";
import service from "../service/service";

const is_alive = true;

const routes = Router();

routes.use("/is_alive", (request:Request, response:Response)=>{
    response.json({
        request: "Is alive?",
        response: is_alive
    });
});

routes.get("/feeds", async (request:Request, response:Response)=>{
    if(is_alive){
        const feedService = new service();
        const feeds = await feedService.execute();
        response.json(feeds);
    }else response.json({message: "Serviço indisponível no momento."});
});


export default routes;

