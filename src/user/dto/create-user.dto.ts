import { IsBoolean, IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsNumber()
    id: number;

    @IsString()
    firstName: string;

    @IsString()
    name: string;

    @IsString()
    adress?: string;

    @IsString()
    birthDate?: string;

    @IsBoolean()
    isAdmin?: boolean

    @IsBoolean()
    isStudent?: boolean

    @IsBoolean()
    isFormer?: boolean
}