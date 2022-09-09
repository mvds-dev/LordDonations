import { AppDataSource } from "../../data-source";
import { Institutions } from "../../entities/institution.entity";

const institutionsListService = () => {
	const institutionsRepository = AppDataSource.getRepository(Institutions)
		.createQueryBuilder("institution")
		.select([
			"institution.id",
			"institution.name",
			"institution.email",
			"institution.cnpj",
			"institution.address",
			"institution.isActive",
			"institution.createdAt",
			"institution.updatedAt",
		])
		.getMany();

	return institutionsRepository;
};

export default institutionsListService;
