"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../../../../../utils/config");
var http_1 = require("@angular/common/http");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var PersalinanService = (function () {
    function PersalinanService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    PersalinanService.prototype.getpersalinan = function (id_kehamilan) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/persalinan', { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    PersalinanService.prototype.updatepersalinan = function (id_kehamilan, args) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + '/hamil/0/' + id_kehamilan + '/persalinan', args, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    PersalinanService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PersalinanService);
    return PersalinanService;
}());
exports.PersalinanService = PersalinanService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2FsaW5hbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc2FsaW5hbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHlEQUFzRDtBQUN0RCw2Q0FBZ0Q7QUFDaEQsaUZBQWdFO0FBR2hFO0lBSUksMkJBQW9CLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRSxJQUFJLGlEQUFnQixFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxZQUFtQjtRQUFqQyxpQkFRQztRQVBHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLFdBQVcsR0FBQyxZQUFZLEdBQUMsYUFBYSxFQUNwRCxFQUFDLE9BQU8sRUFBQyxlQUFNLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FDbkM7YUFDSSxLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQzthQUMxQixPQUFPLENBQUMsY0FBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsWUFBbUIsRUFBRSxJQUFRO1FBQTlDLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsV0FBVyxHQUFDLFlBQVksR0FBQyxhQUFhLEVBQ3BELElBQUksRUFDSixFQUFDLE9BQU8sRUFBQyxlQUFNLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FDbkM7YUFDSSxLQUFLLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQzthQUMxQixPQUFPLENBQUMsY0FBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUEzQlEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBS2dCLGlCQUFVO09BSjFCLGlCQUFpQixDQTZCN0I7SUFBRCx3QkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vdXRpbHMvY29uZmlnXCI7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQZXJzYWxpbmFuU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGxvYWRpbmdpbmRpY2F0b3I7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCl7XG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvcj0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcbiAgICB9XG5cbiAgICBnZXRwZXJzYWxpbmFuKGlkX2tlaGFtaWxhbjpudW1iZXIpe1xuICAgICAgICB0aGlzLmxvYWRpbmdpbmRpY2F0b3Iuc2hvdyhDb25maWcucHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8wLycraWRfa2VoYW1pbGFuKycvcGVyc2FsaW5hbicsXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxuICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goQ29uZmlnLmVycm9yQ2F0Y2hlcilcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxuICAgIH1cblxuICAgIHVwZGF0ZXBlcnNhbGluYW4oaWRfa2VoYW1pbGFuOm51bWJlciwgYXJnczphbnkpe1xuICAgICAgICB0aGlzLmxvYWRpbmdpbmRpY2F0b3Iuc2hvdyhDb25maWcucHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrJy9oYW1pbC8wLycraWRfa2VoYW1pbGFuKycvcGVyc2FsaW5hbicsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAge2hlYWRlcnM6Q29uZmlnLmNyZWF0ZUhlYWRlcnMoKX1cbiAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5lcnJvckNhdGNoZXIpXG4gICAgICAgICAgICAuZmluYWxseSgoKT0+dGhpcy5sb2FkaW5naW5kaWNhdG9yLmhpZGUoKSlcbiAgICB9XG5cbn1cbiJdfQ==