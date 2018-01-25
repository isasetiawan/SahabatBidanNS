import {Inject, Injectable, Injector} from '@angular/core';
import {
    HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor,
    HttpRequest
} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {RouterExtensions} from "nativescript-angular";
import {BidanService} from "./pages/login/bidan.service";
import {Config} from "./utils/config";
let appSettings = require("application-settings");


@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

    constructor(
        private routerExt:RouterExtensions,
        private injector:Injector
    ) { }

    private isrefreshing:boolean = false;


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let bidanserv: BidanService;
        bidanserv = this.injector.get(BidanService);
        console.log("");
        console.log(`Creating request to ${req.url}`);
        console.log("with token "+req.headers.get('Authorization'));
        console.log(`status refreshing ${this.isrefreshing}`);

        return next.handle(req)
            .catch(err => {

                if ((err instanceof HttpErrorResponse) && err.error.message === 'token_expired') {

                    if (this.isrefreshing){
                        console.log(`token sedang diperbarui ${this.isrefreshing}`);
                        return next.handle(this.changeheader(req))
                    } else {
                        console.log('token kadaluarsa, memperbarui token');
                        this.isrefreshing = true;

                        return bidanserv.refresh()
                            .switchMap((res) => {
                                console.log("token refreshed");
                                this.isrefreshing = false;
                                appSettings.setString("token",res.content.new_token);
                                console.log(`new token is ${appSettings.getString("token")}`);
                                return next.handle(this.changeheader(req));
                            })
                            .catch(err => {
                                console.log("token fail refreshed");
                                // this.routerExt.navigate(['/login'],{ clearHistory: true });
                                return Observable.empty()
                            });
                    }

                }

                return Observable.throw(err)
            })
    }

    // logout(){
    //     this.routerExt.navigate(['/login'],{ clearHistory: true });
    // }
    //
    //
    changeheader(request:HttpRequest<any>){
        let saved_token = appSettings.getString("token");

        let header = {
            "Secret":Config.keyAPI,
            "Authorization":"Bearer "+saved_token,
        };
        return request.clone({
            setHeaders : header
        });
    }

}
