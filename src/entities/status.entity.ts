import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Itens } from "./objects.entity";

@Entity('statuses')
class Status{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    name: string

    @OneToMany(()=> Itens, Itens => Itens.status)
    objects: Itens[]

}

export { Status }