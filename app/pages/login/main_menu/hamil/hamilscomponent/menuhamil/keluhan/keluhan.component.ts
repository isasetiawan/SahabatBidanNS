import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RiwayatKeluhanService} from "../../kehamilan/riwayat-keluhan.service";
import * as Toast from "nativescript-toast";

@Component({
    moduleId: module.id,
    selector: 'app-keluhan',
    templateUrl: './keluhan.component.html',
    styleUrls: ['./keluhan.component.scss'],
    providers:[RiwayatKeluhanService]
})
export class KeluhanComponent implements OnInit {

    id_kehamilan:number;
    id_orangtua:number;
    keluhan:any;

    keluhanChoices = [
        {key:1, label:"Ya"},
        {key:0, label:"Tidak"},
    ];

    constructor(
        private actRoute:ActivatedRoute,
        private route:Router,
        private riwkelu:RiwayatKeluhanService,

    ) { }

    ngOnInit() {
        this.actRoute.queryParams.subscribe(
            params=>{
                this.id_kehamilan = params.id_kehamilan;
                this.id_orangtua = params.id_orangtua;
            }
        );
        this.load_r_keluhan();
    }

    load_r_keluhan(){
        this.riwkelu.getRKeluhan(this.id_kehamilan).subscribe(
            res => this.keluhan = res.content
        )
    }

    save_r_keluhan(){
        this.riwkelu.updateRKeluha(this.id_kehamilan, this.keluhan).subscribe(
            res => Toast.makeText(res.message).show()
        )
    }

}
