import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  setLogin(login: User) {
    return this.http.post<User>(`${this.url}/login`, login);
  }

  setRegister(register: User) {
    return this.http.post<User>(`${this.url}/register`, register);
  }

}
