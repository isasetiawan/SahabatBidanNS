import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras} from "@angular/router";
import {RouterExtensions} from "nativescript-angular";
import {Anak} from "../anak";

@Component({
  moduleId: module.id,
  selector: 'app-anak',
  templateUrl: './anak.component.html',
  styleUrls: ['./anak.component.css']
})
export class AnakComponent implements OnInit {

    anak:Anak;

    constructor(
        private navigate:RouterExtensions,
        private router:ActivatedRoute,
    ){

    }

    ngOnInit() {
        this.router.queryParams.subscribe(
            p=> {
                this.anak = p as Anak
            }
        )
    }

    goToTumbuh(){
        let navexrta:NavigationExtras = {
            queryParams:this.anak
        };
        this.navigate.navigate(['tumbuh'],navexrta)
    }

    goToKembang(){
        let navexrta:NavigationExtras = {
            queryParams:this.anak
        };
        this.navigate.navigate(['kembang'],navexrta)
    }

    goToVaksin(){
        let navexrta:NavigationExtras = {
            queryParams:this.anak
        };
        this.navigate.navigate(['vaksin'],navexrta)
    }

    goToHealthy(){
        let navexrta:NavigationExtras = {
            queryParams:this.anak
        };
        this.navigate.navigate(['kesehatan'],navexrta)
    }
}
