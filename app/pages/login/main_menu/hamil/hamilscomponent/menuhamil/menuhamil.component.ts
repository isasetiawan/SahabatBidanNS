import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {Ibuhamilservice} from "../../../ibuhamilservice";
import {Kehamilan} from "./Kehamilan"
import * as Toast from "nativescript-toast";
import {ModalDatetimepicker, PickerOptions} from "nativescript-modal-datetimepicker";
import {PlatformLocation} from "@angular/common";

@Component({
    moduleId: module.id,
    providers:[Ibuhamilservice],
    selector: 'app-menuhamil',
    templateUrl: './menuhamil.component.html',
    styleUrls: ['./menuhamil.component.css']
})
export class MenuhamilComponent implements OnInit {

    kehamilan:Kehamilan;
    picker:ModalDatetimepicker = new ModalDatetimepicker();

    constructor(
        private actRoute:ActivatedRoute,
        private route:Router,
        private hamilservice:Ibuhamilservice,
    ) { }

    ngOnInit(){
        this.kehamilan = new Kehamilan()
        this.actRoute.queryParams.subscribe(
            params=>{
                this.kehamilan.id = params.id;
                this.kehamilan.orangtua_id = params.orangtua_id;
                this.kehamilan.hamil_ke = params.hamil_ke;
                this.kehamilan.HPHT = params.HPHT;
                this.kehamilan.is_dropout = params.is_dropout;
                this.kehamilan.risk_by_sistem = params.risk_by_sistem;
                this.kehamilan.risk_by_kader = params.risk_by_kader;
                this.kehamilan.kia = params.kia;
                this.kehamilan.lila = params.lila;
                this.kehamilan.tinggi_badan = params.tinggi_badan;
                console.log(JSON.stringify(this.kehamilan))
            }
        );
    }

    selectdate(){

        this.picker.pickDate({
            is24HourView:true,
            startingDate:new Date(this.kehamilan.HPHT)
        }).then((result) => {
            this.kehamilan.HPHT = `${result.year}-${result.month}-${result.day}`
        }).catch((error) => {
            console.log("Error: " + error);
        });
    }

    gotosomewhere(where:string){
        let navextra:NavigationExtras = {
            queryParams: {id_kehamilan:this.kehamilan.id, id_orangtua:this.kehamilan.orangtua_id}
        };
        this.route.navigate([where], navextra)
    }

    update(){
        console.log(JSON.stringify(this.kehamilan));
        this.hamilservice.editPregnancies(this.kehamilan.orangtua_id, this.kehamilan.id, this.kehamilan).subscribe(
            res=>{
                Toast.makeText(res.message).show();
            }
        )
    }

}
