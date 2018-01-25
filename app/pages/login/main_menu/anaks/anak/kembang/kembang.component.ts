import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {KembangService} from "./kembang.service";
import {ModalDialogService, RouterExtensions} from "nativescript-angular";
import {ActivatedRoute} from "@angular/router";
import {Anak} from "../../anak";
import {ModalKembangComponent} from "./modal-kembang/modal-kembang.component";
import * as Toast from "nativescript-toast";

@Component({
    moduleId: module.id,
    selector: 'app-kembang',
    templateUrl: './kembang.component.html',
    styleUrls: ['./kembang.component.css'],
    providers:[KembangService]
})
export class KembangComponent implements OnInit {

    private anak:Anak;

    constructor(private service:KembangService,
                private actrout:ActivatedRoute,
                private modal:ModalDialogService,
                private vcrf:ViewContainerRef){
        this.actrout.queryParams.subscribe(
            params => this.anak = params as Anak
        )
    }

    kembangs: any[];

    ngOnInit(){
        this.loadkembangs(null);
    }

    loadkembangs(args){
        this.service.index(this.anak).subscribe(
            res => {
                this.kembangs = res.content;
                if (args !== null) args.object.notifyPullToRefreshFinished();
            }
        )
    }

    viewkembang(item:any){
        let options = {
            context: item,
            fullscreen:true,
            viewContainerRef: this.vcrf
        };
        if (item.hasil){
            this.modal.showModal(ModalKembangComponent,options).then(
                res => this.loadkembangs(null)
            )
        } else {
            Toast.makeText("Belum diperiksa oleh pasien").show()
        }
    }

}
