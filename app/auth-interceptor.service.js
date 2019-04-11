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
            if ((err instanceof http_1.HttpErrorResponse) && (err.error.message === 'Silahkan login' || err.error.message === 'token_expired')) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELDZDQUc4QjtBQUM5Qiw4Q0FBMkM7QUFDM0MsNkRBQXNEO0FBQ3RELDZEQUF5RDtBQUN6RCx5Q0FBc0M7QUFDdEMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFJbEQ7SUFFSSxnQ0FDWSxTQUEwQixFQUMxQixRQUFpQjtRQURqQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBR3JCLGlCQUFZLEdBQVcsS0FBSyxDQUFDO0lBRmpDLENBQUM7SUFLTCwwQ0FBUyxHQUFULFVBQVUsR0FBcUIsRUFBRSxJQUFpQjtRQUFsRCxpQkF1Q0M7UUF0Q0csSUFBSSxTQUF1QixDQUFDO1FBQzVCLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF1QixHQUFHLENBQUMsR0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFxQixJQUFJLENBQUMsWUFBYyxDQUFDLENBQUM7UUFFdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ2xCLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFFTixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSx3QkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssZ0JBQWdCLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUxSCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBMkIsS0FBSSxDQUFDLFlBQWMsQ0FBQyxDQUFDO29CQUM1RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQzlDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO29CQUNuRCxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFFekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7eUJBQ3JCLFNBQVMsQ0FBQyxVQUFDLEdBQUc7d0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUMvQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzt3QkFDMUIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBZ0IsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUcsQ0FBQyxDQUFDO3dCQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQy9DLENBQUMsQ0FBQzt5QkFDRCxLQUFLLENBQUMsVUFBQSxHQUFHO3dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQzt3QkFDcEMsOERBQThEO3dCQUM5RCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtvQkFDN0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztZQUVMLENBQUM7WUFFRCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEMsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRUQsNkNBQVksR0FBWixVQUFhLE9BQXdCO1FBQ2pDLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakQsSUFBSSxNQUFNLEdBQUc7WUFDVCxRQUFRLEVBQUMsZUFBTSxDQUFDLE1BQU07WUFDdEIsZUFBZSxFQUFDLFNBQVMsR0FBQyxXQUFXO1NBQ3hDLENBQUM7UUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNqQixVQUFVLEVBQUcsTUFBTTtTQUN0QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBN0RRLHNCQUFzQjtRQURsQyxpQkFBVSxFQUFFO3lDQUlhLHVDQUFnQjtZQUNqQixlQUFRO09BSnBCLHNCQUFzQixDQStEbEM7SUFBRCw2QkFBQztDQUFBLEFBL0RELElBK0RDO0FBL0RZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rvcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsXG4gICAgSHR0cFJlcXVlc3Rcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge0JpZGFuU2VydmljZX0gZnJvbSBcIi4vcGFnZXMvbG9naW4vYmlkYW4uc2VydmljZVwiO1xuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuL3V0aWxzL2NvbmZpZ1wiO1xubGV0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoSW50ZXJjZXB0b3JTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9ye1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0OlJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgaW5qZWN0b3I6SW5qZWN0b3JcbiAgICApIHsgfVxuXG4gICAgcHJpdmF0ZSBpc3JlZnJlc2hpbmc6Ym9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICAgICAgbGV0IGJpZGFuc2VydjogQmlkYW5TZXJ2aWNlO1xuICAgICAgICBiaWRhbnNlcnYgPSB0aGlzLmluamVjdG9yLmdldChCaWRhblNlcnZpY2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYENyZWF0aW5nIHJlcXVlc3QgdG8gJHtyZXEudXJsfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndpdGggdG9rZW4gXCIrcmVxLmhlYWRlcnMuZ2V0KCdBdXRob3JpemF0aW9uJykpO1xuICAgICAgICBjb25zb2xlLmxvZyhgc3RhdHVzIHJlZnJlc2hpbmcgJHt0aGlzLmlzcmVmcmVzaGluZ31gKTtcblxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSAmJiAoZXJyLmVycm9yLm1lc3NhZ2UgPT09ICdTaWxhaGthbiBsb2dpbicgfHwgZXJyLmVycm9yLm1lc3NhZ2UgPT09ICd0b2tlbl9leHBpcmVkJykpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc3JlZnJlc2hpbmcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHRva2VuIHNlZGFuZyBkaXBlcmJhcnVpICR7dGhpcy5pc3JlZnJlc2hpbmd9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5jaGFuZ2VoZWFkZXIocmVxKSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbiBrYWRhbHVhcnNhLCBtZW1wZXJiYXJ1aSB0b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc3JlZnJlc2hpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmlkYW5zZXJ2LnJlZnJlc2goKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zd2l0Y2hNYXAoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIHJlZnJlc2hlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc3JlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidG9rZW5cIixyZXMuY29udGVudC5uZXdfdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbmV3IHRva2VuIGlzICR7YXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rZW5cIil9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh0aGlzLmNoYW5nZWhlYWRlcihyZXEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGZhaWwgcmVmcmVzaGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbJy9sb2dpbiddLHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2hhbmdlaGVhZGVyKHJlcXVlc3Q6SHR0cFJlcXVlc3Q8YW55Pil7XG4gICAgICAgIGxldCBzYXZlZF90b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva2VuXCIpO1xuXG4gICAgICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICAgICAgICBcIlNlY3JldFwiOkNvbmZpZy5rZXlBUEksXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjpcIkJlYXJlciBcIitzYXZlZF90b2tlbixcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICAgICAgc2V0SGVhZGVycyA6IGhlYWRlclxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==