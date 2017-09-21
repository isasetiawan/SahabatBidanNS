import { Component } from "@angular/core";
import { Page } from "ui/page";
import { UserService } from "../../shared/user/user.service";

@Component({
    selector:"ns-login",
    moduleId:module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login-common.css","./login.css"]
})
export class LoginComponent {
    constructor(page:Page){
        page.actionBarHidden = true;
    }
}