import { AppDataSource } from '../../data-source'
import { Users } from '../../entities/users.entity'
import { AppError } from '../../erros/appError'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginUserService = async (email:string , password:string)=>{

    if(!email || !password) {
        throw new AppError(400, "Request in wrong format");
    }

    const userRepository = AppDataSource.getRepository(Users) 

    const users = await userRepository.find()

    const validarEmail = users.find((element) => element.email === email);

    if (!validarEmail) {
        throw new AppError(404, "Wrong email/password")
    }

    if(!bcrypt.compareSync(password, validarEmail.password)){
        throw new AppError(404, "Wrong email/password")
    } 

    const token = jwt.sign({email: email}, String("secretKen"),{expiresIn: '1d'})


    return {"token":token};

}

export default loginUserService