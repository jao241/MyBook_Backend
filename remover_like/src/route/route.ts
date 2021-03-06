import express, { Request, Response, Router } from "express";
import service from "../service/service";

const is_alive = true;
const jsonFormat = express.json();
const routes = Router();

routes.use("/is_alive", (request:Request, response:Response)=>{
    response.json({
        request: "Is alive?",
        response: is_alive
    });
});

routes.patch("/remove_like/:id", jsonFormat,async (request:Request, response:Response)=>{
    if(is_alive){
        const { id } = request.params;
        const feed_id = Number(id);
        const feedService = new service();
        await feedService.execute(feed_id);
        response.json({
            message: "Like removido!"
        })
    }else response.json({message: "Serviço indisponível no momento."});
});


export default routes;

