import { AppDataSource } from "../../data-source"
import { Institutions } from "../../entities/institution.entity"
import { Itens } from "../../entities/objects.entity"
import { AppError } from "../../erros/appError";

const listSentObjectsService = async ({institutionId}: any) => {
    const institutionsRepository = AppDataSource.getRepository(Institutions);
    const institution = await institutionsRepository.findOne({where: {id: institutionId}, relations: {objects: {status: true}}});
    if(!institution) throw new AppError(404, "institution not found");
    if(!institution.isActive) throw new AppError(400, "institution is not active");

    const objects = institution.objects;
    const objectsSent = objects.filter(object => object.status.name === "sent");
    return objectsSent;
}

export { listSentObjectsService }