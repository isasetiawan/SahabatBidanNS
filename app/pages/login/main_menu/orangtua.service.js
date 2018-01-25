"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../../utils/config");
var http_1 = require("@angular/common/http");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var OrangtuaService = (function () {
    function OrangtuaService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    OrangtuaService.prototype.getOrangtuas = function () {
        return this.http.get(config_1.Config.urlAPI + "/orangtua", { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher);
    };
    OrangtuaService.prototype.pair = function (args) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/anak/pair", args, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    OrangtuaService.prototype.unpair = function (args) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/anak/unpair", args, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    OrangtuaService.prototype.children = function (idortu) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        var url = config_1.Config.urlAPI + "/orangtua/" + idortu + "/anak";
        console.log(url);
        return this.http.get(url, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    OrangtuaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], OrangtuaService);
    return OrangtuaService;
}());
exports.OrangtuaService = OrangtuaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Jhbmd0dWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yYW5ndHVhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsZ0RBQTZDO0FBQzdDLDZDQUFnRDtBQUNoRCxpRkFBZ0U7QUFJaEU7SUFJSSx5QkFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFFLElBQUksaURBQWdCLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sR0FBQyxXQUFXLEVBQ3pCLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUNuQzthQUNJLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELDhCQUFJLEdBQUosVUFBSyxJQUFhO1FBQWxCLGlCQVVDO1FBVEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsWUFBWSxFQUMxQixJQUFJLEVBQ0osRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQ25DO2FBQ0ksS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUM7YUFDMUIsT0FBTyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtJQUVsRCxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLElBQWU7UUFBdEIsaUJBVUM7UUFURyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsZUFBTSxDQUFDLE1BQU0sR0FBQyxjQUFjLEVBQzVCLElBQUksRUFDSixFQUFDLE9BQU8sRUFBQyxlQUFNLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FDbkM7YUFDSSxLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQzthQUMxQixPQUFPLENBQUMsY0FBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFBO0lBRWxELENBQUM7SUFFRCxrQ0FBUSxHQUFSLFVBQVMsTUFBYTtRQUF0QixpQkFXQztRQVZHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0QsSUFBSSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBQyxZQUFZLEdBQUMsTUFBTSxHQUFDLE9BQU8sQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsR0FBRyxFQUNILEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUNuQzthQUNJLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxjQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLENBQUE7SUFFbEQsQ0FBQztJQW5EUSxlQUFlO1FBRjNCLGlCQUFVLEVBQUU7eUNBTWdCLGlCQUFVO09BSjFCLGVBQWUsQ0FvRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb25maWdcIjtcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgT3Jhbmd0dWFTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGxvYWRpbmdpbmRpY2F0b3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvcj0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPcmFuZ3R1YXMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9vcmFuZ3R1YVwiLFxyXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5lcnJvckNhdGNoZXIpXHJcbiAgICB9XHJcblxyXG4gICAgcGFpcihhcmdzOlBhaXJBcmdzKXtcclxuICAgICAgICB0aGlzLmxvYWRpbmdpbmRpY2F0b3Iuc2hvdyhDb25maWcucHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9hbmFrL3BhaXJcIixcclxuICAgICAgICAgICAgYXJncyxcclxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmNyZWF0ZUhlYWRlcnMoKX0sXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmVycm9yQ2F0Y2hlcilcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCk9PnRoaXMubG9hZGluZ2luZGljYXRvci5oaWRlKCkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVucGFpcihhcmdzOlVucGFpckFyZ3Mpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5zaG93KENvbmZpZy5wcm9ncmVzc19kaWFsb2dfb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICAgICAgICBDb25maWcudXJsQVBJK1wiL2FuYWsvdW5wYWlyXCIsXHJcbiAgICAgICAgICAgIGFyZ3MsXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5jcmVhdGVIZWFkZXJzKCl9LFxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5lcnJvckNhdGNoZXIpXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGlsZHJlbihpZG9ydHU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmxvYWRpbmdpbmRpY2F0b3Iuc2hvdyhDb25maWcucHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMpO1xyXG4gICAgICAgIGxldCB1cmwgPSBDb25maWcudXJsQVBJK1wiL29yYW5ndHVhL1wiK2lkb3J0dStcIi9hbmFrXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2codXJsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5lcnJvckNhdGNoZXIpXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFBhaXJBcmdze1xyXG4gICAgdXNlcm5hbWU6c3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6c3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVW5wYWlyQXJnc3tcclxuICAgIGlkOm51bWJlclxyXG59Il19