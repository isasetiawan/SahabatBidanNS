import { Injectable } from '@angular/core';
import {Config} from "../../../../../../utils/config";
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";

@Injectable()
export class PersalinanService {

    private loadingindicator;

    constructor(private http:HttpClient){
        this.loadingindicator= new LoadingIndicator();
    }

    getpersalinan(id_kehamilan:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/persalinan',
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    updatepersalinan(id_kehamilan:number, args:any){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/persalinan',
            args,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

}
