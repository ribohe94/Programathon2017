import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html'
})
export class EventListPage {

  constructor(public navCtrl: NavController) {
    console.log("Creating event list");
  }
}
