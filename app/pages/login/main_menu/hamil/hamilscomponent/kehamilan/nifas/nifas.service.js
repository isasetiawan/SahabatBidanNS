"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../../../../../../utils/config");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var http_1 = require("@angular/common/http");
var NifasService = (function () {
    function NifasService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    NifasService.prototype.list = function (id_kehamilan) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/nifas', { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    NifasService.prototype.store = function (id_kehamilan, nifas) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/nifas', nifas, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    NifasService.prototype.edit = function (id_kehamilan, id_nifas, nifas) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/nifas/' + id_nifas, nifas, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    NifasService.prototype.delete = function (id_kehamilan, id_nifas) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.delete(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/nifas/' + id_nifas, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    NifasService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], NifasService);
    return NifasService;
}());
exports.NifasService = NifasService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmlmYXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5pZmFzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNERBQXlEO0FBRXpELGlGQUFnRTtBQUNoRSw2Q0FBZ0Q7QUFJaEQ7SUFJSSxzQkFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFFLElBQUksaURBQWdCLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLFlBQW1CO1FBQXhCLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsV0FBVyxHQUFDLFlBQVksR0FBQyxRQUFRLEVBQy9DLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUNuQzthQUNJLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxjQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELDRCQUFLLEdBQUwsVUFBTSxZQUFtQixFQUFFLEtBQVc7UUFBdEMsaUJBU0M7UUFSRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsZUFBTSxDQUFDLE1BQU0sR0FBQyxXQUFXLEdBQUMsWUFBWSxHQUFDLFFBQVEsRUFDL0MsS0FBSyxFQUNMLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUNuQzthQUNJLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxjQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxZQUFtQixFQUFFLFFBQWUsRUFBRSxLQUFXO1FBQXRELGlCQVNDO1FBUkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsV0FBVyxHQUFDLFlBQVksR0FBQyxTQUFTLEdBQUMsUUFBUSxFQUN6RCxLQUFLLEVBQ0wsRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQ25DO2FBQ0ksS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUM7YUFDMUIsT0FBTyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLFlBQW1CLEVBQUUsUUFBZTtRQUEzQyxpQkFRQztRQVBHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUNuQixlQUFNLENBQUMsTUFBTSxHQUFDLFdBQVcsR0FBQyxZQUFZLEdBQUMsU0FBUyxHQUFDLFFBQVEsRUFDekQsRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQ25DO2FBQ0ksS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUM7YUFDMUIsT0FBTyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBaERRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FLZ0IsaUJBQVU7T0FKMUIsWUFBWSxDQWtEeEI7SUFBRCxtQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlscy9jb25maWdcIjtcbmltcG9ydCB7IE5pZmFzIH0gZnJvbSAnLi9OaWZhcyc7XG5pbXBvcnQge0xvYWRpbmdJbmRpY2F0b3J9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5pZmFzU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGxvYWRpbmdpbmRpY2F0b3I7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCl7XG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvcj0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcbiAgICB9XG5cbiAgICBsaXN0KGlkX2tlaGFtaWxhbjpudW1iZXIpe1xuICAgICAgICB0aGlzLmxvYWRpbmdpbmRpY2F0b3Iuc2hvdyhDb25maWcucHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8wLycraWRfa2VoYW1pbGFuKycvbmlmYXMnLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmNyZWF0ZUhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5lcnJvckNhdGNoZXIpXG4gICAgICAgICAgICAuZmluYWxseSgoKT0+dGhpcy5sb2FkaW5naW5kaWNhdG9yLmhpZGUoKSlcbiAgICB9XG5cbiAgICBzdG9yZShpZF9rZWhhbWlsYW46bnVtYmVyLCBuaWZhczpOaWZhcyl7XG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5zaG93KENvbmZpZy5wcm9ncmVzc19kaWFsb2dfb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8wLycraWRfa2VoYW1pbGFuKycvbmlmYXMnLFxuICAgICAgICAgICAgbmlmYXMsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmVycm9yQ2F0Y2hlcilcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxuICAgIH1cblxuICAgIGVkaXQoaWRfa2VoYW1pbGFuOm51bWJlciwgaWRfbmlmYXM6bnVtYmVyLCBuaWZhczpOaWZhcyl7XG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5zaG93KENvbmZpZy5wcm9ncmVzc19kaWFsb2dfb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSSsnL2hhbWlsLzAvJytpZF9rZWhhbWlsYW4rJy9uaWZhcy8nK2lkX25pZmFzLFxuICAgICAgICAgICAgbmlmYXMsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmVycm9yQ2F0Y2hlcilcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxuICAgIH1cblxuICAgIGRlbGV0ZShpZF9rZWhhbWlsYW46bnVtYmVyLCBpZF9uaWZhczpudW1iZXIpe1xuICAgICAgICB0aGlzLmxvYWRpbmdpbmRpY2F0b3Iuc2hvdyhDb25maWcucHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8wLycraWRfa2VoYW1pbGFuKycvbmlmYXMvJytpZF9uaWZhcyxcbiAgICAgICAgICAgIHtoZWFkZXJzOkNvbmZpZy5jcmVhdGVIZWFkZXJzKCl9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaChDb25maWcuZXJyb3JDYXRjaGVyKVxuICAgICAgICAgICAgLmZpbmFsbHkoKCk9PnRoaXMubG9hZGluZ2luZGljYXRvci5oaWRlKCkpXG4gICAgfVxuXG59XG4iXX0=