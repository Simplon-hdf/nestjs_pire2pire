import { Body, Controller, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from './dto/role.dto/role.dto';

@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService) {}

    @Post()
    create(@Body() role:RoleDto): Promise<RoleDto> {
        return this.roleService.create(role)
    }
}
