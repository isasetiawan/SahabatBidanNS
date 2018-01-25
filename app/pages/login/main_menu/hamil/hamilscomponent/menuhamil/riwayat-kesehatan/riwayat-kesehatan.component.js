"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Toast = require("nativescript-toast");
var riwayat_kesehatan_service_1 = require("../../kehamilan/riwayat-kesehatan.service");
var RiwayatKesehatanComponent = (function () {
    function RiwayatKesehatanComponent(actRoute, route, riwkes) {
        this.actRoute = actRoute;
        this.route = route;
        this.riwkes = riwkes;
        this.keluhanChoices = [
            { key: 1, label: "Ya" },
            { key: 0, label: "Tidak" },
        ];
    }
    RiwayatKesehatanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (params) {
            _this.id_kehamilan = params.id_kehamilan;
            _this.id_orangtua = params.id_orangtua;
        });
        this.load_r_kesehatan();
    };
    RiwayatKesehatanComponent.prototype.load_r_kesehatan = function () {
        var _this = this;
        this.riwkes.getRKesehatan(this.id_kehamilan).subscribe(function (res) { return _this.kesehatan = res.content; });
    };
    RiwayatKesehatanComponent.prototype.save_r_kesehatan = function () {
        console.log(JSON.stringify(this.kesehatan));
        this.riwkes.updateRKesehatan(this.id_kehamilan, this.kesehatan).subscribe(function (res) { return Toast.makeText(res.message).show(); });
    };
    RiwayatKesehatanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-riwayat-kesehatan',
            templateUrl: './riwayat-kesehatan.component.html',
            styleUrls: ['./riwayat-kesehatan.component.scss'],
            providers: [riwayat_kesehatan_service_1.RiwayatKesehatanService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            riwayat_kesehatan_service_1.RiwayatKesehatanService])
    ], RiwayatKesehatanComponent);
    return RiwayatKesehatanComponent;
}());
exports.RiwayatKesehatanComponent = RiwayatKesehatanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicml3YXlhdC1rZXNlaGF0YW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicml3YXlhdC1rZXNlaGF0YW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF1RDtBQUV2RCwwQ0FBNEM7QUFDNUMsdUZBQWtGO0FBU2xGO0lBV0ksbUNBQ1ksUUFBdUIsRUFDdkIsS0FBWSxFQUNaLE1BQThCO1FBRjlCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLFdBQU0sR0FBTixNQUFNLENBQXdCO1FBUjFDLG1CQUFjLEdBQUc7WUFDYixFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLElBQUksRUFBQztZQUNuQixFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQztTQUN6QixDQUFDO0lBT0UsQ0FBQztJQUVMLDRDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDL0IsVUFBQSxNQUFNO1lBQ0YsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUMxQyxDQUFDLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxvREFBZ0IsR0FBaEI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQ2xELFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUE1QixDQUE0QixDQUN0QyxDQUFBO0lBQ0wsQ0FBQztJQUVELG9EQUFnQixHQUFoQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FDckUsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBbEMsQ0FBa0MsQ0FDNUMsQ0FBQTtJQUNMLENBQUM7SUF2Q1EseUJBQXlCO1FBUHJDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1lBQ2pELFNBQVMsRUFBQyxDQUFDLG1EQUF1QixDQUFDO1NBQ3RDLENBQUM7eUNBYXVCLHVCQUFjO1lBQ2pCLGVBQU07WUFDTCxtREFBdUI7T0FkakMseUJBQXlCLENBeUNyQztJQUFELGdDQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSaXdheWF0S2VoYW1pbGFuU2VydmljZX0gZnJvbSBcIi4uLy4uL2tlaGFtaWxhbi9yaXdheWF0LWtlaGFtaWxhbi5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5pbXBvcnQge1Jpd2F5YXRLZXNlaGF0YW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4va2VoYW1pbGFuL3Jpd2F5YXQta2VzZWhhdGFuLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1yaXdheWF0LWtlc2VoYXRhbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Jpd2F5YXQta2VzZWhhdGFuLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9yaXdheWF0LWtlc2VoYXRhbi5jb21wb25lbnQuc2NzcyddLFxuICAgIHByb3ZpZGVyczpbUml3YXlhdEtlc2VoYXRhblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFJpd2F5YXRLZXNlaGF0YW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaWRfa2VoYW1pbGFuOm51bWJlcjtcbiAgICBpZF9vcmFuZ3R1YTpudW1iZXI7XG4gICAga2VzZWhhdGFuOmFueTtcblxuICAgIGtlbHVoYW5DaG9pY2VzID0gW1xuICAgICAgICB7a2V5OjEsIGxhYmVsOlwiWWFcIn0sXG4gICAgICAgIHtrZXk6MCwgbGFiZWw6XCJUaWRha1wifSxcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWN0Um91dGU6QWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGU6Um91dGVyLFxuICAgICAgICBwcml2YXRlIHJpd2tlczpSaXdheWF0S2VzZWhhdGFuU2VydmljZSxcblxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hY3RSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICBwYXJhbXM9PntcbiAgICAgICAgICAgICAgICB0aGlzLmlkX2tlaGFtaWxhbiA9IHBhcmFtcy5pZF9rZWhhbWlsYW47XG4gICAgICAgICAgICAgICAgdGhpcy5pZF9vcmFuZ3R1YSA9IHBhcmFtcy5pZF9vcmFuZ3R1YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5sb2FkX3Jfa2VzZWhhdGFuKCk7XG4gICAgfVxuXG4gICAgbG9hZF9yX2tlc2VoYXRhbigpe1xuICAgICAgICB0aGlzLnJpd2tlcy5nZXRSS2VzZWhhdGFuKHRoaXMuaWRfa2VoYW1pbGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5rZXNlaGF0YW4gPSByZXMuY29udGVudFxuICAgICAgICApXG4gICAgfVxuXG4gICAgc2F2ZV9yX2tlc2VoYXRhbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmtlc2VoYXRhbikpO1xuICAgICAgICB0aGlzLnJpd2tlcy51cGRhdGVSS2VzZWhhdGFuKHRoaXMuaWRfa2VoYW1pbGFuLCB0aGlzLmtlc2VoYXRhbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KClcbiAgICAgICAgKVxuICAgIH1cblxufVxuIl19