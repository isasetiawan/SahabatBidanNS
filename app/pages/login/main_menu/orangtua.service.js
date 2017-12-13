"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../../../utils/config");
var OrangtuaService = (function () {
    function OrangtuaService(http) {
        this.http = http;
    }
    OrangtuaService.prototype.getOrangtuas = function () {
        return this.http.get(config_1.Config.urlAPI + "/orangtua", { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    OrangtuaService.prototype.pair = function (args) {
        return this.http.post(config_1.Config.urlAPI + "/anak/pair", args, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    OrangtuaService.prototype.unpair = function (args) {
        return this.http.post(config_1.Config.urlAPI + "/anak/unpair", args, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    OrangtuaService.prototype.children = function (idortu) {
        var url = config_1.Config.urlAPI + "/orangtua/" + idortu + "/anak";
        console.log(url);
        return this.http.get(url, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    OrangtuaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], OrangtuaService);
    return OrangtuaService;
}());
exports.OrangtuaService = OrangtuaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Jhbmd0dWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yYW5ndHVhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0NBQW1DO0FBQ25DLGdEQUE2QztBQUk3QztJQUNJLHlCQUFvQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztJQUFFLENBQUM7SUFFaEMsc0NBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sR0FBQyxXQUFXLEVBQ3pCLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUNoQzthQUNJLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsOEJBQUksR0FBSixVQUFLLElBQWE7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsWUFBWSxFQUMxQixJQUFJLEVBQ0osRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQ2hDO2FBQ0ksR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sSUFBZTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsY0FBYyxFQUM1QixJQUFJLEVBQ0osRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQ2hDO2FBQ0ksR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCxrQ0FBUSxHQUFSLFVBQVMsTUFBYTtRQUNsQixJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFDLFlBQVksR0FBQyxNQUFNLEdBQUMsT0FBTyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixHQUFHLEVBQ0gsRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQ2hDO2FBQ0ksR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUF6Q1EsZUFBZTtRQUYzQixpQkFBVSxFQUFFO3lDQUdnQixXQUFJO09BRHBCLGVBQWUsQ0EwQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIE9yYW5ndHVhU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCl7fVxyXG5cclxuICAgIGdldE9yYW5ndHVhcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAgICAgICBDb25maWcudXJsQVBJK1wiL29yYW5ndHVhXCIsXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5nZXRIZWFkZXJzKCl9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmhhbmRsZUVycm9ycylcclxuICAgIH1cclxuXHJcbiAgICBwYWlyKGFyZ3M6UGFpckFyZ3Mpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9hbmFrL3BhaXJcIixcclxuICAgICAgICAgICAgYXJncyxcclxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX0sXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmhhbmRsZUVycm9ycylcclxuICAgIH1cclxuXHJcbiAgICB1bnBhaXIoYXJnczpVbnBhaXJBcmdzKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrXCIvYW5hay91bnBhaXJcIixcclxuICAgICAgICAgICAgYXJncyxcclxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX0sXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmhhbmRsZUVycm9ycylcclxuICAgIH1cclxuXHJcbiAgICBjaGlsZHJlbihpZG9ydHU6bnVtYmVyKXtcclxuICAgICAgICBsZXQgdXJsID0gQ29uZmlnLnVybEFQSStcIi9vcmFuZ3R1YS9cIitpZG9ydHUrXCIvYW5ha1wiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX1cclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuaGFuZGxlRXJyb3JzKVxyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFpckFyZ3N7XHJcbiAgICB1c2VybmFtZTpzdHJpbmc7XHJcbiAgICBwYXNzd29yZDpzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBVbnBhaXJBcmdze1xyXG4gICAgaWQ6bnVtYmVyXHJcbn0iXX0=