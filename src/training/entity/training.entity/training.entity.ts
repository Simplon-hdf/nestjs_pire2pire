import { CourseEntity } from "src/course/entity/course.entity/course.entity";
import { UserEntity } from "src/user/entity/user.entity/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TrainingEntity {
    @PrimaryGeneratedColumn({name: "training_id"})
    id: number

    @Column({name: "training_title", type: "varchar"})
    title: string
    
    @ManyToMany(() => UserEntity, (user) => user.firstName + user.name)
    @JoinTable({name: "training_authors"})
    authors: UserEntity[]

    @ManyToMany(() => CourseEntity, (course) => course.id)
    @JoinTable({name: "training_courses_id"})
    courses: CourseEntity[]
}
