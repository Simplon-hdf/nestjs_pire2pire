import { CourseEntity } from "src/course/entity/course.entity/course.entity";
import { UserEntity } from "src/user/entity/user.entity/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TrainingEntity {
    @PrimaryGeneratedColumn({name: "training_id"})
    id: number

    @Column({name: "training_title", type: "varchar"})
    title: string
    
    @ManyToMany(() => UserEntity)
    @JoinTable({name: "training_authors"})
    authors: UserEntity[]

    @ManyToMany(() => CourseEntity)
    @JoinTable({name: "training_courses"})
    courses: CourseEntity[]
}
