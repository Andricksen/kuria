import {Component, Injectable} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Response, Http} from "@angular/http";


@Injectable()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})

export class WelcomePage {

  constructor(public navCtrl: NavController,private http: Http) {
      this.tabOne = TabBadgePage;
      this.tabTwo = TabBadgePage;
  }

  private _errorHandler(error : Response)
  {
    console.log('Erreur survnue: ' + error);
    return Observable.throw(error || 'erreur lors du telechargememtn du fichier');
  }

  public getFilesList()
  {
    let url :string ="http://192.168.173.1/kuria/get_all_plat.php";
    return this.http.get(url)
        .catch(this._errorHandler);

  }


}
