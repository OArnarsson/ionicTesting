import {NavController, NavParams} from 'ionic-angular';
import { Component } from '@angular/core';
import { UserDetailsPage } from '../user-details/user-details';

import { User } from '../../models/user';

import { GitProvider } from '../../providers/gitprovider';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[];
  originalUsers: User[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GitProvider) {
      githubUsers.load().subscribe(users => {
        this.users = users;
      });
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    // We will only perform the search if we have 3 or more characters
    if (term.trim() !== '' && term.trim().length > 2) {
      // Get the searched users from github
      this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users
      });
    }
  }
}