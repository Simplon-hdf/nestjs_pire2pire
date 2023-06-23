import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn({ name: "user_id"})
    id: number

    @Column({name: "user_name", type: "varchar", nullable: false})
    name: string

    @Column({name: "user_first_name", type: "varchar", nullable: false})
    firstName: string

    @Column({name: "user_birth_date", type: "date", nullable: true})
    birthDate: string
    
    @Column({name: "user_adress", type: "varchar", nullable: true})
    adress: string
}
