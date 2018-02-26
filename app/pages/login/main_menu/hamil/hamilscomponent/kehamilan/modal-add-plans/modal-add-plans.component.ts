import { Component, OnInit } from '@angular/core';
import {ModalDialogParams} from "nativescript-angular";
import {Rencana} from "./rencana";
import {RencanaPersalinanService} from "../rencana-persalinan.service";
import * as Toast from "nativescript-toast";

@Component({
  moduleId: module.id,
  selector: 'app-modal-add-plans',
  templateUrl: './modal-add-plans.component.html',
  styleUrls: ['./modal-add-plans.component.css'],
    providers:[RencanaPersalinanService]
})
export class ModalAddPlansComponent implements OnInit {

    id_kehamilan:number;
    rencana:Rencana;
    isedit:boolean;

    penolongs = [
        {key:1, label:"Keluarga"},
        {key:2, label:"Dukun"},
        {key:3, label:"Bidan"},
        {key:4, label:"dr. Umum"},
        {key:5, label:"dr. Spesialis"},
        {key:6, label:"Lain"},
        {key:7, label:"Tidak ada"},
    ];

    tempats = [
        {key:1, label:"Rumah"},
        {key:2, label:"Poskesdes"},
        {key:3, label:"Pustu"},
        {key:4, label:"Puskesmas"},
        {key:5, label:"Rumah Sakit Bersalin"},
        {key:6, label:"Rumah Sakit Ibu Anak"},
        {key:7, label:"Rumah Sakit"},
        {key:8, label:"Rumah Sakit Odha"},
        {key:9, label:"Praktek mandiri"},
        {key:10, label:"Klinik"},

    ];

    pendampings = [
        {key:1, label:"Suami"},
        {key:2, label:"Keluarga"},
        {key:3, label:"Teman"},
        {key:4, label:"Tetangga"},
        {key:5, label:"Lain"},
        {key:6, label:"Tidak Ada"},
    ];

    transportasies = [
        {key:1, label:"Suami"},
        {key:2, label:"Keluarga"},
        {key:3, label:"Teman"},
        {key:4, label:"Tetangga"},
        {key:5, label:"Lain"},
        {key:6, label:"Tidak Ada"},
    ];

    pendonors = [
        {key:1, label:"Suami"},
        {key:2, label:"Keluarga"},
        {key:3, label:"Teman"},
        {key:4, label:"Tetangga"},
        {key:5, label:"Lain"},
        {key:6, label:"Tidak Ada"},
    ];

    constructor(private params:ModalDialogParams, private serv:RencanaPersalinanService){

        console.log(JSON.stringify(this.params.context));

        this.id_kehamilan = params.context.id_kehamilan;
        if (this.params.context.plan) {
            this.isedit = true;
            this.rencana = this.params.context.plan
        } else {
            this.isedit = false;
            this.rencana = new Rencana();
        }
    }

    ngOnInit() {

    }

    submit(){
        console.log(JSON.stringify(this.rencana));
        if (this.isedit) {
            this.serv.edit(this.id_kehamilan,this.rencana.id,this.rencana).subscribe(
                res => {
                    Toast.makeText(res.message).show();
                    this.params.closeCallback();
                }
            );
        } else {
            this.serv.addplan(this.id_kehamilan, this.rencana).subscribe(
                res => {
                    Toast.makeText(res.message).show();
                    this.params.closeCallback();
                }
            );
        }
    }



}
