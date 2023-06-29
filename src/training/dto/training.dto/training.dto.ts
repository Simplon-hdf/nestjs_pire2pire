import { IsNumber, IsString } from "class-validator";

export class TrainingDto {
    @IsNumber()
    id: number

    @IsString()
    title: string

    @IsNumber()
    userId: number

    @IsString()
    courseTitle: string

    @IsString()
    courseNumber: string

    @IsString()
    courseObjective: string

    @IsNumber()
    courseDuration: number

    @IsString()
    lessonTitle: string

    @IsString()
    lessonContent: string
}
