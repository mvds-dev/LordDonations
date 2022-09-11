import { AppDataSource } from '../../data-source'
import { Users } from '../../entities/users.entity'
import { AppError } from '../../erros/appError'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginUserService = async (email:string , password:string)=>{

    if(!email || !password) {
        throw new AppError(400, "Request in wrong format");
    }

    const userRepository = AppDataSource.getRepository(Users) 

    const user = await userRepository.findOne({where: {email: email}})

    if (!user) {
        throw new AppError(404, "Wrong email/password")
    }

    if(!bcrypt.compareSync(password, user.password)){
        throw new AppError(404, "Wrong email/password")
    } 

    if(!user.isActive) throw new AppError(400, "user is not active");

    const token = jwt.sign({email: email, userType: "user"}, String(process.env.SECRET_KEY),{expiresIn: '1d'})


    return {"token":token};

}

export default loginUserService
