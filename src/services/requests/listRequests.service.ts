import { AppDataSource } from "../../data-source";
import { Requests } from "../../entities/requests.entity";

const listRequestsServices = async () => {
    const requestsRepository = AppDataSource.getRepository(Requests);
    const requests = await requestsRepository.find({relations: {type: true, institution: true}});
    return requests;
}

export { listRequestsServices }