import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn ,OneToMany, OneToOne,JoinColumn} from "typeorm";
import { Addresseses } from "./Addresses.entities";
import { Requests } from "./requests.entity";

@Entity("institutions")
export class Institutions {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;
  
  @Column()
  cnpj: string;

  @Column()
  password: string;

  @CreateDateColumn({name: "createAt"})
  createdAt: Date;

  @UpdateDateColumn({name: "updatedAt"})
  updatedAt: Date;

  @OneToMany((type) => Requests, (requests) => requests.institution, {onDelete: "SET NULL"})
  requests: Requests[];

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Addresseses, {
    eager: true //,onDelete:"CASCADE"
})@JoinColumn()
address: Addresseses
}
