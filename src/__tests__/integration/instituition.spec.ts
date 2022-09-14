import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import { mockedFailInstitution, mockedInstitution } from "../mocks";
import { app } from "../../app";

describe("/institutions", () => {
  let connection: DataSource;
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
  test("POST /users - create a user sucessfully", async () => {
    const response = await request(app)
      .post("/institutions")
      .send(mockedInstitution);

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
  test("POST /user - invalid input institution", async () => {
    const response = await request(app)
      .post("/institutions")
      .send(mockedFailInstitution);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });
});
