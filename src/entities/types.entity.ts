import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

import { v4 as uuid } from "uuid";
import { Requests } from "./requests.entity";
import { Itens } from "./objects.entity";

@Entity()
export class Types {
	@PrimaryColumn("uuid")
	readonly id: string;

	@Column({ unique: true })
	name: string;

	@Column({ nullable: true })
	description: string;

	@Column({ default: true })
	isActive: boolean;

	@OneToMany(() => Requests, (requests) => requests.type)
	request: Requests[];

	@OneToMany(()=> Itens, Itens => Itens.type)
    objects: Itens[]

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
