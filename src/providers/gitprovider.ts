import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { Repo } from '../models/repo';

@Injectable()
export class GitProvider {
  githubApiUrl = 'https://api.github.com';
  oauth = 'dontcatchmeslippin';
  authParam = '?access_token=';


  constructor(public http: Http) { }

  buildUrl(route: string) {
    return this.githubApiUrl + route + this.authParam + this.oauth;
  }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(this.buildUrl('/users/oarnarsson/followers'))
        .map(res => <User[]>res.json());
  }

  loadDetails(login: string): Observable<User> {
    return this.http.get(this.buildUrl(`/users/${login}`))
        .map(res => <User>(res.json()))
  }

  loadRepos(login: string): Observable<Repo[]> {
      return this.http.get(this.buildUrl(`/users/${login}/repos`))
          .map(res => <Repo[]>(res.json()))
  }

  loadFollowers(login: string): Observable<User[]> {
    return this.http.get(this.buildUrl(`/users/${login}/followers`))
        .map(res => <User[]>(res.json()))
  }

  loadFollowing(login: string): Observable<User[]> {
    return this.http.get(this.buildUrl(`/users/${login}/following`))
        .map(res => <User[]>(res.json()))
  }

  searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(this.buildUrl(`/search/users?`)+ `&q=${searchParam}`)
        .map(res => <User[]>(res.json().items))
  }
}