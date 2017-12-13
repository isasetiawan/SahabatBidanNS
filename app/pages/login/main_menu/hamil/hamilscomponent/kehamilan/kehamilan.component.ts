import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {RiwayatKehamilanService} from "./riwayat-kehamilan.service";
import {ActivatedRoute, NavigationExtras} from "@angular/router";
import * as Toast from "nativescript-toast";
import {RiwayatKesehatanService} from "./riwayat-kesehatan.service";
import {RiwayatKeluhanService} from "./riwayat-keluhan.service";
import {MelahirkanService} from "./melahirkan.service";
import {PersalinanService} from "./persalinan.service";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import {RencanaPersalinanService} from "./rencana-persalinan.service";
import {ModalDialogParams, ModalDialogService, RouterExtensions} from "nativescript-angular";
import {ModalAddPlansComponent} from "./modal-add-plans/modal-add-plans.component";
import {PemeriksaanService} from "./pemeriksaan.service";
import {PlatformLocation} from "@angular/common";
import {ResumeComponent} from "./pemeriksaan/resume/resume.component";

@Component({
    moduleId: module.id,
    selector: 'app-kehamilan',
    templateUrl: './kehamilan.component.html',
    styleUrls: ['./kehamilan.component.css'],
    providers:[
        RiwayatKehamilanService,
        RiwayatKesehatanService,
        RiwayatKeluhanService,
        PersalinanService,
        MelahirkanService,
        RencanaPersalinanService,
        PemeriksaanService
    ]
})
export class KehamilanComponent implements OnInit {

    riwayat:any;
    kesehatan:any;
    melahirkan:any;
    keluhan:any;
    persalinan:any;
    rencanas:ObservableArray<any>;
    pemeriksaans:ObservableArray<any>

    dropoutChoice = [
        {key:"1",label:"Ya"},
        {key:"0",label:"Tidak"},

    ];

    penolongChoides = [
        {key:1, label:"Ya"},
        {key:0, label:"Bukan"},
    ];

    keluhanChoices = [
        {key:1, label:"Ya"},
        {key:0, label:"Tidak"},
    ];

    r_kontrasepsi = ["Tidak Ada","AKDR/IUD","Suntik","Implan/Susuk"];

    gerakan_janin = [
        "Belum Terdeteksi",
        "Tidak Terdeteksi",
        "Kurang dari 4 kali",
        "Antara 4 hingga 10 kali",
        "Lebih dari 10 kali"
    ];

    constructor(
        private riwkserv:RiwayatKehamilanService,
        private riwkes:RiwayatKesehatanService,
        private riwkelu:RiwayatKeluhanService,
        private melahirkanServ:MelahirkanService,
        private persalinanServ:PersalinanService,
        private plansServ:RencanaPersalinanService,
        private actRoute:ActivatedRoute,
        private routExt:RouterExtensions,
        private modal:ModalDialogService,
        private vcrf:ViewContainerRef,
        private pemeriksaanServ:PemeriksaanService,
        private location:PlatformLocation

    ) {
        this.rencanas = new ObservableArray();
        this.pemeriksaans = new ObservableArray();
    }

    id_kehamilan:number;
    id_orangtua:number;

    ngOnInit(){
        this.actRoute.queryParams.subscribe(
          params=>{
              this.id_kehamilan = params.id_kehamilan;
              this.id_orangtua = params.id_orangtua;
              this.load_r_kehamilan();
              this.load_r_kesehatan();
              this.load_r_keluhan();
              this.load_melahirkan();
              this.load_persalinan();
              this.load_rencanas(null);
              this.load_pemeriksaans(null)
          }
        );
        this.location.onPopState(()=>{
            this.load_pemeriksaans(null)
        })
    }

    load_r_kehamilan(){
      this.riwkserv.getRKehamilan(this.id_kehamilan).subscribe(
          res => {
              this.riwayat = res.content;
          }
      )
    }

    saverkeham(){
        this.riwkserv.updateRkehamilan(this.id_kehamilan, this.riwayat).subscribe(
            res => Toast.makeText(res.message).show()
        );
    }

    // Riwayat Kesehatan

    load_r_kesehatan(){
        this.riwkes.getRKesehatan(this.id_kehamilan).subscribe(
            res => this.kesehatan = res.content
        )
    }

    save_r_kesehatan(){
        console.log(JSON.stringify(this.kesehatan));
        this.riwkes.updateRKesehatan(this.id_kehamilan, this.kesehatan).subscribe(
            res => Toast.makeText(res.message).show()
        )
    }

    // Riwayat Keluhan

    load_r_keluhan(){
        this.riwkelu.getRKeluhan(this.id_kehamilan).subscribe(
            res => this.keluhan = res.content
        )
    }

    save_r_keluhan(){
        this.riwkelu.updateRKeluha(this.id_kehamilan, this.keluhan).subscribe(
            res => Toast.makeText(res.message).show()
        )
    }

    // Melahirkan

    load_melahirkan(){
        this.melahirkanServ.getMelahirkan(this.id_kehamilan).subscribe(
            res => this.melahirkan = res.content
        );
    }

    save_melahirkan(){
        // console.log(JSON.stringify(this.melahirkan));
        this.melahirkanServ.updateMelahirkan(this.id_kehamilan,this.melahirkan).subscribe(
            res => Toast.makeText(res.message).show()
        )
    }

    // Persalinan

    load_persalinan(){
        this.persalinanServ.getpersalinan(this.id_kehamilan).subscribe(
            res => this.persalinan = res.content
        )
    }

    save_persalinan(){
        this.persalinanServ.updatepersalinan(this.id_kehamilan,this.persalinan).subscribe(
            res => Toast.makeText(res.message).show()
        );
    }

    load_rencanas(args){
        this.plansServ.getplans(this.id_kehamilan).subscribe(
            res => {
                this.rencanas = new ObservableArray(res.content);
                if (args !== null) args.object.notifyPullToRefreshFinished();

            }
        )
    }

    // Rencana Persalinan

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
        this.plansServ.delete(this.id_kehamilan ,id_plan).subscribe(
            res=>{
                Toast.makeText(res.message);
                this.load_rencanas(null);
            }
        );
    }

    // Load Pemeriksaan

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
        this.pemeriksaanServ.hapus(this.id_kehamilan,pemeriksaan.id).subscribe(
            res => {
                Toast.makeText(res.message).show();
                this.load_pemeriksaans(null);
            },
            err => {
                Toast.makeText(err.json().message).show()
            }
        );
    }

    // Tindakan

    gotoTindakan(pemeriksaan){
        let extra:NavigationExtras = {
            queryParams: {
                id_pemeriksaan:pemeriksaan.id,
                id_kehamilan:this.id_kehamilan
            }
        };
        this.routExt.navigate(['tindakan'], extra);
    }

}