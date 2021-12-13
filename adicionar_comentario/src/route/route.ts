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

routes.post("/add_comentario", jsonFormat,async (request:Request, response:Response)=>{
    if(is_alive){
        const { id, feed_id, usuario, datetime, conteudo } = request.body;
        console.log(request.body)
        const comentarioService = new service();
        const comentario = await comentarioService.execute({id, feed_id, usuario, datetime, conteudo});
        response.json(comentario);
    }else response.json({message: "Serviço indisponível no momento."});
});


export default routes;

