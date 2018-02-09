"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../../../../../utils/config");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var KembangService = (function () {
    function KembangService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    KembangService.prototype.index = function (anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        var url = config_1.Config.urlAPI + "/orangtua/0/anak/" + anak.id + "/kembang/all";
        return this.http.get(url, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KembangService.prototype.validate = function (id_kembang) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + "/orangtua/0/anak/0/kembang/" + id_kembang + "/validate", {}, { headers: config_1.Config.createHeaders() })
            .catch(config_1.Config.errorCatcher)
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KembangService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], KembangService);
    return KembangService;
}());
exports.KembangService = KembangService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VtYmFuZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsia2VtYmFuZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseURBQXNEO0FBQ3RELGlGQUFnRTtBQUNoRSw2Q0FBZ0Q7QUFFaEQsc0NBQXlDO0FBR3pDO0lBSUksd0JBQW9CLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRSxJQUFJLGlEQUFnQixFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVELDhCQUFLLEdBQUwsVUFBTSxJQUFTO1FBQWYsaUJBVUM7UUFURyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNELElBQUksR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEdBQUMsbUJBQW1CLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxjQUFjLENBQUM7UUFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixHQUFHLEVBQ0gsRUFBQyxPQUFPLEVBQUMsZUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQ25DO2FBQ0ksS0FBSyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUM7YUFDMUIsT0FBTyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQTtJQUVsRCxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLFVBQWlCO1FBQTFCLGlCQVVDO1FBVEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsNkJBQTZCLEdBQUMsVUFBVSxHQUFDLFdBQVcsRUFDbEUsRUFBRSxFQUNGLEVBQUMsT0FBTyxFQUFDLGVBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUNuQzthQUNJLEtBQUssQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDO2FBQzFCLE9BQU8sQ0FBQyxjQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLENBQUE7SUFFbEQsQ0FBQztJQTlCUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBS2dCLGlCQUFVO09BSjFCLGNBQWMsQ0FnQzFCO0lBQUQscUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vdXRpbHMvY29uZmlnXCI7XHJcbmltcG9ydCB7TG9hZGluZ0luZGljYXRvcn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge0FuYWt9IGZyb20gXCIuLi8uLi9hbmFrXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEtlbWJhbmdTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGxvYWRpbmdpbmRpY2F0b3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvcj0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmRleChhbmFrOkFuYWspe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5zaG93KENvbmZpZy5wcm9ncmVzc19kaWFsb2dfb3B0aW9ucyk7XHJcbiAgICAgICAgbGV0IHVybCA9IENvbmZpZy51cmxBUEkrXCIvb3Jhbmd0dWEvMC9hbmFrL1wiK2FuYWsuaWQrXCIva2VtYmFuZy9hbGxcIjtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5lcnJvckNhdGNoZXIpXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShpZF9rZW1iYW5nOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ2luZGljYXRvci5zaG93KENvbmZpZy5wcm9ncmVzc19kaWFsb2dfb3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXHJcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrXCIvb3Jhbmd0dWEvMC9hbmFrLzAva2VtYmFuZy9cIitpZF9rZW1iYW5nK1wiL3ZhbGlkYXRlXCIsXHJcbiAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICB7aGVhZGVyczpDb25maWcuY3JlYXRlSGVhZGVycygpfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKENvbmZpZy5lcnJvckNhdGNoZXIpXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpPT50aGlzLmxvYWRpbmdpbmRpY2F0b3IuaGlkZSgpKVxyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=