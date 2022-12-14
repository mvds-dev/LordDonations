import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { Institutions } from "../../entities/institution.entity";
import { AppError } from "../../erros/appError";
import { IInstitutionUpdate } from "../../interfaces/institutions";

const institutionUpdateService = async ({ id, name, email, cnpj, password }: IInstitutionUpdate) => {
	const institutionsRepository = AppDataSource.getRepository(Institutions);
	const institutions = await institutionsRepository.find();

	if (!name && !email && !cnpj) {
		throw new AppError(400, "Nothing to update");
	}

	const institution = institutions.find((institution) => institution.id === id);

	if (!institution) {
		throw new AppError(404, "Institution not found");
	}

	if (!institution?.isActive) {
		throw new AppError(400, "Institution is deactivated");
	}

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

	if (institution.email === email) {
		throw new AppError(409, "Try a different email");
	}

	if (institution.name === name) {
		throw new AppError(409, "Try a different name");
	}

	let newPassword = password;
	if(password) {
		newPassword = await hash(password, 10);
	}

	await institutionsRepository.save({
		id: id,
		name,
		email,
		cnpj,
		password: newPassword
	});
	return {message: "Instition updated!"};
};

export default institutionUpdateService;
