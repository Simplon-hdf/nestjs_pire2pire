import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from './entity/role.entity/role.entity';
import { Repository } from 'typeorm';
import { RoleDto } from './dto/role.dto/role.dto';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleEntity)
        private roleRepository: Repository<RoleEntity>
    ) {}

    create(role: RoleDto): Promise<RoleDto> {
        return this.roleRepository.save(role)
    }
}
