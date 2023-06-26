import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TagCourseEntity {
    @PrimaryGeneratedColumn({name: "tag_id"})
    id: number

    @Column({name: "tag_name", type: "varchar"})
    tagName: string
}
