import { Component, OnInit } from '@angular/core';
import PemeriksaanVaksin from "../PemeriksaanVaksin";
import {VaksinService} from "../vaksin.service";
import {ModalDialogParams} from "nativescript-angular";
import {Anak} from "../../../anak";
import * as Toast from "nativescript-toast";
import * as moment from "moment";


@Component({
    moduleId: module.id,
    selector: 'app-modal-vaksin',
    templateUrl: './modal-vaksin.component.html',
    styleUrls: ['./modal-vaksin.component.css'],
    providers:[VaksinService]
})
export class ModalVaksinComponent implements OnInit {

    vaksinperiksa:PemeriksaanVaksin;
    isedit:boolean;
    vaksin_name:string;

    constructor(private serv:VaksinService,
                private dialog:ModalDialogParams) {

        this.vaksin_name = this.dialog.context.vaksin.title;

        if (this.dialog.context.vaksin.hasil !== null){
            this.vaksinperiksa = this.dialog.context.vaksin.hasil;
            this.isedit = true;
        } else {
            this.vaksinperiksa = new PemeriksaanVaksin();
            this.vaksinperiksa.vaksinasi_id = this.dialog.context.vaksin.id;
            this.isedit = false;
            console.log(JSON.stringify(this.vaksinperiksa));

        }

    }

    ngOnInit(){}

    send(){
        if (this.vaksinperiksa.tanggal !== null)
            this.vaksinperiksa.tanggal = moment(this.vaksinperiksa.tanggal).format('YYYY-MM-DD');
        else
            this.vaksinperiksa.tanggal = moment().format('YYYY-MM-DD');


        console.log(JSON.stringify(this.vaksinperiksa));
        if (!this.isedit) {
            this.serv.store(this.dialog.context.anak as Anak, this.vaksinperiksa).subscribe(
                res => {
                    Toast.makeText(res.message).show();
                    this.dialog.closeCallback()
                }
            )
        } else {
            this.serv.edit(this.dialog.context.anak as Anak, this.vaksinperiksa).subscribe(
                res => {
                    Toast.makeText(res.message).show();
                    this.dialog.closeCallback()
                }
            )
        }
    }

}
