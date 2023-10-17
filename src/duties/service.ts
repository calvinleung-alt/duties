import { DutyDTO } from "./dto";
import { DutyEntity } from "./entity";
import { IDutyRepository } from "./repository";

export interface IDutyService {
    findAll: () => Promise<DutyEntity[]>;
    create: (dto: DutyDTO) => Promise<boolean>;
    update: (id: number, dto: DutyDTO) => Promise<boolean>;
    delete: (id: number) => Promise<boolean>;
}

export class DutyService implements IDutyService {
    constructor(private repository: IDutyRepository) {}

    findAll = async (): Promise<DutyEntity[]> => {
        return this.repository.findAll();
    }

    create = async (dto: DutyDTO): Promise<boolean> => {
        return this.repository.create(dto);
    }

    update = async (id: number, dto: DutyDTO): Promise<boolean> => {
        return this.repository.update(id, dto);
    }

    delete = (id: number): Promise<boolean> =>  {
        return this.repository.delete(id);
    };
}