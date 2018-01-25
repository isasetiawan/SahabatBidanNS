import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Config} from "../../utils/config";
import { Observable as RxObservable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import {LoadingIndicator} from "nativescript-loading-indicator";

@Injectable()
export class BidanService {

    private loadingindicator;

    constructor(private http:HttpClient){
        this.loadingindicator= new LoadingIndicator();
    }

    login(user){
        this.loadingindicator.show(Config.progress_dialog_options);
        let option = new HttpHeaders({ 'Secret':Config.keyAPI });
        return this.http.post(
            Config.urlAPI + "/login",
            user,
            {headers:option}
        )
            .finally(()=>this.loadingindicator.hide())
            .catch(Config.errorCatcher)
    }

    refresh(){
        return this.http.post(
            Config.urlAPI + "/refresh",
            {},
            {headers:Config.createHeaders()},

        )
            .catch(Config.errorCatcher)
    }

    profile(){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/bidan/profile",
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())

    }

    updateProfile(profile){
        this.loadingindicator.show(Config.progress_dialog_options);

        return this.http.put(
            Config.urlAPI+"/bidan/profile",
            profile,
            {headers:Config.createHeaders()}

        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())

    }

    //TODO: method ini belum diimplementasi
    changeDisclaimer(disc){
        return this.http.put(
            Config.urlAPI+"/disclaimer",
            JSON.stringify(disc),
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
    }

    logout(){
        this.loadingindicator.show(Config.progress_dialog_options);

        return this.http.post(
            Config.urlAPI+"/logout",
            null,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())

    }

    provinsi(){
        return this.http.get(
            Config.urlAPI+"/provinsi",
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
    }

    kabupaten(id:number){
        return this.http.get(
            Config.urlAPI+"/kabupaten/"+id,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
    }

    kecamatan(id){
        return this.http.get(
            Config.urlAPI+"/kecamatan/"+id,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
    }

    puskesmas(id){
        return this.http.get(
            Config.urlAPI+"/puskesmas/"+id,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
    }

    kelurahan(id){
        return this.http.get(
            Config.urlAPI+"/kelurahan/"+id,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
    }

}