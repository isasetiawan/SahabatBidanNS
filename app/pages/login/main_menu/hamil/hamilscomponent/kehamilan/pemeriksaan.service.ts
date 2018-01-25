import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Config} from "../../../../../../utils/config";
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";

@Injectable()
export class PemeriksaanService {

    private loadingindicator;

    constructor(private http:HttpClient){
        this.loadingindicator= new LoadingIndicator();
    }

    list(id_kehamilan:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan',
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    store(id_kehamilan:number, args:any){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan',
            args,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    update(id_kehamilan:number, id_pemeriksaan, args:any){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan/'+id_pemeriksaan,
            args,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    hapus(id_kehamilan:number, id_pemeriksaan){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.delete(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan/'+id_pemeriksaan,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    resume(id_orangtua:number ,id_kehamilan:number, id_pemeriksaan){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+'/hamil/'+id_orangtua+'/'+id_kehamilan+'/pemeriksaan/'+id_pemeriksaan+'/resume',
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    //TODO: method ini belum terimplementasi
    tfu(id_kehamilan:number, id_pemeriksaan){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan/'+id_pemeriksaan+'/tfu',
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    gettindakan(id_kehamilan:number, id_pemeriksaan:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan/'+id_pemeriksaan+'/tindakan',
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    edittindakan(id_kehamilan:number, id_pemeriksaan:number, args:any){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/pemeriksaan/'+id_pemeriksaan+'/tindakan',
            args,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

}
