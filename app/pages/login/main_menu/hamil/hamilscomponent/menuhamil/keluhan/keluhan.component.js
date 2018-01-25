"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var riwayat_keluhan_service_1 = require("../../kehamilan/riwayat-keluhan.service");
var Toast = require("nativescript-toast");
var KeluhanComponent = (function () {
    function KeluhanComponent(actRoute, route, riwkelu) {
        this.actRoute = actRoute;
        this.route = route;
        this.riwkelu = riwkelu;
        this.keluhanChoices = [
            { key: 1, label: "Ya" },
            { key: 0, label: "Tidak" },
        ];
    }
    KeluhanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (params) {
            _this.id_kehamilan = params.id_kehamilan;
            _this.id_orangtua = params.id_orangtua;
        });
        this.load_r_keluhan();
    };
    KeluhanComponent.prototype.load_r_keluhan = function () {
        var _this = this;
        this.riwkelu.getRKeluhan(this.id_kehamilan).subscribe(function (res) { return _this.keluhan = res.content; });
    };
    KeluhanComponent.prototype.save_r_keluhan = function () {
        this.riwkelu.updateRKeluha(this.id_kehamilan, this.keluhan).subscribe(function (res) { return Toast.makeText(res.message).show(); });
    };
    KeluhanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-keluhan',
            templateUrl: './keluhan.component.html',
            styleUrls: ['./keluhan.component.scss'],
            providers: [riwayat_keluhan_service_1.RiwayatKeluhanService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            riwayat_keluhan_service_1.RiwayatKeluhanService])
    ], KeluhanComponent);
    return KeluhanComponent;
}());
exports.KeluhanComponent = KeluhanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VsdWhhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZWx1aGFuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBdUQ7QUFDdkQsbUZBQThFO0FBQzlFLDBDQUE0QztBQVM1QztJQVdJLDBCQUNZLFFBQXVCLEVBQ3ZCLEtBQVksRUFDWixPQUE2QjtRQUY3QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQVJ6QyxtQkFBYyxHQUFHO1lBQ2IsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxJQUFJLEVBQUM7WUFDbkIsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxPQUFPLEVBQUM7U0FDekIsQ0FBQztJQU9FLENBQUM7SUFFTCxtQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQy9CLFVBQUEsTUFBTTtZQUNGLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN4QyxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDMUMsQ0FBQyxDQUNKLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQ2pELFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxFQUExQixDQUEwQixDQUNwQyxDQUFBO0lBQ0wsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQ2pFLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQWxDLENBQWtDLENBQzVDLENBQUE7SUFDTCxDQUFDO0lBdENRLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsU0FBUyxFQUFDLENBQUMsK0NBQXFCLENBQUM7U0FDcEMsQ0FBQzt5Q0FhdUIsdUJBQWM7WUFDakIsZUFBTTtZQUNKLCtDQUFxQjtPQWRoQyxnQkFBZ0IsQ0F3QzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1Jpd2F5YXRLZWx1aGFuU2VydmljZX0gZnJvbSBcIi4uLy4uL2tlaGFtaWxhbi9yaXdheWF0LWtlbHVoYW4uc2VydmljZVwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLWtlbHVoYW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9rZWx1aGFuLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9rZWx1aGFuLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgcHJvdmlkZXJzOltSaXdheWF0S2VsdWhhblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEtlbHVoYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaWRfa2VoYW1pbGFuOm51bWJlcjtcbiAgICBpZF9vcmFuZ3R1YTpudW1iZXI7XG4gICAga2VsdWhhbjphbnk7XG5cbiAgICBrZWx1aGFuQ2hvaWNlcyA9IFtcbiAgICAgICAge2tleToxLCBsYWJlbDpcIllhXCJ9LFxuICAgICAgICB7a2V5OjAsIGxhYmVsOlwiVGlkYWtcIn0sXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjdFJvdXRlOkFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOlJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSByaXdrZWx1OlJpd2F5YXRLZWx1aGFuU2VydmljZSxcblxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hY3RSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICBwYXJhbXM9PntcbiAgICAgICAgICAgICAgICB0aGlzLmlkX2tlaGFtaWxhbiA9IHBhcmFtcy5pZF9rZWhhbWlsYW47XG4gICAgICAgICAgICAgICAgdGhpcy5pZF9vcmFuZ3R1YSA9IHBhcmFtcy5pZF9vcmFuZ3R1YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5sb2FkX3Jfa2VsdWhhbigpO1xuICAgIH1cblxuICAgIGxvYWRfcl9rZWx1aGFuKCl7XG4gICAgICAgIHRoaXMucml3a2VsdS5nZXRSS2VsdWhhbih0aGlzLmlkX2tlaGFtaWxhbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHRoaXMua2VsdWhhbiA9IHJlcy5jb250ZW50XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBzYXZlX3Jfa2VsdWhhbigpe1xuICAgICAgICB0aGlzLnJpd2tlbHUudXBkYXRlUktlbHVoYSh0aGlzLmlkX2tlaGFtaWxhbiwgdGhpcy5rZWx1aGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKVxuICAgICAgICApXG4gICAgfVxuXG59XG4iXX0=