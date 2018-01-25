import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {BidanService} from "../bidan.service";
import * as Toast from "nativescript-toast"
import {ModalDialogService, RouterExtensions} from "nativescript-angular";
import {OrangtuaService} from "./orangtua.service";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import {PairingModalComponent} from "./pairing/pairing-modal.component";
import {NavigationExtras, Router} from "@angular/router";
import * as dialogs from "ui/dialogs"
import {Ibuhamilservice} from "./ibuhamilservice";
import {SearchBar} from "tns-core-modules/ui/search-bar";
import {Accuracy} from "tns-core-modules/ui/enums";

@Component({
    selector:"ns-menu",
    moduleId:module.id,
    templateUrl:"./mainmenu.component.html",
    styleUrls:["./mainmenu-common.css"],
    providers:[OrangtuaService,Ibuhamilservice,BidanService]
})
export class MainmenuComponent implements OnInit{

    orangtuas:ObservableArray<any>;
    f_orangtuas:ObservableArray<any>;

    ibuhamils:ObservableArray<any>;
    f_ibuhamils:ObservableArray<any>;


    constructor(
        private bidanServ:BidanService,
        private ortuSer:OrangtuaService,
        private ibuhamil:Ibuhamilservice,
        private routExt:RouterExtensions,
        private route:Router,
        private vcrf:ViewContainerRef,
        private modal:ModalDialogService,
    ){
        this.orangtuas = new ObservableArray();
        this.ibuhamils = new ObservableArray();
    }

    //orangtua anak

    ngOnInit(): void {
        this.loadOrangtuas(null);
        this.loadibuhamils(null);
    }

    loadOrangtuas(args){
        this.ortuSer.getOrangtuas().subscribe(
            res=>{
                this.orangtuas = new ObservableArray(res.content);
                this.f_orangtuas = new ObservableArray(res.content);
                if (args !== null) args.object.notifyPullToRefreshFinished();
            }
        );
    }

    pairortu(mode:string){
        let options = {
            fullscreen:false,
            viewContainerRef: this.vcrf,
            context: mode
        };
        this.modal.showModal(PairingModalComponent,options).then(
            res => {
                this.loadOrangtuas(null);
                this.loadibuhamils(null);
            }
        )
    }

    unpairortu(id:number){
        dialogs.confirm("Apakah anda ingin meng-unpair").then(result => {
            console.log(result);
            if (result) {
                this.ortuSer.unpair({id:id}).subscribe(
                    res=>{
                        Toast.makeText(res.message).show();
                        this.loadOrangtuas(null);
                        this.loadibuhamils(null);

                    }
                )
            }
        });
    }

    gotoprofile(){
        this.routExt.navigate(['/profile'])
    }

    logout(){
        this.routExt.navigate(['/login'],{ clearHistory: true });
        this.bidanServ.logout().subscribe(
            res => {
                Toast.makeText(res.message).show();
            }
        );
    }

    onOrtuAnakItemSelected(orangtua:any){
        let navextra:NavigationExtras = {
            queryParams: orangtua
        };
        this.route.navigate(["anakpairing"], navextra)
    }

    onSearchBunaks(args){
        let sb = <SearchBar>args.object;
        let filtered = this.orangtuas.filter(x=>x.orangtua.ibu_nama.includes(sb.text));
        this.f_orangtuas = new ObservableArray<any>(filtered);
    }

    //ibu hamil

    loadibuhamils(args){
        this.ibuhamil.getOrangTuas().subscribe(
            res=>{
                this.ibuhamils = new ObservableArray(res.content);
                this.f_ibuhamils = new ObservableArray(res.content);
                if (args) args.object.notifyPullToRefreshFinished();
            }
        )
    }

    unpairbumil(id:number){
        dialogs.confirm("Apakah anda ingin meng-unpair").then(result => {
            if (result) {
                this.ibuhamil.unpair({id:id}).subscribe(
                    res=>{
                        Toast.makeText(res.message).show();
                        this.loadOrangtuas(null);
                        this.loadibuhamils(null);

                    }
                )
            }
        });
    }

    onibuhamilselected(ibuhamil:any){
        let navextra:NavigationExtras = {
            queryParams: {data:JSON.stringify(ibuhamil)}
        };
        this.route.navigate(["hamils"], navextra)
    }

    onSearchBumils(args){
        let sb = <SearchBar>args.object;
        let filtered = this.ibuhamils.filter(x=>x.orangtua.ibu_nama.includes(sb.text));
        this.f_ibuhamils = new ObservableArray<any>(filtered);
    }

}