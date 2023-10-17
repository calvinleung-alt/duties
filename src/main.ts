import { Pool } from "pg";
import express from "express";
import "dotenv/config";
import path from "path";
import { DutyModule } from "./duties/module";
import bodyParser from "body-parser";

function main() {
    const pool = new Pool({
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        host: process.env.PG_HOST,
        port: parseInt(process.env.PG_PORT || "5432"),
    });
    const app = express();
    const { controller } = DutyModule.build(pool);

    app.use(bodyParser.json());

    app.use('/public', express.static(path.join(__dirname, '..', 'public')));

    app.get('/api/duties', controller.findAll);
    app.post('/api/duties', controller.create);
    app.put('/api/duties/:id', controller.update);
    app.delete('/api/duties/:id', controller.delete)

    app.use('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    });

    app.listen(process.env.PORT || 8080, () => {
        console.log('server starts');
    });
}

main();