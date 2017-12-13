"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var bidan_service_1 = require("./bidan.service");
var nativescript_angular_1 = require("nativescript-angular");
var user_1 = require("./user");
var appSettings = require("application-settings");
var LoginComponent = (function () {
    function LoginComponent(page, service, router) {
        this.page = page;
        this.service = service;
        this.router = router;
        this.user = new user_1.User();
        this.page.actionBarHidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.profile().subscribe(function (res) {
            console.log("last user" + JSON.stringify(res));
            _this.router.navigate(['/menu'], { clearHistory: true });
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.service.login(this.user)
            .subscribe(function (response) {
            appSettings.setString("token", response.content.token);
            _this.router.navigate(['/menu'], { clearHistory: true });
        }, function (error) {
            console.log(error.json());
            if (error.json().message === "invalid_credentials") {
                alert("Nama pengguna atau Kata Sandi salah");
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELGdDQUErQjtBQUMvQixpREFBNkM7QUFDN0MsNkRBQXNEO0FBQ3RELCtCQUE0QjtBQUM1QixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQVNsRDtJQWFJLHdCQUNZLElBQVMsRUFDVCxPQUFvQixFQUNwQixNQUF1QjtRQUZ2QixTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ1QsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUUvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBRXJDLENBQUM7SUFwQkQsaUNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQzVCLFVBQUMsR0FBRztZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7UUFFMUQsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBZUQsOEJBQUssR0FBTDtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN4QixTQUFTLENBQ04sVUFBQyxRQUFRO1lBQ0wsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2RCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sS0FBSyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO1lBQ2hELENBQUM7UUFDTCxDQUFDLENBQ0osQ0FBQTtJQUNULENBQUM7SUF0Q1EsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLFVBQVU7WUFDbkIsUUFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUMsYUFBYSxDQUFDO1lBQy9DLFNBQVMsRUFBQyxDQUFDLDRCQUFZLENBQUM7U0FDM0IsQ0FBQzt5Q0FlbUIsV0FBSTtZQUNELDRCQUFZO1lBQ2IsdUNBQWdCO09BaEIxQixjQUFjLENBeUMxQjtJQUFELHFCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtCaWRhblNlcnZpY2V9IGZyb20gXCIuL2JpZGFuLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyXCI7XHJcbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6XCJucy1sb2dpblwiLFxyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLWNvbW1vbi5jc3NcIixcIi4vbG9naW4uY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOltCaWRhblNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5wcm9maWxlKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxhc3QgdXNlclwiK0pTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbWVudSddLHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZXIgOiBVc2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTpQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgc2VydmljZTpCaWRhblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyRXh0ZW5zaW9uc1xyXG4gICAgKXtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9naW4oKXtcclxuICAgICAgICB0aGlzLnNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ0b2tlblwiLCByZXNwb25zZS5jb250ZW50LnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tZW51J10seyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5qc29uKCkubWVzc2FnZSA9PT0gXCJpbnZhbGlkX2NyZWRlbnRpYWxzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJOYW1hIHBlbmdndW5hIGF0YXUgS2F0YSBTYW5kaSBzYWxhaFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=