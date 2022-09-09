import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Institutions } from "../../entities/institution.entity";
import { AppError } from "../../erros/appError";
import { IInstitutionLogin } from "../../interfaces/institutions";

const institutionLoginService = async ({
	email,
	password,
}: IInstitutionLogin) => {
	const institutionsRepository = AppDataSource.getRepository(Institutions);
	const institutions = await institutionsRepository.find();

	const account = institutions.find(
		(institution) => institution.email === email,
	);

	if (!email || !password) {
		throw new AppError(400, "Email or password is missing");
	}

	if (!account) {
		throw new AppError(403, "Wrong email/password");
	}

	if (!bcrypt.compareSync(password, account.password)) {
		throw new AppError(403, "Wrong email/password");
	}

	if (!account?.isActive) {
		throw new AppError(403, "User is deactivated");
	}

	const token = jwt.sign({ email: email }, String(process.env.SECRET_KEY), {
		expiresIn: "24h",
	});

	return token;
};

export default institutionLoginService;
