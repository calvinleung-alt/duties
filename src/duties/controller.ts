import { RequestHandler } from "express";
import { IDutyService } from "./service";

export class DutyController {
    constructor(private service: IDutyService) {}

    findAll: RequestHandler = async (req, res) => {
        const duties = await this.service.findAll();
        res.status(200).json(duties);
    }

    create: RequestHandler = async (req, res) => {
        const ok = await this.service.create(req.body);
        res.status(201).json({ ok });
    }

    update: RequestHandler = async (req, res) => {
        const ok = await this.service.update(
            parseInt(req.params.id),
            req.body,
        );
        res.status(200).json({ ok });
    }

    delete: RequestHandler = async (req, res) => {
        const ok = await this.service.delete(
            parseInt(req.params.id),
        );
        res.status(200).json({ ok });
    }
}