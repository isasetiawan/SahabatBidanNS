"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var bidan_service_1 = require("./bidan.service");
var nativescript_angular_1 = require("nativescript-angular");
var user_1 = require("./user");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var appSettings = require("application-settings");
var LoginComponent = (function () {
    function LoginComponent(page, service, router) {
        this.page = page;
        this.service = service;
        this.router = router;
        this.user = new user_1.User();
        this.page.actionBarHidden = true;
        this.loadindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.profile().subscribe(function (res) {
            console.log("halo bidan " + res.content.nama);
            _this.router.navigate(['/menu'], { clearHistory: true });
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.service.login(this.user)
            .subscribe(function (res) {
            console.log(res.message);
            appSettings.setString("token", res.content.token);
            _this.router.navigate(['/menu'], { clearHistory: true });
        }, function (err) {
            console.log(err.error.message);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "ns-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ["./login-common.css", "./login.css"],
            providers: [bidan_service_1.BidanService]
        }),
        __metadata("design:paramtypes", [page_1.Page,
            bidan_service_1.BidanService,
            nativescript_angular_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELGdDQUErQjtBQUMvQixpREFBNkM7QUFDN0MsNkRBQXNEO0FBQ3RELCtCQUE0QjtBQUM1QixpRkFBZ0U7QUFHaEUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFTbEQ7SUFhSSx3QkFDWSxJQUFTLEVBQ1QsT0FBb0IsRUFDcEIsTUFBdUI7UUFGdkIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNULFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFFL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBcEJELGlDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUM1QixVQUFDLEdBQUc7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFjLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBTSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzFELENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQWdCRCw4QkFBSyxHQUFMO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3hCLFNBQVMsQ0FDTixVQUFDLEdBQUc7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xELEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDLEVBQ0QsVUFBQyxHQUFHO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FDSixDQUFBO0lBQ1QsQ0FBQztJQXBDUSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsVUFBVTtZQUNuQixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQyxhQUFhLENBQUM7WUFDL0MsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUM1QixDQUFDO3lDQWVtQixXQUFJO1lBQ0QsNEJBQVk7WUFDYix1Q0FBZ0I7T0FoQjFCLGNBQWMsQ0FzQzFCO0lBQUQscUJBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge0JpZGFuU2VydmljZX0gZnJvbSBcIi4vYmlkYW4uc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHtMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uZmlnXCI7XHJcblxyXG5sZXQgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOlwibnMtbG9naW5cIixcclxuICAgIG1vZHVsZUlkOm1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi1jb21tb24uY3NzXCIsXCIuL2xvZ2luLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW0JpZGFuU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnByb2ZpbGUoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBoYWxvIGJpZGFuICR7cmVzLmNvbnRlbnQubmFtYX1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL21lbnUnXSx7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZXIgOiBVc2VyO1xyXG4gICAgbG9hZGluZGljYXRvcjpMb2FkaW5nSW5kaWNhdG9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTpQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgc2VydmljZTpCaWRhblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyRXh0ZW5zaW9uc1xyXG4gICAgKXtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubG9hZGluZGljYXRvciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvZ2luKCl7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXMpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ0b2tlblwiLCByZXMuY29udGVudC50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbWVudSddLHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnIpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufSJdfQ==