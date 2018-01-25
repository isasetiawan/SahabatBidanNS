import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, RouterExtensions} from "nativescript-angular";
import {ActivatedRoute} from "@angular/router";
import {Anak} from "../../anak";
import {VaksinService} from "./vaksin.service";
import * as Toast from "nativescript-toast";
import {alert} from "tns-core-modules/ui/dialogs";
import {ModalKembangComponent} from "../kembang/modal-kembang/modal-kembang.component";
import {ModalVaksinComponent} from "./modal-vaksin/modal-vaksin.component";

@Component({
  moduleId: module.id,
  selector: 'app-vaksin',
  templateUrl: './vaksin.component.html',
  styleUrls: ['./vaksin.component.css'],
    providers:[VaksinService]
})
export class VaksinComponent implements OnInit {

    anak:Anak;
    vaksines:any[];

    constructor(private router:ActivatedRoute,
                private serv:VaksinService,
                private vcrf:ViewContainerRef,
                private modal:ModalDialogService) {
        this.router.queryParams.subscribe(res => {
            this.anak = res as Anak;
            this.loadvaksin(null)
        });
    }

    ngOnInit() {

    }

    loadvaksin(args){
        this.serv.index(this.anak).subscribe(
            res=>{
                this.vaksines = res.content;
                if (args !== null) args.object.notifyPullToRefreshFinished();
            }
        );
    }

    viewvaksin(item:any){
        let options = {
            context: {vaksin:item,anak:this.anak},
            fullscreen:false,
            viewContainerRef: this.vcrf
        };
        console.log(JSON.stringify(options.context));
        this.modal.showModal(ModalVaksinComponent,options).then(
            res => this.loadvaksin(null)
        )
    }

}
