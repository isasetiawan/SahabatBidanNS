import { Observable } from "rxjs/Rx";
import * as Toast from "nativescript-toast"
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";

let appSettings = require("application-settings");


export class Config {
    // static urlAPI = "http://10.0.2.2:8000/api";
    static urlAPI = "http://dev.bidan.sahabatbundaku.org/api";
    static keyAPI = "fEZYTJ8L2K8y94fmJ8c94stx6plDmL62";

    static progress_dialog_options = {
        message: 'Memproses data',
        progress: 0.65,
        android: {
            indeterminate: true,
            cancelable: false,
            cancelListener: (dialog) => { console.log("Loading cancelled") },
            // max: 100,
            // progressNumberFormat: "%1d/%2d",
            // progressPercentFormat: 0.53,
            progressStyle: 1,
            secondaryProgress: 1
        },
        ios: {
            details: "Memroses data",
            margin: 10,
            dimBackground: true,
            color: "#4B9ED6", // color of indicator and labels
            backgroundColor: "yellow",
            userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
            hideBezel: true, // default false, can hide the surrounding bezel
        }
    };

    static createHeaders():HttpHeaders{
        let saved_token = appSettings.getString("token");

        let header = {
            "Secret":this.keyAPI,
            "Authorization":"Bearer "+saved_token,
        };

        return new HttpHeaders(header);
    }

    static errorCatcher(err:HttpErrorResponse){
        console.log(`error happened ${JSON.stringify(err)}`);
        Toast.makeText(err.error.message).show();
        return Observable.throw(err)
    }

}