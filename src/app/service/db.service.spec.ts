import { TestBed } from '@angular/core/testing';

import { DbService } from './db.service';
import { SQLite } from '@ionic-native/sqlite/ngx';

describe('DbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers : [ SQLite]
    })
  });

  it('should be created', () => {
    const service: DbService = TestBed.get(DbService);
    expect(service).toBeTruthy();
  });
});
