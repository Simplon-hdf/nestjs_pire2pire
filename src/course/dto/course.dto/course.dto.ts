import { IsNumber, IsString } from "class-validator";

export class CourseDto {
    @IsNumber()
    id: number

    @IsString()
    title: string

    @IsString()
    number: string

    @IsString()
    objective: string

    @IsNumber()
    duration: number
}
