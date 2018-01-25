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
            if ((err instanceof http_1.HttpErrorResponse) && err.error.message === 'token_expired') {
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
    // logout(){
    //     this.routerExt.navigate(['/login'],{ clearHistory: true });
    // }
    //
    //
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELDZDQUc4QjtBQUM5Qiw4Q0FBMkM7QUFDM0MsNkRBQXNEO0FBQ3RELDZEQUF5RDtBQUN6RCx5Q0FBc0M7QUFDdEMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFJbEQ7SUFFSSxnQ0FDWSxTQUEwQixFQUMxQixRQUFpQjtRQURqQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBR3JCLGlCQUFZLEdBQVcsS0FBSyxDQUFDO0lBRmpDLENBQUM7SUFLTCwwQ0FBUyxHQUFULFVBQVUsR0FBcUIsRUFBRSxJQUFpQjtRQUFsRCxpQkF1Q0M7UUF0Q0csSUFBSSxTQUF1QixDQUFDO1FBQzVCLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF1QixHQUFHLENBQUMsR0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFxQixJQUFJLENBQUMsWUFBYyxDQUFDLENBQUM7UUFFdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ2xCLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFFTixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSx3QkFBaUIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBRTlFLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQSxDQUFDO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUEyQixLQUFJLENBQUMsWUFBYyxDQUFDLENBQUM7b0JBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDOUMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7b0JBQ25ELEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUV6QixNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTt5QkFDckIsU0FBUyxDQUFDLFVBQUMsR0FBRzt3QkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7d0JBQy9CLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO3dCQUMxQixXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFnQixXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBRyxDQUFDLENBQUM7d0JBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDL0MsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7d0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO3dCQUNwQyw4REFBOEQ7d0JBQzlELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUM3QixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO1lBRUwsQ0FBQztZQUVELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCxZQUFZO0lBQ1osa0VBQWtFO0lBQ2xFLElBQUk7SUFDSixFQUFFO0lBQ0YsRUFBRTtJQUNGLDZDQUFZLEdBQVosVUFBYSxPQUF3QjtRQUNqQyxJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpELElBQUksTUFBTSxHQUFHO1lBQ1QsUUFBUSxFQUFDLGVBQU0sQ0FBQyxNQUFNO1lBQ3RCLGVBQWUsRUFBQyxTQUFTLEdBQUMsV0FBVztTQUN4QyxDQUFDO1FBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDakIsVUFBVSxFQUFHLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWxFUSxzQkFBc0I7UUFEbEMsaUJBQVUsRUFBRTt5Q0FJYSx1Q0FBZ0I7WUFDakIsZUFBUTtPQUpwQixzQkFBc0IsQ0FvRWxDO0lBQUQsNkJBQUM7Q0FBQSxBQXBFRCxJQW9FQztBQXBFWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLFxuICAgIEh0dHBSZXF1ZXN0XG59IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtCaWRhblNlcnZpY2V9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2JpZGFuLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi91dGlscy9jb25maWdcIjtcbmxldCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEludGVyY2VwdG9yU2VydmljZSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvcntcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dDpSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGluamVjdG9yOkluamVjdG9yXG4gICAgKSB7IH1cblxuICAgIHByaXZhdGUgaXNyZWZyZXNoaW5nOmJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgICAgIGxldCBiaWRhbnNlcnY6IEJpZGFuU2VydmljZTtcbiAgICAgICAgYmlkYW5zZXJ2ID0gdGhpcy5pbmplY3Rvci5nZXQoQmlkYW5TZXJ2aWNlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDcmVhdGluZyByZXF1ZXN0IHRvICR7cmVxLnVybH1gKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aXRoIHRva2VuIFwiK3JlcS5oZWFkZXJzLmdldCgnQXV0aG9yaXphdGlvbicpKTtcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXR1cyByZWZyZXNoaW5nICR7dGhpcy5pc3JlZnJlc2hpbmd9YCk7XG5cbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKChlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkgJiYgZXJyLmVycm9yLm1lc3NhZ2UgPT09ICd0b2tlbl9leHBpcmVkJykge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzcmVmcmVzaGluZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdG9rZW4gc2VkYW5nIGRpcGVyYmFydWkgJHt0aGlzLmlzcmVmcmVzaGluZ31gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh0aGlzLmNoYW5nZWhlYWRlcihyZXEpKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuIGthZGFsdWFyc2EsIG1lbXBlcmJhcnVpIHRva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzcmVmcmVzaGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiaWRhbnNlcnYucmVmcmVzaCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN3aXRjaE1hcCgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gcmVmcmVzaGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzcmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ0b2tlblwiLHJlcy5jb250ZW50Lm5ld190b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBuZXcgdG9rZW4gaXMgJHthcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tlblwiKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMuY2hhbmdlaGVhZGVyKHJlcSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gZmFpbCByZWZyZXNoZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFsnL2xvZ2luJ10seyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBsb2dvdXQoKXtcbiAgICAvLyAgICAgdGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoWycvbG9naW4nXSx7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvL1xuICAgIGNoYW5nZWhlYWRlcihyZXF1ZXN0Okh0dHBSZXF1ZXN0PGFueT4pe1xuICAgICAgICBsZXQgc2F2ZWRfdG9rZW4gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tlblwiKTtcblxuICAgICAgICBsZXQgaGVhZGVyID0ge1xuICAgICAgICAgICAgXCJTZWNyZXRcIjpDb25maWcua2V5QVBJLFxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6XCJCZWFyZXIgXCIrc2F2ZWRfdG9rZW4sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgICAgIHNldEhlYWRlcnMgOiBoZWFkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=