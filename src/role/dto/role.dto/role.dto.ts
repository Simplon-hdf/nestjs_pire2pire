import { IsBoolean, IsNumber } from "class-validator";

export class RoleDto {
    @IsNumber()
    id?: number
    
    @IsBoolean()
    isAdmin: boolean
    
    @IsBoolean()
    isStudent: boolean
    
    @IsBoolean()
    isFormer: boolean

    @IsNumber()
    userId: number
}
