import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users.entity";
import { Itens } from "../../entities/objects.entity";
import { AppError } from "../../erros/appError";


const deleteObjectsService = async ({userId, objectId}:any):Promise<void> => {
    if(!userId || !objectId) throw new AppError(400, "Request must have userId and objectId");

    //checking user and objects
    const objectsRepository = AppDataSource.getRepository(Itens);
    const object = await objectsRepository.findOne({where: {id: objectId}, relations: {user: true}});
    if(!object) throw new AppError(404, "Object not found");
    if(object.user.id !== userId) throw new AppError(404, "User not found");

    //deleting
    await objectsRepository.delete(objectId);
}

export { deleteObjectsService }