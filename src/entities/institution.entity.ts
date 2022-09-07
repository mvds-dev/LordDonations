import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

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

  @Column({ default: true })
  isActive: boolean;
}
