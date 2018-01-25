import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Anak} from "../../anak";
import {Config} from "../../../../../../utils/config";
import PemeriksaanVaksin from "../vaksin/PemeriksaanVaksin";
import {Kesehatan} from "./Kesehatan";
import {LoadingIndicator} from "nativescript-loading-indicator";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class KesehatanService {

    private loadingindicator;

    constructor(private http:HttpClient){
        this.loadingindicator= new LoadingIndicator();
    }

    index(anak:Anak){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/orangtua/0/anak/"+anak.id+"/kesehatan/all",
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())

    }

    store(data:Kesehatan){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+"/orangtua/0/anak/"+data.anak_id+"/kesehatan",
            data,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    edit(data:Kesehatan){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+"/orangtua/0/anak/"+data.anak_id+"/kesehatan/"+data.id,
            data,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    validate(data:Kesehatan){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+"/orangtua/0/anak/"+data.anak_id+"/kesehatan/"+data.id+"/validate",
            data,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

}
