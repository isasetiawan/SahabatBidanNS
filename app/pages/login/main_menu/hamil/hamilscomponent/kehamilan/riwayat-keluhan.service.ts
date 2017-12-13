import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Config} from "../../../../../../utils/config";

@Injectable()
export class RiwayatKeluhanService {

    constructor(private http:Http) { }

    getRKeluhan(id_kehamilan:number){
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/keluhan',
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    updateRKeluha(id_kehamilan:number, args:any){
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/keluhan',
            args,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

}
