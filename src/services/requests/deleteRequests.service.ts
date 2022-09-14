import { AppDataSource } from "../../data-source";
import { Institutions } from "../../entities/institution.entity";
import { Requests } from "../../entities/requests.entity";
import { AppError } from "../../erros/appError";


const deleteRequestsService = async (requestId:string, institutionId:string):Promise<void> => {
    if(!requestId || !institutionId) throw new AppError(400, "wrong format")

    //checks institution
    const institutionsRepository = AppDataSource.getRepository(Institutions);
    const institution = await institutionsRepository.findOne({where: {id: institutionId}, relations: {requests: true}}) 
    if(!institution) throw new AppError(404, "Institution not found");
    
    //checks request
    const request = institution.requests.find(request => request.id === requestId);
    if(!request) throw new AppError(404, "Request not found");

    //deletes request
    const requestsRepository = AppDataSource.getRepository(Requests);
    await requestsRepository.delete(requestId);
}

export { deleteRequestsService };