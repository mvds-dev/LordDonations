import { AppDataSource } from "../../data-source";
import { Institutions } from "../../entities/institution.entity";
import { Requests } from "../../entities/requests.entity";
import { Types } from "../../entities/types.entity";
import { AppError } from "../../erros/appError";
import { IRequestsCreate } from "../../interfaces/requests";


const createRequestsService = async ({typeId,institutionId, quantity, description}:IRequestsCreate) => {
    //checks input
    if(!typeId || !quantity || !description) {
        throw new AppError(400, "Requests must have typeId, quantity and description");
    }
    if(typeof quantity != "number" && typeof description != "string") {
        throw new AppError(400, "quantity must be a number and description a string");
    }
    
    //finds and checks type
    const typesRepository = AppDataSource.getRepository(Types);
    const type = await typesRepository.findOne({where: {id: typeId}});
    if(!type) throw new AppError(404, "Type not found");
    if(!type.isActive) throw new AppError(400, "Type is not active");

    //finds and checks institution
    const institutionsRepository = AppDataSource.getRepository(Institutions);
    const institution = await institutionsRepository.findOne({where: {id: institutionId}});
    if(!institution) throw new AppError(404, "Institution not found");
    if(!institution.isActive) throw new AppError(400, "Institution is not active");


    //creates request
    const requestsRepository = AppDataSource.getRepository(Requests);
    const newRequest = new Requests();
    newRequest.quantity = quantity;
    newRequest.description = description;
    newRequest.type = type;
    newRequest.institution = institution;

    const createdRequest = await requestsRepository.save(newRequest);

    return createdRequest;
}

export { createRequestsService };