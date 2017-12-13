"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../../../../utils/config");
var Ibuhamilservice = (function () {
    function Ibuhamilservice(http) {
        this.http = http;
    }
    Ibuhamilservice.prototype.getOrangTuas = function () {
        return this.http.get(config_1.Config.urlAPI + '/hamil/orangtua', { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    Ibuhamilservice.prototype.pair = function (args) {
        return this.http.post(config_1.Config.urlAPI + '/hamil/pair', args, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    Ibuhamilservice.prototype.unpair = function (args) {
        return this.http.post(config_1.Config.urlAPI + "/hamil/unpair", args, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    Ibuhamilservice.prototype.getPregnancies = function (idorangtua) {
        return this.http.get(config_1.Config.urlAPI + '/hamil/' + idorangtua + '/all', { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    Ibuhamilservice.prototype.addPregnancies = function (idorangtua, args) {
        return this.http.post(config_1.Config.urlAPI + '/hamil/' + idorangtua + '/add', args, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    Ibuhamilservice.prototype.editPregnancies = function (idorangtua, idhamil, args) {
        return this.http.put(config_1.Config.urlAPI + '/hamil/' + idorangtua + '/' + idhamil, args, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    Ibuhamilservice.prototype.deletePreg = function (hamil_id) {
        return this.http.delete(config_1.Config.urlAPI + '/hamil/0/' + hamil_id, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    Ibuhamilservice = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], Ibuhamilservice);
    return Ibuhamilservice;
}());
exports.Ibuhamilservice = Ibuhamilservice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWJ1aGFtaWxzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaWJ1aGFtaWxzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNDQUFtQztBQUNuQyxtREFBZ0Q7QUFHaEQ7SUFDSSx5QkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFBRSxDQUFDO0lBRWhDLHNDQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsaUJBQWlCLEVBQy9CLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUNoQzthQUNJLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsOEJBQUksR0FBSixVQUFLLElBQWE7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsYUFBYSxFQUMzQixJQUFJLEVBQ0osRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQ2hDO2FBQ0ksR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sSUFBZTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsZUFBZSxFQUM3QixJQUFJLEVBQ0osRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQ2hDO2FBQ0ksR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsVUFBaUI7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLFNBQVMsR0FBQyxVQUFVLEdBQUMsTUFBTSxFQUN6QyxFQUFDLE9BQU8sRUFBQyxlQUFNLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FDaEM7YUFDSSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxVQUFpQixFQUFFLElBQVE7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixlQUFNLENBQUMsTUFBTSxHQUFDLFNBQVMsR0FBQyxVQUFVLEdBQUMsTUFBTSxFQUN6QyxJQUFJLEVBQ0osRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQ2hDO2FBQ0ksR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLFVBQWlCLEVBQUUsT0FBYyxFQUFFLElBQVE7UUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLFNBQVMsR0FBQyxVQUFVLEdBQUMsR0FBRyxHQUFDLE9BQU8sRUFDOUMsSUFBSSxFQUNKLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUNoQzthQUNJLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLFFBQWU7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNuQixlQUFNLENBQUMsTUFBTSxHQUFDLFdBQVcsR0FBQyxRQUFRLEVBQ2xDLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUNoQzthQUNJLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBcEVRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FFZ0IsV0FBSTtPQURwQixlQUFlLENBc0UzQjtJQUFELHNCQUFDO0NBQUEsQUF0RUQsSUFzRUM7QUF0RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIElidWhhbWlsc2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCl7fVxyXG5cclxuICAgIGdldE9yYW5nVHVhcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAgICAgICBDb25maWcudXJsQVBJKycvaGFtaWwvb3Jhbmd0dWEnLFxyXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuZ2V0SGVhZGVycygpfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5oYW5kbGVFcnJvcnMpXHJcbiAgICB9XHJcblxyXG4gICAgcGFpcihhcmdzOlBhaXJBcmdzKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC9wYWlyJyxcclxuICAgICAgICAgICAgYXJncyxcclxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX1cclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuaGFuZGxlRXJyb3JzKVxyXG4gICAgfVxyXG5cclxuICAgIHVucGFpcihhcmdzOlVucGFpckFyZ3Mpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9oYW1pbC91bnBhaXJcIixcclxuICAgICAgICAgICAgYXJncyxcclxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX0sXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmhhbmRsZUVycm9ycylcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcmVnbmFuY2llcyhpZG9yYW5ndHVhOm51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8nK2lkb3Jhbmd0dWErJy9hbGwnLFxyXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuZ2V0SGVhZGVycygpfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5oYW5kbGVFcnJvcnMpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJlZ25hbmNpZXMoaWRvcmFuZ3R1YTpudW1iZXIsIGFyZ3M6YW55KXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8nK2lkb3Jhbmd0dWErJy9hZGQnLFxyXG4gICAgICAgICAgICBhcmdzLFxyXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuZ2V0SGVhZGVycygpfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5oYW5kbGVFcnJvcnMpXHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFByZWduYW5jaWVzKGlkb3Jhbmd0dWE6bnVtYmVyLCBpZGhhbWlsOm51bWJlciwgYXJnczphbnkpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxyXG4gICAgICAgICAgICBDb25maWcudXJsQVBJKycvaGFtaWwvJytpZG9yYW5ndHVhKycvJytpZGhhbWlsLFxyXG4gICAgICAgICAgICBhcmdzLFxyXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuZ2V0SGVhZGVycygpfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5oYW5kbGVFcnJvcnMpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUHJlZyhoYW1pbF9pZDpudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxyXG4gICAgICAgICAgICBDb25maWcudXJsQVBJKycvaGFtaWwvMC8nK2hhbWlsX2lkLFxyXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuZ2V0SGVhZGVycygpfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5oYW5kbGVFcnJvcnMpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFpckFyZ3N7XHJcbiAgICB1c2VybmFtZTpzdHJpbmc7XHJcbiAgICBwYXNzd29yZDpzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBVbnBhaXJBcmdze1xyXG4gICAgaWQ6bnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBBZGRIYW1pbEFyZ3N7XHJcbiAgICBoYW1pbF9rZTpudW1iZXIsXHJcbiAgICBIUEhUOnN0cmluZyxcclxuICAgIGlzX2Ryb3BvdXQ6bnVtYmVyLFxyXG59Il19