import { Injectable } from '@angular/core';
import {Config} from "../../../../../../utils/config";
import {Anak} from "../../anak";
import PemeriksaanVaksin from "./PemeriksaanVaksin";
import {LoadingIndicator} from "nativescript-loading-indicator";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class VaksinService {

    private loadingindicator;

    constructor(private http:HttpClient){
        this.loadingindicator= new LoadingIndicator();
    }

    index(anak:Anak){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/orangtua/0/anak/"+anak.id+"/vaksinasi/all",
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    store(anak:Anak, data:PemeriksaanVaksin){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+"/orangtua/0/anak/"+anak.id+"/vaksinasi",
            data,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    edit(anak:Anak, data:PemeriksaanVaksin){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+"/orangtua/0/anak/"+anak.id+"/vaksinasi/"+data.id,
            data,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

}
