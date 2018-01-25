import { Component, OnInit } from '@angular/core';
import {ModalDialogParams} from "nativescript-angular";
import * as Toast from "nativescript-toast";
import {Ibuhamilservice} from "../../ibuhamilservice";

@Component({
  moduleId: module.id,
  selector: 'app-add-hamil-component',
  templateUrl: './add-hamil-component.component.html',
  styleUrls: ['./add-hamil-component.component.css'],
  providers:[Ibuhamilservice]
})
export class AddHamilComponentComponent implements OnInit {

    args:Hamil;
    isedit:boolean;
    id_hamil:number;
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
        this.isedit = false;
        this.err_message = "";
        this.args = new Hamil();
        let d = new Date();
        let m = d.getUTCMonth() + 1;
        this.args.HPHT = d.getUTCFullYear()+"-"+m+"-"+d.getUTCDate();
        this.args.hamil_ke = 0;
        this.args.is_dropout = 0;
        this.id_orangtua = this.params.context.orangtua_id;

        if (this.params.context.data){
            this.isedit = true;
            this.args = this.params.context.data;
            this.id_hamil = this.params.context.kehamilan_id;
        }

        console.log(this.id_orangtua+" "+this.id_hamil);
    }

    ngOnInit(){}

    submit(){
        console.log(JSON.stringify(this.args));
        if (this.isedit) {
            this.serv.editPregnancies(this.id_orangtua,this.id_hamil,this.args).subscribe(
                res=>{
                    Toast.makeText(res.message).show();
                    this.params.closeCallback()
                }
            )
        } else {
            this.serv.addPregnancies(this.id_orangtua, this.args).subscribe(
                res=>{
                    Toast.makeText(res.message).show();
                    this.params.closeCallback()
                }
            )
        }
    }

}

class Hamil {
    hamil_ke:number;
    HPHT:string;
    is_dropout:number;
}