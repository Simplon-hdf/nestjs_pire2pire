import { Module } from '@nestjs/common';
import { TagCourseService } from './tag_course.service';
import { TagCourseController } from './tag_course.controller';

@Module({
  providers: [TagCourseService],
  controllers: [TagCourseController]
})
export class TagCourseModule {}
