import { AppDataSource } from '../../data-source'
import { Users } from '../../entities/users.entity'
import { IUserRequest } from '../../interfaces/users'
import { AppError } from '../../erros/appError'
import { hash } from 'bcrypt'


const createUserService = async ({name, age, cpf, email, password}: IUserRequest): Promise<Users> => {

    const userRepository = AppDataSource.getRepository(Users)

    if(!password){
        throw new AppError(401, "Password is a required field")
    }

    const userAlreadyExists = await userRepository.findOne({where: {email: email}})

    if(userAlreadyExists){
        throw new AppError(401,"Email already being used")
    }

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        age,
        cpf,
        password: hashedPassword
    })

    await userRepository.save(user)

    return user

}

export default createUserService