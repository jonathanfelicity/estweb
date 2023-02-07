import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm"
import { Profile } from "./profile.entity";

@Entity()
export class User {

    @Column({ default: 'default.png' })
    avatar: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToOne(type => Profile, profile => profile.user)
    @JoinColumn()
    profile: Profile;
}