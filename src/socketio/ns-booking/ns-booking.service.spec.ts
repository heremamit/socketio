import { Test, TestingModule } from '@nestjs/testing';
import { NsBookingService } from './ns-booking.service';

describe('NsBookingService', () => {
  let service: NsBookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NsBookingService],
    }).compile();

    service = module.get<NsBookingService>(NsBookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
