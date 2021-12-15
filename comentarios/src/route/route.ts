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

routes.get("/comentarios/:id", async (request:Request, response:Response)=>{
    if(is_alive){
        const { id } = request.params;
        const feed_id = Number(id);
        const comentarioService = new service();
        const coments = await comentarioService.execute(feed_id);
        response.json(coments);
    }else response.json({message: "Serviço indisponível no momento."});
});


export default routes;

