import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  name: string;
  // html_url: string;
  // description: string;
  // downloads_url: string;
  // forks: string;
  // watchers: string;

  constructor(private _http: HttpClient) { 
    console.log('Repository Service Ready...');
    this.name =  'Akan-Names';
  }
  getRepos() {
    return this._http.get(' https://api.github.com/users/' + this.name + '/repos')
    .pipe(
    map(result => result)
    )
}
updateRepo(name: string) {
  this.name = name;
}
}
