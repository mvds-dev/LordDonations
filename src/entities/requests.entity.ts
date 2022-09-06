import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Requests {
	@PrimaryColumn("uuid")
	readonly id: string;

	@Column({ default: 0 })
	quantity: number;

	@Column({ nullable: true })
	description: string;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
