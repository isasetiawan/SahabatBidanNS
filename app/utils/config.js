"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var appSettings = require("application-settings");
var Config = (function () {
    function Config() {
    }
    Config.getHeaders = function () {
        var saved_token = appSettings.getString("token");
        var headers = new http_1.Headers();
        headers.append("Secret", this.keyAPI);
        headers.append("Authorization", "Bearer " + saved_token);
        headers.append("Content-Type", "application/json");
        return headers;
    };
    Config.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    Config.urlAPI = "http://dev.bidan.sahabatbundaku.org/api";
    Config.keyAPI = "fEZYTJ8L2K8y94fmJ8c94stx6plDmL62";
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZDO0FBQzdDLDhCQUFxQztBQUdyQyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUdsRDtJQUFBO0lBbUJBLENBQUM7SUFmVSxpQkFBVSxHQUFqQjtRQUNJLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBR00sbUJBQVksR0FBbkIsVUFBb0IsS0FBYztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBaEJNLGFBQU0sR0FBRyx5Q0FBeUMsQ0FBQztJQUNuRCxhQUFNLEdBQUcsa0NBQWtDLENBQUM7SUFpQnZELGFBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCJcclxuXHJcbmxldCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcclxuICAgIHN0YXRpYyB1cmxBUEkgPSBcImh0dHA6Ly9kZXYuYmlkYW4uc2FoYWJhdGJ1bmRha3Uub3JnL2FwaVwiO1xyXG4gICAgc3RhdGljIGtleUFQSSA9IFwiZkVaWVRKOEwySzh5OTRmbUo4Yzk0c3R4NnBsRG1MNjJcIjtcclxuXHJcbiAgICBzdGF0aWMgZ2V0SGVhZGVycygpOkhlYWRlcnN7XHJcbiAgICAgICAgbGV0IHNhdmVkX3Rva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiU2VjcmV0XCIsIHRoaXMua2V5QVBJKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIrc2F2ZWRfdG9rZW4pO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGhhbmRsZUVycm9ycyhlcnJvcjpSZXNwb25zZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpXHJcbiAgICB9XHJcblxyXG59Il19