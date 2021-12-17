import { createConnection } from "typeorm";
import Produtos from "../module/Produtos";

export default async function connection(){
    await createConnection({
        type: "postgres",
        host: "172.16.1.1",
        port: 5432,
        username: "postgres",
        password: "1234",
        database: "postgres",
        entities:[Produtos]
    });
}

connection();