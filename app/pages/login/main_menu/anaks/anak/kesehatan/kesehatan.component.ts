import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Anak} from "../../anak";
import {ActivatedRoute} from "@angular/router";
import {KesehatanService} from "./kesehatan.service";
import {ModalDialogService} from "nativescript-angular";
import {ModalVaksinComponent} from "../vaksin/modal-vaksin/modal-vaksin.component";
import {DetilKesehatanComponent} from "./detil-kesehatan/detil-kesehatan.component";

@Component({
    moduleId: module.id,
    selector: 'app-kesehatan',
    templateUrl: './kesehatan.component.html',
    styleUrls: ['./kesehatan.component.css'],
    providers: [KesehatanService]
})
export class KesehatanComponent implements OnInit {

    anak:Anak;
    kesehatans:any[];
    statuses = [
        "Meninggal",
        "Sehat",
        "Sakit"
    ];

    constructor(
        private router:ActivatedRoute,
        private serv:KesehatanService,
        private vcrf:ViewContainerRef,
        private modal:ModalDialogService

    ) {
        this.router.queryParams.subscribe(p=>{
            this.anak = p as Anak;
            this.loadkesehtan(null);
            // console.log(JSON.stringify(this.anak))
        });
    }

    loadkesehtan(args){
        this.serv.index(this.anak).subscribe(
            res => {
                this.kesehatans = res.content;
                if (args !== null) args.object.notifyPullToRefreshFinished();
            }
        );
    }

    view(item){
        item.anak = this.anak;
        let options = {
            context: item,
            fullscreen:false,
            viewContainerRef: this.vcrf
        };
        console.log(JSON.stringify(options.context));
        this.modal.showModal(DetilKesehatanComponent,options).then(
            res => this.loadkesehtan(null)
        )
    }

    ngOnInit() { }

}
