import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

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

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
