"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Toast = require("nativescript-toast");
var router_1 = require("@angular/router");
var nifas_service_1 = require("../../kehamilan/nifas/nifas.service");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs = require("tns-core-modules/ui/dialogs");
var common_1 = require("@angular/common");
var NifasesComponent = (function () {
    function NifasesComponent(nivserv, routExt, actRoute, location) {
        this.nivserv = nivserv;
        this.routExt = routExt;
        this.actRoute = actRoute;
        this.location = location;
    }
    NifasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (params) {
            _this.id_kehamilan = params.id_kehamilan;
            _this.id_orangtua = params.id_orangtua;
        });
        this.loadNifases(null);
        this.location.onPopState(function () {
            _this.loadNifases(null);
        });
    };
    NifasesComponent.prototype.loadNifases = function (args) {
        var _this = this;
        this.nivserv.list(this.id_kehamilan).subscribe(function (res) {
            _this.nifases = res.content;
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    NifasesComponent.prototype.edit_nifas = function (nifas) {
        var extra = {
            queryParams: {
                id_kehamilan: this.id_kehamilan,
                nifas: JSON.stringify(nifas)
            }
        };
        this.routExt.navigate(['nifas'], extra);
    };
    NifasesComponent.prototype.add_nifas = function () {
        var extra = {
            queryParams: {
                id_kehamilan: this.id_kehamilan
            }
        };
        this.routExt.navigate(['nifas'], extra);
    };
    NifasesComponent.prototype.delete_nifas = function (nifas) {
        var _this = this;
        dialogs.confirm({
            title: "Konfirmasi",
            message: "Anda yakin ingin menghapus data?",
            okButtonText: "Ya",
            cancelButtonText: "Tidak"
        }).then(function (result) {
            if (result) {
                _this.nivserv.delete(_this.id_kehamilan, nifas.id).subscribe(function (res) {
                    Toast.makeText(res.message).show();
                    _this.loadNifases(null);
                });
            }
        });
    };
    NifasesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-nifas',
            templateUrl: './nifases.component.html',
            styleUrls: ['./nifases.component.css'],
            providers: [nifas_service_1.NifasService]
        }),
        __metadata("design:paramtypes", [nifas_service_1.NifasService,
            nativescript_angular_1.RouterExtensions,
            router_1.ActivatedRoute,
            common_1.PlatformLocation])
    ], NifasesComponent);
    return NifasesComponent;
}());
exports.NifasesComponent = NifasesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmlmYXNlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuaWZhc2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwwQ0FBNEM7QUFDNUMsMENBQWlFO0FBQ2pFLHFFQUFpRTtBQUVqRSw2REFBc0Q7QUFDdEQscURBQXVEO0FBQ3ZELDBDQUFpRDtBQVNqRDtJQU9JLDBCQUNZLE9BQW9CLEVBQ3BCLE9BQXdCLEVBQ3hCLFFBQXVCLEVBQ3ZCLFFBQXlCO1FBSHpCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUVqQyxDQUFDO0lBRUwsbUNBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUMvQixVQUFBLE1BQU07WUFDRixLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDeEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQzFDLENBQUMsQ0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNyQixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxJQUFJO1FBQWhCLGlCQU9DO1FBTkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FDMUMsVUFBQSxHQUFHO1lBQ0MsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELHFDQUFVLEdBQVYsVUFBVyxLQUFXO1FBQ2xCLElBQUksS0FBSyxHQUFvQjtZQUN6QixXQUFXLEVBQUU7Z0JBQ1QsWUFBWSxFQUFDLElBQUksQ0FBQyxZQUFZO2dCQUM5QixLQUFLLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7YUFDOUI7U0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNJLElBQUksS0FBSyxHQUFvQjtZQUN6QixXQUFXLEVBQUU7Z0JBQ1QsWUFBWSxFQUFDLElBQUksQ0FBQyxZQUFZO2FBQ2pDO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxLQUFXO1FBQXhCLGlCQWlCQztRQWhCRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLGtDQUFrQztZQUMzQyxZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxPQUFPO1NBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ04sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDVCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3JELFVBQUEsR0FBRztvQkFDQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDbkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxDQUNKLENBQUE7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBekVRLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDcEMsU0FBUyxFQUFDLENBQUMsNEJBQVksQ0FBQztTQUMzQixDQUFDO3lDQVNzQiw0QkFBWTtZQUNaLHVDQUFnQjtZQUNmLHVCQUFjO1lBQ2QseUJBQWdCO09BWDVCLGdCQUFnQixDQTJFNUI7SUFBRCx1QkFBQztDQUFBLEFBM0VELElBMkVDO0FBM0VZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05pZmFzfSBmcm9tIFwiLi4vLi4va2VoYW1pbGFuL25pZmFzL05pZmFzXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge05pZmFzU2VydmljZX0gZnJvbSBcIi4uLy4uL2tlaGFtaWxhbi9uaWZhcy9uaWZhcy5zZXJ2aWNlXCI7XG5pbXBvcnQge09ic2VydmFibGVBcnJheX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQge1BsYXRmb3JtTG9jYXRpb259IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLW5pZmFzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25pZmFzZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uaWZhc2VzLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6W05pZmFzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmlmYXNlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpZF9rZWhhbWlsYW46bnVtYmVyO1xuICAgIGlkX29yYW5ndHVhOm51bWJlcjtcbiAgICBuaWZhc2VzOk9ic2VydmFibGVBcnJheTxOaWZhcz47XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5pdnNlcnY6TmlmYXNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRFeHQ6Um91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBhY3RSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjpQbGF0Zm9ybUxvY2F0aW9uLFxuXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFjdFJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcbiAgICAgICAgICAgIHBhcmFtcz0+e1xuICAgICAgICAgICAgICAgIHRoaXMuaWRfa2VoYW1pbGFuID0gcGFyYW1zLmlkX2tlaGFtaWxhbjtcbiAgICAgICAgICAgICAgICB0aGlzLmlkX29yYW5ndHVhID0gcGFyYW1zLmlkX29yYW5ndHVhO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxvYWROaWZhc2VzKG51bGwpXG4gICAgICAgIHRoaXMubG9jYXRpb24ub25Qb3BTdGF0ZSgoKT0+e1xuICAgICAgICAgICAgdGhpcy5sb2FkTmlmYXNlcyhudWxsKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsb2FkTmlmYXNlcyhhcmdzKXtcbiAgICAgICAgdGhpcy5uaXZzZXJ2Lmxpc3QodGhpcy5pZF9rZWhhbWlsYW4pLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uaWZhc2VzID0gcmVzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgIT09IG51bGwpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGVkaXRfbmlmYXMobmlmYXM6TmlmYXMpe1xuICAgICAgICBsZXQgZXh0cmE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWRfa2VoYW1pbGFuOnRoaXMuaWRfa2VoYW1pbGFuLFxuICAgICAgICAgICAgICAgIG5pZmFzOkpTT04uc3RyaW5naWZ5KG5pZmFzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJvdXRFeHQubmF2aWdhdGUoWyduaWZhcyddLCBleHRyYSk7XG4gICAgfVxuXG4gICAgYWRkX25pZmFzKCl7XG4gICAgICAgIGxldCBleHRyYTpOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBpZF9rZWhhbWlsYW46dGhpcy5pZF9rZWhhbWlsYW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0RXh0Lm5hdmlnYXRlKFsnbmlmYXMnXSwgZXh0cmEpO1xuICAgIH1cblxuICAgIGRlbGV0ZV9uaWZhcyhuaWZhczpOaWZhcyl7XG4gICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgICAgICAgICB0aXRsZTogXCJLb25maXJtYXNpXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFuZGEgeWFraW4gaW5naW4gbWVuZ2hhcHVzIGRhdGE/XCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiWWFcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiVGlkYWtcIlxuICAgICAgICB9KS50aGVuKHJlc3VsdD0+e1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uaXZzZXJ2LmRlbGV0ZSh0aGlzLmlkX2tlaGFtaWxhbixuaWZhcy5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE5pZmFzZXMobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=