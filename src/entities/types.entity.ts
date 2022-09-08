import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Requests } from "./requests.entity";

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

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
