import { AppDataSource } from "../../data-source";
import { Status } from "../../entities/status.entity";
import { AppError } from "../../erros/appError";

const deleteStatusesService = async (id:string):Promise<void> => {
    if(!id) throw new AppError(400, "Id is required");
    
    const statusesRepository = AppDataSource.getRepository(Status);
    const {affected} = await statusesRepository.delete(id);
    if(affected === 0) throw new AppError(404, "Status not found");
}

export { deleteStatusesService };