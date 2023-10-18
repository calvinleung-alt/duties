import express from "express";
import path from "path";
import { DutyModule } from "./duties/module";
import bodyParser from "body-parser";
import { Pool } from "pg";

export class App {
    static build(pool: Pool) {
        const app = express();
        const { controller } = DutyModule.build(pool);

        app.use(bodyParser.json());

        app.use('/public', express.static(path.join(__dirname, '..', 'public')));

        app.get('/api/duties', controller.findAll);
        app.post('/api/duties', controller.create);
        app.put('/api/duties/:id', controller.update);
        app.delete('/api/duties/:id', controller.delete)

        app.use('/', (_, res) => {
            res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
        });

        return app;
    }
}