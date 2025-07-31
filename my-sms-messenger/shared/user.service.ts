import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../src/app/types';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private _http: HttpClient) { }
  
  signup(user: User) {
    return this._http.post('api/users/signup', user)
      .pipe(map((response: any) => response));
  }

  }
}