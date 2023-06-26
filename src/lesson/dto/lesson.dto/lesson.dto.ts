import { IsNumber, IsString } from "class-validator";

export class LessonDto {
    @IsNumber()
    id: number

    @IsString()
    title: string

    @IsString()
    content: string
}
