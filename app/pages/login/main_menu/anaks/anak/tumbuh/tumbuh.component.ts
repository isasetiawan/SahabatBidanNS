import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Anak} from "../../anak";
import {ActivatedRoute} from "@angular/router";
import {TumbuhService} from "./tumbuh.service";
import {Tumbuh} from "./tumbuh";
import * as Toast from "nativescript-toast";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import {ModalDialogService} from "nativescript-angular";
import {TumbuhModal} from "./modal/tumbuh.modal";
import * as moment from "moment";
import {RadListView} from "nativescript-pro-ui/listview";

@Component({
    moduleId: module.id,
    selector: 'app-tumbuh',
    templateUrl: './tumbuh.component.html',
    styleUrls: ['./tumbuh.component.css'],
    providers:[TumbuhService]
})
export class TumbuhComponent implements OnInit {

    anak:Anak;
    pertumbuhan:ObservableArray<any>;
    bbus:Array<any>;
    tbus:Array<any>;
    tbbbs:Array<any>;

    s_tbu:Array<any>;
    s_bbu:Array<any>;
    s_tbbbs:Array<any>;


    constructor(
        private router:ActivatedRoute,
        private service:TumbuhService,
        private modal:ModalDialogService,
        private vcref:ViewContainerRef

    ){
        this.router.queryParams.subscribe(p=>{
            this.anak = p as Anak;
            this.loadtumbuh(null);
            console.log(JSON.stringify(this.anak))
        });

    }

    ngOnInit(){}

    showDate(date:string){
        moment.locale("id");
        return moment(date).local().format("D MMMM Y")
    }

    private loadtumbuh(args) {
        this.service.show(this.anak.id).subscribe(
            response=>{
                this.pertumbuhan=response.content;
                if (args !== null) args.object.notifyPullToRefreshFinished()
            },
        );

        //load graph tbu
        this.service.tbu(this.anak.id).subscribe(
            res =>{
                this.tbus = res.content;
                this.s_tbu = res.content.map(x=>x.standar_tumbuh);
            },
        );

        //load graph bbu
        this.service.bbu(this.anak.id).subscribe(
            res =>{
                this.bbus = res.content;
                this.s_bbu = res.content.map(x=>x.standar_berat);
            },
        );

        //load graph tbbu
        this.service.tbbb(this.anak.id).subscribe(
            res => {
                this.tbbbs = res.content;
                this.s_tbbbs = res.content.map(x=>x.standar);
            },
        );
    }

    showModal(tumbuh, i){
        let options = {
            context: tumbuh,
            fullscreen:false,
            viewContainerRef: this.vcref
        };
        this.modal.showModal(TumbuhModal,options).then(response_modal=>{
            if (response_modal) {
                if (response_modal.is_store) {
                    this.service.store(this.anak.id,response_modal.tumbuh).subscribe(
                        res => {
                            Toast.makeText(res.message).show();
                            this.loadtumbuh(null)
                        }
                    )
                } else {
                    this.service.update(this.anak.id,response_modal.tumbuh).subscribe(
                        res => {
                            Toast.makeText(res.message).show();
                            // this.pertumbuhan[i].result = response_modal.tumbuh;
                            this.loadtumbuh(null);
                        }
                    )
                }
            }
        })
    }
}
