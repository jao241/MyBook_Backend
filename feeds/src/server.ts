import "reflect-metadata";
import "express-async-errors";
import "./connection/connection";
import Express from "express";
import Cors from "cors";
import routes from "./route/route";

const app = Express();
const port = 3001;

app.use(Cors());
app.use(routes);

app.listen(port, ()=> console.log("Service feed running."));

