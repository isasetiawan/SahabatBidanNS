import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Config} from "../../../../../../utils/config";

@Injectable()
export class PemeriksaanService {

    constructor(private http:Http){}

    list(id_kehamilan:number){
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan',
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    store(id_kehamilan:number, args:any){
        return this.http.post(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan',
            args,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    update(id_kehamilan:number, id_pemeriksaan, args:any){
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan/'+id_pemeriksaan,
            args,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    hapus(id_kehamilan:number, id_pemeriksaan){
        return this.http.delete(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan/'+id_pemeriksaan,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    resume(id_orangtua:number ,id_kehamilan:number, id_pemeriksaan){
        return this.http.get(
            Config.urlAPI+'/hamil/'+id_orangtua+'/'+id_kehamilan+'/pemeriksaan/'+id_pemeriksaan+'/resume',
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    tfu(id_kehamilan:number, id_pemeriksaan){
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan/'+id_pemeriksaan+'/tfu',
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    gettindakan(id_kehamilan:number, id_pemeriksaan:number){
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan/'+id_pemeriksaan+'/tindakan',
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    edittindakan(id_kehamilan:number, id_pemeriksaan:number, args:any){
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan/'+id_pemeriksaan+'/tindakan',
            args,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

}
