import {Injectable, Component} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
@Component({
    selector: 'page-add_img',
    templateUrl: 'add_img.html'
})
export class AddImgPage
{
    constructor(private http: Http){}

    public uploadImage(formdata: any)
    {
        let url :string ="http://localhost/kuria/add_img.php";
        return this.http.post(url,formdata)
            .catch(this._errorHandler);
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