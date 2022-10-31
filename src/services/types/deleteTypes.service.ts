import { AppDataSource } from "../../data-source";
import { Types } from "../../entities/types.entity";
import { AppError } from "../../erros/appError";

const deleteTypesService = async (id: string):Promise<void> => {
    const typesRepository = AppDataSource.getRepository(Types);
    
    if(!id) throw new AppError(400, "Missing id");

    const type:Types | null = await typesRepository.findOne({where: {id: id}});
    if(!type) throw new AppError(404, "Type not found");
    if(!type.isActive) throw new AppError(400, "type is already inactive");

    await typesRepository.update(type.id, {isActive: false});
}

export { deleteTypesService };