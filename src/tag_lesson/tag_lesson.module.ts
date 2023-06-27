import { Module } from '@nestjs/common';
import { TagLessonService } from './tag_lesson.service';
import { TagLessonController } from './tag_lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagLessonEntity } from './entity/tag_lesson.entity/tag_lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagLessonEntity])],
  controllers: [TagLessonController],
  providers: [TagLessonService],
})
export class TagLessonModule {}
