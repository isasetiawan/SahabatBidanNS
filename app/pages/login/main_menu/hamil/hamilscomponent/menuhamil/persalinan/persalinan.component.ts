import { Component, OnInit } from '@angular/core';
import * as Toast from "nativescript-toast";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import {RencanaPersalinanService} from "../../kehamilan/rencana-persalinan.service";
import {PersalinanService} from "../../kehamilan/persalinan.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment";

@Component({
  moduleId: module.id,
  selector: 'app-persalinan',
  templateUrl: './persalinan.component.html',
  styleUrls: ['./persalinan.component.scss'],
    providers:[PersalinanService]
})
export class PersalinanComponent implements OnInit {

    id_kehamilan:number;
    id_orangtua:number;
    persalinan:any;

    moment = moment;

    constructor(
        private actRoute:ActivatedRoute,
        private route:Router,
        private persalinanServ:PersalinanService,

    ) { }

    ngOnInit() {
        this.actRoute.queryParams.subscribe(
            params=>{
                this.id_kehamilan = params.id_kehamilan;
                this.id_orangtua = params.id_orangtua;
            }
        );
        this.load_persalinan();
    }


    presentasies:any[]=["","Puncak Kepala","Bokong","Belakang Kepala","Dahi","Lintang","Muka","Kaki","Menumbung","Campur"];
    caras:any[]=["","Normal","Vacum","Forceps","Sectio Caesar"];
    rujukans:any[]=["","Puskesmas","Rumah Sakit Bersalin","Rumah Sakit Ibu & Anak","Rumah Sakit","Lainnya","Tidak Dirujuk"];

    load_persalinan(){
        this.persalinanServ.getpersalinan(this.id_kehamilan).subscribe(
            res => this.persalinan = res.content
        )
    }

    save_persalinan(){
        // console.log(JSON.stringify(this.persalinan))
        this.persalinanServ.updatepersalinan(this.id_kehamilan,this.persalinan).subscribe(
            res => Toast.makeText(res.message).show()
        );
    }


}
