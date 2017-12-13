import { Component, OnInit } from '@angular/core';
import {PemeriksaanService} from "../../pemeriksaan.service";
import {ModalDialogParams} from "nativescript-angular";
import * as Toast from 'nativescript-toast'

@Component({
    moduleId: module.id,
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    providers:[PemeriksaanService]

})
export class ResumeComponent implements OnInit {

    id_kehamilan:number;
    id_pemeriksaan:number;
    id_orangtua:number;

    resume_all:string="";
    resume_ibu:string="";
    resume_janin:string="";

    constructor(private serv:PemeriksaanService, private params:ModalDialogParams) {
        this.id_kehamilan = params.context.id_kehamilan;
        this.id_pemeriksaan = params.context.pemeriksaan.id;
        this.id_orangtua = params.context.id_orangtua;
        console.log(this.id_pemeriksaan);
        console.log(this.id_kehamilan);
    }

    ngOnInit() {
        this.serv.resume(this.id_orangtua ,this.id_kehamilan,this.id_pemeriksaan).subscribe(
            res => {
                this.resume_all = res.content.resume_all;
                this.resume_ibu = res.content.resume_ibu;
                this.resume_janin = res.content.resume_janin;
                console.log(this.resume_all);
                console.log(this.resume_ibu);
                console.log(this.resume_janin);

            },
            err => {
                Toast.makeText(err.json().message).show();
            }
        );
    }



}
