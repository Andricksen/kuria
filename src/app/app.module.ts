import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { HttpClientModule } from '@angular/common/http';
import { Cordova } from '@ionic-native/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignPage } from '../pages/sign/sign';
import { WelcomePage } from '../pages/welcome/welcome';
import {DetailsPlatPage} from "../pages/details_plat/details_plat";
import {AddPlatPage} from "../pages/add_plat/add_plat";
import {AddImgPage} from "../pages/add_img/add_img";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignPage,
    WelcomePage,
    DetailsPlatPage,
    AddPlatPage,
    AddImgPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignPage,
    WelcomePage,
    DetailsPlatPage,
    AddPlatPage,
    AddImgPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    Camera,
    FilePath,
    FileTransfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
