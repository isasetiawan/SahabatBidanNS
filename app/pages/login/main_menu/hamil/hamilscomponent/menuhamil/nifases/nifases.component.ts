import { Component, OnInit } from '@angular/core';
import {Nifas} from "../../kehamilan/nifas/Nifas";
import * as Toast from "nativescript-toast";
import {ActivatedRoute, NavigationExtras} from "@angular/router";
import {NifasService} from "../../kehamilan/nifas/nifas.service";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import {RouterExtensions} from "nativescript-angular";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {PlatformLocation} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'app-nifas',
  templateUrl: './nifases.component.html',
  styleUrls: ['./nifases.component.css'],
    providers:[NifasService]
})
export class NifasesComponent implements OnInit {

    id_kehamilan:number;
    id_orangtua:number;
    nifases:ObservableArray<Nifas>;


    constructor(
        private nivserv:NifasService,
        private routExt:RouterExtensions,
        private actRoute:ActivatedRoute,
        private location:PlatformLocation,

    ) { }

    ngOnInit() {
        this.actRoute.queryParams.subscribe(
            params=>{
                this.id_kehamilan = params.id_kehamilan;
                this.id_orangtua = params.id_orangtua;
            }
        );
        this.loadNifases(null)
        this.location.onPopState(()=>{
            this.loadNifases(null);
        })
    }

    loadNifases(args){
        this.nivserv.list(this.id_kehamilan).subscribe(
            res => {
                this.nifases = res.content;
                if (args !== null) args.object.notifyPullToRefreshFinished();
            }
        );
    }

    edit_nifas(nifas:Nifas){
        let extra:NavigationExtras = {
            queryParams: {
                id_kehamilan:this.id_kehamilan,
                nifas:JSON.stringify(nifas)
            }
        };
        this.routExt.navigate(['nifas'], extra);
    }

    add_nifas(){
        let extra:NavigationExtras = {
            queryParams: {
                id_kehamilan:this.id_kehamilan
            }
        };
        this.routExt.navigate(['nifas'], extra);
    }

    delete_nifas(nifas:Nifas){
        dialogs.confirm({
            title: "Konfirmasi",
            message: "Anda yakin ingin menghapus data?",
            okButtonText: "Ya",
            cancelButtonText: "Tidak"
        }).then(result=>{
                if (result) {
                    this.nivserv.delete(this.id_kehamilan,nifas.id).subscribe(
                        res => {
                            Toast.makeText(res.message).show();
                            this.loadNifases(null);
                        }
                    )
                }
            }
        );
    }

}
