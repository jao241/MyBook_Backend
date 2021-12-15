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

routes.delete("/remove_comentario/:id", jsonFormat,async (request:Request, response:Response)=>{
    if(is_alive){
        const { id } = request.params;
        const comentarioId = Number(id);
        const comentarioService = new service();
        await comentarioService.execute(comentarioId);
        response.json({
            message: "Comentário removido!"
        });
    }else response.json({message: "Serviço indisponível no momento."});
});


export default routes;

