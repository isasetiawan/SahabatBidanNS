import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {PemeriksaanService} from "../../kehamilan/pemeriksaan.service";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import * as Toast from "nativescript-toast";
import {ResumeComponent} from "../../kehamilan/pemeriksaan/resume/resume.component";
import {ModalDialogService, RouterExtensions} from "nativescript-angular";
import * as dialogs from 'ui/dialogs'
import {PlatformLocation} from "@angular/common";

@Component({
    moduleId: module.id,
    selector: 'app-pemeriksaan-kehamilan',
    templateUrl: './pemeriksaan-kehamilan.component.html',
    styleUrls: ['./pemeriksaan-kehamilan.component.css'],
    providers:[PemeriksaanService]
})
export class PemeriksaanKehamilanComponent implements OnInit {

    id_kehamilan:number;
    id_orangtua:number;
    pemeriksaans:any;

    constructor(
        private actRoute:ActivatedRoute,
        private route:Router,
        private pemeriksaanServ:PemeriksaanService,
        private routExt:RouterExtensions,
        private vcrf:ViewContainerRef,
        private modal:ModalDialogService,
        private location:PlatformLocation,


    ) { }

    ngOnInit() {
        this.actRoute.queryParams.subscribe(
            params=>{
                this.id_kehamilan = params.id_kehamilan;
                this.id_orangtua = params.id_orangtua;
            }
        );
        this.load_pemeriksaans(null);
        this.location.onPopState(()=>{
            this.load_pemeriksaans(null);
        })
    }

    load_pemeriksaans(args){
        this.pemeriksaanServ.list(this.id_kehamilan).subscribe(
            res => {
                this.pemeriksaans = res.content;
                if (args !== null) args.object.notifyPullToRefreshFinished();
            }
        )
    }

    edit_pemeriksaan(pemeriksaan){
        let extra:NavigationExtras = {
            queryParams:{id_kehamilan:this.id_kehamilan, data:JSON.stringify(pemeriksaan), id_pemeriksaan:pemeriksaan.id}
        };

        this.routExt.navigate(['pemeriksaan'],extra)
    }

    view_resume_pemeriksaan(pemeriksaan){
        let options = {
            fullscreen:false,
            viewContainerRef: this.vcrf,
            context: {
                id_kehamilan:this.id_kehamilan,
                id_orangtua:this.id_orangtua,
                pemeriksaan:pemeriksaan
            }
        };
        this.modal.showModal(ResumeComponent,options).then(
            res => {
                this.load_pemeriksaans(null)
            }
        )
    }

    add_pemeriksaan(pemeriksaan){
        let extra:NavigationExtras = {
            queryParams:{id_kehamilan:this.id_kehamilan}
        };

        this.routExt.navigate(['pemeriksaan'],extra)
    }

    delete_pemeriksaan(pemeriksaan){
        dialogs.confirm({
            title: "Konfirmasi",
            message: "Anda yakin ingin menghapus data?",
            okButtonText: "Ya",
            cancelButtonText: "Tidak"
        }).then(result=>{
                if (result) {
                    this.pemeriksaanServ.hapus(this.id_kehamilan,pemeriksaan.id).subscribe(
                        res => {
                            Toast.makeText(res.message).show();
                            this.load_pemeriksaans(null);
                        }
                    );
                }
            }
        );
    }

    gotoTindakan(pemeriksaan) {
        let extra: NavigationExtras = {
            queryParams: {
                id_pemeriksaan: pemeriksaan.id,
                id_kehamilan: this.id_kehamilan
            }
        };
        this.routExt.navigate(['tindakan'], extra);
    }

}
