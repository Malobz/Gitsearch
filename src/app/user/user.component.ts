import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../interfaces/user';
import { UserClass } from '../models/user-class';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  user: any=[];
  repository: any=[];
  name: any;
  

  constructor(private _UserService: UserService) { 
    this._UserService.getUser().subscribe(user => {
      console.log(user);

      this.user = user;
    });
    this._UserService.getRepository().subscribe(repository => {
      // console.log(user);
      this.repository = repository;
    });
  }

  ngOnInit(): void {
      }
      searchUser() {
        this._UserService.updateUser(this.name);
        this._UserService.getUser().subscribe(user => {
          this.user = user;
        });
        this._UserService.getRepository().subscribe(repository => {
          // console.log(repository);
          this.repository = repository;
        });
          
  // this.http.get<Iuser>("http://api.github.com").subscribe(data=>{
  //   // Succesful API request
  //   this.user = new UserClass(data.name, data.bio, data.created_at, data.repos_url, data.avatar_url)
  // })
      }
}
