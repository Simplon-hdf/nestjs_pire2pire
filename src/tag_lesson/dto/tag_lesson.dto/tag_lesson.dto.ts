import { IsNumber, IsString } from "class-validator";

export class TagLessonDto {
    @IsNumber()
    id: number

    @IsString()
    tagName: string
}
