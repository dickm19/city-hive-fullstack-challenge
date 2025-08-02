import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../src/app/types';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private _http: HttpClient) { }
  
  signup(user: User) {
    return this._http.post('http://localhost:3000/api/users/signup', user, { withCredentials: true })
      .pipe(map((response: any) => response));
  }

  getCurrentUser() {
    return this._http.get('http://localhost:3000/api/users/current', { withCredentials: true })
      .pipe(map((response: any) => response));
  }

  signout() {
    return this._http.get('http://localhost:3000/signout', { withCredentials: true })
      .pipe(map((response: any) => response));
  }

  login(user: User) {
    return this._http.post('http://localhost:3000/login', user, { withCredentials: true })
      .pipe(map((response: any) => response));
  }
}