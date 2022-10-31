import { AppDataSource } from "../../data-source";
import { Status } from "../../entities/status.entity";
import { AppError } from "../../erros/appError";
import { IStatusUpdate } from "../../interfaces/statuses";


const updateStatusesService = async ({id, name}:IStatusUpdate) => {
    if(!id || !name)throw new AppError(400, "Id and name is required");
    if(typeof name != "string") throw new AppError(400, "Name must be a string");

    const statusesRepository = AppDataSource.getRepository(Status);
    const {affected} = await statusesRepository.update(id, {name: name});
    if(affected === 0) throw new AppError(404, "Status not found");

    return {message: "Status updated"};
}   

export { updateStatusesService };