import { AppDataSource } from "../../data-source";
import { Institutions } from "../../entities/institution.entity";
import { Itens } from "../../entities/objects.entity";
import { Status } from "../../entities/status.entity";
import { AppError } from "../../erros/appError";

const institutionReceivesObjectService = async (objectId: string, institutionId: string) => {
    if(!objectId) throw new AppError(400, "missing object id");
    
    //checks institution
    const institutionRepository = AppDataSource.getRepository(Institutions);
    const institution = await institutionRepository.findOne({where: {id: institutionId}, relations: {objects: {status: true}}});
    if(!institution) throw new AppError(404, "institution not found");
    
    //checks object
    const object = institution.objects.find(object => object.id === objectId);
    if(!object) throw new AppError(404, "object not found");
    if(object.status.name !== "sent") throw new AppError(400, "Object can't be received if status is not sent");

    //get status
    const statusRepository = AppDataSource.getRepository(Status)
    const newStatus = await statusRepository.findOne({where: {name: "received"}});
    if(!newStatus) throw new AppError(500, "server statuses not configured correctly");

    //chages object status
    const objectsRepository = AppDataSource.getRepository(Itens);
    object.status = newStatus;

    await objectsRepository.save(object);
    
    return {message: "object status changed to received"};
}

export { institutionReceivesObjectService }