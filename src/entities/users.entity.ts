import { Entity, PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

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
}