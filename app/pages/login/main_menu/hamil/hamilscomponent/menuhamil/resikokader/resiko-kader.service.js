"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var http_1 = require("@angular/common/http");
var config_1 = require("../../../../../../../utils/config");
var ResikoKaderService = (function () {
    function ResikoKaderService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    ResikoKaderService.prototype.getresiko = function (id_kehamilan) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/resiko', { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    ResikoKaderService.prototype.updateresiko = function (id_kehamilan, args) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/resiko', args, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    ResikoKaderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ResikoKaderService);
    return ResikoKaderService;
}());
exports.ResikoKaderService = ResikoKaderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaWtvLWthZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNpa28ta2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxpRkFBZ0U7QUFDaEUsNkNBQWdEO0FBQ2hELDREQUF5RDtBQUt6RDtJQUlJLDRCQUFvQixJQUFlO1FBQWYsU0FBSSxHQUFKLElBQUksQ0FBVztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUUsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsWUFBbUI7UUFBN0IsaUJBUUM7UUFQRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sR0FBQyxXQUFXLEdBQUMsWUFBWSxHQUFDLFNBQVMsRUFDaEQsRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQ25DO2FBQ0ksS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUM7YUFDMUIsT0FBTyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLFlBQW1CLEVBQUUsSUFBZ0I7UUFBbEQsaUJBU0M7UUFSRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sR0FBQyxXQUFXLEdBQUMsWUFBWSxHQUFDLFNBQVMsRUFDaEQsSUFBSSxFQUNKLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUNuQzthQUNJLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxjQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLENBQUE7SUFDbEQsQ0FBQztJQTNCUSxrQkFBa0I7UUFEOUIsaUJBQVUsRUFBRTt5Q0FLZ0IsaUJBQVU7T0FKMUIsa0JBQWtCLENBNkI5QjtJQUFELHlCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlscy9jb25maWdcIjtcbmltcG9ydCB7S2VoYW1pbGFufSBmcm9tIFwiLi4vS2VoYW1pbGFuXCI7XG5pbXBvcnQge1Jlc2lrb0thZGVyfSBmcm9tIFwiLi9SZXNpa29LYWRlclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzaWtvS2FkZXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgbG9hZGluZ2luZGljYXRvcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KXtcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xuICAgIH1cblxuICAgIGdldHJlc2lrbyhpZF9rZWhhbWlsYW46bnVtYmVyKXtcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yLnNob3coQ29uZmlnLnByb2dyZXNzX2RpYWxvZ19vcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJKycvaGFtaWwvMC8nK2lkX2tlaGFtaWxhbisnL3Jlc2lrbycsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmVycm9yQ2F0Y2hlcilcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxuICAgIH1cblxuICAgIHVwZGF0ZXJlc2lrbyhpZF9rZWhhbWlsYW46bnVtYmVyLCBhcmdzOlJlc2lrb0thZGVyKXtcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yLnNob3coQ29uZmlnLnByb2dyZXNzX2RpYWxvZ19vcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJKycvaGFtaWwvMC8nK2lkX2tlaGFtaWxhbisnL3Jlc2lrbycsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmNyZWF0ZUhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5lcnJvckNhdGNoZXIpXG4gICAgICAgICAgICAuZmluYWxseSgoKT0+dGhpcy5sb2FkaW5naW5kaWNhdG9yLmhpZGUoKSlcbiAgICB9XG5cbn1cbiJdfQ==