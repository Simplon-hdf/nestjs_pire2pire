import { TagLessonEntity } from "src/tag_lesson/entity/tag_lesson.entity/tag_lesson.entity";
import { UserEntity } from "src/user/entity/user.entity/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("lessons")
export class LessonEntity {
    @PrimaryGeneratedColumn({name: "lesson_id"})
    id: number

    @Column({name: "lesson_title", type: "varchar"})
    title: string

    @Column({name: "lesson_content", type: "text"})
    content: string

    @ManyToMany(() => TagLessonEntity)
    @JoinTable({name: "lesson_tag"})
    tag: TagLessonEntity[]

    @ManyToMany(() => UserEntity)
    @JoinTable({name: "lesson_authors"})
    authors: UserEntity[]
}
