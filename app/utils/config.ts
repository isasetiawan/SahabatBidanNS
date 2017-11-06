import { Http, Headers} from "@angular/http";
import { Observable } from "rxjs/Rx";


export class Config {
    static urlAPI = "http://dev.bidan.sahabatbundaku.org/api";
    static keyAPI = "fEZYTJ8L2K8y94fmJ8c94stx6plDmL62";

    static getHeaders():Headers{
        let saved_token = localStorage.getItem("token");
        let headers = new Headers();
        headers.append("Secret", this.keyAPI);
        headers.append("Authorization", "Bearer "+saved_token);
        headers.append("Content-Type", "application/json");
        return headers;
    }

    static handleErrors(error:Response){
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error)
    }
}