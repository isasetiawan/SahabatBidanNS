import { Component, OnInit } from '@angular/core';
import {ModalDialogParams} from "nativescript-angular";
import * as Toast from "nativescript-toast";
import {Ibuhamilservice} from "../../ibuhamilservice";
import {Kehamilan} from "../hamilscomponent/menuhamil/Kehamilan";

@Component({
  moduleId: module.id,
  selector: 'app-add-hamil-component',
  templateUrl: './add-hamil-component.component.html',
  styleUrls: ['./add-hamil-component.component.css'],
  providers:[Ibuhamilservice]
})
export class AddHamilComponentComponent implements OnInit {

    args:Kehamilan;
    id_orangtua:number;
    err_message:string;

    dropoutChoice = [
        {key:"1",label:"Ya"},
        {key:"0",label:"Tidak"},
    ];
  
    constructor(
        private params:ModalDialogParams,
        private serv:Ibuhamilservice
    ) {
        this.args = new Kehamilan();
        this.id_orangtua = this.params.context.orangtua_id;

        //testing
        // this.args.hamil_ke = 3;
        // this.args.HPHT = "2018-04-02"
        // this.args.lila = 12.4;
        // this.args.tinggi_badan = 123.41;
    }

    ngOnInit(){}

    submit(){
        console.log(JSON.stringify(this.args));
        // console.log(`idnya adalah ${this.id_orangtua}`)
        this.serv.addPregnancies(this.id_orangtua, this.args).subscribe(
            res=>{
                Toast.makeText(res.message).show();
                this.params.closeCallback()
            }
        )
    }

}