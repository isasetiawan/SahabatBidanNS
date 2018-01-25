import {Component, OnInit} from "@angular/core";
import { Page } from "ui/page";
import {BidanService} from "./bidan.service";
import {RouterExtensions} from "nativescript-angular";
import {User} from "./user";
import {LoadingIndicator} from "nativescript-loading-indicator";
import {Config} from "../../utils/config";

let appSettings = require("application-settings");

@Component({
    selector:"ns-login",
    moduleId:module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login-common.css","./login.css"],
    providers: [BidanService]
})
export class LoginComponent implements OnInit{
    ngOnInit(): void {
        this.service.profile().subscribe(
            (res) => {
                console.log(`halo bidan ${res.content.nama}`);
                this.router.navigate(['/menu'],{ clearHistory: true })
            }
        )
    }

    user : User;
    loadindicator:LoadingIndicator;

    constructor(
        private page:Page,
        private service:BidanService,
        private router:RouterExtensions
    ){
        this.user = new User();
        this.page.actionBarHidden = true;
        this.loadindicator = new LoadingIndicator();
    }


    login(){
        this.service.login(this.user)
            .subscribe(
                (res) =>{
                    console.log(res.message);
                    appSettings.setString("token", res.content.token);
                    this.router.navigate(['/menu'],{ clearHistory: true });
                },
                (err) =>{
                    console.log(err.error.message);
                }
            )
    }

}