import { Injectable } from '@angular/core';
import {Config} from "../../../../../utils/config";
import {Http} from "@angular/http";

@Injectable()
export class KaBeService {

  constructor(private http:Http) { }

    getKabe(idortu:number){
        return this.http.get(
            Config.urlAPI+'/hamil/'+idortu+'/kb',
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    editKabe(idortu:number, kabe:any){
        return this.http.put(
            Config.urlAPI+'/hamil/'+idortu+'/kb',
            kabe,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

}
