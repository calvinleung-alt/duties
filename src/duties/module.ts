import { Pool } from "pg";
import { DutyRepository } from "./repository";
import { DutyService } from "./service";
import { DutyController } from "./controller";

export class DutyModule {
    static build = (pool: Pool) => {
        const repository = new DutyRepository(pool);
        const service = new DutyService(repository);
        const controller = new DutyController(service);
        return {
            repository,
            service,
            controller
        }
    }
}