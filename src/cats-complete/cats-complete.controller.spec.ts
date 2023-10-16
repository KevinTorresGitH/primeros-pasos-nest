import { Test, TestingModule } from '@nestjs/testing';
import { CatsCompleteController } from './cats-complete.controller';

describe('CatsCompleteController', () => {
  let controller: CatsCompleteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsCompleteController],
    }).compile();

    controller = module.get<CatsCompleteController>(CatsCompleteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
