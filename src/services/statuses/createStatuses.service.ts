import { AppDataSource } from "../../data-source";
import { Status } from "../../entities/status.entity";
import { AppError } from "../../erros/appError";

const createStatusesService = async (name: string) => {
    if(!name) {
        throw new AppError(400, "status must have a name");
    }

    const statusesRepository = AppDataSource.getRepository(Status);

    const isNameAlreadyRegistered = await statusesRepository.findOne({where: {name: name}});
    if(isNameAlreadyRegistered) throw new AppError(409, "Name is already registered");

    const newStatus = new Status();
    newStatus.name = name;

    const statusCreated = await statusesRepository.save(newStatus);

    return statusCreated;
}

export { createStatusesService };