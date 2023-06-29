import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from './entity/course.entity/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
    @InjectRepository(CourseEntity)
    private courseRepository: Repository<CourseEntity>
}
