import {NavController, Platform, AlertController, ToastController} from 'ionic-angular';
import {Component} from '@angular/core';
import {UserDetailsPage} from '../user-details/user-details';

import {User} from '../../models/user';

import {GitProvider} from '../../providers/gitprovider';
import {LocalNotifications} from "@ionic-native/local-notifications";


@Component({
    selector: 'page-users',
    templateUrl: 'users.html'
})
export class UsersPage {
    users: User[];

    constructor(public navCtrl: NavController,
                private platform: Platform,
                private githubUsers: GitProvider,
                private localNotifications: LocalNotifications,
                private alertCtrl: AlertController,
                private toastCtrl: ToastController) {
        githubUsers.load().subscribe(users => {
            this.users = users;
        });

        this.platform.ready().then(() => {
            this.localNotifications.hasPermission().then(function(granted) {
                if (!granted) {
                    this.localNotifications.registerPermission();
                }
            });

            this.localNotifications.on('click', (notification, state) => {
                let alert = alertCtrl.create({
                    title: 'Flottur!',
                    subTitle: 'Gerðu eitthvað nett.',
                    buttons: ['OK']
                });
                alert.present();
            })
        });
    }

    scheduleNotification() {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDate();
        let notificationID = 1;

        let notification = {
            id: notificationID,
            title: 'ionicGithub',
            text: 'Hey, farðu heim bráðum.',
            at: new Date(year, month, day, 16, 0, 0),
            every: 'day',
            led: '#A0D'
        };

        if (this.localNotifications.isScheduled(notification.id)) {
            this.presentToast('Notification was already scheduled.');
        } else {
            this.localNotifications.schedule(notification);
            this.presentToast('New notification scheduled @' + d.toTimeString().slice(0, 8));
        }

    }

    presentToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        });

        toast.present();
    }

    goToDetails(login: string) {
        this.navCtrl.push(UserDetailsPage, {login});

    }

    search(searchEvent) {
        let term = searchEvent.target.value;
        if (term.trim() !== '' && term.trim().length > 2) {
            this.githubUsers.searchUsers(term).subscribe(users => {
                this.users = users
            });
        }
    }
}