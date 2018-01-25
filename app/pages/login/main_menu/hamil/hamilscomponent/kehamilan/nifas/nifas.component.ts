import { Component, OnInit } from '@angular/core';
import { NifasService } from './nifas.service';
import { Nifas } from './Nifas'
import { ActivatedRoute } from '@angular/router';
import * as Toast from "nativescript-toast"

@Component({
  moduleId: module.id,
  selector: 'app-nifas',
  templateUrl: './nifas.component.html',
  styleUrls: ['./nifas.component.scss'],
  providers:[NifasService]
})
export class NifasComponent implements OnInit {

    nifas:Nifas;
    yatak = [{key:0,label:"Tidak"}, {key:1,label:"Ya"}];
    pone = [{key:0,label:"-"}, {key:1,label:"+"}];
    
    id_kehamilan:number;

    is_edit:boolean;
  
    constructor(
        private nifasServ:NifasService,
        private actRoute:ActivatedRoute
    ) { 
        this.is_edit = false;
        this.nifas = new Nifas();
        this.actRoute.queryParams.subscribe(params=>{
            this.id_kehamilan = params.id_kehamilan;
            if (params.nifas) {
                this.nifas = JSON.parse(params.nifas);
                this.is_edit = true;
            }
        })
    }

    submit(){
        console.log(JSON.stringify(this.nifas));
        if (!this.is_edit){
            this.nifasServ.store(this.id_kehamilan,this.nifas).subscribe(
                res => {
                    Toast.makeText(res.message).show();
                },
                err => {
                    Toast.makeText(err.json().message).show();
                }
            );
        } else {
            this.nifasServ.edit(this.id_kehamilan,this.nifas.id,this.nifas).subscribe(
                res => {
                    Toast.makeText(res.message).show();
                },
                err => {
                    Toast.makeText(err.json().message).show();
                }
            );
        }
    }

    ngOnInit() { }

}
