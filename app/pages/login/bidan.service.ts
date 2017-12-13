import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Config} from "../../utils/config";

@Injectable()
export class BidanService {

    constructor(private http:Http){}

    login(user){
        let headers = new Headers();
        headers.append("Secret","fEZYTJ8L2K8y94fmJ8c94stx6plDmL62");
        return this.http.post(
            Config.urlAPI + "/login",
            user,
            {headers:headers}
        )
            .map(response => response.json())
            .do(data => {
                console.log("balasan"+JSON.stringify(data))
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
            Config.urlAPI+"/bidan/profile",
            profile,
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

    kabupaten(id:number){
        return this.http.get(
            Config.urlAPI+"/kabupaten/"+id,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    kecamatan(id){
        return this.http.get(
            Config.urlAPI+"/kecamatan/"+id,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    puskesmas(id){
        return this.http.get(
            Config.urlAPI+"/puskesmas/"+id,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    kelurahan(id){
        return this.http.get(
            Config.urlAPI+"/kelurahan/"+id,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

}