import { Component, OnInit } from '@angular/core';
import {Pemeriksaan} from "./Pemeriksaan";
import {ActivatedRoute} from "@angular/router";
import {PemeriksaanService} from "../pemeriksaan.service";
import * as Toast from "nativescript-toast";
import {RouterExtensions} from "nativescript-angular";

@Component({
    moduleId: module.id,
    selector: 'app-pemeriksaan',
    templateUrl: './pemeriksaan.component.html',
    styleUrls: ['./pemeriksaan.component.css'],
    providers: [PemeriksaanService]
})
export class PemeriksaanComponent implements OnInit {

    pemeriksaan:Pemeriksaan;
    id_kehamilan:number;
    id_pemeriksaan:number;
    isedit:boolean;

    keadanumum=[ { key: 0, label: 'Baik' },
        { key: 1, label: 'Lemah' },
        { key: 2, label: 'Tampak Anemis' } ];

    keadaankhusus=[ { key: 0, label: 'Tidak Ada' },
        { key: 1, label: 'Bengkak Muka/Tungkai' },
        { key: 2, label: 'Kembar Air' },
        { key: 3, label: 'Kejang-kejang' } ];

    pone = [ { key: 0, label: '-' }, { key: 1, label: '+' } ];

    proteinurine = ["Tidak Diperiksa","Negatif","+1","+2","Lebih dari +2 "];

    glukosa = ["Tidak diperiksa","Reduksi +","Reduksi -"];

    goldar =["Belum diperiksa","A","B","AB","O"];

    yatak = [ { key: 0, label: 'Tidak' }, { key: 1, label: 'Ya' } ];

    hima = [ { key: 0, label: 'mati' }, { key: 1, label: 'hidup' } ];

    komplikasi = [
        { key: 0, label: 'HDK' },
        { key: 1, label: 'abortus' },
        { key: 2, label: 'perdarahan' },
        { key: 3, label: 'infeksi' },
        { key: 4, label: 'KPD' },
        { key: 5, label: 'lainnya' },
        { key: 6, label: 'tidak ada' } ];

    dirujuk = [
        { key: 0, label: 'Puskesmas' },
        { key: 1, label: 'Rumah sakit bersalin' },
        { key: 2, label: 'Rumah salit ibu anak' },
        { key: 3, label: 'Rumah sakit' },
        { key: 4, label: 'lainnya' },
        { key: 5, label: 'tidak dirujuk' }
    ];

    constructor(
        private actRoute:ActivatedRoute,
        private serv:PemeriksaanService,
        private rouex:RouterExtensions
    ) {
        this.isedit = false;
        this.pemeriksaan = new Pemeriksaan();
        this.actRoute.queryParams.subscribe(
            params => {
                this.id_kehamilan = params.id_kehamilan;
                if (params.data) {
                    console.log(params.data);
                    this.id_pemeriksaan = params.id_pemeriksaan;
                    this.pemeriksaan = <Pemeriksaan> JSON.parse(params.data);
                    this.isedit = true;
                }
            }
        );
    }

    save(){
        console.log("telo "+console.log(JSON.stringify(this.pemeriksaan)),null, "\t");
        if (this.isedit){
            this.serv.update(this.id_kehamilan,this.pemeriksaan.id,this.pemeriksaan).subscribe(
                res => {
                    Toast.makeText(res.message).show();
                    this.rouex.backToPreviousPage()
                }

            )
        } else{
            this.serv.store(this.id_kehamilan,this.pemeriksaan).subscribe(
                res => {
                    Toast.makeText(res.message).show();
                    this.rouex.backToPreviousPage()
                }

            )
        }
    }

    ngOnInit() { }

}
