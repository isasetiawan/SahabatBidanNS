import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Config} from "../../../../../../utils/config";
import {LoadingIndicator} from "nativescript-loading-indicator";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RiwayatKeluhanService {

    private loadingindicator;

    constructor(private http:HttpClient){
        this.loadingindicator= new LoadingIndicator();
    }

    getRKeluhan(id_kehamilan:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/keluhan',
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    updateRKeluha(id_kehamilan:number, args:any){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/keluhan',
            args,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

}
