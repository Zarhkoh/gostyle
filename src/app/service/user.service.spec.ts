import { TestBed, inject, async } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { User } from '../models/user';

describe('UserService', () => {

  let httpTestingController: HttpTestingController;
  let userService: UserService;
  let url = "http://localhost:3000"

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports : [HttpClientTestingModule]
    })

    httpTestingController = TestBed.get(HttpTestingController);
    userService = TestBed.get(UserService);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  
  it("should return GET /login true, and verify response", () => {
    const userToLogin = {
      email: 'sullivan.delaby@epsi.fr',
      pwd: 'sullivan'
    };

    userService.setLogin(userToLogin).subscribe(res => {
      expect(res.email).toBe(userToLogin.email);
      expect(res.pwd).toBe(userToLogin.pwd);
      expect(res).toEqual(userToLogin);
    })

    const req = httpTestingController.expectOne("http://localhost:3000/login");
    expect(req.request.url).toBe("http://localhost:3000/login");
    expect(req.request.method).toBe('POST');
    req.flush(userToLogin);
  });
});
