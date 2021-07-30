import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../services/repository.service';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
  providers: [RepositoryService]
})
export class RepositoryComponent implements OnInit {
  repository: any=[];
  name: string;

  constructor(private _RepositoryService: RepositoryService) { 
    this._RepositoryService.getRepos().subscribe(repository => {
      console.log(repository);

      this.repository = repository;
    });
  }

  ngOnInit(): void {
  }
  searchRepos() {
    this._RepositoryService.updateRepo(this.name);
    this._RepositoryService.getRepos().subscribe(repository => {
      this.repository = repository;
    });
  }
}
