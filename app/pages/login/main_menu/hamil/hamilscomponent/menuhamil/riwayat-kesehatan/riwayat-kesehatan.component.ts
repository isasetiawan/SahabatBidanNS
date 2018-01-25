import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RiwayatKehamilanService} from "../../kehamilan/riwayat-kehamilan.service";
import * as Toast from "nativescript-toast";
import {RiwayatKesehatanService} from "../../kehamilan/riwayat-kesehatan.service";

@Component({
    moduleId: module.id,
    selector: 'app-riwayat-kesehatan',
    templateUrl: './riwayat-kesehatan.component.html',
    styleUrls: ['./riwayat-kesehatan.component.scss'],
    providers:[RiwayatKesehatanService]
})
export class RiwayatKesehatanComponent implements OnInit {

    id_kehamilan:number;
    id_orangtua:number;
    kesehatan:any;

    keluhanChoices = [
        {key:1, label:"Ya"},
        {key:0, label:"Tidak"},
    ];

    constructor(
        private actRoute:ActivatedRoute,
        private route:Router,
        private riwkes:RiwayatKesehatanService,

    ) { }

    ngOnInit() {
        this.actRoute.queryParams.subscribe(
            params=>{
                this.id_kehamilan = params.id_kehamilan;
                this.id_orangtua = params.id_orangtua;
            }
        );
        this.load_r_kesehatan();
    }

    load_r_kesehatan(){
        this.riwkes.getRKesehatan(this.id_kehamilan).subscribe(
            res => this.kesehatan = res.content
        )
    }

    save_r_kesehatan(){
        console.log(JSON.stringify(this.kesehatan));
        this.riwkes.updateRKesehatan(this.id_kehamilan, this.kesehatan).subscribe(
            res => Toast.makeText(res.message).show()
        )
    }

}
