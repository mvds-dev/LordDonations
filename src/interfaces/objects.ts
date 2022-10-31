export interface ICreateObjects {
	userId: string;
	typeId: string;
	name: string;
	description: string;
}

export interface IUpdateObjects {
	userId: string;
	objectId: string;
	typeId?: string;
	name?: string;
	description?: string;
}
