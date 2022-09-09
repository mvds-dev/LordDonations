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

    @ManyToOne(() => Status, (Status) => Status.objects)
    status: Status
    
    @ManyToOne(() => Users, (Users) => Users.objects)
    user: Users

    @ManyToOne(() => Types, (Types) => Types.objects)
    type: Types

    @ManyToOne(() => Institutions, (Institutions) => Institutions.objects)
    institution: Institutions
    
}

export { Itens }