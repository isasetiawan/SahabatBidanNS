import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Config} from "../../../utils/config";

@Injectable()

export class OrangtuaService {
    constructor(private http:Http){}

    getOrangtuas(){
        return this.http.get(
            Config.urlAPI+"/orangtua",
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    pair(args:PairArgs){
        return this.http.post(
            Config.urlAPI+"/anak/pair",
            args,
            {headers:Config.getHeaders()},
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    unpair(args:UnpairArgs){
        return this.http.post(
            Config.urlAPI+"/anak/unpair",
            args,
            {headers:Config.getHeaders()},
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    children(idortu:number){
        let url = Config.urlAPI+"/orangtua/"+idortu+"/anak";
        console.log(url);
        return this.http.get(
            url,
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