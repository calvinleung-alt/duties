import { Pool } from "pg";
import { App } from "./app";
import "dotenv/config";

function main() {
    const pool = new Pool({
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        host: process.env.PG_HOST,
        port: parseInt(process.env.PG_PORT || "5432"),
    });
    const app = App.build(pool);

    app.listen(process.env.PORT || 8080, () => {
        console.log('server starts');
    });
}

main();