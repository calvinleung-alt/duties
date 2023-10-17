import { Pool } from "pg";
import { DutyEntity } from "./entity";
import { DutyDTO } from "./dto";

export interface IDutyRepository {
    findAll: () => Promise<DutyEntity[]>;
    create: (dto: DutyDTO) => Promise<boolean>;
    update: (id: number, dto: DutyDTO) => Promise<boolean>;
    delete: (id: number) => Promise<boolean>;
}

export class DutyRepository implements IDutyRepository {
    constructor(private pool: Pool) {}

    findAll = async (): Promise<DutyEntity[]> => {
        const res = await this.pool.query('SELECT * FROM duties ORDER BY id');
        return res.rows;
    }

    create = async (dto: DutyDTO): Promise<boolean> => {
        await this.pool.query(`
            INSERT INTO duties (name)
            VALUES ($1)
        `, [dto.name]);
        return true;
    }

    update = async (id: number, dto: DutyDTO): Promise<boolean> => {
        await this.pool.query(`
            UPDATE duties
            SET name = $1
            WHERE id = $2
        `, [dto.name, id]);
        return true;
    }

    delete = async (id: number): Promise<boolean> => {
        await this.pool.query(`
            DELETE FROM duties
            WHERE id = $1
        `, [id]);
        return true;
    }
}