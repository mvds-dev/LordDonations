import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Institutions } from "./institution.entity";

@Entity()
export class Requests {
	@PrimaryColumn("uuid")
	readonly id: string;

	@Column({ default: 0 })
	quantity: number;

	@Column({ nullable: true })
	description: string;

	@ManyToOne(() => Institutions, { nullable: false })
	institution: Institutions;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
