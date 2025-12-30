import { Test, TestingModule } from '@nestjs/testing';
import { F7Controller } from './f7.controller';

describe('F7Controller', () => {
  let controller: F7Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [F7Controller],
    }).compile();

    controller = module.get<F7Controller>(F7Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
