import { CourseEntity } from "src/course/entity/course.entity/course.entity";
import { TagLessonEntity } from "src/tag_lesson/entity/tag_lesson.entity/tag_lesson.entity";
import { UserEntity } from "src/user/entity/user.entity/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("lessons")
export class LessonEntity {
    @PrimaryGeneratedColumn({name: "lesson_id"})
    id: number

    @Column({name: "lesson_title", type: "varchar"})
    lessonTitle: string

    @Column({name: "lesson_content", type: "text"})
    lessonContent: string

    @ManyToMany(() => TagLessonEntity, (tag) => tag.id)
    @JoinTable({name: "lesson_tag",
    joinColumn: {
        name: "lesson_id",
        referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "tag_id",
        referencedColumnName: "id"
    }})
    tag: TagLessonEntity[]

    @ManyToMany(() => CourseEntity, (course) => course.lessons)
    course: CourseEntity

    @ManyToMany(() => UserEntity, (user) => user.id)
    @JoinTable({name: "lesson_authors",
    joinColumn: {
        name: "lesson_id",
        referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "user_id",
        referencedColumnName: "id"
    }})
    authors: UserEntity[]
}
