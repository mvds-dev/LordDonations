import { AppDataSource } from "../../data-source";
import { Types } from "../../entities/types.entity";

const listTypesService = async () => {
    const typesRepository = AppDataSource.getRepository(Types);
    const types = typesRepository.find();
    return types;
}

export { listTypesService }