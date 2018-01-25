"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../../../../../utils/config");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var http_1 = require("@angular/common/http");
var KesehatanService = (function () {
    function KesehatanService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    KesehatanService.prototype.index = function (anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/orangtua/0/anak/" + anak.id + "/kesehatan/all", { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KesehatanService.prototype.store = function (data) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/orangtua/0/anak/" + data.anak_id + "/kesehatan", data, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KesehatanService.prototype.edit = function (data) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + "/orangtua/0/anak/" + data.anak_id + "/kesehatan/" + data.id, data, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KesehatanService.prototype.validate = function (data) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + "/orangtua/0/anak/" + data.anak_id + "/kesehatan/" + data.id + "/validate", data, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KesehatanService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], KesehatanService);
    return KesehatanService;
}());
exports.KesehatanService = KesehatanService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VzZWhhdGFuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZXNlaGF0YW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyx5REFBc0Q7QUFHdEQsaUZBQWdFO0FBQ2hFLDZDQUFnRDtBQUdoRDtJQUlJLDBCQUFvQixJQUFlO1FBQWYsU0FBSSxHQUFKLElBQUksQ0FBVztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUUsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCxnQ0FBSyxHQUFMLFVBQU0sSUFBUztRQUFmLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsbUJBQW1CLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxnQkFBZ0IsRUFDMUQsRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQ25DO2FBQ0ksS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUM7YUFDMUIsT0FBTyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtJQUVsRCxDQUFDO0lBRUQsZ0NBQUssR0FBTCxVQUFNLElBQWM7UUFBcEIsaUJBU0M7UUFSRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsZUFBTSxDQUFDLE1BQU0sR0FBQyxtQkFBbUIsR0FBQyxJQUFJLENBQUMsT0FBTyxHQUFDLFlBQVksRUFDM0QsSUFBSSxFQUNKLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUNuQzthQUNJLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxjQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELCtCQUFJLEdBQUosVUFBSyxJQUFjO1FBQW5CLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsbUJBQW1CLEdBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLEVBQUUsRUFDcEUsSUFBSSxFQUNKLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUNuQzthQUNJLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxjQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxJQUFjO1FBQXZCLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsbUJBQW1CLEdBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxXQUFXLEVBQ2hGLElBQUksRUFDSixFQUFDLE9BQU8sRUFBQyxlQUFNLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FDbkM7YUFDSSxLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQzthQUMxQixPQUFPLENBQUMsY0FBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFsRFEsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBS2dCLGlCQUFVO09BSjFCLGdCQUFnQixDQW9ENUI7SUFBRCx1QkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7QW5ha30gZnJvbSBcIi4uLy4uL2FuYWtcIjtcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vdXRpbHMvY29uZmlnXCI7XG5pbXBvcnQgUGVtZXJpa3NhYW5WYWtzaW4gZnJvbSBcIi4uL3Zha3Npbi9QZW1lcmlrc2FhblZha3NpblwiO1xuaW1wb3J0IHtLZXNlaGF0YW59IGZyb20gXCIuL0tlc2VoYXRhblwiO1xuaW1wb3J0IHtMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS2VzZWhhdGFuU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGxvYWRpbmdpbmRpY2F0b3I7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCl7XG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvcj0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcbiAgICB9XG5cbiAgICBpbmRleChhbmFrOkFuYWspe1xuICAgICAgICB0aGlzLmxvYWRpbmdpbmRpY2F0b3Iuc2hvdyhDb25maWcucHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrXCIvb3Jhbmd0dWEvMC9hbmFrL1wiK2FuYWsuaWQrXCIva2VzZWhhdGFuL2FsbFwiLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmNyZWF0ZUhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5lcnJvckNhdGNoZXIpXG4gICAgICAgICAgICAuZmluYWxseSgoKT0+dGhpcy5sb2FkaW5naW5kaWNhdG9yLmhpZGUoKSlcblxuICAgIH1cblxuICAgIHN0b3JlKGRhdGE6S2VzZWhhdGFuKXtcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yLnNob3coQ29uZmlnLnByb2dyZXNzX2RpYWxvZ19vcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9vcmFuZ3R1YS8wL2FuYWsvXCIrZGF0YS5hbmFrX2lkK1wiL2tlc2VoYXRhblwiLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5jcmVhdGVIZWFkZXJzKCl9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuZXJyb3JDYXRjaGVyKVxuICAgICAgICAgICAgLmZpbmFsbHkoKCk9PnRoaXMubG9hZGluZ2luZGljYXRvci5oaWRlKCkpXG4gICAgfVxuXG4gICAgZWRpdChkYXRhOktlc2VoYXRhbil7XG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5zaG93KENvbmZpZy5wcm9ncmVzc19kaWFsb2dfb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9vcmFuZ3R1YS8wL2FuYWsvXCIrZGF0YS5hbmFrX2lkK1wiL2tlc2VoYXRhbi9cIitkYXRhLmlkLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5jcmVhdGVIZWFkZXJzKCl9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuZXJyb3JDYXRjaGVyKVxuICAgICAgICAgICAgLmZpbmFsbHkoKCk9PnRoaXMubG9hZGluZ2luZGljYXRvci5oaWRlKCkpXG4gICAgfVxuXG4gICAgdmFsaWRhdGUoZGF0YTpLZXNlaGF0YW4pe1xuICAgICAgICB0aGlzLmxvYWRpbmdpbmRpY2F0b3Iuc2hvdyhDb25maWcucHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrXCIvb3Jhbmd0dWEvMC9hbmFrL1wiK2RhdGEuYW5ha19pZCtcIi9rZXNlaGF0YW4vXCIrZGF0YS5pZCtcIi92YWxpZGF0ZVwiLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5jcmVhdGVIZWFkZXJzKCl9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuZXJyb3JDYXRjaGVyKVxuICAgICAgICAgICAgLmZpbmFsbHkoKCk9PnRoaXMubG9hZGluZ2luZGljYXRvci5oaWRlKCkpXG4gICAgfVxuXG59XG4iXX0=