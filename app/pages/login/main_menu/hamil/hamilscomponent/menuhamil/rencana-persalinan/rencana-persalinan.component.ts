import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ModalAddPlansComponent} from "../../kehamilan/modal-add-plans/modal-add-plans.component";
import * as Toast from "nativescript-toast";
import {RencanaPersalinanService} from "../../kehamilan/rencana-persalinan.service";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import {ModalDialogService} from "nativescript-angular";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
  moduleId: module.id,
  selector: 'app-rencana-persalinan',
  templateUrl: './rencana-persalinan.component.html',
  styleUrls: ['./rencana-persalinan.component.css'],
    providers:[RencanaPersalinanService]
})
export class RencanaPersalinanComponent implements OnInit {

    id_kehamilan:number;
    id_orangtua:number;
    rencanas:ObservableArray<any> = new ObservableArray();


    constructor(
        private actRoute:ActivatedRoute,
        private route:Router,
        private plansServ:RencanaPersalinanService,
        private vcrf:ViewContainerRef,
        private modal:ModalDialogService,


    ) { }

    ngOnInit() {
        this.actRoute.queryParams.subscribe(
            params=>{
                this.id_kehamilan = params.id_kehamilan;
                this.id_orangtua = params.id_orangtua;
            }
        );
        this.load_rencanas(null);
    }

    load_rencanas(args){
        this.plansServ.getplans(this.id_kehamilan).subscribe(
            res => {
                this.rencanas = new ObservableArray(res.content);
                if (args !== null) args.object.notifyPullToRefreshFinished();

            }
        )
    }

    addPlansModal(){
        let options = {
            fullscreen:false,
            viewContainerRef: this.vcrf,
            context: {
                id_kehamilan:this.id_kehamilan
            }
        };
        this.modal.showModal(ModalAddPlansComponent,options).then(
            res => {
                this.load_rencanas(null)
            }
        )
    }

    editPlansModal(plan){
        let options = {
            fullscreen:false,
            viewContainerRef: this.vcrf,
            context: {
                id_kehamilan:this.id_kehamilan,
                plan:plan
            }
        };
        this.modal.showModal(ModalAddPlansComponent,options).then(
            res => {
                this.load_rencanas(null)
            }
        )
    }

    deleteplan(id_plan){
        dialogs.confirm({
            title: "Konfirmasi",
            message: "Anda yakin ingin menghapus data?",
            okButtonText: "Ya",
            cancelButtonText: "Tidak"
        }).then(result=>{
                if (result) {
                    this.plansServ.delete(this.id_kehamilan ,id_plan).subscribe(
                        res=>{
                            Toast.makeText(res.message);
                            this.load_rencanas(null);
                        }
                    );
                }
            }
        );
    }

}
