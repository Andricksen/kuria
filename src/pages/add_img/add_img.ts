import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
    selector: 'page-add_img',
    templateUrl: 'add_img.html'
})
export class AddImgPage {


    constructor(public navCtrl: NavController,
                private camera: Camera,
                private transfer: FileTransfer
    ) {}
    private fileTransfer: FileTransferObject = this.transfer.create();

    open_camera(){
        this.camera.getPicture({
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG
        }).then((imageData) => {
            let options: FileUploadOptions = {
                fileKey: "file",
                fileName:imageData.substr(imageData.lastIndexOf('/') + 1),
                chunkedMode: false,
                mimeType: "image/jpg"
            }
            this.fileTransfer.upload(imageData,'http://localhost/kuria/add_img.php', options)
                .then((data) => {
                    alert("Success");
                }, (err) => {
                    console.log(JSON.stringify(err));
                })
        }, (err) => {
            console.log(JSON.stringify(err));
        });
    }




}
