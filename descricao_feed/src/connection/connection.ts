import { createConnection } from "typeorm";
import Feed from "../module/Produtos";

export default async function connection(){
    await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "1234",
        database: "postgres",
        entities:[Feed]
    });
}

connection();