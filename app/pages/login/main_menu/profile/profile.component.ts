import {Component, OnInit} from "@angular/core";
import {BidanService} from "../../bidan.service";
import {RouterExtensions} from "nativescript-angular";
import * as Toast from "nativescript-toast"
import * as dialogs from "ui/dialogs";

@Component({
    selector:"ns-profile",
    moduleId:module.id,
    templateUrl:"./profile.component.html",
    providers:[BidanService]
})
export class ProfileComponent implements OnInit{

    bidan:Bidan;

    provinces:any[];
    selprov:string;

    kabupatens:any[];
    selkab:string;

    kecamatans:any[];
    selkec:string;

    puskesmases:any[];
    selpus:string;

    kelurahan:any[];
    selkelu:string;

    whatsgoingon = err => {
        Toast.makeText(err.json().message);
    };

    ngOnInit(): void {
        this.loadprofile();
    }

    constructor(
        private bidanServ:BidanService,
        private routExt:RouterExtensions,
    ){
        this.provinces = [];
        this.kabupatens = [];
        this.kecamatans = [];
        this.puskesmases = [];
    }

    loadprovinces(){
        this.bidanServ.provinsi().subscribe(
            res=>{
                res.content.forEach(x => this.provinces.push(x));
                this.selprov = this.provinces.find(x => x.id === this.bidan.provinsi_id).nama;
            },this.whatsgoingon
        );
    }

    askprovince(){
        dialogs.action({
            message: "Pilih Provinsi Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.provinces.map(x => x.nama)
        }).then(result => {
            if (result !== "Batal" && result !== this.selprov){
                this.selprov = result;
                this.bidan.provinsi_id = this.provinces.find(x => x.nama === result).id;
                this.selkab = "";
                this.selkec = "";
                this.selpus = "";
                this.selkelu = "";
                this.loadkabupatens();
            }
        });
    }

    loadkabupatens(){
        if (this.bidan.provinsi_id !== null){
            this.bidanServ.kabupaten(this.bidan.provinsi_id).subscribe(
                res=>{
                    this.kabupatens = res.content;
                    this.selkab = this.kabupatens.find(x=> x.id === this.bidan.kabupaten_id).nama;
                },
                this.whatsgoingon
            )
        }
    }

    askkabupaten(){
        dialogs.action({
            message: "Pilih Kabupaten/Kota Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.kabupatens.map(x => x.nama)
        }).then(result => {
            if (result !== "Batal" && result !== this.selkab){
                this.selkab = result;
                this.bidan.kabupaten_id= this.kabupatens.find(x => x.nama === result).id;
                this.selkec = "";
                this.selpus = "";
                this.selkelu = "";
                this.loadkecamatans();
            }
        });
    }

    loadkecamatans(){
        if (this.bidan.kabupaten_id !== null){
            this.bidanServ.kecamatan(this.bidan.kabupaten_id).subscribe(
                res=>{
                    this.kecamatans = res.content;
                    this.selkec = this.kecamatans.find(x=>x.id === this.bidan.kecamatan_id).nama;
                },
                this.whatsgoingon
            )
        }
    }

    askkecamatan(){
        dialogs.action({
            message: "Pilih Kecamatan Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.kecamatans.map(x => x.nama)
        }).then(result => {
            if (result !== "Batal" && result !== this.selkec){
                this.selkec = result;
                this.bidan.kecamatan_id= this.kecamatans.find(x => x.nama === result).id;
                this.selpus = "";
                this.selkelu = "";
                this.loadpuskesmas();
            }
        });
    }

    loadpuskesmas(){
        if (this.bidan.kecamatan_id !== null){
            this.bidanServ.puskesmas(this.bidan.kecamatan_id).subscribe(
                res=>{
                    this.puskesmases = res.content;
                    this.selpus = this.puskesmases.find(x=>x.id === this.bidan.puskesmas_id).nama;
                },
                this.whatsgoingon
            );
        }
    }

    askpuskesmas(){
        dialogs.action({
            message: "Pilih Puskesmas Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.puskesmases.map(x => x.nama)
        }).then(result => {
            if (result !== "Batal" && result !== this.selpus){
                this.selpus = result;
                this.bidan.puskesmas_id = this.puskesmases.find(x => x.nama === result).id;
                this.selkelu = "";
                this.loadkelurahan()
            }
        });
    }

    loadkelurahan(){
        if(this.bidan.puskesmas_id !== null){
            this.bidanServ.kelurahan(this.bidan.puskesmas_id).subscribe(
                res => {
                    this.kelurahan = res.content;
                    this.selkelu = this.kelurahan.find(x=>x.id===this.bidan.kelurahan_id).nama;
                }
            )
        }

    }

    askkelurahan(){
        dialogs.action({
            message: "Pilih Kelurahan Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.kelurahan.map(x => x.nama)
        }).then(result => {
            if (result !== "Batal" && result !== this.selkelu){
                this.selkelu = result;
                this.bidan.kelurahan_id= this.kelurahan.find(x => x.nama === result).id;
            }
        });
    }


    loadprofile(){
        this.bidanServ.profile().subscribe(
            res => {
                this.bidan = <Bidan> res.content;
                this.loadprovinces();
                this.loadkabupatens();
                this.loadkecamatans();
                this.loadpuskesmas();
                this.loadkelurahan();
            },
            this.whatsgoingon
        );
    }

    editprofile(){
        this.bidanServ.updateProfile(this.bidan).subscribe(
            res => {
                Toast.makeText(res.message).show();
                this.routExt.backToPreviousPage();
            },
            err => console.log(JSON.stringify(err))
        );
    }

}