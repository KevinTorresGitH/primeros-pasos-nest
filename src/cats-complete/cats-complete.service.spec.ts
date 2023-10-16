import { Test, TestingModule } from '@nestjs/testing';
import { CatsCompleteService } from './cats-complete.service';

describe('CatsCompleteService', () => {
  let service: CatsCompleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsCompleteService],
    }).compile();

    service = module.get<CatsCompleteService>(CatsCompleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
