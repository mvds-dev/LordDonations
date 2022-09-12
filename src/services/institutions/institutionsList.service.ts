import { AppDataSource } from "../../data-source";
import { Institutions } from "../../entities/institution.entity";

const institutionsListService = () => {
	const institutionsRepository = AppDataSource.getRepository(Institutions);
	const institutions = institutionsRepository.find();

	return institutions;
};

export default institutionsListService;
