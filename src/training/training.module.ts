import { Module } from '@nestjs/common';
import { TrainingController } from './training.controller';
import { TrainingService } from './training.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingEntity } from './entity/training.entity/training.entity';
import { CourseEntity } from 'src/course/entity/course.entity/course.entity';
import { LessonEntity } from 'src/lesson/entity/lesson.entity/lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrainingEntity, CourseEntity, LessonEntity])],
  controllers: [TrainingController],
  providers: [TrainingService]
})
export class TrainingModule {}
