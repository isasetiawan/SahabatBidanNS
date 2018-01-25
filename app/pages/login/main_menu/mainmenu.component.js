"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bidan_service_1 = require("../bidan.service");
var Toast = require("nativescript-toast");
var nativescript_angular_1 = require("nativescript-angular");
var orangtua_service_1 = require("./orangtua.service");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var pairing_modal_component_1 = require("./pairing/pairing-modal.component");
var router_1 = require("@angular/router");
var dialogs = require("ui/dialogs");
var ibuhamilservice_1 = require("./ibuhamilservice");
var MainmenuComponent = (function () {
    function MainmenuComponent(bidanServ, ortuSer, ibuhamil, routExt, route, vcrf, modal) {
        this.bidanServ = bidanServ;
        this.ortuSer = ortuSer;
        this.ibuhamil = ibuhamil;
        this.routExt = routExt;
        this.route = route;
        this.vcrf = vcrf;
        this.modal = modal;
        this.orangtuas = new observable_array_1.ObservableArray();
        this.ibuhamils = new observable_array_1.ObservableArray();
    }
    //orangtua anak
    MainmenuComponent.prototype.ngOnInit = function () {
        this.loadOrangtuas(null);
        this.loadibuhamils(null);
    };
    MainmenuComponent.prototype.loadOrangtuas = function (args) {
        var _this = this;
        this.ortuSer.getOrangtuas().subscribe(function (res) {
            _this.orangtuas = new observable_array_1.ObservableArray(res.content);
            _this.f_orangtuas = new observable_array_1.ObservableArray(res.content);
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    MainmenuComponent.prototype.pairortu = function (mode) {
        var _this = this;
        var options = {
            fullscreen: false,
            viewContainerRef: this.vcrf,
            context: mode
        };
        this.modal.showModal(pairing_modal_component_1.PairingModalComponent, options).then(function (res) {
            _this.loadOrangtuas(null);
            _this.loadibuhamils(null);
        });
    };
    MainmenuComponent.prototype.unpairortu = function (id) {
        var _this = this;
        dialogs.confirm("Apakah anda ingin meng-unpair").then(function (result) {
            console.log(result);
            if (result) {
                _this.ortuSer.unpair({ id: id }).subscribe(function (res) {
                    Toast.makeText(res.message).show();
                    _this.loadOrangtuas(null);
                    _this.loadibuhamils(null);
                });
            }
        });
    };
    MainmenuComponent.prototype.gotoprofile = function () {
        this.routExt.navigate(['/profile']);
    };
    MainmenuComponent.prototype.logout = function () {
        this.routExt.navigate(['/login'], { clearHistory: true });
        this.bidanServ.logout().subscribe(function (res) {
            Toast.makeText(res.message).show();
        });
    };
    MainmenuComponent.prototype.onOrtuAnakItemSelected = function (orangtua) {
        var navextra = {
            queryParams: orangtua
        };
        this.route.navigate(["anakpairing"], navextra);
    };
    MainmenuComponent.prototype.onSearchBunaks = function (args) {
        var sb = args.object;
        var filtered = this.orangtuas.filter(function (x) { return x.orangtua.ibu_nama.includes(sb.text); });
        this.f_orangtuas = new observable_array_1.ObservableArray(filtered);
    };
    //ibu hamil
    MainmenuComponent.prototype.loadibuhamils = function (args) {
        var _this = this;
        this.ibuhamil.getOrangTuas().subscribe(function (res) {
            _this.ibuhamils = new observable_array_1.ObservableArray(res.content);
            _this.f_ibuhamils = new observable_array_1.ObservableArray(res.content);
            if (args)
                args.object.notifyPullToRefreshFinished();
        });
    };
    MainmenuComponent.prototype.unpairbumil = function (id) {
        var _this = this;
        dialogs.confirm("Apakah anda ingin meng-unpair").then(function (result) {
            if (result) {
                _this.ibuhamil.unpair({ id: id }).subscribe(function (res) {
                    Toast.makeText(res.message).show();
                    _this.loadOrangtuas(null);
                    _this.loadibuhamils(null);
                });
            }
        });
    };
    MainmenuComponent.prototype.onibuhamilselected = function (ibuhamil) {
        var navextra = {
            queryParams: { data: JSON.stringify(ibuhamil) }
        };
        this.route.navigate(["hamils"], navextra);
    };
    MainmenuComponent.prototype.onSearchBumils = function (args) {
        var sb = args.object;
        var filtered = this.ibuhamils.filter(function (x) { return x.orangtua.ibu_nama.includes(sb.text); });
        this.f_ibuhamils = new observable_array_1.ObservableArray(filtered);
    };
    MainmenuComponent = __decorate([
        core_1.Component({
            selector: "ns-menu",
            moduleId: module.id,
            templateUrl: "./mainmenu.component.html",
            styleUrls: ["./mainmenu-common.css"],
            providers: [orangtua_service_1.OrangtuaService, ibuhamilservice_1.Ibuhamilservice, bidan_service_1.BidanService]
        }),
        __metadata("design:paramtypes", [bidan_service_1.BidanService,
            orangtua_service_1.OrangtuaService,
            ibuhamilservice_1.Ibuhamilservice,
            nativescript_angular_1.RouterExtensions,
            router_1.Router,
            core_1.ViewContainerRef,
            nativescript_angular_1.ModalDialogService])
    ], MainmenuComponent);
    return MainmenuComponent;
}());
exports.MainmenuComponent = MainmenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbm1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbm1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtFO0FBQ2xFLGtEQUE4QztBQUM5QywwQ0FBMkM7QUFDM0MsNkRBQTBFO0FBQzFFLHVEQUFtRDtBQUNuRCwyRUFBdUU7QUFDdkUsNkVBQXdFO0FBQ3hFLDBDQUF5RDtBQUN6RCxvQ0FBcUM7QUFDckMscURBQWtEO0FBV2xEO0lBU0ksMkJBQ1ksU0FBc0IsRUFDdEIsT0FBdUIsRUFDdkIsUUFBd0IsRUFDeEIsT0FBd0IsRUFDeEIsS0FBWSxFQUNaLElBQXFCLEVBQ3JCLEtBQXdCO1FBTnhCLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLFNBQUksR0FBSixJQUFJLENBQWlCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBRWhDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZUFBZTtJQUVmLG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQWxCLGlCQVFDO1FBUEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQ2pDLFVBQUEsR0FBRztZQUNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLEdBQUcsQ0FB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QUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFDO1NBQy9DLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCwwQ0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLElBQUksRUFBRSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGtDQUFlLENBQU0sUUFBUSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQXJJUSxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxTQUFTO1lBQ2xCLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixXQUFXLEVBQUMsMkJBQTJCO1lBQ3ZDLFNBQVMsRUFBQyxDQUFDLHVCQUF1QixDQUFDO1lBQ25DLFNBQVMsRUFBQyxDQUFDLGtDQUFlLEVBQUMsaUNBQWUsRUFBQyw0QkFBWSxDQUFDO1NBQzNELENBQUM7eUNBV3dCLDRCQUFZO1lBQ2Qsa0NBQWU7WUFDZCxpQ0FBZTtZQUNoQix1Q0FBZ0I7WUFDbEIsZUFBTTtZQUNQLHVCQUFnQjtZQUNmLHlDQUFrQjtPQWhCM0IsaUJBQWlCLENBdUk3QjtJQUFELHdCQUFDO0NBQUEsQUF2SUQsSUF1SUM7QUF2SVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtCaWRhblNlcnZpY2V9IGZyb20gXCIuLi9iaWRhbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIlxyXG5pbXBvcnQge01vZGFsRGlhbG9nU2VydmljZSwgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7T3Jhbmd0dWFTZXJ2aWNlfSBmcm9tIFwiLi9vcmFuZ3R1YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZUFycmF5fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0IHtQYWlyaW5nTW9kYWxDb21wb25lbnR9IGZyb20gXCIuL3BhaXJpbmcvcGFpcmluZy1tb2RhbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiXHJcbmltcG9ydCB7SWJ1aGFtaWxzZXJ2aWNlfSBmcm9tIFwiLi9pYnVoYW1pbHNlcnZpY2VcIjtcclxuaW1wb3J0IHtTZWFyY2hCYXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHtBY2N1cmFjeX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6XCJucy1tZW51XCIsXHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDpcIi4vbWFpbm1lbnUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczpbXCIuL21haW5tZW51LWNvbW1vbi5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6W09yYW5ndHVhU2VydmljZSxJYnVoYW1pbHNlcnZpY2UsQmlkYW5TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbm1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgb3Jhbmd0dWFzOk9ic2VydmFibGVBcnJheTxhbnk+O1xyXG4gICAgZl9vcmFuZ3R1YXM6T2JzZXJ2YWJsZUFycmF5PGFueT47XHJcblxyXG4gICAgaWJ1aGFtaWxzOk9ic2VydmFibGVBcnJheTxhbnk+O1xyXG4gICAgZl9pYnVoYW1pbHM6T2JzZXJ2YWJsZUFycmF5PGFueT47XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYmlkYW5TZXJ2OkJpZGFuU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIG9ydHVTZXI6T3Jhbmd0dWFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgaWJ1aGFtaWw6SWJ1aGFtaWxzZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dEV4dDpSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6Um91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgdmNyZjpWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWw6TW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgKXtcclxuICAgICAgICB0aGlzLm9yYW5ndHVhcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmlidWhhbWlscyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL29yYW5ndHVhIGFuYWtcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvYWRPcmFuZ3R1YXMobnVsbCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaWJ1aGFtaWxzKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRPcmFuZ3R1YXMoYXJncyl7XHJcbiAgICAgICAgdGhpcy5vcnR1U2VyLmdldE9yYW5ndHVhcygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yYW5ndHVhcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkocmVzLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mX29yYW5ndHVhcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkocmVzLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgIT09IG51bGwpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwYWlyb3J0dShtb2RlOnN0cmluZyl7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46ZmFsc2UsXHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNyZixcclxuICAgICAgICAgICAgY29udGV4dDogbW9kZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoUGFpcmluZ01vZGFsQ29tcG9uZW50LG9wdGlvbnMpLnRoZW4oXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRPcmFuZ3R1YXMobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpYnVoYW1pbHMobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgdW5wYWlyb3J0dShpZDpudW1iZXIpe1xyXG4gICAgICAgIGRpYWxvZ3MuY29uZmlybShcIkFwYWthaCBhbmRhIGluZ2luIG1lbmctdW5wYWlyXCIpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcnR1U2VyLnVucGFpcih7aWQ6aWR9KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE9yYW5ndHVhcyhudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaWJ1aGFtaWxzKG51bGwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnb3RvcHJvZmlsZSgpe1xyXG4gICAgICAgIHRoaXMucm91dEV4dC5uYXZpZ2F0ZShbJy9wcm9maWxlJ10pXHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCl7XHJcbiAgICAgICAgdGhpcy5yb3V0RXh0Lm5hdmlnYXRlKFsnL2xvZ2luJ10seyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgdGhpcy5iaWRhblNlcnYubG9nb3V0KCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcnR1QW5ha0l0ZW1TZWxlY3RlZChvcmFuZ3R1YTphbnkpe1xyXG4gICAgICAgIGxldCBuYXZleHRyYTpOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogb3Jhbmd0dWFcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucm91dGUubmF2aWdhdGUoW1wiYW5ha3BhaXJpbmdcIl0sIG5hdmV4dHJhKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoQnVuYWtzKGFyZ3Mpe1xyXG4gICAgICAgIGxldCBzYiA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgbGV0IGZpbHRlcmVkID0gdGhpcy5vcmFuZ3R1YXMuZmlsdGVyKHg9Pngub3Jhbmd0dWEuaWJ1X25hbWEuaW5jbHVkZXMoc2IudGV4dCkpO1xyXG4gICAgICAgIHRoaXMuZl9vcmFuZ3R1YXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PGFueT4oZmlsdGVyZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaWJ1IGhhbWlsXHJcblxyXG4gICAgbG9hZGlidWhhbWlscyhhcmdzKXtcclxuICAgICAgICB0aGlzLmlidWhhbWlsLmdldE9yYW5nVHVhcygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlidWhhbWlscyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkocmVzLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mX2lidWhhbWlscyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkocmVzLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHVucGFpcmJ1bWlsKGlkOm51bWJlcil7XHJcbiAgICAgICAgZGlhbG9ncy5jb25maXJtKFwiQXBha2FoIGFuZGEgaW5naW4gbWVuZy11bnBhaXJcIikudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlidWhhbWlsLnVucGFpcih7aWQ6aWR9KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE9yYW5ndHVhcyhudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaWJ1aGFtaWxzKG51bGwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbmlidWhhbWlsc2VsZWN0ZWQoaWJ1aGFtaWw6YW55KXtcclxuICAgICAgICBsZXQgbmF2ZXh0cmE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtkYXRhOkpTT04uc3RyaW5naWZ5KGlidWhhbWlsKX1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucm91dGUubmF2aWdhdGUoW1wiaGFtaWxzXCJdLCBuYXZleHRyYSlcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaEJ1bWlscyhhcmdzKXtcclxuICAgICAgICBsZXQgc2IgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGxldCBmaWx0ZXJlZCA9IHRoaXMuaWJ1aGFtaWxzLmZpbHRlcih4PT54Lm9yYW5ndHVhLmlidV9uYW1hLmluY2x1ZGVzKHNiLnRleHQpKTtcclxuICAgICAgICB0aGlzLmZfaWJ1aGFtaWxzID0gbmV3IE9ic2VydmFibGVBcnJheTxhbnk+KGZpbHRlcmVkKTtcclxuICAgIH1cclxuXHJcbn0iXX0=