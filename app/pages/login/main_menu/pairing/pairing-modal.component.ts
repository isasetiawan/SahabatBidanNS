import {Component} from "@angular/core";
import {ModalDialogParams} from "nativescript-angular";
import {OrangtuaService} from "../orangtua.service";
import * as Toast from "nativescript-toast"
import {Ibuhamilservice} from "../ibuhamilservice";

@Component({
    selector: "ns-modal-pairing",
    moduleId:module.id,
    templateUrl: "./pairing-modal.component.html",
    providers:[OrangtuaService, Ibuhamilservice]
})
export class PairingModalComponent {

    args:PairArgs;
    mode:string;

    constructor(
        private ortuServ:OrangtuaService,
        private bumilServ:Ibuhamilservice,
        private params:ModalDialogParams
    ) {
        this.args = new PairArgs("","");
        this.mode = this.params.context;
    }

    submit(){
        console.log(this.args.password,this.args.username);

        if (this.mode === "anak"){
            this.ortuServ.pair(this.args).subscribe(
                res=>{
                    Toast.makeText(res.message).show();
                    this.params.closeCallback();
                }
            );
        } else {
            this.bumilServ.pair(this.args).subscribe(
                res=>{
                    Toast.makeText(res.message).show();
                    this.params.closeCallback();
                }
            );
        }

    }

}

class PairArgs {
    username:string;
    password:string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}