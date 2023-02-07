import { Entity, Column, OneToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Profile {
  @Column()
  name: string;

  @Column()
  title: string;


  @Column()
  phone: string;


  @Column()
  bio: string;

  @OneToOne(type => User, user => user.profile)
  user: User;
}