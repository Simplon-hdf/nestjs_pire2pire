import { Module } from '@nestjs/common';
import { TagLessonService } from './tag_lesson.service';
import { TagLessonController } from './tag_lesson.controller';

@Module({
  providers: [TagLessonService],
  controllers: [TagLessonController]
})
export class TagLessonModule {}
