"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../../../../../utils/config");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var http_1 = require("@angular/common/http");
var RiwayatKehamilanService = (function () {
    function RiwayatKehamilanService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    RiwayatKehamilanService.prototype.getRKehamilan = function (id_kehamilan) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/riwayat', { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    RiwayatKehamilanService.prototype.updateRkehamilan = function (id_kehamilan, args) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/riwayat', args, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    RiwayatKehamilanService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RiwayatKehamilanService);
    return RiwayatKehamilanService;
}());
exports.RiwayatKehamilanService = RiwayatKehamilanService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicml3YXlhdC1rZWhhbWlsYW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJpd2F5YXQta2VoYW1pbGFuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseURBQXNEO0FBQ3RELGlGQUFnRTtBQUNoRSw2Q0FBZ0Q7QUFHaEQ7SUFJSSxpQ0FBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFFLElBQUksaURBQWdCLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsK0NBQWEsR0FBYixVQUFjLFlBQW1CO1FBQWpDLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsV0FBVyxHQUFDLFlBQVksR0FBQyxVQUFVLEVBQ2pELEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUNuQzthQUNJLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxjQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELGtEQUFnQixHQUFoQixVQUFpQixZQUFtQixFQUFFLElBQVE7UUFBOUMsaUJBU0M7UUFSRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sR0FBQyxXQUFXLEdBQUMsWUFBWSxHQUFDLFVBQVUsRUFDakQsSUFBSSxFQUNKLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUNuQzthQUNJLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxjQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLENBQUE7SUFDbEQsQ0FBQztJQTNCUSx1QkFBdUI7UUFEbkMsaUJBQVUsRUFBRTt5Q0FLZ0IsaUJBQVU7T0FKMUIsdUJBQXVCLENBNkJuQztJQUFELDhCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi91dGlscy9jb25maWdcIjtcbmltcG9ydCB7TG9hZGluZ0luZGljYXRvcn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJpd2F5YXRLZWhhbWlsYW5TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgbG9hZGluZ2luZGljYXRvcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KXtcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xuICAgIH1cblxuICAgIGdldFJLZWhhbWlsYW4oaWRfa2VoYW1pbGFuOm51bWJlcil7XG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5zaG93KENvbmZpZy5wcm9ncmVzc19kaWFsb2dfb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSSsnL2hhbWlsLzAvJytpZF9rZWhhbWlsYW4rJy9yaXdheWF0JyxcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5jcmVhdGVIZWFkZXJzKCl9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuZXJyb3JDYXRjaGVyKVxuICAgICAgICAgICAgLmZpbmFsbHkoKCk9PnRoaXMubG9hZGluZ2luZGljYXRvci5oaWRlKCkpXG4gICAgfVxuXG4gICAgdXBkYXRlUmtlaGFtaWxhbihpZF9rZWhhbWlsYW46bnVtYmVyLCBhcmdzOmFueSl7XG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5zaG93KENvbmZpZy5wcm9ncmVzc19kaWFsb2dfb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSSsnL2hhbWlsLzAvJytpZF9rZWhhbWlsYW4rJy9yaXdheWF0JyxcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmVycm9yQ2F0Y2hlcilcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxuICAgIH1cblxufVxuIl19