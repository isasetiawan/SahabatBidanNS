"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../../../../../utils/config");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var KembangService = (function () {
    function KembangService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    KembangService.prototype.index = function (anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        var url = config_1.Config.urlAPI + "/orangtua/0/anak/" + anak.id + "/kembang/all";
        return this.http.get(url, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KembangService.prototype.validate = function (id_kembang) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + "/orangtua/0/anak/0/kembang/" + id_kembang + "/validate", { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KembangService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], KembangService);
    return KembangService;
}());
exports.KembangService = KembangService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VtYmFuZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsia2VtYmFuZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseURBQXNEO0FBQ3RELGlGQUFnRTtBQUNoRSw2Q0FBZ0Q7QUFFaEQsc0NBQXlDO0FBR3pDO0lBSUksd0JBQW9CLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRSxJQUFJLGlEQUFnQixFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVELDhCQUFLLEdBQUwsVUFBTSxJQUFTO1FBQWYsaUJBVUM7UUFURyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNELElBQUksR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEdBQUMsbUJBQW1CLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxjQUFjLENBQUM7UUFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixHQUFHLEVBQ0gsRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQ25DO2FBQ0ksS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUM7YUFDMUIsT0FBTyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtJQUVsRCxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLFVBQWlCO1FBQTFCLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsNkJBQTZCLEdBQUMsVUFBVSxHQUFDLFdBQVcsRUFDbEUsRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQ25DO2FBQ0ksS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUM7YUFDMUIsT0FBTyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtJQUVsRCxDQUFDO0lBN0JRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FLZ0IsaUJBQVU7T0FKMUIsY0FBYyxDQStCMUI7SUFBRCxxQkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IHtMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7QW5ha30gZnJvbSBcIi4uLy4uL2FuYWtcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgS2VtYmFuZ1NlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgbG9hZGluZ2luZGljYXRvcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCl7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZGV4KGFuYWs6QW5hayl7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yLnNob3coQ29uZmlnLnByb2dyZXNzX2RpYWxvZ19vcHRpb25zKTtcclxuICAgICAgICBsZXQgdXJsID0gQ29uZmlnLnVybEFQSStcIi9vcmFuZ3R1YS8wL2FuYWsvXCIrYW5hay5pZCtcIi9rZW1iYW5nL2FsbFwiO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5jcmVhdGVIZWFkZXJzKCl9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmVycm9yQ2F0Y2hlcilcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCk9PnRoaXMubG9hZGluZ2luZGljYXRvci5oaWRlKCkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKGlkX2tlbWJhbmc6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yLnNob3coQ29uZmlnLnByb2dyZXNzX2RpYWxvZ19vcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcclxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9vcmFuZ3R1YS8wL2FuYWsvMC9rZW1iYW5nL1wiK2lkX2tlbWJhbmcrXCIvdmFsaWRhdGVcIixcclxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmNyZWF0ZUhlYWRlcnMoKX1cclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuZXJyb3JDYXRjaGVyKVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKT0+dGhpcy5sb2FkaW5naW5kaWNhdG9yLmhpZGUoKSlcclxuXHJcbiAgICB9XHJcblxyXG59Il19