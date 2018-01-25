"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var orangtua_service_1 = require("../orangtua.service");
var router_1 = require("@angular/router");
var AnaksComponent = (function () {
    function AnaksComponent(ortuServ, actRoute, router) {
        var _this = this;
        this.ortuServ = ortuServ;
        this.actRoute = actRoute;
        this.router = router;
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
    AnaksComponent.prototype.goto_anak = function (item) {
        var navextra = {
            queryParams: item
        };
        this.router.navigate(["anak"], navextra);
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
            router_1.ActivatedRoute,
            router_1.Router])
    ], AnaksComponent);
    return AnaksComponent;
}());
exports.AnaksComponent = AnaksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ha3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ha3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLHdEQUFvRDtBQUNwRCwwQ0FBeUU7QUFVekU7SUFNSSx3QkFDWSxRQUF3QixFQUN4QixRQUF1QixFQUN2QixNQUFhO1FBSHpCLGlCQVlDO1FBWFcsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBRXJCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDL0IsVUFBQSxLQUFLO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxJQUFLO1FBQWxCLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQzlDLFVBQUEsR0FBRztZQUNDLEtBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO2dCQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUNqRSxDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNWLElBQUksUUFBUSxHQUFvQjtZQUM1QixXQUFXLEVBQUUsSUFBSTtTQUNwQixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBbENRLGNBQWM7UUFSMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxTQUFTO1lBQ2xCLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixXQUFXLEVBQUMsd0JBQXdCO1lBQ3BDLFNBQVMsRUFBQyxDQUFDLG9CQUFvQixDQUFDO1lBQ2hDLFNBQVMsRUFBQyxDQUFDLGtDQUFlLENBQUM7U0FDOUIsQ0FBQzt5Q0FTdUIsa0NBQWU7WUFDZix1QkFBYztZQUNoQixlQUFNO09BVGhCLGNBQWMsQ0FvQzFCO0lBQUQscUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge09yYW5ndHVhU2VydmljZX0gZnJvbSBcIi4uL29yYW5ndHVhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhcywgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOlwibnMtbWVudVwiLFxyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6XCIuL2FuYWtzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6W1wiLi9hbmFrcy1jb21tb24uY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOltPcmFuZ3R1YVNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuYWtzQ29tcG9uZW50IHtcclxuXHJcbiAgICBvcmFuZ3R1YTphbnk7XHJcblxyXG4gICAgYW5ha3M6YW55W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBvcnR1U2VydjpPcmFuZ3R1YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhY3RSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXJcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5hbmFrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYWN0Um91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwYXJtcz0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmFuZ3R1YSA9IHBhcm1zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ2hpbGRlcm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQ2hpbGRlcm4oYXJncz8pe1xyXG4gICAgICAgIHRoaXMub3J0dVNlcnYuY2hpbGRyZW4odGhpcy5vcmFuZ3R1YS5pZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXM9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5ha3MgPSByZXMuY29udGVudDtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzICE9PSBudWxsKSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBnb3RvX2FuYWsoaXRlbSl7XHJcbiAgICAgICAgbGV0IG5hdmV4dHJhOk5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBpdGVtXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhbmFrXCJdLG5hdmV4dHJhKVxyXG4gICAgfVxyXG5cclxufSJdfQ==