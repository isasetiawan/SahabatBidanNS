import {Component, OnInit} from "@angular/core";
import { Page } from "ui/page";
import {BidanService} from "./bidan.service";
import {RouterExtensions} from "nativescript-angular";
import {User} from "./user";
var appSettings = require("application-settings");

@Component({
    selector:"ns-login",
    moduleId:module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login-common.css","./login.css"],
    providers:[BidanService]
})
export class LoginComponent implements OnInit{
    ngOnInit(): void {
        this.service.profile().subscribe(
            (res) => {
                console.log("last user"+JSON.stringify(res));
                this.router.navigate(['/menu'],{ clearHistory: true })

            }
        )
    }

    user : User;

    constructor(
        private page:Page,
        private service:BidanService,
        private router:RouterExtensions
    ){
        this.user = new User();
        this.page.actionBarHidden = true;

    }


    login(){
        this.service.login(this.user)
            .subscribe(
                (response) =>{
                    appSettings.setString("token", response.content.token);
                    this.router.navigate(['/menu'],{ clearHistory: true });
                },
                (error) =>{
                    console.log(error.json());
                    if (error.json().message === "invalid_credentials") {
                        alert("Nama pengguna atau Kata Sandi salah")
                    }
                }
            )
    }


}