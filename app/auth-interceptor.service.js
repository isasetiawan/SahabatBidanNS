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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELDZDQUc4QjtBQUM5Qiw4Q0FBMkM7QUFDM0MsNkRBQXNEO0FBQ3RELDZEQUF5RDtBQUN6RCx5Q0FBc0M7QUFDdEMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFJbEQ7SUFFSSxnQ0FDWSxTQUEwQixFQUMxQixRQUFpQjtRQURqQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBR3JCLGlCQUFZLEdBQVcsS0FBSyxDQUFDO0lBRmpDLENBQUM7SUFLTCwwQ0FBUyxHQUFULFVBQVUsR0FBcUIsRUFBRSxJQUFpQjtRQUFsRCxpQkF1Q0M7UUF0Q0csSUFBSSxTQUF1QixDQUFDO1FBQzVCLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF1QixHQUFHLENBQUMsR0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFxQixJQUFJLENBQUMsWUFBYyxDQUFDLENBQUM7UUFFdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ2xCLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFFTixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSx3QkFBaUIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBRTlFLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQSxDQUFDO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUEyQixLQUFJLENBQUMsWUFBYyxDQUFDLENBQUM7b0JBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDOUMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7b0JBQ25ELEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUV6QixNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTt5QkFDckIsU0FBUyxDQUFDLFVBQUMsR0FBRzt3QkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7d0JBQy9CLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO3dCQUMxQixXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFnQixXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBRyxDQUFDLENBQUM7d0JBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDL0MsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7d0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO3dCQUNwQyw4REFBOEQ7d0JBQzlELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO29CQUM3QixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO1lBRUwsQ0FBQztZQUVELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCw2Q0FBWSxHQUFaLFVBQWEsT0FBd0I7UUFDakMsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqRCxJQUFJLE1BQU0sR0FBRztZQUNULFFBQVEsRUFBQyxlQUFNLENBQUMsTUFBTTtZQUN0QixlQUFlLEVBQUMsU0FBUyxHQUFDLFdBQVc7U0FDeEMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2pCLFVBQVUsRUFBRyxNQUFNO1NBQ3RCLENBQUMsQ0FBQztJQUNQLENBQUM7SUE3RFEsc0JBQXNCO1FBRGxDLGlCQUFVLEVBQUU7eUNBSWEsdUNBQWdCO1lBQ2pCLGVBQVE7T0FKcEIsc0JBQXNCLENBK0RsQztJQUFELDZCQUFDO0NBQUEsQUEvREQsSUErREM7QUEvRFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvcixcbiAgICBIdHRwUmVxdWVzdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7QmlkYW5TZXJ2aWNlfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9iaWRhbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4vdXRpbHMvY29uZmlnXCI7XG5sZXQgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcmNlcHRvclNlcnZpY2UgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3J7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHQ6Um91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjpJbmplY3RvclxuICAgICkgeyB9XG5cbiAgICBwcml2YXRlIGlzcmVmcmVzaGluZzpib29sZWFuID0gZmFsc2U7XG5cblxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgICAgICBsZXQgYmlkYW5zZXJ2OiBCaWRhblNlcnZpY2U7XG4gICAgICAgIGJpZGFuc2VydiA9IHRoaXMuaW5qZWN0b3IuZ2V0KEJpZGFuU2VydmljZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ3JlYXRpbmcgcmVxdWVzdCB0byAke3JlcS51cmx9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2l0aCB0b2tlbiBcIityZXEuaGVhZGVycy5nZXQoJ0F1dGhvcml6YXRpb24nKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0dXMgcmVmcmVzaGluZyAke3RoaXMuaXNyZWZyZXNoaW5nfWApO1xuXG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICgoZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpICYmIGVyci5lcnJvci5tZXNzYWdlID09PSAndG9rZW5fZXhwaXJlZCcpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc3JlZnJlc2hpbmcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHRva2VuIHNlZGFuZyBkaXBlcmJhcnVpICR7dGhpcy5pc3JlZnJlc2hpbmd9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5jaGFuZ2VoZWFkZXIocmVxKSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbiBrYWRhbHVhcnNhLCBtZW1wZXJiYXJ1aSB0b2tlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc3JlZnJlc2hpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmlkYW5zZXJ2LnJlZnJlc2goKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zd2l0Y2hNYXAoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIHJlZnJlc2hlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc3JlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidG9rZW5cIixyZXMuY29udGVudC5uZXdfdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbmV3IHRva2VuIGlzICR7YXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rZW5cIil9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh0aGlzLmNoYW5nZWhlYWRlcihyZXEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIGZhaWwgcmVmcmVzaGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbJy9sb2dpbiddLHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2hhbmdlaGVhZGVyKHJlcXVlc3Q6SHR0cFJlcXVlc3Q8YW55Pil7XG4gICAgICAgIGxldCBzYXZlZF90b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva2VuXCIpO1xuXG4gICAgICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICAgICAgICBcIlNlY3JldFwiOkNvbmZpZy5rZXlBUEksXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjpcIkJlYXJlciBcIitzYXZlZF90b2tlbixcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICAgICAgc2V0SGVhZGVycyA6IGhlYWRlclxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==