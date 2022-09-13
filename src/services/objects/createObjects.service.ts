import { AppDataSource } from "../../data-source";
import { Itens } from "../../entities/objects.entity";
import { Status } from "../../entities/status.entity";
import { Types } from "../../entities/types.entity";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../erros/appError";
import { ICreateObjects } from "../../interfaces/objects";


const createObjectsService = async ({
	typeId,
	userId,
	description,
	name,
}: ICreateObjects) => {
	if (!description || !name)
		throw new AppError(400, "object must have name and description");
	if (!typeId || !userId)
		throw new AppError(400, "object must have typeId and userId");

	//checks types
	const typesRepository = AppDataSource.getRepository(Types);
	const type = await typesRepository.findOne({ where: { id: typeId } });
	if (!type) throw new AppError(404, "Type not found");
	if (!type.isActive) throw new AppError(400, "Type is not active");

	//checks user
	const userRepository = AppDataSource.getRepository(Users);
	const user = await userRepository.findOne({ where: { id: userId } });
	if (!user) throw new AppError(404, "User not found");
	if (!user.isActive) throw new AppError(400, "User is not active");

	//checks status
	const statusRepository = AppDataSource.getRepository(Status);
	const status = await statusRepository.findOne({ where: { name: "active" } });
	if (!status) throw new AppError(404, "status not found");

	//creation
	const newObject = new Itens();
	newObject.name = name;
	newObject.description = description;
	newObject.user = user;
	newObject.type = type;
	newObject.status = status;

	const objectsRepository = AppDataSource.getRepository(Itens);
	const createdObject = await objectsRepository.save(newObject);

	return createdObject;
};

export { createObjectsService };

