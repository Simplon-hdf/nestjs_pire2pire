import { IsNumber, IsString } from "class-validator";

export class TagCourseDto {
    @IsNumber()
    id: number

    @IsString()
    tagName: string
}
