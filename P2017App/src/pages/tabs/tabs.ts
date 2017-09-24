import { Component } from '@angular/core';

import { UserManagerPage } from '../usermanager/usermanager';
import { EventManagerPage } from '../eventmanager/eventmanager';
import { HomePage } from '../home/home';
import { VotingPage } from '../voting/voting';

import { LoginPage } from '../login/login';
import { EventListPage } from '../eventlist/event-list';
import { UserListPage } from '../userlist/user-list';
import { AdminHomePage } from '../adminhome/admin-home';
import { UserHomePage } from '../userhome/user-home';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UserManagerPage;
  tab3Root = EventManagerPage;
  tab4Root = LoginPage;
  tab5Root = EventListPage;
  tab6Root = UserListPage;
  tab7Root = AdminHomePage;
  tab8Root = UserHomePage;
  tab9Root = VotingPage;

  constructor() {

  }
}
