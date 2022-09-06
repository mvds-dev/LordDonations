import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('statuses')
class Status{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

}

export { Status }