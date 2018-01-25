"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
var AnakComponent = (function () {
    function AnakComponent(navigate, router) {
        this.navigate = navigate;
        this.router = router;
    }
    AnakComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (p) {
            _this.anak = p;
        });
    };
    AnakComponent.prototype.goToTumbuh = function () {
        var navexrta = {
            queryParams: this.anak
        };
        this.navigate.navigate(['tumbuh'], navexrta);
    };
    AnakComponent.prototype.goToKembang = function () {
        var navexrta = {
            queryParams: this.anak
        };
        this.navigate.navigate(['kembang'], navexrta);
    };
    AnakComponent.prototype.goToVaksin = function () {
        var navexrta = {
            queryParams: this.anak
        };
        this.navigate.navigate(['vaksin'], navexrta);
    };
    AnakComponent.prototype.goToHealthy = function () {
        var navexrta = {
            queryParams: this.anak
        };
        this.navigate.navigate(['kesehatan'], navexrta);
    };
    AnakComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-anak',
            templateUrl: './anak.component.html',
            styleUrls: ['./anak.component.css']
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            router_1.ActivatedRoute])
    ], AnakComponent);
    return AnakComponent;
}());
exports.AnakComponent = AnakComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmFrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUU7QUFDakUsNkRBQXNEO0FBU3REO0lBSUksdUJBQ1ksUUFBeUIsRUFDekIsTUFBcUI7UUFEckIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtJQUdqQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUM3QixVQUFBLENBQUM7WUFDRyxLQUFJLENBQUMsSUFBSSxHQUFHLENBQVMsQ0FBQTtRQUN6QixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0ksSUFBSSxRQUFRLEdBQW9CO1lBQzVCLFdBQVcsRUFBQyxJQUFJLENBQUMsSUFBSTtTQUN4QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLElBQUksUUFBUSxHQUFvQjtZQUM1QixXQUFXLEVBQUMsSUFBSSxDQUFDLElBQUk7U0FDeEIsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDSSxJQUFJLFFBQVEsR0FBb0I7WUFDNUIsV0FBVyxFQUFDLElBQUksQ0FBQyxJQUFJO1NBQ3hCLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksSUFBSSxRQUFRLEdBQW9CO1lBQzVCLFdBQVcsRUFBQyxJQUFJLENBQUMsSUFBSTtTQUN4QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBN0NRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7eUNBTXVCLHVDQUFnQjtZQUNsQix1QkFBYztPQU54QixhQUFhLENBOEN6QjtJQUFELG9CQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7QUE5Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7QW5ha30gZnJvbSBcIi4uL2FuYWtcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWFuYWsnLFxuICB0ZW1wbGF0ZVVybDogJy4vYW5hay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FuYWsuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFuYWtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgYW5hazpBbmFrO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbmF2aWdhdGU6Um91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6QWN0aXZhdGVkUm91dGUsXG4gICAgKXtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlci5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICBwPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5hayA9IHAgYXMgQW5ha1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ29Ub1R1bWJ1aCgpe1xuICAgICAgICBsZXQgbmF2ZXhydGE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOnRoaXMuYW5ha1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm5hdmlnYXRlLm5hdmlnYXRlKFsndHVtYnVoJ10sbmF2ZXhydGEpXG4gICAgfVxuXG4gICAgZ29Ub0tlbWJhbmcoKXtcbiAgICAgICAgbGV0IG5hdmV4cnRhOk5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczp0aGlzLmFuYWtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZS5uYXZpZ2F0ZShbJ2tlbWJhbmcnXSxuYXZleHJ0YSlcbiAgICB9XG5cbiAgICBnb1RvVmFrc2luKCl7XG4gICAgICAgIGxldCBuYXZleHJ0YTpOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6dGhpcy5hbmFrXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubmF2aWdhdGUubmF2aWdhdGUoWyd2YWtzaW4nXSxuYXZleHJ0YSlcbiAgICB9XG5cbiAgICBnb1RvSGVhbHRoeSgpe1xuICAgICAgICBsZXQgbmF2ZXhydGE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOnRoaXMuYW5ha1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm5hdmlnYXRlLm5hdmlnYXRlKFsna2VzZWhhdGFuJ10sbmF2ZXhydGEpXG4gICAgfVxufVxuIl19