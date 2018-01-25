import { Injectable } from '@angular/core';
import {Config} from "../../../../../../utils/config";
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";

@Injectable()
export class RencanaPersalinanService {

    private loadingindicator;

    constructor(private http:HttpClient){
        this.loadingindicator= new LoadingIndicator();
    }

    getplans(id_kehamilan:number){
        // this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/rencana',
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            // .finally(()=>this.loadingindicator.hide())
    }

    addplan(id_kehamilan:number, args:any){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/rencana',
            args,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    edit(id_kehamilan:number, id_rencana:number, args:any){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/rencana/'+id_rencana,
            args,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    delete(id_kehamilan:number, id_rencana:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.delete(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/rencana/'+id_rencana,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }
}
