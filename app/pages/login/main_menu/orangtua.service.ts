import {Injectable} from "@angular/core";
import {Config} from "../../../utils/config";
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";

@Injectable()

export class OrangtuaService {

    private loadingindicator;

    constructor(private http:HttpClient){
        this.loadingindicator= new LoadingIndicator();
    }

    getOrangtuas(){
        return this.http.get(
            Config.urlAPI+"/orangtua",
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
    }

    pair(args:PairArgs){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+"/anak/pair",
            args,
            {headers:Config.createHeaders()},
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())

    }

    unpair(args:UnpairArgs){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+"/anak/unpair",
            args,
            {headers:Config.createHeaders()},
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())

    }

    children(idortu:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        let url = Config.urlAPI+"/orangtua/"+idortu+"/anak";
        console.log(url);
        return this.http.get(
            url,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())

    }
}

interface PairArgs{
    username:string;
    password:string;
}

interface UnpairArgs{
    id:number
}