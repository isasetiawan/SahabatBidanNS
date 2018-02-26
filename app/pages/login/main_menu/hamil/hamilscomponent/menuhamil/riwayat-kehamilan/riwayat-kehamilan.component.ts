import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import * as Toast from "nativescript-toast";
import {RiwayatKesehatanService} from "../../kehamilan/riwayat-kesehatan.service";
import {RiwayatKehamilanService} from "../../kehamilan/riwayat-kehamilan.service";

@Component({
  moduleId: module.id,
  selector: 'app-riwayat-kehamilan',
  templateUrl: './riwayat-kehamilan.component.html',
  styleUrls: ['./riwayat-kehamilan.component.scss'],
    providers:[RiwayatKehamilanService]
})
export class RiwayatKehamilanComponent implements OnInit {

    id_kehamilan:number;
    id_orangtua:number;
    private riwayat:any;

    penolongChoides = [
        {key:1, label:"Ya"},
        {key:0, label:"Bukan"},
    ];

    gerakan_janin = [
        "Belum Terdeteksi",
        "Tidak Terdeteksi",
        "Kurang dari 4 kali",
        "Antara 4 hingga 10 kali",
        "Lebih dari 10 kali"
    ];

    constructor(
        private actRoute:ActivatedRoute,
        private route:Router,
        private riwkserv:RiwayatKehamilanService,
    ) { }

    ngOnInit(){
        this.actRoute.queryParams.subscribe(
            params=>{
                this.id_kehamilan = params.id_kehamilan;
                this.id_orangtua = params.id_orangtua;
            }
        );
        this.load_r_kehamilan();
    }

    load_r_kehamilan(){
        this.riwkserv.getRKehamilan(this.id_kehamilan).subscribe(
            res => {
                this.riwayat = res.content;
                console.log(`ini lhoo ${JSON.stringify(this.riwayat)}`)
            }
        )
    }

    saverkeham(){
        this.riwkserv.updateRkehamilan(this.id_kehamilan, this.riwayat).subscribe(
            res => Toast.makeText(res.message).show()
        );
    }

}
