import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Config} from "../../../utils/config";
import {LoadingIndicator} from "nativescript-loading-indicator";

@Injectable()
export class Ibuhamilservice {

    private loadingindicator;

    constructor(private http:HttpClient){
        this.loadingindicator= new LoadingIndicator();
    }

    getOrangTuas(){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+'/hamil/orangtua',
            {headers:Config.createHeaders()}
        )
            .finally(()=>this.loadingindicator.hide())
            .catch(Config.errorCatcher)
    }

    pair(args:PairArgs){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+'/hamil/pair',
            args,
            {headers:Config.createHeaders()}
        )
            .finally(()=>this.loadingindicator.hide())
            .catch(Config.errorCatcher)
    }

    unpair(args:UnpairArgs){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+"/hamil/unpair",
            args,
            {headers:Config.createHeaders()},
        )
            .finally(()=>this.loadingindicator.hide())
            .catch(Config.errorCatcher)
    }

    getPregnancies(idorangtua:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+'/hamil/'+idorangtua+'/all',
            {headers:Config.createHeaders()}
        )
            .finally(()=>this.loadingindicator.hide())
            .catch(Config.errorCatcher)
    }

    addPregnancies(idorangtua:number, args:any){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+'/hamil/'+idorangtua+'/add',
            args,
            {headers:Config.createHeaders()}
        )
            .finally(()=>this.loadingindicator.hide())
            .catch(Config.errorCatcher)
    }

    editPregnancies(idorangtua:number, idhamil:number, args:any){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+'/hamil/'+idorangtua+'/'+idhamil,
            args,
            {headers:Config.createHeaders()}
        )
            .finally(()=>this.loadingindicator.hide())
            .catch(Config.errorCatcher)
    }

    deletePreg(hamil_id:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.delete(
            Config.urlAPI+'/hamil/0/'+hamil_id,
            {headers:Config.createHeaders()}
        )
            .finally(()=>this.loadingindicator.hide())
            .catch(Config.errorCatcher)
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