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
var ibuhamilservice_1 = require("./anaks/ibuhamilservice");
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
        var _this = this;
        this.loadOrangtuas(null);
        this.bidanServ.profile().subscribe(function (res) { return _this.title = "Halo " + res.content.nama; });
        this.loadibuhamils(null);
    };
    MainmenuComponent.prototype.loadOrangtuas = function (args) {
        var _this = this;
        this.ortuSer.getOrangtuas().subscribe(function (res) {
            _this.orangtuas = new observable_array_1.ObservableArray(res.content);
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
        }, function (err) {
            console.log(err);
        });
    };
    MainmenuComponent.prototype.onOrtuAnakItemSelected = function (orangtua) {
        var navextra = {
            queryParams: orangtua
        };
        this.route.navigate(["anakpairing"], navextra);
    };
    //ibu hamil
    MainmenuComponent.prototype.loadibuhamils = function (args) {
        var _this = this;
        this.ibuhamil.getOrangTuas().subscribe(function (res) {
            _this.ibuhamils = new observable_array_1.ObservableArray(res.content);
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
    MainmenuComponent = __decorate([
        core_1.Component({
            selector: "ns-menu",
            moduleId: module.id,
            templateUrl: "./mainmenu.component.html",
            styleUrls: ["./mainmenu-common.css"],
            providers: [bidan_service_1.BidanService, orangtua_service_1.OrangtuaService, ibuhamilservice_1.Ibuhamilservice]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbm1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbm1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtFO0FBQ2xFLGtEQUE4QztBQUM5QywwQ0FBMkM7QUFDM0MsNkRBQTBFO0FBQzFFLHVEQUFtRDtBQUNuRCwyRUFBdUU7QUFDdkUsNkVBQXdFO0FBQ3hFLDBDQUF5RDtBQUN6RCxvQ0FBcUM7QUFDckMsMkRBQXdEO0FBU3hEO0lBT0ksMkJBQ1ksU0FBc0IsRUFDdEIsT0FBdUIsRUFDdkIsUUFBd0IsRUFDeEIsT0FBd0IsRUFDeEIsS0FBWSxFQUNaLElBQXFCLEVBQ3JCLEtBQXdCO1FBTnhCLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLFNBQUksR0FBSixJQUFJLENBQWlCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBRWhDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZUFBZTtJQUVmLG9DQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQzlCLFVBQUEsR0FBRyxJQUFHLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQXRDLENBQXNDLENBQy9DLENBQUE7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFD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U0FBUyxFQUFDLENBQUMsdUJBQXVCLENBQUM7WUFDbkMsU0FBUyxFQUFDLENBQUMsNEJBQVksRUFBQyxrQ0FBZSxFQUFDLGlDQUFlLENBQUM7U0FDM0QsQ0FBQzt5Q0FTd0IsNEJBQVk7WUFDZCxrQ0FBZTtZQUNkLGlDQUFlO1lBQ2hCLHVDQUFnQjtZQUNsQixlQUFNO1lBQ1AsdUJBQWdCO1lBQ2YseUNBQWtCO09BZDNCLGlCQUFpQixDQTZIN0I7SUFBRCx3QkFBQztDQUFBLEFBN0hELElBNkhDO0FBN0hZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QmlkYW5TZXJ2aWNlfSBmcm9tIFwiLi4vYmlkYW4uc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCJcclxuaW1wb3J0IHtNb2RhbERpYWxvZ1NlcnZpY2UsIFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge09yYW5ndHVhU2VydmljZX0gZnJvbSBcIi4vb3Jhbmd0dWEuc2VydmljZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGVBcnJheX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7UGFpcmluZ01vZGFsQ29tcG9uZW50fSBmcm9tIFwiLi9wYWlyaW5nL3BhaXJpbmctbW9kYWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TmF2aWdhdGlvbkV4dHJhcywgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIlxyXG5pbXBvcnQge0lidWhhbWlsc2VydmljZX0gZnJvbSBcIi4vYW5ha3MvaWJ1aGFtaWxzZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOlwibnMtbWVudVwiLFxyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6XCIuL21haW5tZW51LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6W1wiLi9tYWlubWVudS1jb21tb24uY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOltCaWRhblNlcnZpY2UsT3Jhbmd0dWFTZXJ2aWNlLElidWhhbWlsc2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5tZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAgIHRpdGxlOnN0cmluZztcclxuXHJcbiAgICBvcmFuZ3R1YXM6T2JzZXJ2YWJsZUFycmF5PGFueT47XHJcbiAgICBpYnVoYW1pbHM6T2JzZXJ2YWJsZUFycmF5PGFueT5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGJpZGFuU2VydjpCaWRhblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBvcnR1U2VyOk9yYW5ndHVhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGlidWhhbWlsOklidWhhbWlsc2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRFeHQ6Um91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOlJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHZjcmY6Vmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIG1vZGFsOk1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5vcmFuZ3R1YXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5pYnVoYW1pbHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9vcmFuZ3R1YSBhbmFrXHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2FkT3Jhbmd0dWFzKG51bGwpO1xyXG4gICAgICAgIHRoaXMuYmlkYW5TZXJ2LnByb2ZpbGUoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcz0+IHRoaXMudGl0bGUgPSBcIkhhbG8gXCIrIHJlcy5jb250ZW50Lm5hbWFcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5sb2FkaWJ1aGFtaWxzKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRPcmFuZ3R1YXMoYXJncyl7XHJcbiAgICAgICAgdGhpcy5vcnR1U2VyLmdldE9yYW5ndHVhcygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yYW5ndHVhcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkocmVzLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgIT09IG51bGwpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwYWlyb3J0dShtb2RlOnN0cmluZyl7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46ZmFsc2UsXHJcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNyZixcclxuICAgICAgICAgICAgY29udGV4dDogbW9kZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoUGFpcmluZ01vZGFsQ29tcG9uZW50LG9wdGlvbnMpLnRoZW4oXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRPcmFuZ3R1YXMobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpYnVoYW1pbHMobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgdW5wYWlyb3J0dShpZDpudW1iZXIpe1xyXG4gICAgICAgIGRpYWxvZ3MuY29uZmlybShcIkFwYWthaCBhbmRhIGluZ2luIG1lbmctdW5wYWlyXCIpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcnR1U2VyLnVucGFpcih7aWQ6aWR9KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE9yYW5ndHVhcyhudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaWJ1aGFtaWxzKG51bGwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnb3RvcHJvZmlsZSgpe1xyXG4gICAgICAgIHRoaXMucm91dEV4dC5uYXZpZ2F0ZShbJy9wcm9maWxlJ10pXHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCl7XHJcbiAgICAgICAgdGhpcy5yb3V0RXh0Lm5hdmlnYXRlKFsnL2xvZ2luJ10seyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgdGhpcy5iaWRhblNlcnYubG9nb3V0KCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3J0dUFuYWtJdGVtU2VsZWN0ZWQob3Jhbmd0dWE6YW55KXtcclxuICAgICAgICBsZXQgbmF2ZXh0cmE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IG9yYW5ndHVhXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlLm5hdmlnYXRlKFtcImFuYWtwYWlyaW5nXCJdLCBuYXZleHRyYSlcclxuICAgIH1cclxuXHJcbiAgICAvL2lidSBoYW1pbFxyXG5cclxuICAgIGxvYWRpYnVoYW1pbHMoYXJncyl7XHJcbiAgICAgICAgdGhpcy5pYnVoYW1pbC5nZXRPcmFuZ1R1YXMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pYnVoYW1pbHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHJlcy5jb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzKSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB1bnBhaXJidW1pbChpZDpudW1iZXIpe1xyXG4gICAgICAgIGRpYWxvZ3MuY29uZmlybShcIkFwYWthaCBhbmRhIGluZ2luIG1lbmctdW5wYWlyXCIpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pYnVoYW1pbC51bnBhaXIoe2lkOmlkfSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRPcmFuZ3R1YXMobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGlidWhhbWlscyhudWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25pYnVoYW1pbHNlbGVjdGVkKGlidWhhbWlsOmFueSl7XHJcbiAgICAgICAgbGV0IG5hdmV4dHJhOk5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7ZGF0YTpKU09OLnN0cmluZ2lmeShpYnVoYW1pbCl9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlLm5hdmlnYXRlKFtcImhhbWlsc1wiXSwgbmF2ZXh0cmEpXHJcbiAgICB9XHJcblxyXG59Il19