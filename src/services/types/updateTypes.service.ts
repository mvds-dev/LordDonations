import { AppDataSource } from "../../data-source";
import { Types } from "../../entities/types.entity";
import { AppError } from "../../erros/appError";
import { ITypesUpdate } from "../../interfaces/types";

const updateTypesService = async ({id, name, description}:ITypesUpdate) => {
    if(!id && !name && !description) {
        throw new AppError(400, "Request must have a least one type property");
    }
    
    const typesRepository = AppDataSource.getRepository(Types);
    const { affected } = await typesRepository.update(id, {name, description});
    if(affected === 0) throw new AppError(404, "Type not found");

    return {message: "Type updated"};
}

export { updateTypesService }