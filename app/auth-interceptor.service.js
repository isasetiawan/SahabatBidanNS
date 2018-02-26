"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var nativescript_angular_1 = require("nativescript-angular");
var bidan_service_1 = require("./pages/login/bidan.service");
var config_1 = require("./utils/config");
var appSettings = require("application-settings");
var AuthInterceptorService = (function () {
    function AuthInterceptorService(routerExt, injector) {
        this.routerExt = routerExt;
        this.injector = injector;
        this.isrefreshing = false;
    }
    AuthInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var bidanserv;
        bidanserv = this.injector.get(bidan_service_1.BidanService);
        console.log("");
        console.log("Creating request to " + req.url);
        console.log("with token " + req.headers.get('Authorization'));
        console.log("status refreshing " + this.isrefreshing);
        return next.handle(req)
            .catch(function (err) {
            if ((err instanceof http_1.HttpErrorResponse) && err.error.message === 'Silahkan login') {
                if (_this.isrefreshing) {
                    console.log("token sedang diperbarui " + _this.isrefreshing);
                    return next.handle(_this.changeheader(req));
                }
                else {
                    console.log('token kadaluarsa, memperbarui token');
                    _this.isrefreshing = true;
                    return bidanserv.refresh()
                        .switchMap(function (res) {
                        console.log("token refreshed");
                        _this.isrefreshing = false;
                        appSettings.setString("token", res.content.new_token);
                        console.log("new token is " + appSettings.getString("token"));
                        return next.handle(_this.changeheader(req));
                    })
                        .catch(function (err) {
                        console.log("token fail refreshed");
                        // this.routerExt.navigate(['/login'],{ clearHistory: true });
                        return Observable_1.Observable.empty();
                    });
                }
            }
            return Observable_1.Observable.throw(err);
        });
    };
    AuthInterceptorService.prototype.changeheader = function (request) {
        var saved_token = appSettings.getString("token");
        var header = {
            "Secret": config_1.Config.keyAPI,
            "Authorization": "Bearer " + saved_token,
        };
        return request.clone({
            setHeaders: header
        });
    };
    AuthInterceptorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            core_1.Injector])
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());
exports.AuthInterceptorService = AuthInterceptorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELDZDQUc4QjtBQUM5Qiw4Q0FBMkM7QUFDM0MsNkRBQXNEO0FBQ3RELDZEQUF5RDtBQUN6RCx5Q0FBc0M7QUFDdEMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFJbEQ7SUFFSSxnQ0FDWSxTQUEwQixFQUMxQixRQUFpQjtRQURqQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBR3JCLGlCQUFZLEdBQVcsS0FBSyxDQUFDO0lBRmpDLENBQUM7SUFLTCwwQ0FBUyxHQUFULFVBQVUsR0FBcUIsRUFBRSxJQUFpQjtRQUFsRCxpQkF1Q0M7UUF0Q0csSUFBSSxTQUF1QixDQUFDO1FBQzVCLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF1QixHQUFHLENBQUMsR0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFxQixJQUFJLENBQUMsWUFBYyxDQUFDLENBQUM7UUFFdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ2xCLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFFTixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSx3QkFBaUIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFFL0UsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUM7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTJCLEtBQUksQ0FBQyxZQUFjLENBQUMsQ0FBQztvQkFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUM5QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztvQkFDbkQsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBRXpCLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO3lCQUNyQixTQUFTLENBQUMsVUFBQyxHQUFHO3dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDL0IsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7d0JBQzFCLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWdCLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFHLENBQUMsQ0FBQzt3QkFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMvQyxDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRzt3QkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7d0JBQ3BDLDhEQUE4RDt3QkFDOUQsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxFQUFFLENBQUE7b0JBQzdCLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7WUFFTCxDQUFDO1lBRUQsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUVELDZDQUFZLEdBQVosVUFBYSxPQUF3QjtRQUNqQyxJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpELElBQUksTUFBTSxHQUFHO1lBQ1QsUUFBUSxFQUFDLGVBQU0sQ0FBQyxNQUFNO1lBQ3RCLGVBQWUsRUFBQyxTQUFTLEdBQUMsV0FBVztTQUN4QyxDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDakIsVUFBVSxFQUFHLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTdEUSxzQkFBc0I7UUFEbEMsaUJBQVUsRUFBRTt5Q0FJYSx1Q0FBZ0I7WUFDakIsZUFBUTtPQUpwQixzQkFBc0IsQ0ErRGxDO0lBQUQsNkJBQUM7Q0FBQSxBQS9ERCxJQStEQztBQS9EWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLFxuICAgIEh0dHBSZXF1ZXN0XG59IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtCaWRhblNlcnZpY2V9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2JpZGFuLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi91dGlscy9jb25maWdcIjtcbmxldCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEludGVyY2VwdG9yU2VydmljZSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvcntcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dDpSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGluamVjdG9yOkluamVjdG9yXG4gICAgKSB7IH1cblxuICAgIHByaXZhdGUgaXNyZWZyZXNoaW5nOmJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgICAgIGxldCBiaWRhbnNlcnY6IEJpZGFuU2VydmljZTtcbiAgICAgICAgYmlkYW5zZXJ2ID0gdGhpcy5pbmplY3Rvci5nZXQoQmlkYW5TZXJ2aWNlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDcmVhdGluZyByZXF1ZXN0IHRvICR7cmVxLnVybH1gKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aXRoIHRva2VuIFwiK3JlcS5oZWFkZXJzLmdldCgnQXV0aG9yaXphdGlvbicpKTtcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXR1cyByZWZyZXNoaW5nICR7dGhpcy5pc3JlZnJlc2hpbmd9YCk7XG5cbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKChlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkgJiYgZXJyLmVycm9yLm1lc3NhZ2UgPT09ICdTaWxhaGthbiBsb2dpbicpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc3JlZnJlc2hpbmcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHRva2VuIHNlZGFuZyBkaXBlcmJhcnVpICR7dGhpcy5pc3JlZnJlc2hpbmd9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5jaGFuZ2VoZWFkZXIocmVxKSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbiBrYWRhbHVhcnNhLCBtZW1wZXJiYXJ1aSB0b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc3JlZnJlc2hpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmlkYW5zZXJ2LnJlZnJlc2goKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zd2l0Y2hNYXAoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIHJlZnJlc2hlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc3JlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidG9rZW5cIixyZXMuY29udGVudC5uZXdfdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbmV3IHRva2VuIGlzICR7YXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rZW5cIil9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh0aGlzLmNoYW5nZWhlYWRlcihyZXEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGZhaWwgcmVmcmVzaGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbJy9sb2dpbiddLHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2hhbmdlaGVhZGVyKHJlcXVlc3Q6SHR0cFJlcXVlc3Q8YW55Pil7XG4gICAgICAgIGxldCBzYXZlZF90b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva2VuXCIpO1xuXG4gICAgICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICAgICAgICBcIlNlY3JldFwiOkNvbmZpZy5rZXlBUEksXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjpcIkJlYXJlciBcIitzYXZlZF90b2tlbixcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICAgICAgc2V0SGVhZGVycyA6IGhlYWRlclxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==