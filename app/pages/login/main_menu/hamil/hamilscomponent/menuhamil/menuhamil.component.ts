import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-menuhamil',
  templateUrl: './menuhamil.component.html',
  styleUrls: ['./menuhamil.component.css']
})
export class MenuhamilComponent implements OnInit {

    id_kehamilan:number;
    id_orangtua:number;

    constructor(
        private actRoute:ActivatedRoute,
        private route:Router

    ) { }

    ngOnInit(){
        this.actRoute.queryParams.subscribe(
            params=>{
                this.id_kehamilan = params.id_kehamilan;
                this.id_orangtua = params.id_orangtua;
            }
        );
    }

    gotosomewhere(where:string){
        let navextra:NavigationExtras = {
            queryParams: {id_kehamilan:this.id_kehamilan, id_orangtua:this.id_orangtua}
        };
        this.route.navigate([where], navextra)
    }

}
