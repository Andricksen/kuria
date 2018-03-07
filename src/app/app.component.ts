import {Component, ElementRef} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import {AddImgPage} from "../pages/add_img/add_img";
import {WelcomePage} from "../pages/welcome/welcome";
@Component({
  templateUrl: 'app.html',
  providers : [AddImgPage,WelcomePage]
})
export class MyApp {
  rootPage:any = HomePage;

  public tableData: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private fileUploader : AddImgPage,private elem: ElementRef) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public uploadImage(): void
  {
    this.elem.nativeElement.querySelector("#spinner").style.visibility='visible';
    let files=this.elem.nativeElement.querySelector("#selectFile").files;
    let formData=new FormData();
    let file=files[0];
    formData.append('selectFile',file,file.name);
    this.fileUploader.uploadImage(formData).subscribe(res=> this.dataLoaded(res));
  }

  private dataLoaded(data: any): void
  {
    this.elem.nativeElement.querySelector('#spinner').style.visibility='hidden';
    this.refreshList();

  }
  private refreshList(): void
  {
    this.fileUploader.getFilesList().subscribe(res=> this.displayTableData(res));
  }
  private displayTableData(data: any):void
  {
      this.tableData=data.json();
  }
}

