import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
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
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = LoginPage;
  tab5Root = EventListPage;
  tab6Root = UserListPage;
  tab7Root = AdminHomePage;
  tab8Root = UserHomePage;

  constructor() {

  }
}
