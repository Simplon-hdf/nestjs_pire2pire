import { LessonEntity } from "src/lesson/entity/lesson.entity/lesson.entity";
import { TagCourseEntity } from "src/tag_course/entity/tag_course.entity/tag_course.entity";
import { UserEntity } from "src/user/entity/user.entity/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('courses')
export class CourseEntity {
    @PrimaryGeneratedColumn({name: "course_id"})
    id: number

    @Column({name: "course_title", type: "varchar"})
    title: string

    @Column({name: "course_number", type: "varchar"})
    number: string

    @Column({name: "course_objective", type: "varchar"})
    objective: string

    @Column({name: "course_duration", type: "integer"})
    duration: number

    @ManyToMany(() => LessonEntity, (lesson) => lesson.content)
    @JoinTable({name: "course_lessons"})
    lessons: LessonEntity[]

    @ManyToMany(() => TagCourseEntity, (tag) => tag.tagName)
    @JoinTable({name: "course_tag"})
    tag: TagCourseEntity[]

    @ManyToMany(() => UserEntity, (user)  => user.firstName + user.name)
    @JoinTable({name: "course_authors"})
    authors: UserEntity[]
}
