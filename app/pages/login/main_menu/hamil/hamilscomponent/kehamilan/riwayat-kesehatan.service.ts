import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Config} from "../../../../../../utils/config";

@Injectable()
export class RiwayatKesehatanService {

  constructor(
      private http:Http
  ){}

    getRKesehatan(id_kehamilan:number){
        return this.http.get(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/kesehatan',
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

    updateRKesehatan(id_kehamilan:number, args:any){
        return this.http.put(
            Config.urlAPI+'/hamil/0/'+id_kehamilan+'/kesehatan',
            args,
            {headers:Config.getHeaders()}
        )
            .map(res => res.json())
            .catch(Config.handleErrors)
    }

}
