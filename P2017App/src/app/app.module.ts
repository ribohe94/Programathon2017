import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage }  from '../pages/login/login';
import { EventListPage } from '../pages/eventlist/event-list';
import { UserListPage } from '../pages/userlist/user-list';
import { AdminHomePage } from '../pages/adminhome/admin-home';
import { UserHomePage } from '../pages/userhome/user-home';
import { PageOne, PageTwo, PageThree } from '../pages/menus/pages';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
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
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,
    HomePage,
//    TabsPage,
    EventListPage,
    UserListPage,
    AdminHomePage,
    UserHomePage,
    PageOne, PageTwo, PageThree
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
