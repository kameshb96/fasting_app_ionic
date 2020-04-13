import { TestBed } from '@angular/core/testing';

import { LocalNotificationsService } from './local-notifications.service';

describe('LocalNotificationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalNotificationsService = TestBed.get(LocalNotificationsService);
    expect(service).toBeTruthy();
  });
});
