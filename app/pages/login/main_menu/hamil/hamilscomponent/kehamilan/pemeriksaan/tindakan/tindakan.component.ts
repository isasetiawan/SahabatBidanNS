import { Component, OnInit } from '@angular/core';
import {Tindakan} from "./Tindakan";
import {PemeriksaanService} from "../../pemeriksaan.service";
import {ActivatedRoute} from "@angular/router";
import * as Toast from "nativescript-toast";

@Component({
    moduleId: module.id,
    selector: 'app-tindakan',
    templateUrl: './tindakan.component.html',
    styleUrls: ['./tindakan.component.css'],
    providers:[PemeriksaanService]
})
export class TindakanComponent implements OnInit {

    tindakan:Tindakan;
    id_kehamilan:number;
    id_pemeriksaan:number;

    yatak = [ { key: 0, label: 'Tidak' }, { key: 1, label: 'Ya' } ];

    constructor(
        private serv:PemeriksaanService,
        private actRoute:ActivatedRoute
    ) {
        actRoute.queryParams.subscribe(
            params => {
                this.id_kehamilan = params.id_kehamilan;
                this.id_pemeriksaan = params.id_pemeriksaan;
                this.loadTindakan();
            }
        );
    }


    ngOnInit(){}

    loadTindakan(){
        this.serv.gettindakan(this.id_kehamilan,this.id_pemeriksaan).subscribe(
            res=> {
                this.tindakan = <Tindakan> res.content;
                console.log(JSON.stringify(this.tindakan));
            },
            err => {
                Toast.makeText(err.json().message).show();
            }
        )
    }

    saveTindakan(){
        console.log(JSON.stringify(this.tindakan));
        this.serv.edittindakan(this.id_kehamilan,this.id_pemeriksaan,this.tindakan).subscribe(
            res=> {
                Toast.makeText(res.message).show();

            },
            err => {
                Toast.makeText(err.json().message).show();
            }
        )
    }

}
