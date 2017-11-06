"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var bidan_service_1 = require("./bidan.service");
var LoginComponent = (function () {
    function LoginComponent(page, service) {
        this.service = service;
        this.user = new User();
        page.actionBarHidden = true;
    }
    LoginComponent.prototype.login = function () {
        this.service.login(this.user).subscribe();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "ns-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ["./login-common.css", "./login.css"],
            providers: [bidan_service_1.BidanService]
        }),
        __metadata("design:paramtypes", [page_1.Page, bidan_service_1.BidanService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
var User = (function () {
    function User() {
    }
    return User;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUErQjtBQUMvQixpREFBNkM7QUFTN0M7SUFJSSx3QkFBWSxJQUFTLEVBQVUsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUV0QyxDQUFBO0lBQ0wsQ0FBQztJQWJRLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxVQUFVO1lBQ25CLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixFQUFDLGFBQWEsQ0FBQztZQUMvQyxTQUFTLEVBQUMsQ0FBQyw0QkFBWSxDQUFDO1NBQzNCLENBQUM7eUNBS21CLFdBQUksRUFBa0IsNEJBQVk7T0FKMUMsY0FBYyxDQWUxQjtJQUFELHFCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksd0NBQWM7QUFpQjNCO0lBQUE7SUFHQSxDQUFDO0lBQUQsV0FBQztBQUFELENBQUMsQUFIRCxJQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7QmlkYW5TZXJ2aWNlfSBmcm9tIFwiLi9iaWRhbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOlwibnMtbG9naW5cIixcclxuICAgIG1vZHVsZUlkOm1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi1jb21tb24uY3NzXCIsXCIuL2xvZ2luLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczpbQmlkYW5TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG5cclxuICAgIHVzZXIgOiBVc2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhZ2U6UGFnZSwgcHJpdmF0ZSBzZXJ2aWNlOkJpZGFuU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKXtcclxuICAgICAgICB0aGlzLnNlcnZpY2UubG9naW4odGhpcy51c2VyKS5zdWJzY3JpYmUoXHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFVzZXIge1xyXG4gICAgdXNlcm5hbWU6c3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6c3RyaW5nO1xyXG59Il19