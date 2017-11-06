import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Config} from "../../utils/config";

@Injectable()
export class BidanService {

    constructor(private http:Http){}

    login(user){
        return this.http.post(
            Config.urlAPI + "/login",
            JSON.stringify(user),
            {headers:Config.getHeaders()}
        )
            .map(response => response.json())
            .do(data=>{
                console.log(data.Result)
            })
            .catch(Config.handleErrors)
    }

    profile(){
        return this.http.get(
            Config.urlAPI+"/bidan/profile",
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    updateProfile(profile){
        return this.http.put(
            Config.urlAPI+"/profile",
            JSON.stringify(profile),
            {headers:Config.getHeaders()}
        )   .map(res => res.json())
            .catch(Config.handleErrors)
    }

    changeDisclaimer(disc){
        return this.http.put(
            Config.urlAPI+"/disclaimer",
            JSON.stringify(disc),
            {headers:Config.getHeaders()}
        )   .map(res => res.json())
            .catch(Config.handleErrors)
    }

    logout(){
        return this.http.post(
            Config.urlAPI+"/logout",
            "",
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    provinsi(){
        return this.http.get(
            Config.urlAPI+"/provinsi",
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    kabupaten(){
        return this.http.get(
            Config.urlAPI+"/kabupaten",
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    kecamatan(){
        return this.http.get(
            Config.urlAPI+"/kecamatan",
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    puskesmas(){
        return this.http.get(
            Config.urlAPI+"/puskesmas",
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

}