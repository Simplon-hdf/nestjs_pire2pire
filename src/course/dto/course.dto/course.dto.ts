import { IsNumber, IsString } from "class-validator";

export class CourseDto {
    @IsNumber()
    id?: number

    @IsString()
    courseTitle: string

    @IsString()
    courseNumber: string

    @IsString()
    courseObjective: string

    @IsNumber()
    courseDuration: number
}
