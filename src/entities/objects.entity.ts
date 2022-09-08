import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Status } from "./status.entity";
import { Types } from "./types.entity";
import { Users } from "./users.entity";
import { Institutions } from "./institution.entity";


@Entity('objects')
class Itens{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    description: number

    @OneToOne(() => Status, {eager: true}) @JoinColumn()
    status: Status
    
    @ManyToOne(() => Users, (Users) => Users.id)
    user: Users

    @ManyToOne(() => Types, (Types) => Types.id)
    type: Types

    @ManyToOne(() => Institutions, (Institutions) => Institutions.id)
    institution: Institutions
    
}

export { Itens }