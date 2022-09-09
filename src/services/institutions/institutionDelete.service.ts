import { AppDataSource } from "../../data-source";
import { Institutions } from "../../entities/institution.entity";
import { AppError } from "../../erros/appError";

const institutionDeleteService = async (id: any) => {
	const institutionsRepository = AppDataSource.getRepository(Institutions);
	const institutions = await institutionsRepository.find();

	const institution = institutions.find((institution) => institution.id === id);

	if (!institution) {
		throw new AppError(404, "Institution not found");
	}

	if (!institution?.isActive) {
		throw new AppError(400, "Institution already deactivated");
	}

	await institutionsRepository.update(institution!.id, { isActive: false });

	return institution;
};

export default institutionDeleteService;
