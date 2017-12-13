"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../../../../../../utils/config");
var RiwayatKeluhanService = (function () {
    function RiwayatKeluhanService(http) {
        this.http = http;
    }
    RiwayatKeluhanService.prototype.getRKeluhan = function (id_kehamilan) {
        return this.http.get(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/keluhan', { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    RiwayatKeluhanService.prototype.updateRKeluha = function (id_kehamilan, args) {
        return this.http.put(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/keluhan', args, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    RiwayatKeluhanService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RiwayatKeluhanService);
    return RiwayatKeluhanService;
}());
exports.RiwayatKeluhanService = RiwayatKeluhanService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicml3YXlhdC1rZWx1aGFuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyaXdheWF0LWtlbHVoYW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBbUM7QUFDbkMseURBQXNEO0FBR3REO0lBRUksK0JBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQUksQ0FBQztJQUVsQywyQ0FBVyxHQUFYLFVBQVksWUFBbUI7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLFdBQVcsR0FBQyxZQUFZLEdBQUMsVUFBVSxFQUNqRCxFQUFDLE9BQU8sRUFBQyxlQUFNLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FDaEM7YUFDSSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELDZDQUFhLEdBQWIsVUFBYyxZQUFtQixFQUFFLElBQVE7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLFdBQVcsR0FBQyxZQUFZLEdBQUMsVUFBVSxFQUNqRCxJQUFJLEVBQ0osRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQ2hDO2FBQ0ksR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFyQlEscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7eUNBR2dCLFdBQUk7T0FGcEIscUJBQXFCLENBdUJqQztJQUFELDRCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi91dGlscy9jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJpd2F5YXRLZWx1aGFuU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkgeyB9XG5cbiAgICBnZXRSS2VsdWhhbihpZF9rZWhhbWlsYW46bnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJKycvaGFtaWwvMC8nK2lkX2tlaGFtaWxhbisnL2tlbHVoYW4nLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuaGFuZGxlRXJyb3JzKVxuICAgIH1cblxuICAgIHVwZGF0ZVJLZWx1aGEoaWRfa2VoYW1pbGFuOm51bWJlciwgYXJnczphbnkpe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8wLycraWRfa2VoYW1pbGFuKycva2VsdWhhbicsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuaGFuZGxlRXJyb3JzKVxuICAgIH1cblxufVxuIl19