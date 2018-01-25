import {Injectable} from "@angular/core";
import {Config} from "../../../utils/config";
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";

@Injectable()
export class Ibuhamilservice {

    private loadingindicator;

    constructor(private http:HttpClient){
        this.loadingindicator= new LoadingIndicator();
    }

    getOrangTuas(){
        return this.http.get(
            Config.urlAPI+'/hamil/orangtua',
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
    }

    pair(args:PairArgs){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+'/hamil/pair',
            args,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    unpair(args:UnpairArgs){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+"/hamil/unpair",
            args,
            {headers:Config.createHeaders()},
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    getPregnancies(idorangtua:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+'/hamil/'+idorangtua+'/all',
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    addPregnancies(idorangtua:number, args:any){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+'/hamil/'+idorangtua+'/add',
            args,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    editPregnancies(idorangtua:number, idhamil:number, args:any){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+'/hamil/'+idorangtua+'/'+idhamil,
            args,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())
    }

    deletePreg(hamil_id:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.delete(
            Config.urlAPI+'/hamil/0/'+hamil_id,
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

interface AddHamilArgs{
    hamil_ke:number,
    HPHT:string,
    is_dropout:number,
}