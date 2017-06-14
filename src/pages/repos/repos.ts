import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GitProvider } from "../../providers/gitprovider";
import { Repo } from '../../models/repo'

@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
  login: string;
  repos: Repo[];

  constructor(public navCtrl: NavController, private navParams: NavParams, private gitProvider: GitProvider) {
    this.login = navParams.get('login');
    gitProvider.loadRepos(this.login).subscribe(repos => {
      this.repos = repos;
    })
  }

  ionViewDidLoad() {
    //console.log('Hello Repos Page');
  }
}