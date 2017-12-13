"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../../../../../../utils/config");
var RiwayatKehamilanService = (function () {
    function RiwayatKehamilanService(http) {
        this.http = http;
    }
    RiwayatKehamilanService.prototype.getRKehamilan = function (id_kehamilan) {
        return this.http.get(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/riwayat', { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    RiwayatKehamilanService.prototype.updateRkehamilan = function (id_kehamilan, args) {
        return this.http.put(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/riwayat', args, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    RiwayatKehamilanService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RiwayatKehamilanService);
    return RiwayatKehamilanService;
}());
exports.RiwayatKehamilanService = RiwayatKehamilanService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicml3YXlhdC1rZWhhbWlsYW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJpd2F5YXQta2VoYW1pbGFuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQW1DO0FBQ25DLHlEQUFzRDtBQUd0RDtJQUNJLGlDQUFvQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztJQUFJLENBQUM7SUFFbEMsK0NBQWEsR0FBYixVQUFjLFlBQW1CO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sR0FBQyxXQUFXLEdBQUMsWUFBWSxHQUFDLFVBQVUsRUFDakQsRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQ2hDO2FBQ0ksR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCxrREFBZ0IsR0FBaEIsVUFBaUIsWUFBbUIsRUFBRSxJQUFRO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sR0FBQyxXQUFXLEdBQUMsWUFBWSxHQUFDLFVBQVUsRUFDakQsSUFBSSxFQUNKLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUNoQzthQUNJLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBcEJRLHVCQUF1QjtRQURuQyxpQkFBVSxFQUFFO3lDQUVnQixXQUFJO09BRHBCLHVCQUF1QixDQXNCbkM7SUFBRCw4QkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vdXRpbHMvY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSaXdheWF0S2VoYW1pbGFuU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApIHsgfVxuXG4gICAgZ2V0UktlaGFtaWxhbihpZF9rZWhhbWlsYW46bnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJKycvaGFtaWwvMC8nK2lkX2tlaGFtaWxhbisnL3Jpd2F5YXQnLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuaGFuZGxlRXJyb3JzKVxuICAgIH1cblxuICAgIHVwZGF0ZVJrZWhhbWlsYW4oaWRfa2VoYW1pbGFuOm51bWJlciwgYXJnczphbnkpe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8wLycraWRfa2VoYW1pbGFuKycvcml3YXlhdCcsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuaGFuZGxlRXJyb3JzKVxuICAgIH1cblxufVxuIl19