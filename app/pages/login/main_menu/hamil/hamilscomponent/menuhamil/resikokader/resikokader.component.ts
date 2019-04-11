import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ResikoKader} from "./ResikoKader";
import {ResikoKaderService} from "./resiko-kader.service";
import * as Toast from "nativescript-toast";

@Component({
  moduleId: module.id,
    providers:[ResikoKaderService],
  selector: 'app-resikokader',
  templateUrl: './resikokader.component.html',
  styleUrls: ['./resikokader.component.scss']
})
export class ResikokaderComponent implements OnInit {

    resiko:ResikoKader = new ResikoKader();

    constructor(
        private actroute:ActivatedRoute,
        private route:Router,
        private serv:ResikoKaderService
    ) { }

    ngOnInit(){
        this.actroute.queryParams.subscribe(
            params => {
                console.log(JSON.stringify(params));
                this.load(params.id_kehamilan)
            }
        )
    }

    load(id_kehamilan:number){
        this.serv.getresiko(id_kehamilan).subscribe(
            res => {
                this.resiko.kehamilan_id = res.content.kehamilan_id;
                this.resiko.pendeteksi = res.content.pendeteksi;
                this.resiko.muda_hamil = res.content.muda_hamil;
                this.resiko.lambat_hamil = res.content.lambat_hamil;
                this.resiko.tua_hamil = res.content.tua_hamil;
                this.resiko.cepat_hamil = res.content.cepat_hamil;
                this.resiko.lama_hamil = res.content.lama_hamil;
                this.resiko.banyak_anak = res.content.banyak_anak;
                this.resiko.umur_tua = res.content.umur_tua;
                this.resiko.pendek = res.content.pendek;
                this.resiko.gagal_hamil = res.content.gagal_hamil;
                this.resiko.vakum = res.content.vakum;
                this.resiko.uri_dirogoh = res.content.uri_dirogoh;
                this.resiko.infus = res.content.infus;

                console.log(JSON.stringify(this.resiko));
            }
        )
    }

    save(){
        this.serv.updateresiko(this.resiko.kehamilan_id, this.resiko).subscribe(
            res => Toast.makeText(res.message).show()
        );
    }

}
