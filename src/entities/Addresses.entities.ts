import { Entity, Column, PrimaryColumn, OneToOne } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Institutions } from './institution.entity'

@Entity()
export class Addresseses {
    
    @PrimaryColumn('uuid')
    readonly id:string

    @Column()
    city: string
    
    @Column()
    state: string

    @Column()
    number: string

    @Column()
    cep: string

    @Column()
    district: string

    @OneToOne((type) => Institutions, (institution) => institution.address)
    institution: Institutions


    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}