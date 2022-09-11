import { AppDataSource } from "../../data-source";
import { Itens } from "../../entities/objects.entity";
import { AppError } from "../../erros/appError";
import { IUpdateObjects } from "../../interfaces/objects";
import { Types } from "../../entities/types.entity";

const updateObjectsService = async ({userId, objectId, typeId, name, description}: IUpdateObjects) => {
    if(!userId || !objectId) throw new AppError(400, "must have userId and objectId");
    if(!typeId && !name && !description) throw new AppError(400, "nothing to update");

    //checks user and object
    const objectsRepository = AppDataSource.getRepository(Itens);
    const object = await objectsRepository.findOne({where: {id: objectId}, relations: {user: true}});
    if(!object) throw new AppError(404, "object not found");
    if(object.user.id != userId) throw new AppError(404, "user not found");
    if(!object.user.isActive) throw new AppError(400, "user is not active");


    //checks type
    const typesRepository = AppDataSource.getRepository(Types);
    let type;
    if(typeId) {
        type = await typesRepository.findOne({where: {id: typeId}});
        if(!type) throw new AppError(404, "type not found");
    }


    await objectsRepository.update(objectId, {name, description, type});


    return {message: "Object updated"};
}

export { updateObjectsService };