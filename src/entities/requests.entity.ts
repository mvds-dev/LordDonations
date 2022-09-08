import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Types } from "./types.entity";

@Entity()
export class Requests {
	@PrimaryColumn("uuid")
	readonly id: string;

	@Column({ default: 0 })
	quantity: number;

	@Column({ nullable: true })
	description: string;

	@OneToMany(() => Types, (types) => types.request)
	types: Types[];

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
