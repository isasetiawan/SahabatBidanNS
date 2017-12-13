"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var orangtua_service_1 = require("../orangtua.service");
var router_1 = require("@angular/router");
var AnaksComponent = (function () {
    function AnaksComponent(ortuServ, actRoute) {
        var _this = this;
        this.ortuServ = ortuServ;
        this.actRoute = actRoute;
        this.anaks = [];
        this.actRoute.queryParams.subscribe(function (parms) {
            _this.orangtua = parms;
            _this.loadChildern();
        });
    }
    AnaksComponent.prototype.loadChildern = function (args) {
        var _this = this;
        this.ortuServ.children(this.orangtua.id).subscribe(function (res) {
            _this.anaks = res.content;
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    AnaksComponent = __decorate([
        core_1.Component({
            selector: "ns-menu",
            moduleId: module.id,
            templateUrl: "./anaks.component.html",
            styleUrls: ["./anaks-common.css"],
            providers: [orangtua_service_1.OrangtuaService],
        }),
        __metadata("design:paramtypes", [orangtua_service_1.OrangtuaService,
            router_1.ActivatedRoute])
    ], AnaksComponent);
    return AnaksComponent;
}());
exports.AnaksComponent = AnaksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ha3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ha3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLHdEQUFvRDtBQUNwRCwwQ0FBK0M7QUFVL0M7SUFNSSx3QkFDWSxRQUF3QixFQUN4QixRQUF1QjtRQUZuQyxpQkFXQztRQVZXLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFFL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUMvQixVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLElBQUs7UUFBbEIsaUJBT0M7UUFORyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDOUMsVUFBQSxHQUFHO1lBQ0MsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQTFCUSxjQUFjO1FBUjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsU0FBUztZQUNsQixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsV0FBVyxFQUFDLHdCQUF3QjtZQUNwQyxTQUFTLEVBQUMsQ0FBQyxvQkFBb0IsQ0FBQztZQUNoQyxTQUFTLEVBQUMsQ0FBQyxrQ0FBZSxDQUFDO1NBQzlCLENBQUM7eUNBU3VCLGtDQUFlO1lBQ2YsdUJBQWM7T0FSMUIsY0FBYyxDQTRCMUI7SUFBRCxxQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7T3Jhbmd0dWFTZXJ2aWNlfSBmcm9tIFwiLi4vb3Jhbmd0dWEuc2VydmljZVwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOlwibnMtbWVudVwiLFxyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6XCIuL2FuYWtzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6W1wiLi9hbmFrcy1jb21tb24uY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOltPcmFuZ3R1YVNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuYWtzQ29tcG9uZW50IHtcclxuXHJcbiAgICBvcmFuZ3R1YTphbnk7XHJcblxyXG4gICAgYW5ha3M6YW55W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBvcnR1U2VydjpPcmFuZ3R1YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhY3RSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5hbmFrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWN0Um91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJtcz0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmFuZ3R1YSA9IHBhcm1zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ2hpbGRlcm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQ2hpbGRlcm4oYXJncz8pe1xyXG4gICAgICAgIHRoaXMub3J0dVNlcnYuY2hpbGRyZW4odGhpcy5vcmFuZ3R1YS5pZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXM9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5ha3MgPSByZXMuY29udGVudDtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzICE9PSBudWxsKSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXX0=