 import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Observable } from 'rxjs/Observable';
import { AddHamilComponentComponent } from '../add-hamil-component/add-hamil-component.component';
import {ModalDialogParams, ModalDialogService, RouterExtensions} from "nativescript-angular";
import * as Toast from "nativescript-toast";
import * as dialogs from "ui/dialogs"
import {KaBeService} from "./ka-be.service";
import * as moment from "moment"
import {Ibuhamilservice} from "../../ibuhamilservice";
 import {PlatformLocation} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'app-hamilscomponent',
  templateUrl: './hamilscomponent.component.html',
  styleUrls: ['./hamilscomponent.component.css'],
  providers: [Ibuhamilservice,KaBeService]
})
export class HamilscomponentComponent implements OnInit {

    orangtua:any;
    kehamilas:ObservableArray<any>;

    kabes:Kabe;

    constructor(
        private actRoute:ActivatedRoute,
        private bumilServ:Ibuhamilservice,
        private kbServ:KaBeService,
        private modal:ModalDialogService,
        private vcrf:ViewContainerRef,
        private route:Router,
        private location:PlatformLocation
    ){

        this.kabes = new Kabe();

        this.kehamilas = new ObservableArray();
        this.actRoute.queryParams.subscribe(
                params => {
                    let orangtua_raw = JSON.parse(params.data);
                    //handling nested object
                    orangtua_raw.provinsi = orangtua_raw.provinsi ? orangtua_raw.provinsi.nama : "";
                    orangtua_raw.kabupaten = orangtua_raw.kabupaten ? orangtua_raw.provinsi.kabupaten : "";
                    orangtua_raw.kecamatan = orangtua_raw.kecamatan ? orangtua_raw.kecamatan.nama : "";
                    orangtua_raw.kelurahan = orangtua_raw.kelurahan ? orangtua_raw.kelurahan.nama : "";
                    this.orangtua = orangtua_raw;
                    this.load_kabe();
                    this.loadpregs(null);
                }
            );
    }

    ngOnInit(){
        this.location.onPopState(()=>{this.loadpregs(null)})
    }

    loadpregs(args){
        this.bumilServ.getPregnancies(this.orangtua.id).subscribe(
            res=>{
                this.kehamilas = new ObservableArray(res.content);
                if (args !== null) args.object.notifyPullToRefreshFinished();                
            }
        )        
    }

    addHamilModals(){
        let options = {
            fullscreen:false,
            viewContainerRef: this.vcrf,
            context: {
                orangtua_id:this.orangtua.id
            }
        };
        this.modal.showModal(AddHamilComponentComponent,options).then(
            res => {
                this.loadpregs(null)
            }
        )
    }

    delete_preg(id:number){
        dialogs.confirm("Apakah anda yakin ingin menghapus kehamilan?").then(
            result => {
                if (result) {
                    this.bumilServ.deletePreg(id).subscribe(
                        res=>{
                            Toast.makeText(res.message).show();
                            this.loadpregs(null);
                        }
                    );
                }
            }
        )
    }

    on_hamil_selected(item){
        delete item.melahirkan;
        let navextra:NavigationExtras = {
            queryParams: item
        };
        this.route.navigate(["menuhamil"], navextra)

    }

    load_kabe(){
        this.kbServ.getKabe(this.orangtua.id).subscribe(
            res=>{
                let raw = res.content;
                raw.mal = new Choices(raw.mal);
                raw.kondom = new Choices(raw.kondom);
                raw.pil = new Choices(raw.pil);
                raw.suntik = new Choices(raw.suntik);
                raw.akdr = new Choices(raw.akdr);
                raw.inplant = new Choices(raw.inplant);
                raw.mow = new Choices(raw.mow);
                raw.mop = new Choices(raw.mop);

                this.kabes = raw;
            }
        );
    }

    saveKB(){
        //transformasi
        let kabe_post = new Kabe();
        kabe_post.mal = this.choicestostring(this.kabes.mal);
        kabe_post.kondom = this.choicestostring(this.kabes.kondom);
        kabe_post.pil = this.choicestostring(this.kabes.pil);
        kabe_post.suntik = this.choicestostring(this.kabes.suntik);
        kabe_post.akdr = this.choicestostring(this.kabes.akdr);
        kabe_post.inplant = this.choicestostring(this.kabes.inplant);
        kabe_post.mow = this.choicestostring(this.kabes.mow);
        kabe_post.mop = this.choicestostring(this.kabes.mop);
        kabe_post.tanggal_pemeriksaan = moment().format('YYYY-MM-DD');
        console.log(JSON.stringify(kabe_post))
        this.kbServ.editKabe(this.orangtua.id,kabe_post).subscribe(
            res=>Toast.makeText(res.message).show(),

        );
    }

    choicestostring(cho:Choices){
        let rencana = !cho.rencana ? "0" : "1";
        let laksana = !cho.laksana ? "0" : "1";
        return rencana+"-"+laksana;
    }

}

class Kabe {
    id: number;
    bidan_id: number;
    orangtua_id: number;
    tanggal_pemeriksaan: string = moment().format();
    mal: any = new Choices('0-0');
    kondom: any = new Choices('0-0');
    pil: any = new Choices('0-0');
    suntik: any = new Choices('0-0');
    akdr: any = new Choices('0-0');
    inplant: any = new Choices('0-0');
    mow: any = new Choices('0-0');
    mop: any = new Choices('0-0');

}
class Choices {
    rencana: boolean;
    laksana: boolean;

    constructor(str:string){
        let b = str.split('-');
        this.rencana = b[0] === '1';
        this.laksana = b[1] === '1';
    }
}

