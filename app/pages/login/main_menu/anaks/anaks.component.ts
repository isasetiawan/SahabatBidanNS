import {Component} from "@angular/core";
import {OrangtuaService} from "../orangtua.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector:"ns-menu",
    moduleId:module.id,
    templateUrl:"./anaks.component.html",
    styleUrls:["./anaks-common.css"],
    providers:[OrangtuaService],
})

export class AnaksComponent {

    orangtua:any;

    anaks:any[];

    constructor(
        private ortuServ:OrangtuaService,
        private actRoute:ActivatedRoute,
    ){
        this.anaks = [];
        this.actRoute.queryParams.subscribe(
            parms=>{
                this.orangtua = parms;
                this.loadChildern();
            }
        )
    }

    loadChildern(args?){
        this.ortuServ.children(this.orangtua.id).subscribe(
            res=>{
                this.anaks = res.content;
                if (args !== null) args.object.notifyPullToRefreshFinished();
            }
        )
    }

}