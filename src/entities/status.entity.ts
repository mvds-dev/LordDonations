import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('statuses')
class Status{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    name: string

}

export { Status }