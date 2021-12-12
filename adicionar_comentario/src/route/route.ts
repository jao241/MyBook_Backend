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

routes.post("/add_comentario/:id", async (request:Request, response:Response)=>{
    if(is_alive){
        //const { feed_id, usuario, datetime, conteudo } = request.body;
        const comentarioService = new service();
         console.log(request.body);
        //await comentarioService.execute({feed_id, usuario, datetime, conteudo});
        response.json({
            message: "Data Saved"
        });
    }else response.json({message: "Serviço indisponível no momento."});
});


export default routes;

