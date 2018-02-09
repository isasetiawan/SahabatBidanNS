import { Component, OnInit } from '@angular/core';
import {ModalDialogParams} from "nativescript-angular";
import {KembangService} from "../kembang.service";
import * as Toast from "nativescript-toast";

@Component({
    moduleId: module.id,
    selector: 'app-modal-kembang',
    templateUrl: './modal-kembang.component.html',
    styleUrls: ['./modal-kembang.component.css'],
    providers:[KembangService]
})
export class ModalKembangComponent implements OnInit {

    kembang:any;
    ansque:any[]=[];

    constructor(private params:ModalDialogParams,private serv:KembangService) {
        this.kembang = params.context;
        this.arange();
    }

    arange(){
        for (let i = 1; i <= 10; i++){
            this.ansque.push({
                answer:this.kembang.hasil['jawaban_'+i],
                question:this.kembang.question[i-1].pertanyaan
            })
        }
        console.log(JSON.stringify(this.ansque))
    }

    validate(){
        this.serv. validate(this.kembang.hasil.id).subscribe(
            res => {
                Toast.makeText(res.message).show();
                this.params.closeCallback()
            }
        );
    }

    ngOnInit() { }

}
