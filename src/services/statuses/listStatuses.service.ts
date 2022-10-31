import { AppDataSource } from "../../data-source";
import { Status } from "../../entities/status.entity";


const listStatusesService = async () => {
    const statusesRepository = AppDataSource.getRepository(Status);
    const statuses = await statusesRepository.find(); 
    return statuses;
}

export { listStatusesService };