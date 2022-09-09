import { AppDataSource } from '../../data-source'
import { Users } from '../../entities/users.entity'
import { IUserId } from '../../interfaces/users'
import { AppError } from '../../erros/appError'

const deleteUserService = async ({id}: IUserId): Promise<void> =>{
    
    const userRepository = AppDataSource.getRepository(Users)

    const userInactive = await userRepository.findOne({where: {id: id}})

    if(!userInactive){
        throw new AppError(400,"User does not exist")
    }

    if(userInactive?.isActive == false){
        throw new AppError(400,"Inactive User")
    }

    const user = await userRepository.update({id: id},{
            isActive: false
        }
    )

}

export default deleteUserService