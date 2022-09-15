import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import {
  mockedInstitution,
  mockedTypeSend,
  mockedTypeSendFail,
  mockedUser,
  mockedUser2Login,
  mockedUserFail,
  mockedUserLogin,
} from "../mocks";
import { app } from "../../app";

describe("/user", () => {
  let id: string;
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
    const response = await request(app).post("/users").send(mockedUser);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("cpf");
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
    expect(response.body).toHaveProperty("age");
    expect(response.body).toHaveProperty("isActive");
    expect(response.body.name).toEqual("Test_01");
    expect(response.status).toBe(201);
  });
  test("POST /users - user doupled", async () => {
    const response = await request(app).post("/users").send(mockedUser);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });
  test("POST /users - invalid input user", async () => {
    const response = await request(app).post("/users").send(mockedUser);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });
  test("POST /users/login - get a user by ID", async () => {
    const response = await request(app)
      .get("/users/login")
      .send(mockedUserLogin);
    expect(response.body).toHaveProperty("token");
    expect(response.status).toBe(200);
  });
  test("POST /users/login - invalid login", async () => {
    const response = await request(app)
      .post("/users/login")
      .send(mockedUser2Login);
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });
  test("/POST /users/login - Missing login password", async () => {
    const response = await request(app)
      .post("/users/login")
      .send({ name: "Test_01" });
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });
  test("GET /users - list users ", async () => {
    const response = await request(app).get("/users");
    id = response.body[0].id;
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("email");
    expect(response.body[0]).toHaveProperty("cpf");
    expect(response.body[0]).toHaveProperty("createdAt");
    expect(response.body[0]).toHaveProperty("updatedAt");
    expect(response.body[0]).toHaveProperty("age");
    expect(response.body[0]).toHaveProperty("isActive");
    expect(response.body[0]).not.toHaveProperty("Password");
    expect(response.body[0].name).toEqual("Test_01");
    expect(response.body[0].email).toEqual("test_01@mail.com");
    expect(response.status).toBe(200);
  });
  test("Get /users/:id - select user by ID", async () => {
    const response = await request(app).get(`/users/${id}`);
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("cpf");
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
    expect(response.body).toHaveProperty("age");
    expect(response.body).toHaveProperty("isActive");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body.name).toEqual("Test_01");
    expect(response.body.email).toEqual("test_01@mail.com");
    expect(response.status).toBe(200);
  });
  test("Get /users/:id - invalid id", async () => {
    const response = await request(app).get(
      "/users/e57fd7d8-a27d-4ba5-a512-106d31c604c6"
    );

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });
  test("POST /type - create a type for objects", async () => {
    const response = await request(app).post("/type").send(mockedTypeSend);
    id = response.body.id;
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("description");
    expect(response.status).toBe(201);
  });
  test("POST /type - invalid type creation", async () => {
    const response = await request(app).post("/type").send(mockedTypeSendFail);
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(400);
  });
  // test("POST /object - create object", async () => {
  //   const response = await request(app).post("/type").send();
  // });
});
