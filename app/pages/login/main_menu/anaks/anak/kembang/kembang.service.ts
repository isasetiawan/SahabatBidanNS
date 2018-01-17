import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Anak} from "../../anak";
import {Config} from "../../../../config";
import {Observable} from "rxjs/Observable";

@Injectable()
export class KembangService {
    constructor(private http:Http){}

    getHeaders():Headers{
        let saved_token = localStorage.getItem("token");
        let headers = new Headers();
        headers.append("Secret", Config.keyAPI);
        headers.append("Authorization", "Bearer "+saved_token);
        headers.append("Content-Type", "application/json");
        return headers;
    }

    index(anak:Anak){
        return this.http.get(
            Config.urlAPI+"/anak/"+anak.id+"/kembang",
            {headers:this.getHeaders()}
        )   .map(res=>res.json())
            .catch(this.handleErrors)
    }

    show(idanak:number,idkembang:number){
        return this.http.get(
            Config.urlAPI+"/anak/"+idanak+"/kembang/"+idkembang,
            {headers:this.getHeaders()}
        )   .map(res=>res.json())
            .catch(this.handleErrors)
    }

    store(jawaban,idkembang,idanak){
        return this.http.post(
            Config.urlAPI+"/anak/"+idanak+"/kembang/"+idkembang,
            JSON.stringify(jawaban),
            {headers:this.getHeaders()}
        )
            .map(res=>res.json())
            .catch(this.handleErrors)

    }

    //get edit apa :/
    edit(idanak:number,idkembang:number){
        return this.http.get(
            Config.urlAPI+"/anak/"+idanak+"/kembang/"+idkembang+"/edit",
            {headers:this.getHeaders()}
        )   .map(res=>res.json())
            .catch(this.handleErrors)
    }


    //post update buat apa :/
    update(jawaban,idkembang,idanak){
        return this.http.put(
            Config.urlAPI+"/anak/"+idanak+"/kembang/"+idkembang,
            JSON.stringify(jawaban),
            {headers:this.getHeaders()}
        )
            .map(res=>res.json())
            .catch(this.handleErrors)

    }

    result(idkembang,idanak){
        return this.http.get(
            Config.urlAPI+"/anak/"+idanak+"/kembang/"+idkembang+"/result",
            {headers:this.getHeaders()}
        )
            .map(res=>res.json())
            .catch(this.handleErrors)

    }

     handleErrors(error:Response){
        console.log("Anak Service ",JSON.stringify(error.json()));
        return Observable.throw(error)
    }

}