import { Test, TestingModule } from '@nestjs/testing';
import { TagLessonController } from './tag_lesson.controller';

describe('TagLessonController', () => {
  let controller: TagLessonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TagLessonController],
    }).compile();

    controller = module.get<TagLessonController>(TagLessonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
