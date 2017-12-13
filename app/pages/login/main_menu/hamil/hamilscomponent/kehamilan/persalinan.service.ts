import { Injectable } from '@angular/core';
import {Config} from "../../../../../../utils/config";
import {Http} from "@angular/http";

@Injectable()
export class PersalinanService {

    constructor(private http:Http) { }

    getpersalinan(id_kehamilan:number){
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/persalinan',
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    updatepersalinan(id_kehamilan:number, args:any){
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/persalinan',
            args,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

}
