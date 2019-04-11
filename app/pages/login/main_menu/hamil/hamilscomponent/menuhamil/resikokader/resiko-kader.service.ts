import { Injectable } from '@angular/core';
import {LoadingIndicator} from "nativescript-loading-indicator";
import {HttpClient} from "@angular/common/http";
import {Config} from "../../../../../../../utils/config";
import {Kehamilan} from "../Kehamilan";
import {ResikoKader} from "./ResikoKader";

@Injectable()
export class ResikoKaderService {

    private loadingindicator;

    constructor(private http:HttpClient){
        this.loadingindicator= new LoadingIndicator();
    }

    getresiko(id_kehamilan:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/resiko',
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    updateresiko(id_kehamilan:number, args:ResikoKader){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/resiko',
            args,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

}
