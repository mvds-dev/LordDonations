import { AppDataSource } from "../../data-source";
import { Institutions } from "../../entities/institution.entity";
import { Itens } from "../../entities/objects.entity";
import { Status } from "../../entities/status.entity";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../erros/appError";
import { IDonateToInstitution } from "../../interfaces/donations";

const donateToInstitutionService = async ({institutionId, userId, objectId}:IDonateToInstitution) => {
    if(!institutionId || !userId) throw new AppError(400, "missing institutionId or userId");
    if(!objectId) throw new AppError(400, "missing objectId");

    //checks institution
    const institutionRepository = AppDataSource.getRepository(Institutions);
    const institution = await institutionRepository.findOne({where: {id: institutionId}, relations: {requests: {type: true}}});
    if(!institution || !institution.isActive) throw new AppError(404, "institution not found");

    //checks user
    const usersRepository = AppDataSource.getRepository(Users);
    const user = await usersRepository.findOne({where: {id: userId}, relations: {objects: {type: true, status: true}}});
    if(!user || !user.isActive) throw new AppError(404, "user not found"); 
    //checks object
    const object = user.objects.find(object => object.id === objectId);
    if(!object) throw new AppError(404, "object is not owned by user");
    if(object.status.name !== "active") throw new AppError(400, "Object was already sent");

    //checks status
    const statusRepository = AppDataSource.getRepository(Status);
    const status = await statusRepository.findOne({where: {name: "sent"}});
    if(!status) throw new AppError(500, "status sent wasn't created");

    //check requests
    const institutionRequests = institution.requests;
    const doesRequestExists = institutionRequests.find(request => request.type.id === object.type.id);
    if(!doesRequestExists) throw new AppError(400, "Institution did not requested this item type");


    const objectsRepository = AppDataSource.getRepository(Itens);

    object.institution = institution;
    object.status = status;

    await objectsRepository.save(object);

    return {message: "donation registered"};
}

export { donateToInstitutionService };