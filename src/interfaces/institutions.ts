import { Addresseses } from "../entities/Addresses.entities";

export interface IInstitutionRequest {
	name: string;
	email: string;
	cnpj: string;
	password: string;
	address: Addresseses;
}

export interface IInstitution {
	id: string;
	name: string;
	email: string;
	cnpj: string;
	createdAt: Date;
	updatedAt: Date;
	isActive: boolean;
}

export interface IInstitutionLogin {
	email: string;
	password: string;
}

export interface IInstitutionUpdate {
	id: string,
	name?: string,
	email?: string,
	cnpj?: string,
	password?: string
}
