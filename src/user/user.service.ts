import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    create(user: UserDto): Promise<UserDto> {
        return this.userRepository.save(user);
    }

    findAll(): Promise<UserDto[]> {
        return this.userRepository.find()
    }

    findOne(id: string): Promise<UserDto> {
        return this.userRepository.findOne({where: {id: +id}})
    }

    async editUser(id: string, user: UserDto) {
        const userToEdit = await this.userRepository.findOne({where: {id: +id}})
        if(!userToEdit) {
            return new NotFoundException('no user at this id')
        }
        if(user.name) {
            userToEdit.name = user.name
        }
        if(user.firstName) {
            userToEdit.firstName = user.firstName
        }
        if(user.birthDate) {
            userToEdit.birthDate = user.birthDate
        }
        if(user.adress) {
            userToEdit.adress = user.adress
        }
        this.userRepository.save(userToEdit)
        return userToEdit
    }

    deleteUser(id: string) {
        this.userRepository.delete(id)
    }
}
