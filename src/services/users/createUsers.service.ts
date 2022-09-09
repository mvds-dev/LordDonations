import { AppDataSource } from '../../data-source'
import { Users } from '../../entities/users.entity'
import { IUserRequest } from '../../interfaces/users'
import { AppError } from '../../erros/appError'
import { hash } from 'bcrypt'


const createUserService = async ({name, age, cpf, email, password}: IUserRequest): Promise<Users> => {

    const userRepository = AppDataSource.getRepository(Users);

    if(!name || !age || !cpf || !email || !password) {
        throw new AppError(400, "Request in wrong format");
    }

    if(!password){
        throw new AppError(401, "Password is a required field");
    }
//this array syntaxt for find is the equivalent to the "or" operator
    const userAlreadyExists = await userRepository.findOne({where: [{email: email}, {cpf: cpf}]});

    if(userAlreadyExists){
        throw new AppError(401,"User already exists");
    }

    const hashedPassword = await hash(password, 10);

    const user = userRepository.create({
        name,
        email,
        age,
        cpf,
        password: hashedPassword
    })

    await userRepository.save(user);

    return user;

}

export default createUserService