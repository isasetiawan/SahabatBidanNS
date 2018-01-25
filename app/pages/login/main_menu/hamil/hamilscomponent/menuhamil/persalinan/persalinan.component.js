"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Toast = require("nativescript-toast");
var persalinan_service_1 = require("../../kehamilan/persalinan.service");
var router_1 = require("@angular/router");
var moment = require("moment");
var PersalinanComponent = (function () {
    function PersalinanComponent(actRoute, route, persalinanServ) {
        this.actRoute = actRoute;
        this.route = route;
        this.persalinanServ = persalinanServ;
        this.moment = moment;
        this.presentasies = ["", "Puncak Kepala", "Bokong", "Belakang Kepala", "Dahi", "Lintang", "Muka", "Kaki", "Menumbung", "Campur"];
        this.caras = ["", "Normal", "Vacum", "Forceps", "Sectio Caesar"];
        this.rujukans = ["", "Puskesmas", "Rumah Sakit Bersalin", "Rumah Sakit Ibu & Anak", "Rumah Sakit", "Lainnya", "Tidak Dirujuk"];
    }
    PersalinanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (params) {
            _this.id_kehamilan = params.id_kehamilan;
            _this.id_orangtua = params.id_orangtua;
        });
        this.load_persalinan();
    };
    PersalinanComponent.prototype.load_persalinan = function () {
        var _this = this;
        this.persalinanServ.getpersalinan(this.id_kehamilan).subscribe(function (res) { return _this.persalinan = res.content; });
    };
    PersalinanComponent.prototype.save_persalinan = function () {
        // console.log(JSON.stringify(this.persalinan))
        this.persalinanServ.updatepersalinan(this.id_kehamilan, this.persalinan).subscribe(function (res) { return Toast.makeText(res.message).show(); });
    };
    PersalinanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-persalinan',
            templateUrl: './persalinan.component.html',
            styleUrls: ['./persalinan.component.scss'],
            providers: [persalinan_service_1.PersalinanService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            persalinan_service_1.PersalinanService])
    ], PersalinanComponent);
    return PersalinanComponent;
}());
exports.PersalinanComponent = PersalinanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2FsaW5hbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzYWxpbmFuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBNEM7QUFHNUMseUVBQXFFO0FBQ3JFLDBDQUF1RDtBQUN2RCwrQkFBaUM7QUFTakM7SUFRSSw2QkFDWSxRQUF1QixFQUN2QixLQUFZLEVBQ1osY0FBZ0M7UUFGaEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBTDVDLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFvQmhCLGlCQUFZLEdBQU8sQ0FBQyxFQUFFLEVBQUMsZUFBZSxFQUFDLFFBQVEsRUFBQyxpQkFBaUIsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZILFVBQUssR0FBTyxDQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxlQUFlLENBQUMsQ0FBQztRQUM1RCxhQUFRLEdBQU8sQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFDLHNCQUFzQixFQUFDLHdCQUF3QixFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsZUFBZSxDQUFDLENBQUM7SUFmcEgsQ0FBQztJQUVMLHNDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDL0IsVUFBQSxNQUFNO1lBQ0YsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUMxQyxDQUFDLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBT0QsNkNBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FDMUQsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQTdCLENBQTZCLENBQ3ZDLENBQUE7SUFDTCxDQUFDO0lBRUQsNkNBQWUsR0FBZjtRQUNJLCtDQUErQztRQUMvQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FDN0UsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBbEMsQ0FBa0MsQ0FDNUMsQ0FBQztJQUNOLENBQUM7SUF6Q1EsbUJBQW1CO1FBUC9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1lBQ3hDLFNBQVMsRUFBQyxDQUFDLHNDQUFpQixDQUFDO1NBQ2hDLENBQUM7eUNBVXVCLHVCQUFjO1lBQ2pCLGVBQU07WUFDRyxzQ0FBaUI7T0FYbkMsbUJBQW1CLENBNEMvQjtJQUFELDBCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZUFycmF5fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7UmVuY2FuYVBlcnNhbGluYW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4va2VoYW1pbGFuL3JlbmNhbmEtcGVyc2FsaW5hbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1BlcnNhbGluYW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4va2VoYW1pbGFuL3BlcnNhbGluYW4uc2VydmljZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcGVyc2FsaW5hbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZXJzYWxpbmFuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGVyc2FsaW5hbi5jb21wb25lbnQuc2NzcyddLFxuICAgIHByb3ZpZGVyczpbUGVyc2FsaW5hblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFBlcnNhbGluYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaWRfa2VoYW1pbGFuOm51bWJlcjtcbiAgICBpZF9vcmFuZ3R1YTpudW1iZXI7XG4gICAgcGVyc2FsaW5hbjphbnk7XG5cbiAgICBtb21lbnQgPSBtb21lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3RSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTpSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcGVyc2FsaW5hblNlcnY6UGVyc2FsaW5hblNlcnZpY2UsXG5cbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYWN0Um91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcGFyYW1zPT57XG4gICAgICAgICAgICAgICAgdGhpcy5pZF9rZWhhbWlsYW4gPSBwYXJhbXMuaWRfa2VoYW1pbGFuO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRfb3Jhbmd0dWEgPSBwYXJhbXMuaWRfb3Jhbmd0dWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubG9hZF9wZXJzYWxpbmFuKCk7XG4gICAgfVxuXG5cbiAgICBwcmVzZW50YXNpZXM6YW55W109W1wiXCIsXCJQdW5jYWsgS2VwYWxhXCIsXCJCb2tvbmdcIixcIkJlbGFrYW5nIEtlcGFsYVwiLFwiRGFoaVwiLFwiTGludGFuZ1wiLFwiTXVrYVwiLFwiS2FraVwiLFwiTWVudW1idW5nXCIsXCJDYW1wdXJcIl07XG4gICAgY2FyYXM6YW55W109W1wiXCIsXCJOb3JtYWxcIixcIlZhY3VtXCIsXCJGb3JjZXBzXCIsXCJTZWN0aW8gQ2Flc2FyXCJdO1xuICAgIHJ1anVrYW5zOmFueVtdPVtcIlwiLFwiUHVza2VzbWFzXCIsXCJSdW1haCBTYWtpdCBCZXJzYWxpblwiLFwiUnVtYWggU2FraXQgSWJ1ICYgQW5ha1wiLFwiUnVtYWggU2FraXRcIixcIkxhaW5ueWFcIixcIlRpZGFrIERpcnVqdWtcIl07XG5cbiAgICBsb2FkX3BlcnNhbGluYW4oKXtcbiAgICAgICAgdGhpcy5wZXJzYWxpbmFuU2Vydi5nZXRwZXJzYWxpbmFuKHRoaXMuaWRfa2VoYW1pbGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5wZXJzYWxpbmFuID0gcmVzLmNvbnRlbnRcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHNhdmVfcGVyc2FsaW5hbigpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBlcnNhbGluYW4pKVxuICAgICAgICB0aGlzLnBlcnNhbGluYW5TZXJ2LnVwZGF0ZXBlcnNhbGluYW4odGhpcy5pZF9rZWhhbWlsYW4sdGhpcy5wZXJzYWxpbmFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKVxuICAgICAgICApO1xuICAgIH1cblxuXG59XG4iXX0=