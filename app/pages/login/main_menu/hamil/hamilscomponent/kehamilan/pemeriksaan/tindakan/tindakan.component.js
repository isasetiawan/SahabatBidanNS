"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pemeriksaan_service_1 = require("../../pemeriksaan.service");
var router_1 = require("@angular/router");
var Toast = require("nativescript-toast");
var TindakanComponent = (function () {
    function TindakanComponent(serv, actRoute) {
        var _this = this;
        this.serv = serv;
        this.actRoute = actRoute;
        this.yatak = [{ key: 0, label: 'Tidak' }, { key: 1, label: 'Ya' }];
        actRoute.queryParams.subscribe(function (params) {
            _this.id_kehamilan = params.id_kehamilan;
            _this.id_pemeriksaan = params.id_pemeriksaan;
            _this.loadTindakan();
        });
    }
    TindakanComponent.prototype.ngOnInit = function () { };
    TindakanComponent.prototype.loadTindakan = function () {
        var _this = this;
        this.serv.gettindakan(this.id_kehamilan, this.id_pemeriksaan).subscribe(function (res) {
            _this.tindakan = res.content;
            console.log(JSON.stringify(_this.tindakan));
        });
    };
    TindakanComponent.prototype.saveTindakan = function () {
        console.log(JSON.stringify(this.tindakan));
        this.serv.edittindakan(this.id_kehamilan, this.id_pemeriksaan, this.tindakan).subscribe(function (res) {
            Toast.makeText(res.message).show();
        });
    };
    TindakanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-tindakan',
            templateUrl: './tindakan.component.html',
            styleUrls: ['./tindakan.component.css'],
            providers: [pemeriksaan_service_1.PemeriksaanService]
        }),
        __metadata("design:paramtypes", [pemeriksaan_service_1.PemeriksaanService,
            router_1.ActivatedRoute])
    ], TindakanComponent);
    return TindakanComponent;
}());
exports.TindakanComponent = TindakanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGluZGFrYW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGluZGFrYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGlFQUE2RDtBQUM3RCwwQ0FBK0M7QUFDL0MsMENBQTRDO0FBUzVDO0lBUUksMkJBQ1ksSUFBdUIsRUFDdkIsUUFBdUI7UUFGbkMsaUJBV0M7UUFWVyxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBSm5DLFVBQUssR0FBRyxDQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO1FBTTVELFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUMxQixVQUFBLE1BQU07WUFDRixLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDeEMsS0FBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFHRCxvQ0FBUSxHQUFSLGNBQVcsQ0FBQztJQUVaLHdDQUFZLEdBQVo7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FDbEUsVUFBQSxHQUFHO1lBQ0MsS0FBSSxDQUFDLFFBQVEsR0FBYyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNqRixVQUFBLEdBQUc7WUFDQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV2QyxDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUF6Q1EsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxTQUFTLEVBQUMsQ0FBQyx3Q0FBa0IsQ0FBQztTQUNqQyxDQUFDO3lDQVVtQix3Q0FBa0I7WUFDZCx1QkFBYztPQVYxQixpQkFBaUIsQ0EyQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUaW5kYWthbn0gZnJvbSBcIi4vVGluZGFrYW5cIjtcbmltcG9ydCB7UGVtZXJpa3NhYW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vcGVtZXJpa3NhYW4uc2VydmljZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLXRpbmRha2FuJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGluZGFrYW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RpbmRha2FuLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6W1BlbWVyaWtzYWFuU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVGluZGFrYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdGluZGFrYW46VGluZGFrYW47XG4gICAgaWRfa2VoYW1pbGFuOm51bWJlcjtcbiAgICBpZF9wZW1lcmlrc2FhbjpudW1iZXI7XG5cbiAgICB5YXRhayA9IFsgeyBrZXk6IDAsIGxhYmVsOiAnVGlkYWsnIH0sIHsga2V5OiAxLCBsYWJlbDogJ1lhJyB9IF07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzZXJ2OlBlbWVyaWtzYWFuU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhY3RSb3V0ZTpBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgICAgICBhY3RSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICBwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaWRfa2VoYW1pbGFuID0gcGFyYW1zLmlkX2tlaGFtaWxhbjtcbiAgICAgICAgICAgICAgICB0aGlzLmlkX3BlbWVyaWtzYWFuID0gcGFyYW1zLmlkX3BlbWVyaWtzYWFuO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRpbmRha2FuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpe31cblxuICAgIGxvYWRUaW5kYWthbigpe1xuICAgICAgICB0aGlzLnNlcnYuZ2V0dGluZGFrYW4odGhpcy5pZF9rZWhhbWlsYW4sdGhpcy5pZF9wZW1lcmlrc2Fhbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGluZGFrYW4gPSA8VGluZGFrYW4+IHJlcy5jb250ZW50O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMudGluZGFrYW4pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHNhdmVUaW5kYWthbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnRpbmRha2FuKSk7XG4gICAgICAgIHRoaXMuc2Vydi5lZGl0dGluZGFrYW4odGhpcy5pZF9rZWhhbWlsYW4sdGhpcy5pZF9wZW1lcmlrc2Fhbix0aGlzLnRpbmRha2FuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXM9PiB7XG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG59XG4iXX0=