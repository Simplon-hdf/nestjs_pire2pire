import { UserEntity } from "src/user/entity/user.entity/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class RoleEntity {
    @PrimaryGeneratedColumn({ name: "role_id"})
    id: number

    @Column({name: "is_admin", type: "boolean"})
    isAdmin: boolean

    @Column({name: "is_student", type: "boolean"})
    isStudent: boolean
    
    @Column({name: "is_former", type: "boolean"})
    isFormer: boolean

    @Column({name: "user_id", type: "integer"})
    userId: number

    @OneToOne(() => UserEntity, user => user.id, {cascade: true})
    @JoinColumn({name: "user_id"})
        user: UserEntity;
}
