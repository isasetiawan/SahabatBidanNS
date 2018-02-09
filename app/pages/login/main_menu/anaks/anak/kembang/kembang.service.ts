import {Config} from "../../../../../../utils/config";
import {LoadingIndicator} from "nativescript-loading-indicator";
import {HttpClient} from "@angular/common/http";
import {Anak} from "../../anak";
import {Injectable} from "@angular/core";

@Injectable()
export class KembangService {

    private loadingindicator;

    constructor(private http:HttpClient){
        this.loadingindicator= new LoadingIndicator();
    }

    index(anak:Anak){
        this.loadingindicator.show(Config.progress_dialog_options);
        let url = Config.urlAPI+"/orangtua/0/anak/"+anak.id+"/kembang/all";
        return this.http.get(
            url,
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())

    }

    validate(id_kembang:number) {
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+"/orangtua/0/anak/0/kembang/"+id_kembang+"/validate",
            {},
            {headers:Config.createHeaders()}
        )
            .catch(Config.errorCatcher)
            .finally(()=>this.loadingindicator.hide())

    }

}