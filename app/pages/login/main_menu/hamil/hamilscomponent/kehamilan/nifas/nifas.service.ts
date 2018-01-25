import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Config} from "../../../../../../../utils/config";
import { Nifas } from './Nifas';
import {LoadingIndicator} from "nativescript-loading-indicator";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class NifasService {

    private loadingindicator;

    constructor(private http:HttpClient){
        this.loadingindicator= new LoadingIndicator();
    }

    list(id_kehamilan:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/nifas',
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    store(id_kehamilan:number, nifas:Nifas){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/nifas',
            nifas,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    edit(id_kehamilan:number, id_nifas:number, nifas:Nifas){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/nifas/'+id_nifas,
            nifas,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    delete(id_kehamilan:number, id_nifas:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.delete(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/nifas/'+id_nifas,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

}
