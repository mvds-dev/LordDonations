import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Institutions")
export class Institution {
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
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
  @Column({ default: true })
  isActive: boolean;
}
