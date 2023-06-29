import { LessonEntity } from "src/lesson/entity/lesson.entity/lesson.entity";
import { TagCourseEntity } from "src/tag_course/entity/tag_course.entity/tag_course.entity";
import { TrainingEntity } from "src/training/entity/training.entity/training.entity";
import { UserEntity } from "src/user/entity/user.entity/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('courses')
export class CourseEntity {
    @PrimaryGeneratedColumn({name: "course_id"})
    id: number

    @Column({name: "course_title", type: "varchar"})
    courseTitle: string

    @Column({name: "course_number", type: "varchar"})
    courseNumber: string

    @Column({name: "course_objective", type: "varchar"})
    courseObjective: string

    @Column({name: "course_duration", type: "integer"})
    courseDuration: number

    @ManyToMany(() => TrainingEntity, (training) => training.courses)
    training: TrainingEntity[]

    @ManyToMany(() => LessonEntity, (lesson) => lesson.id)
    @JoinTable({name: "course_lessons",
    joinColumn: {
        name: "course_id",
        referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "lesson_id",
        referencedColumnName: "id"
    }})
    lessons: LessonEntity[]

    @ManyToMany(() => TagCourseEntity, (tag) => tag.id)
    @JoinTable({name: "course_tag",
    joinColumn: {
        name: "course_id",
        referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "tag_id",
        referencedColumnName: "id"
    }})
    tag: TagCourseEntity[]

    @ManyToMany(() => UserEntity, (author)  => author.id)
    @JoinTable({name: "course_authors",
    joinColumn: {
        name: "course_id",
        referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "user_id",
        referencedColumnName: "id"
    }})
    authors: UserEntity[]
}
