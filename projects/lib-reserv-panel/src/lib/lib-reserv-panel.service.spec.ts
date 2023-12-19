import { TestBed } from '@angular/core/testing';

import { LibReservPanelService } from './lib-reserv-panel.service';

describe('LibReservPanelService', () => {
  let service: LibReservPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibReservPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
