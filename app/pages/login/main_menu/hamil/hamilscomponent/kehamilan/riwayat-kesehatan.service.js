"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../../../../../../utils/config");
var RiwayatKesehatanService = (function () {
    function RiwayatKesehatanService(http) {
        this.http = http;
    }
    RiwayatKesehatanService.prototype.getRKesehatan = function (id_kehamilan) {
        return this.http.get(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/kesehatan', { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    RiwayatKesehatanService.prototype.updateRKesehatan = function (id_kehamilan, args) {
        return this.http.put(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/kesehatan', args, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    RiwayatKesehatanService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RiwayatKesehatanService);
    return RiwayatKesehatanService;
}());
exports.RiwayatKesehatanService = RiwayatKesehatanService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicml3YXlhdC1rZXNlaGF0YW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJpd2F5YXQta2VzZWhhdGFuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQW1DO0FBQ25DLHlEQUFzRDtBQUd0RDtJQUVFLGlDQUNZLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQ25CLENBQUM7SUFFRCwrQ0FBYSxHQUFiLFVBQWMsWUFBbUI7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLFdBQVcsR0FBQyxZQUFZLEdBQUMsWUFBWSxFQUNuRCxFQUFDLE9BQU8sRUFBQyxlQUFNLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FDaEM7YUFDSSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELGtEQUFnQixHQUFoQixVQUFpQixZQUFtQixFQUFFLElBQVE7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLFdBQVcsR0FBQyxZQUFZLEdBQUMsWUFBWSxFQUNuRCxJQUFJLEVBQ0osRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQ2hDO2FBQ0ksR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUF2QlEsdUJBQXVCO1FBRG5DLGlCQUFVLEVBQUU7eUNBSU0sV0FBSTtPQUhWLHVCQUF1QixDQXlCbkM7SUFBRCw4QkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vdXRpbHMvY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSaXdheWF0S2VzZWhhdGFuU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGh0dHA6SHR0cFxuICApe31cblxuICAgIGdldFJLZXNlaGF0YW4oaWRfa2VoYW1pbGFuOm51bWJlcil7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSSsnL2hhbWlsLzAvJytpZF9rZWhhbWlsYW4rJy9rZXNlaGF0YW4nLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuaGFuZGxlRXJyb3JzKVxuICAgIH1cblxuICAgIHVwZGF0ZVJLZXNlaGF0YW4oaWRfa2VoYW1pbGFuOm51bWJlciwgYXJnczphbnkpe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8wLycraWRfa2VoYW1pbGFuKycva2VzZWhhdGFuJyxcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuZ2V0SGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5oYW5kbGVFcnJvcnMpXG4gICAgfVxuXG59XG4iXX0=