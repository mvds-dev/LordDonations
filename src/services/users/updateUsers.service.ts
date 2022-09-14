import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../erros/appError";
import { IUserUpdate } from "../../interfaces/users";
import { hash } from "bcrypt";


const updateUsersService = async ({id, age, cpf, email, name, password}:IUserUpdate) => {
    if(!age && !cpf && !email && !name && !password) {
        throw new AppError(400, "Wrong format");
    }

    let newPassword = password;
    if(password) {
        newPassword = await hash(password, 10);
    }
    
    const usersRepository = AppDataSource.getRepository(Users);
    const { affected } = await usersRepository.update(id, {name, cpf, email, age, password: newPassword})
    if(affected === 0) throw new AppError(404, "user not found");

    return {message: "User updated"};
}

export { updateUsersService };