import { Test, TestingModule } from '@nestjs/testing';
import { TagCourseController } from './tag_course.controller';

describe('TagCourseController', () => {
  let controller: TagCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TagCourseController],
    }).compile();

    controller = module.get<TagCourseController>(TagCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
