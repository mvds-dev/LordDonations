import { AppDataSource } from "../../data-source";
import { Types } from "../../entities/types.entity";
import { AppError } from "../../erros/appError";
import { ITypesCreate } from "../../interfaces/ITypesCreate.interface";

const createTypesService = async ({name, description}:ITypesCreate) => {
    const typesRepository = AppDataSource.getRepository(Types);


    //verifications
    if(!name || !description) {
        throw new AppError(400, "A type must have both a name and description");
    }
    if(typeof name != "string" || typeof description != "string") {
        throw new AppError(400, "Name and description must be a string");
    }

    const doesTypeAlreadyExists = await typesRepository.findOne({where: {
        name: name
    }});
    console.log(doesTypeAlreadyExists);
    if(doesTypeAlreadyExists) throw new AppError(409, "Type already exists");


    //creation of type
    const newType = new Types()
    newType.name = name;
    newType.description = description;

    const createdType = await typesRepository.save(newType);

    return createdType;
}

export { createTypesService }