import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserListPage } from '../userlist/user-list';
import { EventListPage } from '../eventlist/event-list';
import { EventManagerPage } from '../eventmanager/eventmanager';
import { UserManagerPage } from '../usermanager/usermanager';
import { HomePage } from '../home/home';
import { VotingPage } from '../voting/voting';

@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html'
})
export class AdminHomePage {
  public userDetails: any;
  constructor(public navCtrl: NavController) {
    console.log("Creating admin home");
    //const data = JSON.parse(localStorage.getItem('userData'));
    //this.userDetails = data.userData;
  }
  eventList(){
    this.navCtrl.push(EventListPage);
  }
  userList(){
    this.navCtrl.push(UserListPage);
  }
  createEvent(){
    this.navCtrl.push(EventManagerPage);
  }
  createUser(){
    this.navCtrl.push(UserManagerPage);
  }
  vote(){
    this.navCtrl.push(HomePage);
  }
  viewVotesCount(){
    this.navCtrl.push(VotingPage);
  }
}
