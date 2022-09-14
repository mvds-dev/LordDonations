import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users";
import createUserService from "../services/users/createUsers.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/getUsers.service";
import loginUserService from "../services/users/loginUsers.service";
import { updateUsersService } from "../services/users/updateUsers.service";

import jwt from "jsonwebtoken";

const createUserController = async (req: Request, res: Response) => {
  console.log("userController");
  const { name, age, cpf, email, password }: IUserRequest = req.body;
  const user = await createUserService({ name, age, cpf, email, password });
  return res.status(201).json(user);
};

const deleteUserController = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const token = authorization!.split(" ")[1];
  const { id } = jwt.decode(token) as { id: string };
  await deleteUserService({ id });
  return res.status(204).json("");
};

const listUsersController = async (req: Request, res: Response) => {
  const user = await listUsersService();
  return res.json(user);
};

const updateUsersController = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const token = authorization!.split(" ")[1];
  const { id } = jwt.decode(token) as { id: string };
  const { name, age, email, cpf, password } = req.body;
  const output = await updateUsersService({
    id,
    name,
    age,
    email,
    cpf,
    password,
  });
  return res.status(200).json(output);
};

const loginUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await loginUserService(email, password);
  return res.status(200).json(token);
};

export {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUsersController,
  loginUserController,
};
