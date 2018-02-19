import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignPage } from '../pages/sign/sign';
import { WelcomePage } from '../pages/welcome/welcome';
import {DetailsPlatPage} from "../pages/details_plat/details_plat";
import {AddPlatPage} from "../pages/add_plat/add_plat";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignPage,
    WelcomePage,
    DetailsPlatPage,
    AddPlatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignPage,
    WelcomePage,
    DetailsPlatPage,
    AddPlatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
