import { IsNumber, IsString } from "class-validator";

export class TrainingDto {
    @IsNumber()
    id: number

    @IsString()
    title: string
}
