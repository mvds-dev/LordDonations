import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	OneToOne,
	JoinColumn,
} from "typeorm";
import { Addresseses } from "./Addresses.entities";
import { Itens } from "./objects.entity";
import { Exclude } from "class-transformer";

@Entity()
export class Users {
	@PrimaryGeneratedColumn("uuid")
	readonly id: string;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column()
	@Exclude({ toPlainOnly: true })
	password: string;

	@Column()
	age: number;

	@Column({ unique: true })
	cpf: string;

	@Column({ default: true })
	isActive: boolean;

	@CreateDateColumn({ name: "createdAt" })
	createdAt: Date;

	@UpdateDateColumn({ name: "updatedAt" })
	updatedAt: Date;

	@OneToOne(() => Addresseses)
	@JoinColumn()
	address: Addresseses;

	@OneToMany(() => Itens, (Itens) => Itens.user)
	objects: Itens[];
}
