import { Component, OnInit } from '@angular/core';
import * as Toast from "nativescript-toast";
import {MelahirkanService} from "../../kehamilan/melahirkan.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-melahirkan',
    templateUrl: './melahirkan.component.html',
    styleUrls: ['./melahirkan.component.css'],
    providers: [MelahirkanService]
})
export class MelahirkanComponent implements OnInit {

    id_kehamilan:number;
    id_orangtua:number;
    melahirkan:any;

    keluhanChoices = [
        {key:1, label:"Ya"},
        {key:0, label:"Tidak"},
    ];

    constructor(
        private actRoute:ActivatedRoute,
        private route:Router,
        private melahirkanServ:MelahirkanService,

    ) { }

    ngOnInit() {
        this.actRoute.queryParams.subscribe(
            params=>{
                this.id_kehamilan = params.id_kehamilan;
                this.id_orangtua = params.id_orangtua;
            }
        );
        this.load_melahirkan()
    }

    load_melahirkan(){
        this.melahirkanServ.getMelahirkan(this.id_kehamilan).subscribe(
            res => this.melahirkan = res.content
        );
    }

    save_melahirkan(){
        console.log(JSON.stringify(this.melahirkan));
        this.melahirkanServ.updateMelahirkan(this.id_kehamilan,this.melahirkan).subscribe(
            res => {
                Toast.makeText(res.message).show();
                this.load_melahirkan();
            }
        );
    }

}
