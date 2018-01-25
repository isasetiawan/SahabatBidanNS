import {Component} from "@angular/core";
import {ModalDialogParams} from "nativescript-angular";
import * as moment from "moment/moment"
import {Tumbuh} from "../tumbuh";
import {TumbuhService} from "../tumbuh.service";
import * as Toast from "nativescript-toast";

@Component({
    selector: "ns-modal-tumbuh",
    moduleId:module.id,
    templateUrl: "./tumbuh.modal.html",
    providers:[TumbuhService]
})
export class TumbuhModal {

    tumbuh:Tumbuh;
    is_store:boolean = true;

    public constructor(private params:ModalDialogParams,private service:TumbuhService){
        this.tumbuh = new Tumbuh();
        if (this.params.context.result !== null){
            Object.assign(this.tumbuh, this.params.context.result);
            this.is_store = false;
        } else {
            this.tumbuh.tumbuh_id = this.params.context.id;
            console.log(this.params.context.id)
        }
    }

    submit(){
        //mengubah format tanggal;
        this.tumbuh.tanggal = moment(this.tumbuh.tanggal).format("Y-MM-DD");
        this.params.closeCallback({tumbuh:this.tumbuh, is_store:this.is_store});
    }

    validate(){
        this.service.validasi(this.tumbuh.id).subscribe(
            res => {
                Toast.makeText(res.message).show();
                this.params.closeCallback();
            },
            err => {
                Toast.makeText(err.json().message).show();
            }
        )
    }
}

