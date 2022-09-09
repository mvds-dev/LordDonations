import { Request, Response } from 'express'
import { IUserRequest } from '../interfaces/users'
import createUserService from '../services/users/createUsers.service'


const createUserController = async (req: Request, res: Response) => {
    
    const {name, age, cpf, email, password }: IUserRequest = req.body
    const user = await createUserService({name, age, cpf, email, password})
    return res.status(201).json(user)
    
}



export { createUserController }