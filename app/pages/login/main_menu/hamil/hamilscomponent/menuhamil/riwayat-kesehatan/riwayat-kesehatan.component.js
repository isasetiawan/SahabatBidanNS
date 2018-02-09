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
        this.r_kontrasepsi = ["Tidak Ada", "AKDR/IUD", "Suntik", "Implan/Susuk"];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicml3YXlhdC1rZXNlaGF0YW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicml3YXlhdC1rZXNlaGF0YW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF1RDtBQUV2RCwwQ0FBNEM7QUFDNUMsdUZBQWtGO0FBU2xGO0lBYUksbUNBQ1ksUUFBdUIsRUFDdkIsS0FBWSxFQUNaLE1BQThCO1FBRjlCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLFdBQU0sR0FBTixNQUFNLENBQXdCO1FBVjFDLG1CQUFjLEdBQUc7WUFDYixFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLElBQUksRUFBQztZQUNuQixFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQztTQUN6QixDQUFDO1FBRUYsa0JBQWEsR0FBRyxDQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLGNBQWMsQ0FBQyxDQUFDO0lBTzdELENBQUM7SUFFTCw0Q0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQy9CLFVBQUEsTUFBTTtZQUNGLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN4QyxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDMUMsQ0FBQyxDQUNKLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsb0RBQWdCLEdBQWhCO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUNsRCxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBNUIsQ0FBNEIsQ0FDdEMsQ0FBQTtJQUNMLENBQUM7SUFFRCxvREFBZ0IsR0FBaEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQ3JFLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQWxDLENBQWtDLENBQzVDLENBQUE7SUFDTCxDQUFDO0lBekNRLHlCQUF5QjtRQVByQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztZQUNqRCxTQUFTLEVBQUMsQ0FBQyxtREFBdUIsQ0FBQztTQUN0QyxDQUFDO3lDQWV1Qix1QkFBYztZQUNqQixlQUFNO1lBQ0wsbURBQXVCO09BaEJqQyx5QkFBeUIsQ0EyQ3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Jpd2F5YXRLZWhhbWlsYW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4va2VoYW1pbGFuL3Jpd2F5YXQta2VoYW1pbGFuLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbmltcG9ydCB7Uml3YXlhdEtlc2VoYXRhblNlcnZpY2V9IGZyb20gXCIuLi8uLi9rZWhhbWlsYW4vcml3YXlhdC1rZXNlaGF0YW4uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLXJpd2F5YXQta2VzZWhhdGFuJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcml3YXlhdC1rZXNlaGF0YW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3Jpd2F5YXQta2VzZWhhdGFuLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgcHJvdmlkZXJzOltSaXdheWF0S2VzZWhhdGFuU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUml3YXlhdEtlc2VoYXRhbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpZF9rZWhhbWlsYW46bnVtYmVyO1xuICAgIGlkX29yYW5ndHVhOm51bWJlcjtcbiAgICBrZXNlaGF0YW46YW55O1xuXG4gICAga2VsdWhhbkNob2ljZXMgPSBbXG4gICAgICAgIHtrZXk6MSwgbGFiZWw6XCJZYVwifSxcbiAgICAgICAge2tleTowLCBsYWJlbDpcIlRpZGFrXCJ9LFxuICAgIF07XG5cbiAgICByX2tvbnRyYXNlcHNpID0gW1wiVGlkYWsgQWRhXCIsXCJBS0RSL0lVRFwiLFwiU3VudGlrXCIsXCJJbXBsYW4vU3VzdWtcIl07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3RSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTpSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcml3a2VzOlJpd2F5YXRLZXNlaGF0YW5TZXJ2aWNlLFxuXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFjdFJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcbiAgICAgICAgICAgIHBhcmFtcz0+e1xuICAgICAgICAgICAgICAgIHRoaXMuaWRfa2VoYW1pbGFuID0gcGFyYW1zLmlkX2tlaGFtaWxhbjtcbiAgICAgICAgICAgICAgICB0aGlzLmlkX29yYW5ndHVhID0gcGFyYW1zLmlkX29yYW5ndHVhO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxvYWRfcl9rZXNlaGF0YW4oKTtcbiAgICB9XG5cbiAgICBsb2FkX3Jfa2VzZWhhdGFuKCl7XG4gICAgICAgIHRoaXMucml3a2VzLmdldFJLZXNlaGF0YW4odGhpcy5pZF9rZWhhbWlsYW4pLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB0aGlzLmtlc2VoYXRhbiA9IHJlcy5jb250ZW50XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBzYXZlX3Jfa2VzZWhhdGFuKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMua2VzZWhhdGFuKSk7XG4gICAgICAgIHRoaXMucml3a2VzLnVwZGF0ZVJLZXNlaGF0YW4odGhpcy5pZF9rZWhhbWlsYW4sIHRoaXMua2VzZWhhdGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKVxuICAgICAgICApXG4gICAgfVxuXG59XG4iXX0=