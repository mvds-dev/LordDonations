import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

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

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}