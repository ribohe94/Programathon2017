import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';

import { UserManagerPage } from '../pages/usermanager/usermanager';
import { EventManagerPage } from '../pages/eventmanager/eventmanager';
import { HomePage } from '../pages/home/home';
import { LoginPage }  from '../pages/login/login';
import { EventListPage } from '../pages/eventlist/event-list';
import { UserListPage } from '../pages/userlist/user-list';
import { AdminHomePage } from '../pages/adminhome/admin-home';
import { UserHomePage } from '../pages/userhome/user-home';
import { PageOne, PageTwo, PageThree } from '../pages/menus/pages';
//import { TabsPage } from '../pages/tabs/tabs';
import { VotingPage } from '../pages/voting/voting';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    UserManagerPage,
    EventManagerPage,
    HomePage,
    VotingPage,

    LoginPage,
  //  TabsPage,
    EventListPage,
    UserListPage,
    AdminHomePage,
    UserHomePage,
    PageOne, PageTwo, PageThree
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserManagerPage,
    EventManagerPage,
    LoginPage,
    HomePage,
    VotingPage,

  //  TabsPage,
    EventListPage,
    UserListPage,
    AdminHomePage,
    UserHomePage,
    PageOne, PageTwo, PageThree
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
