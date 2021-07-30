import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../interfaces/user';
import { UserClass } from '../models/user-class';

import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name: string;
  

  constructor(private _http: HttpClient) { 
    console.log('User Service Ready...');
    this.name =  'Malobz';
  }
  getUser() {
    return this._http.get('https://api.github.com/users/' + this.name)
    .pipe(
    map(result => result)
    )
  }
  getRepository() {
    return this._http.get(' https://api.github.com/users/' + this.name + '/repos')
    .pipe(
    map(result => result)
  )
  }
  updateUser(name: string) {
    this.name = name;
}
}
