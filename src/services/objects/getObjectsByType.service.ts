import { AppDataSource } from "../../data-source";
import { Itens } from "../../entities/objects.entity";
import { AppError } from "../../erros/appError";

const listObjectsByTypeService = async (typeId: any) => {
	const objectsRepository = await AppDataSource.getRepository(Itens)
		.createQueryBuilder("object")
		.leftJoinAndSelect("object.type", "type")
		.leftJoinAndSelect("object.status", "status")
		.getMany();

	const objectsFiltredByType = objectsRepository.filter(
		(object) => object.type.id === typeId,
	);

	const objectsActive = objectsFiltredByType.filter(
		(object) => object.status.name === "active",
	);

	if (!objectsActive) {
		throw new AppError(404, "No objects found");
	}
	return objectsActive;
};

export default listObjectsByTypeService;
