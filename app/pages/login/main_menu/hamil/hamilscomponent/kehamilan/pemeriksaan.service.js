"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../../../../../../utils/config");
var PemeriksaanService = (function () {
    function PemeriksaanService(http) {
        this.http = http;
    }
    PemeriksaanService.prototype.list = function (id_kehamilan) {
        return this.http.get(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/pemeriksaan', { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    PemeriksaanService.prototype.store = function (id_kehamilan, args) {
        return this.http.post(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/pemeriksaan', args, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    PemeriksaanService.prototype.update = function (id_kehamilan, id_pemeriksaan, args) {
        return this.http.put(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/pemeriksaan/' + id_pemeriksaan, args, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    PemeriksaanService.prototype.hapus = function (id_kehamilan, id_pemeriksaan) {
        return this.http.delete(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/pemeriksaan/' + id_pemeriksaan, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    PemeriksaanService.prototype.resume = function (id_orangtua, id_kehamilan, id_pemeriksaan) {
        return this.http.get(config_1.Config.urlAPI + '/hamil/' + id_orangtua + '/' + id_kehamilan + '/pemeriksaan/' + id_pemeriksaan + '/resume', { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    PemeriksaanService.prototype.tfu = function (id_kehamilan, id_pemeriksaan) {
        return this.http.get(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/pemeriksaan/' + id_pemeriksaan + '/tfu', { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    PemeriksaanService.prototype.gettindakan = function (id_kehamilan, id_pemeriksaan) {
        return this.http.get(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/pemeriksaan/' + id_pemeriksaan + '/tindakan', { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    PemeriksaanService.prototype.edittindakan = function (id_kehamilan, id_pemeriksaan, args) {
        return this.http.put(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/pemeriksaan/' + id_pemeriksaan + '/tindakan', args, { headers: config_1.Config.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(config_1.Config.handleErrors);
    };
    PemeriksaanService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PemeriksaanService);
    return PemeriksaanService;
}());
exports.PemeriksaanService = PemeriksaanService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVtZXJpa3NhYW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlbWVyaWtzYWFuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQW1DO0FBQ25DLHlEQUFzRDtBQUd0RDtJQUVJLDRCQUFvQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztJQUFFLENBQUM7SUFFaEMsaUNBQUksR0FBSixVQUFLLFlBQW1CO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sR0FBQyxXQUFXLEdBQUMsWUFBWSxHQUFDLGNBQWMsRUFDckQsRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQ2hDO2FBQ0ksR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCxrQ0FBSyxHQUFMLFVBQU0sWUFBbUIsRUFBRSxJQUFRO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsZUFBTSxDQUFDLE1BQU0sR0FBQyxXQUFXLEdBQUMsWUFBWSxHQUFDLGNBQWMsRUFDckQsSUFBSSxFQUNKLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUNoQzthQUNJLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsbUNBQU0sR0FBTixVQUFPLFlBQW1CLEVBQUUsY0FBYyxFQUFFLElBQVE7UUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJ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R0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUE3RVEsa0JBQWtCO1FBRDlCLGlCQUFVLEVBQUU7eUNBR2dCLFdBQUk7T0FGcEIsa0JBQWtCLENBK0U5QjtJQUFELHlCQUFDO0NBQUEsQUEvRUQsSUErRUM7QUEvRVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi91dGlscy9jb25maWdcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBlbWVyaWtzYWFuU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCl7fVxuXG4gICAgbGlzdChpZF9rZWhhbWlsYW46bnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJKycvaGFtaWwvMC8nK2lkX2tlaGFtaWxhbisnL3BlbWVyaWtzYWFuJyxcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5nZXRIZWFkZXJzKCl9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmhhbmRsZUVycm9ycylcbiAgICB9XG5cbiAgICBzdG9yZShpZF9rZWhhbWlsYW46bnVtYmVyLCBhcmdzOmFueSl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8wLycraWRfa2VoYW1pbGFuKycvcGVtZXJpa3NhYW4nLFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5nZXRIZWFkZXJzKCl9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmhhbmRsZUVycm9ycylcbiAgICB9XG5cbiAgICB1cGRhdGUoaWRfa2VoYW1pbGFuOm51bWJlciwgaWRfcGVtZXJpa3NhYW4sIGFyZ3M6YW55KXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJKycvaGFtaWwvMC8nK2lkX2tlaGFtaWxhbisnL3BlbWVyaWtzYWFuLycraWRfcGVtZXJpa3NhYW4sXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmdldEhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuaGFuZGxlRXJyb3JzKVxuICAgIH1cblxuICAgIGhhcHVzKGlkX2tlaGFtaWxhbjpudW1iZXIsIGlkX3BlbWVyaWtzYWFuKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJKycvaGFtaWwvMC8nK2lkX2tlaGFtaWxhbisnL3BlbWVyaWtzYWFuLycraWRfcGVtZXJpa3NhYW4sXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuZ2V0SGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5oYW5kbGVFcnJvcnMpXG4gICAgfVxuXG4gICAgcmVzdW1lKGlkX29yYW5ndHVhOm51bWJlciAsaWRfa2VoYW1pbGFuOm51bWJlciwgaWRfcGVtZXJpa3NhYW4pe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8nK2lkX29yYW5ndHVhKycvJytpZF9rZWhhbWlsYW4rJy9wZW1lcmlrc2Fhbi8nK2lkX3BlbWVyaWtzYWFuKycvcmVzdW1lJyxcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5nZXRIZWFkZXJzKCl9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmhhbmRsZUVycm9ycylcbiAgICB9XG5cbiAgICB0ZnUoaWRfa2VoYW1pbGFuOm51bWJlciwgaWRfcGVtZXJpa3NhYW4pe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8wLycraWRfa2VoYW1pbGFuKycvcGVtZXJpa3NhYW4vJytpZF9wZW1lcmlrc2FhbisnL3RmdScsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuZ2V0SGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5oYW5kbGVFcnJvcnMpXG4gICAgfVxuXG4gICAgZ2V0dGluZGFrYW4oaWRfa2VoYW1pbGFuOm51bWJlciwgaWRfcGVtZXJpa3NhYW46bnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXG4gICAgICAgICAgICBDb25maWcudXJsQVBJKycvaGFtaWwvMC8nK2lkX2tlaGFtaWxhbisnL3BlbWVyaWtzYWFuLycraWRfcGVtZXJpa3NhYW4rJy90aW5kYWthbicsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuZ2V0SGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5oYW5kbGVFcnJvcnMpXG4gICAgfVxuXG4gICAgZWRpdHRpbmRha2FuKGlkX2tlaGFtaWxhbjpudW1iZXIsIGlkX3BlbWVyaWtzYWFuOm51bWJlciwgYXJnczphbnkpe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8wLycraWRfa2VoYW1pbGFuKycvcGVtZXJpa3NhYW4vJytpZF9wZW1lcmlrc2FhbisnL3RpbmRha2FuJyxcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuZ2V0SGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5oYW5kbGVFcnJvcnMpXG4gICAgfVxuXG59XG4iXX0=