import { useState } from "react";

export interface Duty {
    id: number;
    name: string;
}

export interface DutyDTO {
    name: string;
}

export const useDuties = () => {
    const [duties, setDuties] = useState<Duty[]>([]);

    const fetchDuties = async () => {
        const res = await fetch("/api/duties");
        const duties = await res.json();
        setDuties(duties);
    };

    const createDuty = async (dto: DutyDTO) => {
        const res = await fetch("/api/duties", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dto)
        });
        return res.json();
    };

    const updateDuty = async (id: string, dto: DutyDTO) => {
        const res = await fetch(`/api/duties/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dto)
        });
        return res.json();
    };

    const deleteDuty = async (id: string) => {
        const res = await fetch(`/api/duties/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res.json();
    }

    return {
        duties,
        fetchDuties,
        createDuty,
        updateDuty,
        deleteDuty
    }
}