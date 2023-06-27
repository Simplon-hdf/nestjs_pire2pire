import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TagLessonService } from './tag_lesson.service';
import { TagLessonDto } from './dto/tag_lesson.dto/tag_lesson.dto';

@Controller('tag-lesson')
export class TagLessonController {
    constructor(private tagLessonService: TagLessonService) {}

    @Post()
    create(@Body() tagLesson: TagLessonDto): Promise<TagLessonDto> {
        return this.tagLessonService.create(tagLesson)
    }

    @Get()
    async findAll(): Promise<TagLessonDto[]> {
        return this.tagLessonService.findAll()
    }

    @Get(":id")
    async findOne(@Param("id") id: string): Promise<TagLessonDto> {
        return this.tagLessonService.findOne(id)
    }

    @Delete(":id")
    async deleteTagLesson(@Param("id") id: string) {
        return this.tagLessonService.deleteTag(id)
    }

    @Patch(":id")
    async editTag(@Param('id') id: string, @Body() tagLesson: TagLessonDto) {
        return this.tagLessonService.editTag(id, tagLesson)
    }
}
