import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http/";
import { Observable } from "rxjs/Rx";
import "rxjs/operator/do"
import "rxjs/operator/map"

import {User} from "./user";
import {Config} from "../config";

@Injectable()
export class UserService {
    headers: Headers;
    constructor(private http:Http){
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json")
    }

    login(user:User){
        return this.http.post(
            Config.apiKey + "",
            JSON.stringify(user),
            {headers:this.headers}
            )
            .map(response => response.json())
            .do(data=>{
                console.log(data.Result)
            })
            .catch(this.handleErrors)
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}