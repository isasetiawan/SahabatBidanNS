"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../../../../../utils/config");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var http_1 = require("@angular/common/http");
var VaksinService = (function () {
    function VaksinService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    VaksinService.prototype.index = function (anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/orangtua/0/anak/" + anak.id + "/vaksinasi/all", { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    VaksinService.prototype.store = function (anak, data) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/orangtua/0/anak/" + anak.id + "/vaksinasi", data, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    VaksinService.prototype.edit = function (anak, data) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + "/orangtua/0/anak/" + anak.id + "/vaksinasi/" + data.id, data, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    VaksinService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], VaksinService);
    return VaksinService;
}());
exports.VaksinService = VaksinService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFrc2luLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YWtzaW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx5REFBc0Q7QUFHdEQsaUZBQWdFO0FBQ2hFLDZDQUFnRDtBQUdoRDtJQUlJLHVCQUFvQixJQUFlO1FBQWYsU0FBSSxHQUFKLElBQUksQ0FBVztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUUsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sSUFBUztRQUFmLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsbUJBQW1CLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxnQkFBZ0IsRUFDMUQsRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQ25DO2FBQ0ksS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUM7YUFDMUIsT0FBTyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsNkJBQUssR0FBTCxVQUFNLElBQVMsRUFBRSxJQUFzQjtRQUF2QyxpQkFTQztRQVJHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixlQUFNLENBQUMsTUFBTSxHQUFDLG1CQUFtQixHQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsWUFBWSxFQUN0RCxJQUFJLEVBQ0osRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQ25DO2FBQ0ksS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUM7YUFDMUIsT0FBTyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLElBQVMsRUFBRSxJQUFzQjtRQUF0QyxpQkFTQztRQVJHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLG1CQUFtQixHQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsYUFBYSxHQUFDLElBQUksQ0FBQyxFQUFFLEVBQy9ELElBQUksRUFDSixFQUFDLE9BQU8sRUFBQyxlQUFNLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FDbkM7YUFDSSxLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQzthQUMxQixPQUFPLENBQUMsY0FBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUF0Q1EsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUtnQixpQkFBVTtPQUoxQixhQUFhLENBd0N6QjtJQUFELG9CQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvbmZpZ1wiO1xuaW1wb3J0IHtBbmFrfSBmcm9tIFwiLi4vLi4vYW5ha1wiO1xuaW1wb3J0IFBlbWVyaWtzYWFuVmFrc2luIGZyb20gXCIuL1BlbWVyaWtzYWFuVmFrc2luXCI7XG5pbXBvcnQge0xvYWRpbmdJbmRpY2F0b3J9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYWtzaW5TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgbG9hZGluZ2luZGljYXRvcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KXtcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xuICAgIH1cblxuICAgIGluZGV4KGFuYWs6QW5hayl7XG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5zaG93KENvbmZpZy5wcm9ncmVzc19kaWFsb2dfb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9vcmFuZ3R1YS8wL2FuYWsvXCIrYW5hay5pZCtcIi92YWtzaW5hc2kvYWxsXCIsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmVycm9yQ2F0Y2hlcilcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxuICAgIH1cblxuICAgIHN0b3JlKGFuYWs6QW5haywgZGF0YTpQZW1lcmlrc2FhblZha3Npbil7XG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5zaG93KENvbmZpZy5wcm9ncmVzc19kaWFsb2dfb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrXCIvb3Jhbmd0dWEvMC9hbmFrL1wiK2FuYWsuaWQrXCIvdmFrc2luYXNpXCIsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmNyZWF0ZUhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5lcnJvckNhdGNoZXIpXG4gICAgICAgICAgICAuZmluYWxseSgoKT0+dGhpcy5sb2FkaW5naW5kaWNhdG9yLmhpZGUoKSlcbiAgICB9XG5cbiAgICBlZGl0KGFuYWs6QW5haywgZGF0YTpQZW1lcmlrc2FhblZha3Npbil7XG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5zaG93KENvbmZpZy5wcm9ncmVzc19kaWFsb2dfb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9vcmFuZ3R1YS8wL2FuYWsvXCIrYW5hay5pZCtcIi92YWtzaW5hc2kvXCIrZGF0YS5pZCxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmVycm9yQ2F0Y2hlcilcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxuICAgIH1cblxufVxuIl19