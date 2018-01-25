import {Component} from "@angular/core";
import {OrangtuaService} from "../orangtua.service";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

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
        private router:Router
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

    goto_anak(item){
        let navextra:NavigationExtras = {
            queryParams: item
        };
        this.router.navigate(["anak"],navextra)
    }

}