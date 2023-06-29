import { IsNumber, IsString } from "class-validator";

export class LessonDto {
    @IsNumber()
    id?: number

    @IsString()
    lessonTitle: string

    @IsString()
    lessonContent: string
}
