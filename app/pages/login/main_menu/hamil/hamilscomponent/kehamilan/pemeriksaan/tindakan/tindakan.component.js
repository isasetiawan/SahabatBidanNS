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
        }, function (err) {
            Toast.makeText(err.json().message).show();
        });
    };
    TindakanComponent.prototype.saveTindakan = function () {
        console.log(JSON.stringify(this.tindakan));
        this.serv.edittindakan(this.id_kehamilan, this.id_pemeriksaan, this.tindakan).subscribe(function (res) {
            Toast.makeText(res.message).show();
        }, function (err) {
            Toast.makeText(err.json().message).show();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGluZGFrYW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGluZGFrYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGlFQUE2RDtBQUM3RCwwQ0FBK0M7QUFDL0MsMENBQTRDO0FBUzVDO0lBUUksMkJBQ1ksSUFBdUIsRUFDdkIsUUFBdUI7UUFGbkMsaUJBV0M7UUFWVyxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBSm5DLFVBQUssR0FBRyxDQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO1FBTTVELFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUMxQixVQUFBLE1BQU07WUFDRixLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDeEMsS0FBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFHRCxvQ0FBUSxHQUFSLGNBQVcsQ0FBQztJQUVaLHdDQUFZLEdBQVo7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FDbEUsVUFBQSxHQUFHO1lBQ0MsS0FBSSxDQUFDLFFBQVEsR0FBYyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUMsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FDakYsVUFBQSxHQUFHO1lBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkMsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlDLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQS9DUSxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFNBQVMsRUFBQyxDQUFDLHdDQUFrQixDQUFDO1NBQ2pDLENBQUM7eUNBVW1CLHdDQUFrQjtZQUNkLHVCQUFjO09BVjFCLGlCQUFpQixDQWlEN0I7SUFBRCx3QkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RpbmRha2FufSBmcm9tIFwiLi9UaW5kYWthblwiO1xuaW1wb3J0IHtQZW1lcmlrc2FhblNlcnZpY2V9IGZyb20gXCIuLi8uLi9wZW1lcmlrc2Fhbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtdGluZGFrYW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90aW5kYWthbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdGluZGFrYW4uY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVyczpbUGVtZXJpa3NhYW5TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBUaW5kYWthbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB0aW5kYWthbjpUaW5kYWthbjtcbiAgICBpZF9rZWhhbWlsYW46bnVtYmVyO1xuICAgIGlkX3BlbWVyaWtzYWFuOm51bWJlcjtcblxuICAgIHlhdGFrID0gWyB7IGtleTogMCwgbGFiZWw6ICdUaWRhaycgfSwgeyBrZXk6IDEsIGxhYmVsOiAnWWEnIH0gXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHNlcnY6UGVtZXJpa3NhYW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFjdFJvdXRlOkFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgICAgIGFjdFJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcbiAgICAgICAgICAgIHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZF9rZWhhbWlsYW4gPSBwYXJhbXMuaWRfa2VoYW1pbGFuO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRfcGVtZXJpa3NhYW4gPSBwYXJhbXMuaWRfcGVtZXJpa3NhYW47XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVGluZGFrYW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCl7fVxuXG4gICAgbG9hZFRpbmRha2FuKCl7XG4gICAgICAgIHRoaXMuc2Vydi5nZXR0aW5kYWthbih0aGlzLmlkX2tlaGFtaWxhbix0aGlzLmlkX3BlbWVyaWtzYWFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXM9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW5kYWthbiA9IDxUaW5kYWthbj4gcmVzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy50aW5kYWthbikpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoZXJyLmpzb24oKS5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBzYXZlVGluZGFrYW4oKXtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy50aW5kYWthbikpXG4gICAgICAgIHRoaXMuc2Vydi5lZGl0dGluZGFrYW4odGhpcy5pZF9rZWhhbWlsYW4sdGhpcy5pZF9wZW1lcmlrc2Fhbix0aGlzLnRpbmRha2FuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXM9PiB7XG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoZXJyLmpzb24oKS5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbn1cbiJdfQ==