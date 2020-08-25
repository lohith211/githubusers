import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-services/github.service';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
})
export class GithubComponent implements OnInit {
  user: any;
  repos: any;
  allusers:any;
  id:any;
  userName: string;
  config: any;
  count:any;
  count1: any;
  page = 1;
  page1=1;
  config1: { itemsPerPage: number; currentPage: number; totalItems: any; };


  constructor(private githubService: GithubService) {
    this.githubService.getUser().subscribe((user) => {
      this.user = user;
    });

    this.githubService.getRepos().subscribe((repos) => {
      this.repos = repos;
      this.count1=this.repos.length;
    });
    this.githubService.getAllusers().subscribe((allusers) => {
      this.allusers = allusers;
      this.count=this.allusers.length;
      console.log(this.count);
    });

  }

  pageChanged(event){
    this.page = event;
  }
  pageChanged1(event){
    this.page1 = event;
  }


  findProfile() {
    this.githubService.updateUser(this.userName);

    this.githubService.getUser().subscribe((user) => {
      this.user = user;
    });

    this.githubService.getRepos().subscribe((repos) => {
      this.repos = repos;
      this.count1=this.repos.length;
      console.log(this.count1);
    });
  }
  viewrepo(id:HTMLInputElement)
  {
    this.id=( < HTMLInputElement > id).value;
    console.log(this.id);
    this.githubService.getReposbyid(this.id).subscribe((repos) => {
      this.repos = repos;
      this.count1=this.repos.length;
      console.log(this.count1);
    });
  }

  ngOnInit(): void {}
}
