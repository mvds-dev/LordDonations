import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from "typeorm";
import { Requests } from "./requests.entity";

@Entity("institutions")
export class Institutions {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column()
	cnpj: string;

	@Column()
	password: string;

	@CreateDateColumn({ name: "createAt" })
	createdAt: Date;

	@UpdateDateColumn({ name: "updatedAt" })
	updatedAt: Date;

	@Column({ default: true })
	isActive: boolean;

	@OneToMany(() => Requests, (requests) => requests.institution)
	requests: Requests[];
}
