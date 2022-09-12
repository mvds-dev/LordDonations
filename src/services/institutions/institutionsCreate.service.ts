import bcrypt from "bcrypt";
import { AppDataSource } from "../../data-source";
import { Institutions } from "../../entities/institution.entity";
import { AppError } from "../../erros/appError";
import { IInstitutionRequest } from "../../interfaces/institutions";

const institutionsCreateService = async ({
	name,
	email,
	password,
	cnpj,
}: IInstitutionRequest) => {
	const institutionsRepository = AppDataSource.getRepository(Institutions);

	const institutions = await institutionsRepository.find();

	const emailAlreadyExists = institutions.find(
		(institution) => institution.email === email,
	);

	if (emailAlreadyExists) {
		throw new AppError(400, "Email already exists");
	}

	const cnpjAlreadyExists = institutions.find(
		(institution) => institution.cnpj === cnpj,
	);

	if (cnpjAlreadyExists) {
		throw new AppError(400, "CNPJ already exists");
	}

	if (!name || !email || !password || !cnpj) {
		throw new AppError(400, "Some data is missing");
	}

	const institution = new Institutions();
	institution.name = name;
	institution.email = email;
	institution.password = bcrypt.hashSync(password, 10);
	institution.cnpj = cnpj;
	institution.isActive = true;

	institutionsRepository.create(institution);
	await institutionsRepository.save(institution);

	return institution;
};

export default institutionsCreateService;
