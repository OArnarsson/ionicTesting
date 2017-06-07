import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';

import { GitUsers } from '../../providers/gitusers';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[]

  constructor(public navCtrl: NavController, private githubUsers: GitUsers) {
    githubUsers.load().subscribe(users => {
      this.users = users;
    })
  }
}