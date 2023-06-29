import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingEntity } from './entity/training.entity/training.entity';
import { TrainingDto } from './dto/training.dto/training.dto';
import { Repository } from 'typeorm';
import { CourseDto } from 'src/course/dto/course.dto/course.dto';
import { CourseEntity } from 'src/course/entity/course.entity/course.entity';
import { LessonEntity } from 'src/lesson/entity/lesson.entity/lesson.entity';
import { LessonDto } from 'src/lesson/dto/lesson.dto/lesson.dto';

@Injectable()
export class TrainingService {
    constructor(
        @InjectRepository(TrainingEntity)
        private trainingRepository: Repository<TrainingEntity>,

        @InjectRepository(CourseEntity)
        private courseRepository: Repository<CourseEntity>,

        @InjectRepository(LessonEntity)
        private lessonRepository: Repository<LessonEntity>
    ) {}
    async create(training: TrainingDto): Promise<TrainingDto> {
        const newTraining = this.trainingRepository.create(training)
        await this.trainingRepository.save(newTraining)

        const course: CourseDto = {"courseObjective": training.courseObjective, "courseTitle": training.courseTitle, "courseDuration": training.courseDuration, "courseNumber": training.courseNumber}
        await this.courseRepository.save(course)

        const lesson: LessonDto = { "lessonContent": training.lessonContent, "lessonTitle": training.lessonTitle}
        await this.lessonRepository.save(lesson)
        return training
    }
}
