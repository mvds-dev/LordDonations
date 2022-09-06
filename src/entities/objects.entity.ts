import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Status } from "./status.entity";

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
    /*
    @ManyToOne(() => )
    user: 

    @ManyToOne(() => )
    type:

    @ManyToOne(() => )
    institution:
    */
}

export { Itens }