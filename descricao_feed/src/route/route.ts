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

routes.get("/description_feed/:id", async (request:Request, response:Response)=>{
    if(is_alive){
        const { id } = request.params;
        const feed_id = Number(id);
        const feedService = new service();
        const feeds = await feedService.execute(feed_id);
        response.json(feeds);
    }else response.json({message: "Serviço indisponível no momento."});
});


export default routes;

