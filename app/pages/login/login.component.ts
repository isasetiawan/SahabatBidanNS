import { Component } from "@angular/core";
import { Page } from "ui/page";
import {BidanService} from "./bidan.service";

@Component({
    selector:"ns-login",
    moduleId:module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login-common.css","./login.css"],
    providers:[BidanService]
})
export class LoginComponent {

    user : User;

    constructor(page:Page, private service:BidanService){
        this.user = new User();
        page.actionBarHidden = true;
    }

    login(){
        this.service.login(this.user).subscribe(

        )
    }

}

class User {
    username:string;
    password:string;
}