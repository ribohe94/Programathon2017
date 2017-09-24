import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventListPage } from '../eventlist/event-list';

@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html'
})
export class UserHomePage {

  constructor(public navCtrl: NavController) {
    console.log("Creating user home");
  }
  eventList(){
    this.navCtrl.push(EventListPage);
  }
}
