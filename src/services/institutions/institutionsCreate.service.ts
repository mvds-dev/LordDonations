import bcrypt from "bcrypt";
import { AppDataSource } from "../../data-source";
import { Addresseses } from "../../entities/Addresses.entities";
import { Institutions } from "../../entities/institution.entity";
import { AppError } from "../../erros/appError";
import { IInstitutionRequest } from "../../interfaces/institutions";


const institutionsCreateService = async ({
	name,
	email,
	password,
	cnpj,
	address
}: IInstitutionRequest) => {
	if(!name || !email || !password || !cnpj) throw new AppError(400, "Institution on wrong format");
	if(!address) throw new AppError(400, "institution must have address");

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

	//creates address
	const addressesRepository = AppDataSource.getRepository(Addresseses);
	if(!address.cep || !address.city || !address.district || !address.number || !address.state) {
		throw new AppError(400, "address is in wrong format");
	}

	const doesAddressExists = await addressesRepository.findOne({where: {cep: address.cep}});
	if(doesAddressExists) throw new AppError(409, "address is already registered");

	const newAddress = new Addresseses();
	newAddress.cep = address.cep;
	newAddress.city = address.city;
	newAddress.district = address.district;
	newAddress.number = address.number;
	newAddress.state = address.state;

	const createdAddress = await addressesRepository.save(newAddress);

	const institution = new Institutions();
	institution.name = name;
	institution.email = email;
	institution.password = bcrypt.hashSync(password, 10);
	institution.cnpj = cnpj;
	institution.isActive = true;
	institution.address = createdAddress;
	

	institutionsRepository.create(institution);
	await institutionsRepository.save(institution);

	return institution;
};

export default institutionsCreateService;
