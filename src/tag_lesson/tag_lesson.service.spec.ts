import { Test, TestingModule } from '@nestjs/testing';
import { TagLessonService } from './tag_lesson.service';

describe('TagLessonService', () => {
  let service: TagLessonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagLessonService],
    }).compile();

    service = module.get<TagLessonService>(TagLessonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
