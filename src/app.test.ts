import { describe, expect, test, jest, beforeEach, afterEach, } from "@jest/globals";
import supertest from "supertest";
import { App } from "./app";
import { Pool } from "pg";
import { Application } from "express";

jest.mock("pg", () => ({
    Pool: jest.fn(() => ({
        query: jest.fn(() => Promise.resolve({
            rows: [{ id: 1, name: "foo" }],
            rowCount: 1,
        }))
    }))
}));

describe("app", () => {
    let app: Application;

    beforeEach(() => {
        app = App.build(new Pool());
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    test("GET /api/duties", async () => {
        const res = await supertest(app).get("/api/duties");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ id: 1, name: "foo" }]);
    })

    test("POST /api/duties", async () => {
        const res = await supertest(app).post("/api/duties").send({ name: "foo" });
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({ ok: true });
    })

    test("PUT /api/duties/:id", async () => {
        const res = await supertest(app).put("/api/duties/1").send({ name: "bar" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ ok: true });
    })

    test("DELETE /api/duties/:id", async () => {
        const res = await supertest(app).delete("/api/duties/1");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ ok: true });
    })
})