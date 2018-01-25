"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Toast = require("nativescript-toast");
var riwayat_kehamilan_service_1 = require("../../kehamilan/riwayat-kehamilan.service");
var RiwayatKehamilanComponent = (function () {
    function RiwayatKehamilanComponent(actRoute, route, riwkserv) {
        this.actRoute = actRoute;
        this.route = route;
        this.riwkserv = riwkserv;
        this.penolongChoides = [
            { key: 1, label: "Ya" },
            { key: 0, label: "Bukan" },
        ];
        this.gerakan_janin = [
            "Belum Terdeteksi",
            "Tidak Terdeteksi",
            "Kurang dari 4 kali",
            "Antara 4 hingga 10 kali",
            "Lebih dari 10 kali"
        ];
    }
    RiwayatKehamilanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (params) {
            _this.id_kehamilan = params.id_kehamilan;
            _this.id_orangtua = params.id_orangtua;
        });
        this.load_r_kehamilan();
    };
    RiwayatKehamilanComponent.prototype.load_r_kehamilan = function () {
        var _this = this;
        this.riwkserv.getRKehamilan(this.id_kehamilan).subscribe(function (res) {
            _this.riwayat = res.content;
        });
    };
    RiwayatKehamilanComponent.prototype.saverkeham = function () {
        this.riwkserv.updateRkehamilan(this.id_kehamilan, this.riwayat).subscribe(function (res) { return Toast.makeText(res.message).show(); });
    };
    RiwayatKehamilanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-riwayat-kehamilan',
            templateUrl: './riwayat-kehamilan.component.html',
            styleUrls: ['./riwayat-kehamilan.component.scss'],
            providers: [riwayat_kehamilan_service_1.RiwayatKehamilanService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            riwayat_kehamilan_service_1.RiwayatKehamilanService])
    ], RiwayatKehamilanComponent);
    return RiwayatKehamilanComponent;
}());
exports.RiwayatKehamilanComponent = RiwayatKehamilanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicml3YXlhdC1rZWhhbWlsYW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicml3YXlhdC1rZWhhbWlsYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF1RDtBQUN2RCwwQ0FBNEM7QUFFNUMsdUZBQWtGO0FBU2xGO0lBbUJJLG1DQUNZLFFBQXVCLEVBQ3ZCLEtBQVksRUFDWixRQUFnQztRQUZoQyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixhQUFRLEdBQVIsUUFBUSxDQUF3QjtRQWhCNUMsb0JBQWUsR0FBRztZQUNkLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsSUFBSSxFQUFDO1lBQ25CLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFDO1NBQ3pCLENBQUM7UUFFRixrQkFBYSxHQUFHO1lBQ1osa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixvQkFBb0I7WUFDcEIseUJBQXlCO1lBQ3pCLG9CQUFvQjtTQUN2QixDQUFDO0lBTUUsQ0FBQztJQUVMLDRDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDL0IsVUFBQSxNQUFNO1lBQ0YsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUMxQyxDQUFDLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxvREFBZ0IsR0FBaEI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQ3BELFVBQUEsR0FBRztZQUNDLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUMvQixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFFRCw4Q0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQ3JFLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQWxDLENBQWtDLENBQzVDLENBQUM7SUFDTixDQUFDO0lBL0NRLHlCQUF5QjtRQVByQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztZQUMvQyxTQUFTLEVBQUMsQ0FBQyxtREFBdUIsQ0FBQztTQUN0QyxDQUFDO3lDQXFCdUIsdUJBQWM7WUFDakIsZUFBTTtZQUNILG1EQUF1QjtPQXRCbkMseUJBQXlCLENBaURyQztJQUFELGdDQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuaW1wb3J0IHtSaXdheWF0S2VzZWhhdGFuU2VydmljZX0gZnJvbSBcIi4uLy4uL2tlaGFtaWxhbi9yaXdheWF0LWtlc2VoYXRhbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1Jpd2F5YXRLZWhhbWlsYW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4va2VoYW1pbGFuL3Jpd2F5YXQta2VoYW1pbGFuLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXJpd2F5YXQta2VoYW1pbGFuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jpd2F5YXQta2VoYW1pbGFuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcml3YXlhdC1rZWhhbWlsYW4uY29tcG9uZW50LnNjc3MnXSxcbiAgICBwcm92aWRlcnM6W1Jpd2F5YXRLZWhhbWlsYW5TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBSaXdheWF0S2VoYW1pbGFuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGlkX2tlaGFtaWxhbjpudW1iZXI7XG4gICAgaWRfb3Jhbmd0dWE6bnVtYmVyO1xuICAgIHByaXZhdGUgcml3YXlhdDphbnk7XG5cbiAgICBwZW5vbG9uZ0Nob2lkZXMgPSBbXG4gICAgICAgIHtrZXk6MSwgbGFiZWw6XCJZYVwifSxcbiAgICAgICAge2tleTowLCBsYWJlbDpcIkJ1a2FuXCJ9LFxuICAgIF07XG5cbiAgICBnZXJha2FuX2phbmluID0gW1xuICAgICAgICBcIkJlbHVtIFRlcmRldGVrc2lcIixcbiAgICAgICAgXCJUaWRhayBUZXJkZXRla3NpXCIsXG4gICAgICAgIFwiS3VyYW5nIGRhcmkgNCBrYWxpXCIsXG4gICAgICAgIFwiQW50YXJhIDQgaGluZ2dhIDEwIGthbGlcIixcbiAgICAgICAgXCJMZWJpaCBkYXJpIDEwIGthbGlcIlxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3RSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTpSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcml3a3NlcnY6Uml3YXlhdEtlaGFtaWxhblNlcnZpY2UsXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuYWN0Um91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcGFyYW1zPT57XG4gICAgICAgICAgICAgICAgdGhpcy5pZF9rZWhhbWlsYW4gPSBwYXJhbXMuaWRfa2VoYW1pbGFuO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRfb3Jhbmd0dWEgPSBwYXJhbXMuaWRfb3Jhbmd0dWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubG9hZF9yX2tlaGFtaWxhbigpO1xuICAgIH1cblxuICAgIGxvYWRfcl9rZWhhbWlsYW4oKXtcbiAgICAgICAgdGhpcy5yaXdrc2Vydi5nZXRSS2VoYW1pbGFuKHRoaXMuaWRfa2VoYW1pbGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucml3YXlhdCA9IHJlcy5jb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgc2F2ZXJrZWhhbSgpe1xuICAgICAgICB0aGlzLnJpd2tzZXJ2LnVwZGF0ZVJrZWhhbWlsYW4odGhpcy5pZF9rZWhhbWlsYW4sIHRoaXMucml3YXlhdCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KClcbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==