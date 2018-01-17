import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Config} from "../../../../utils/config";

@Injectable()
export class Ibuhamilservice {
    constructor(private http:Http){}

    getOrangTuas(){
        return this.http.get(
            Config.urlAPI+'/hamil/orangtua',
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    pair(args:PairArgs){
        return this.http.post(
            Config.urlAPI+'/hamil/pair',
            args,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    unpair(args:UnpairArgs){
        return this.http.post(
            Config.urlAPI+"/hamil/unpair",
            args,
            {headers:Config.getHeaders()},
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    getPregnancies(idorangtua:number){
        return this.http.get(
            Config.urlAPI+'/hamil/'+idorangtua+'/all',
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    addPregnancies(idorangtua:number, args:any){
        return this.http.post(
            Config.urlAPI+'/hamil/'+idorangtua+'/add',
            args,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    editPregnancies(idorangtua:number, idhamil:number, args:any){
        return this.http.put(
            Config.urlAPI+'/hamil/'+idorangtua+'/'+idhamil,
            args,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    deletePreg(hamil_id:number){
        return this.http.delete(
            Config.urlAPI+'/hamil/0/'+hamil_id,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

}

interface PairArgs{
    username:string;
    password:string;
}

interface UnpairArgs{
    id:number
}

interface AddHamilArgs{
    hamil_ke:number,
    HPHT:string,
    is_dropout:number,
}