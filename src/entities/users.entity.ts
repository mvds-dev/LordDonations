import { Entity, PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn} from "typeorm";
import { Addresseses } from "./Addresses.entities";

@Entity()
export class Users {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column()
    name: string
    
    @Column({unique: true})
    email: string

    @Column()
    age: number

    @Column({unique: true})
    cpf: string

    @Column()
    isActive: boolean

    @CreateDateColumn({name: "createdAt"})
    createdAt: Date

    @UpdateDateColumn({name: "updatedAt"})
    updatedAt: Date

    @OneToOne(() => Addresseses, {
        eager: true //,onDelete:"CASCADE"
    })@JoinColumn()
    address: Addresseses
}