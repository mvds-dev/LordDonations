import { AppDataSource } from "../../data-source";
import { Itens } from "../../entities/objects.entity";
import { AppError } from "../../erros/appError";

const listDonatedObjectsService = async (institutionId: any) => {
	const objectsRepository = await AppDataSource.getRepository(Itens)
		.createQueryBuilder("object")
		.leftJoinAndSelect("object.institution", "institution")
		.leftJoinAndSelect("object.status", "status")
		.getMany();

	const objectsFiltredByInstitution = objectsRepository.filter(
		(object) => object.institution?.id === institutionId,
	);

	const objectsReceived = objectsFiltredByInstitution.filter(
		(object) => object.status?.name === "received",
	);

	if (!objectsReceived) {
		throw new AppError(404, "No objects found");
	}

	return objectsReceived;
};

export default listDonatedObjectsService;
