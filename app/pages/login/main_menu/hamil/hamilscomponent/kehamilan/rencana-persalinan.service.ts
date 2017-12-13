import { Injectable } from '@angular/core';
import {Config} from "../../../../../../utils/config";
import {Http} from "@angular/http";

@Injectable()
export class RencanaPersalinanService {

    constructor(private http:Http) { }

    getplans(id_kehamilan:number){
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/rencana',
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    addplan(id_kehamilan:number, args:any){
        return this.http.post(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/rencana',
            args,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    edit(id_kehamilan:number, id_rencana:number, args:any){
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/rencana/'+id_rencana,
            args,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    delete(id_kehamilan:number, id_rencana:number){
        return this.http.delete(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/rencana/'+id_rencana,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }
}
