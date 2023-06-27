import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagLessonEntity } from './entity/tag_lesson.entity/tag_lesson.entity';
import { Repository } from 'typeorm';
import { TagLessonDto } from './dto/tag_lesson.dto/tag_lesson.dto';

@Injectable()
export class TagLessonService {
    constructor(
        @InjectRepository(TagLessonEntity)
        private tagLessonRepository: Repository<TagLessonEntity>
    ) {}

    create(tagLesson: TagLessonDto): Promise<TagLessonEntity> {
        return this.tagLessonRepository.save(tagLesson)
    }

    findAll(): Promise<TagLessonDto[]> {
        return this.tagLessonRepository.find()
    }

    findOne(id: string): Promise<TagLessonDto> {
        return this.tagLessonRepository.findOne({where: {id: +id}})
    }

    async editTag(id: string, tagLesson: TagLessonDto) {
        const tagLessonToEdit = await this.tagLessonRepository.findOne({where: {id: +id}})
        if(!tagLessonToEdit) {
            return new NotFoundException('no tag at this id')
        }
        tagLessonToEdit.tagName = tagLesson.tagName
        this.tagLessonRepository.save(tagLessonToEdit)
        return tagLessonToEdit
    }

    deleteTag(id: string) {
        this.tagLessonRepository.delete(id)
    }
}
