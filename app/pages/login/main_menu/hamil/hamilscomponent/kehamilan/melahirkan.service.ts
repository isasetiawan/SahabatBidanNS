import { Injectable } from '@angular/core';
import {Config} from "../../../../../../utils/config";
import {Http} from "@angular/http";

@Injectable()
export class MelahirkanService {

    constructor(private http:Http) { }

    getMelahirkan(id_kehamilan:number){
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/melahirkan',
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    updateMelahirkan(id_kehamilan:number, args:any){
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/melahirkan',
            args,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }
}
