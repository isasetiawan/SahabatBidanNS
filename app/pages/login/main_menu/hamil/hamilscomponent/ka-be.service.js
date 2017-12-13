"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../../../../utils/config");
var http_1 = require("@angular/http");
var KaBeService = (function () {
    function KaBeService(http) {
        this.http = http;
    }
    KaBeService.prototype.getKabe = function (idortu) {
        return this.http.get(config_1.Config.urlAPI + '/hamil/' + idortu + '/kb', { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    KaBeService.prototype.editKabe = function (idortu, kabe) {
        return this.http.put(config_1.Config.urlAPI + '/hamil/' + idortu + '/kb', kabe, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    KaBeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], KaBeService);
    return KaBeService;
}());
exports.KaBeService = KaBeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2EtYmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImthLWJlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0RBQW1EO0FBQ25ELHNDQUFtQztBQUduQztJQUVFLHFCQUFvQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztJQUFJLENBQUM7SUFFaEMsNkJBQU8sR0FBUCxVQUFRLE1BQWE7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLFNBQVMsR0FBQyxNQUFNLEdBQUMsS0FBSyxFQUNwQyxFQUFDLE9BQU8sRUFBQyxlQUFNLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FDaEM7YUFDSSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxNQUFhLEVBQUUsSUFBUTtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsU0FBUyxHQUFDLE1BQU0sR0FBQyxLQUFLLEVBQ3BDLElBQUksRUFDSixFQUFDLE9BQU8sRUFBQyxlQUFNLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FDaEM7YUFDSSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQXJCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBR2MsV0FBSTtPQUZsQixXQUFXLENBdUJ2QjtJQUFELGtCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvbmZpZ1wiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS2FCZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKSB7IH1cblxuICAgIGdldEthYmUoaWRvcnR1Om51bWJlcil7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSSsnL2hhbWlsLycraWRvcnR1Kycva2InLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuaGFuZGxlRXJyb3JzKVxuICAgIH1cblxuICAgIGVkaXRLYWJlKGlkb3J0dTpudW1iZXIsIGthYmU6YW55KXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJKycvaGFtaWwvJytpZG9ydHUrJy9rYicsXG4gICAgICAgICAgICBrYWJlLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuaGFuZGxlRXJyb3JzKVxuICAgIH1cblxufVxuIl19