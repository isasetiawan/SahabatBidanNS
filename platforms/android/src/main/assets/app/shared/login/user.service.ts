import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http/";
import { Observable } from "rxjs/Rx";
import "rxjs/operator/do"
import "rxjs/operator/map"

import {User} from "./user";
import {Config} from "../config";

@Injectable()
export class UserService {
    let headers = new Headers();
    constructor(private http:Http){}


}