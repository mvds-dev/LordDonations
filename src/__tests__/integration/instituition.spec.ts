import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import {
  mockedFailInstitution,
  mockedInstitution,
  mockedLoginInstitution,
} from "../mocks";
import { app } from "../../app";

describe("/institutions", () => {
  let connection: DataSource;
  let id: string;
  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Missing conection with server, please fix this", err);
      });
  });
  afterAll(async () => {
    await connection.destroy();
  });
  test("POST /institution - create a institution sucessfully", async () => {
    const response = await request(app)
      .post("/institutions")
      .send(mockedInstitution);
    id = response.body.id;
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("cnpj");
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
    expect(response.body).toHaveProperty("address");
    expect(response.body).toHaveProperty("isActive");
    expect(response.status).toBe(201);
  });
  test("POST /institutions - institution doupled", async () => {
    const response = await request(app)
      .post("/institutions")
      .send(mockedFailInstitution);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });
  test("POST /institution - invalid input institution", async () => {
    const response = await request(app)
      .post("/institutions")
      .send(mockedFailInstitution);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });
  test("GET /institutions - get a list of institutions", async () => {
    const response = await request(app).get("/institutions");
    expect(response.body.length).toBe(1);
    expect(response.status).toBe(200);
  });
  test("GET /institutions - get institution by id", async () => {
    const response = await request(app).get(`/institutions/${id}`);
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("cnpj");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
    expect(response.body).toHaveProperty("Address");
    expect(response.status).toBe(200);
  });
  test("GET /institutions - get invalid institution", async () => {
    const response = await request(app).get(
      "/institutions/f4dcb1ce-be9d-4f80-86e8-f8d41d33dd6a"
    );
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });
  test("POST /institution/login - make a good login", async () => {
    const response = await request(app)
      .post("/institution/login")
      .send(mockedLoginInstitution);
    expect(response.body).toHaveProperty("token");
    expect(response.status).toBe(200);
  });
  test("POST /institution/login - invalid login", async () => {
    const response = await request(app)
      .post("/institutions/login")
      .send({ email: "astronomia@mail.com", password: "12345" });
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });
  test("POST /institution/login - invalid input", async () => {
    const response = await request(app)
      .post("/institutions/login")
      .send({ email: "1234@mail.com", password: "" });
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });
});
