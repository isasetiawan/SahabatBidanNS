"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../../../../../utils/config");
var http_1 = require("@angular/http");
var MelahirkanService = (function () {
    function MelahirkanService(http) {
        this.http = http;
    }
    MelahirkanService.prototype.getMelahirkan = function (id_kehamilan) {
        return this.http.get(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/melahirkan', { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    MelahirkanService.prototype.updateMelahirkan = function (id_kehamilan, args) {
        return this.http.put(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/melahirkan', args, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    MelahirkanService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MelahirkanService);
    return MelahirkanService;
}());
exports.MelahirkanService = MelahirkanService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVsYWhpcmthbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVsYWhpcmthbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHlEQUFzRDtBQUN0RCxzQ0FBbUM7QUFHbkM7SUFFSSwyQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFBSSxDQUFDO0lBRWxDLHlDQUFhLEdBQWIsVUFBYyxZQUFtQjtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsV0FBVyxHQUFDLFlBQVksR0FBQyxhQUFhLEVBQ3BELEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUNoQzthQUNJLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLFlBQW1CLEVBQUUsSUFBUTtRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsV0FBVyxHQUFDLFlBQVksR0FBQyxhQUFhLEVBQ3BELElBQUksRUFDSixFQUFDLE9BQU8sRUFBQyxlQUFNLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FDaEM7YUFDSSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQXJCUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FHZ0IsV0FBSTtPQUZwQixpQkFBaUIsQ0FzQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL3V0aWxzL2NvbmZpZ1wiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVsYWhpcmthblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApIHsgfVxuXG4gICAgZ2V0TWVsYWhpcmthbihpZF9rZWhhbWlsYW46bnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJKycvaGFtaWwvMC8nK2lkX2tlaGFtaWxhbisnL21lbGFoaXJrYW4nLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuaGFuZGxlRXJyb3JzKVxuICAgIH1cblxuICAgIHVwZGF0ZU1lbGFoaXJrYW4oaWRfa2VoYW1pbGFuOm51bWJlciwgYXJnczphbnkpe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8wLycraWRfa2VoYW1pbGFuKycvbWVsYWhpcmthbicsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuaGFuZGxlRXJyb3JzKVxuICAgIH1cbn1cbiJdfQ==