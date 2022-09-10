import { AppDataSource } from "../../data-source";
import { Institutions } from "../../entities/institution.entity";
import { Requests } from "../../entities/requests.entity";
import { AppError } from "../../erros/appError";
import { IRequestUpdate } from "../../interfaces/requests";

const updateRequestsService = async ({institutionId, requestId, quantity, description}:IRequestUpdate) => {
    if(!quantity && !description) {
        throw new AppError(400, "nothing to update");
    }

    //checks institution
    const institutionsRepository = AppDataSource.getRepository(Institutions);
    const institution = await institutionsRepository.findOne({where: {id: institutionId}, relations: {requests: true}});
    if(!institution) throw new AppError(404, "Institution not found");
    

    //checks request
    const request = institution.requests.find(request => request.id === requestId);
    if(!request) throw new AppError(404, "Request not found");

    //updates request
    const requestsRepository = AppDataSource.getRepository(Requests);
    await requestsRepository.update(requestId, {quantity, description});

    return {message: "request updated"};
}

export { updateRequestsService };