"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../../../../../utils/config");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var http_1 = require("@angular/common/http");
var TumbuhService = (function () {
    function TumbuhService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    TumbuhService.prototype.show = function (id_anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/orangtua/0/anak/" + id_anak + "/all", { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService.prototype.tbu = function (id_anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/orangtua/0/anak/" + id_anak + "/tbu", { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService.prototype.bbu = function (id_anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/orangtua/0/anak/" + id_anak + "/bbu", { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService.prototype.tbbb = function (id_anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/orangtua/0/anak/" + id_anak + "/tbbb", { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService.prototype.store = function (id_anak, tumbuh) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/orangtua/0/anak/" + id_anak + "/tumbuh", tumbuh, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService.prototype.update = function (id_anak, tumbuh) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + "/orangtua/0/anak/" + id_anak + "/tumbuh/" + tumbuh.id, tumbuh, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService.prototype.validasi = function (id_tumbuh) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + "/orangtua/0/anak/0/tumbuh/" + id_tumbuh + "/validate", { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService.prototype.delete = function (id_tumbuh) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.delete(config_1.Config.urlAPI + "/orangtua/0/anak/0/tumbuh/" + id_tumbuh, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TumbuhService);
    return TumbuhService;
}());
exports.TumbuhService = TumbuhService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVtYnVoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0dW1idWguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyx5REFBc0Q7QUFFdEQsaUZBQWdFO0FBQ2hFLDZDQUFnRDtBQUdoRDtJQUlJLHVCQUFvQixJQUFlO1FBQWYsU0FBSSxHQUFKLElBQUksQ0FBVztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUUsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssT0FBYztRQUFuQixpQkFRQztRQVBHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLG1CQUFtQixHQUFDLE9BQU8sR0FBQyxNQUFNLEVBQ2hELEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUNuQzthQUNJLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxjQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELDJCQUFHLEdBQUgsVUFBSSxPQUFjO1FBQWxCLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsbUJBQW1CLEdBQUMsT0FBTyxHQUFDLE1BQU0sRUFDaEQsRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQ25DO2FBQ0ks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LENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sR0FBQyw0QkFBNEIsR0FBQyxTQUFTLEdBQUMsV0FBVyxFQUNoRSxFQUFDLE9BQU8sRUFBQyxlQUFNLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FDbkM7YUFDSSxLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQzthQUMxQixPQUFPLENBQUMsY0FBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sU0FBZ0I7UUFBdkIsaUJBUUM7UUFQRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FDbkIsZUFBTSxDQUFDLE1BQU0sR0FBQyw0QkFBNEIsR0FBQyxTQUFTLEVBQ3BELEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUNuQzthQUNJLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxjQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLENBQUE7SUFDbEQsQ0FBQztJQXhGUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBS2dCLGlCQUFVO09BSjFCLGFBQWEsQ0EwRnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTFGRCxJQTBGQztBQTFGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vdXRpbHMvY29uZmlnXCI7XG5pbXBvcnQge1R1bWJ1aH0gZnJvbSBcIi4vdHVtYnVoXCI7XG5pbXBvcnQge0xvYWRpbmdJbmRpY2F0b3J9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUdW1idWhTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgbG9hZGluZ2luZGljYXRvcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KXtcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xuICAgIH1cblxuICAgIHNob3coaWRfYW5hazpudW1iZXIpe1xuICAgICAgICB0aGlzLmxvYWRpbmdpbmRpY2F0b3Iuc2hvdyhDb25maWcucHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrXCIvb3Jhbmd0dWEvMC9hbmFrL1wiK2lkX2FuYWsrXCIvYWxsXCIsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmVycm9yQ2F0Y2hlcilcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxuICAgIH1cblxuICAgIHRidShpZF9hbmFrOm51bWJlcil7XG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5zaG93KENvbmZpZy5wcm9ncmVzc19kaWFsb2dfb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9vcmFuZ3R1YS8wL2FuYWsvXCIraWRfYW5haytcIi90YnVcIixcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5jcmVhdGVIZWFkZXJzKCl9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuZXJyb3JDYXRjaGVyKVxuICAgICAgICAgICAgLmZpbmFsbHkoKCk9PnRoaXMubG9hZGluZ2luZGljYXRvci5oaWRlKCkpXG4gICAgfVxuXG4gICAgYmJ1KGlkX2FuYWs6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yLnNob3coQ29uZmlnLnByb2dyZXNzX2RpYWxvZ19vcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJK1wiL29yYW5ndHVhLzAvYW5hay9cIitpZF9hbmFrK1wiL2JidVwiLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmNyZWF0ZUhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5lcnJvckNhdGNoZXIpXG4gICAgICAgICAgICAuZmluYWxseSgoKT0+dGhpcy5sb2FkaW5naW5kaWNhdG9yLmhpZGUoKSlcbiAgICB9XG5cbiAgICB0YmJiKGlkX2FuYWs6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yLnNob3coQ29uZmlnLnByb2dyZXNzX2RpYWxvZ19vcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJK1wiL29yYW5ndHVhLzAvYW5hay9cIitpZF9hbmFrK1wiL3RiYmJcIixcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5jcmVhdGVIZWFkZXJzKCl9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuZXJyb3JDYXRjaGVyKVxuICAgICAgICAgICAgLmZpbmFsbHkoKCk9PnRoaXMubG9hZGluZ2luZGljYXRvci5oaWRlKCkpXG4gICAgfVxuXG4gICAgc3RvcmUoaWRfYW5hazpudW1iZXIsIHR1bWJ1aDphbnkpe1xuICAgICAgICB0aGlzLmxvYWRpbmdpbmRpY2F0b3Iuc2hvdyhDb25maWcucHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJK1wiL29yYW5ndHVhLzAvYW5hay9cIitpZF9hbmFrK1wiL3R1bWJ1aFwiLFxuICAgICAgICAgICAgdHVtYnVoLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmNyZWF0ZUhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5lcnJvckNhdGNoZXIpXG4gICAgICAgICAgICAuZmluYWxseSgoKT0+dGhpcy5sb2FkaW5naW5kaWNhdG9yLmhpZGUoKSlcbiAgICB9XG5cbiAgICB1cGRhdGUoaWRfYW5hazpudW1iZXIsIHR1bWJ1aDpUdW1idWgpe1xuICAgICAgICB0aGlzLmxvYWRpbmdpbmRpY2F0b3Iuc2hvdyhDb25maWcucHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrXCIvb3Jhbmd0dWEvMC9hbmFrL1wiK2lkX2FuYWsrXCIvdHVtYnVoL1wiK3R1bWJ1aC5pZCxcbiAgICAgICAgICAgIHR1bWJ1aCxcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5jcmVhdGVIZWFkZXJzKCl9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuZXJyb3JDYXRjaGVyKVxuICAgICAgICAgICAgLmZpbmFsbHkoKCk9PnRoaXMubG9hZGluZ2luZGljYXRvci5oaWRlKCkpXG4gICAgfVxuXG4gICAgdmFsaWRhc2koaWRfdHVtYnVoOm51bWJlcil7XG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5zaG93KENvbmZpZy5wcm9ncmVzc19kaWFsb2dfb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9vcmFuZ3R1YS8wL2FuYWsvMC90dW1idWgvXCIraWRfdHVtYnVoK1wiL3ZhbGlkYXRlXCIsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmVycm9yQ2F0Y2hlcilcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxuICAgIH1cblxuICAgIGRlbGV0ZShpZF90dW1idWg6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5sb2FkaW5naW5kaWNhdG9yLnNob3coQ29uZmlnLnByb2dyZXNzX2RpYWxvZ19vcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJK1wiL29yYW5ndHVhLzAvYW5hay8wL3R1bWJ1aC9cIitpZF90dW1idWgsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmVycm9yQ2F0Y2hlcilcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxuICAgIH1cblxufVxuIl19