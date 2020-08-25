import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private userName = 'lohith211';
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get('https://api.github.com/users/' + this.userName);
  }
  getRepos() {
    return this.http.get(
      'https://api.github.com/users/' + this.userName + '/repos'
    );
  }
  getAllusers() {
    return this.http.get('https://api.github.com/users');
  }
  getReposbyid(id) {
    return this.http.get('https://api.github.com/users/' + id + '/repos');
  }
  updateUser(userName: string) {
    this.userName = userName;
  }
}
