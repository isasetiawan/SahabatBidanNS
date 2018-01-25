"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx_1 = require("rxjs/Rx");
var Toast = require("nativescript-toast");
var http_1 = require("@angular/common/http");
var appSettings = require("application-settings");
var Config = (function () {
    function Config() {
    }
    Config.createHeaders = function () {
        var saved_token = appSettings.getString("token");
        var header = {
            "Secret": this.keyAPI,
            "Authorization": "Bearer " + saved_token,
        };
        return new http_1.HttpHeaders(header);
    };
    Config.errorCatcher = function (err) {
        console.log("error happened " + JSON.stringify(err));
        Toast.makeText(err.error.message).show();
        return Rx_1.Observable.throw(err);
    };
    Config.urlAPI = "http://10.0.2.2:8000/api";
    Config.keyAPI = "fEZYTJ8L2K8y94fmJ8c94stx6plDmL62";
    Config.progress_dialog_options = {
        message: 'Memproses data',
        progress: 0.65,
        android: {
            indeterminate: true,
            cancelable: false,
            cancelListener: function (dialog) { console.log("Loading cancelled"); },
            // max: 100,
            // progressNumberFormat: "%1d/%2d",
            // progressPercentFormat: 0.53,
            progressStyle: 1,
            secondaryProgress: 1
        },
        ios: {
            details: "Memroses data",
            margin: 10,
            dimBackground: true,
            color: "#4B9ED6",
            backgroundColor: "yellow",
            userInteractionEnabled: false,
            hideBezel: true,
        }
    };
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOEJBQXFDO0FBQ3JDLDBDQUEyQztBQUMzQyw2Q0FBb0U7QUFFcEUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFHbEQ7SUFBQTtJQTZDQSxDQUFDO0lBakJVLG9CQUFhLEdBQXBCO1FBQ0ksSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqRCxJQUFJLE1BQU0sR0FBRztZQUNULFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTTtZQUNwQixlQUFlLEVBQUMsU0FBUyxHQUFDLFdBQVc7U0FDeEMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLGtCQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLG1CQUFZLEdBQW5CLFVBQW9CLEdBQXFCO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQWtCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQTFDTSxhQUFNLEdBQUcsMEJBQTBCLENBQUM7SUFDcEMsYUFBTSxHQUFHLGtDQUFrQyxDQUFDO0lBRTVDLDhCQUF1QixHQUFHO1FBQzdCLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLElBQUk7UUFDZCxPQUFPLEVBQUU7WUFDTCxhQUFhLEVBQUUsSUFBSTtZQUNuQixVQUFVLEVBQUUsS0FBSztZQUNqQixjQUFjLEVBQUUsVUFBQyxNQUFNLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztZQUNoRSxZQUFZO1lBQ1osbUNBQW1DO1lBQ25DLCtCQUErQjtZQUMvQixhQUFhLEVBQUUsQ0FBQztZQUNoQixpQkFBaUIsRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsR0FBRyxFQUFFO1lBQ0QsT0FBTyxFQUFFLGVBQWU7WUFDeEIsTUFBTSxFQUFFLEVBQUU7WUFDVixhQUFhLEVBQUUsSUFBSTtZQUNuQixLQUFLLEVBQUUsU0FBUztZQUNoQixlQUFlLEVBQUUsUUFBUTtZQUN6QixzQkFBc0IsRUFBRSxLQUFLO1lBQzdCLFNBQVMsRUFBRSxJQUFJO1NBQ2xCO0tBQ0osQ0FBQztJQW1CTixhQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7QUE3Q1ksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiXHJcbmltcG9ydCB7SHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmxldCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcclxuICAgIHN0YXRpYyB1cmxBUEkgPSBcImh0dHA6Ly8xMC4wLjIuMjo4MDAwL2FwaVwiO1xyXG4gICAgc3RhdGljIGtleUFQSSA9IFwiZkVaWVRKOEwySzh5OTRmbUo4Yzk0c3R4NnBsRG1MNjJcIjtcclxuXHJcbiAgICBzdGF0aWMgcHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogJ01lbXByb3NlcyBkYXRhJyxcclxuICAgICAgICBwcm9ncmVzczogMC42NSxcclxuICAgICAgICBhbmRyb2lkOiB7XHJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWxMaXN0ZW5lcjogKGRpYWxvZykgPT4geyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgICAgICAgIC8vIG1heDogMTAwLFxyXG4gICAgICAgICAgICAvLyBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgICAgICAgIC8vIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuICAgICAgICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlvczoge1xyXG4gICAgICAgICAgICBkZXRhaWxzOiBcIk1lbXJvc2VzIGRhdGFcIixcclxuICAgICAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICAgICAgZGltQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICAgICAgY29sb3I6IFwiIzRCOUVENlwiLCAvLyBjb2xvciBvZiBpbmRpY2F0b3IgYW5kIGxhYmVsc1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXHJcbiAgICAgICAgICAgIHVzZXJJbnRlcmFjdGlvbkVuYWJsZWQ6IGZhbHNlLCAvLyBkZWZhdWx0IHRydWUuIFNldCBmYWxzZSBzbyB0aGF0IHRoZSB0b3VjaGVzIHdpbGwgZmFsbCB0aHJvdWdoIGl0LlxyXG4gICAgICAgICAgICBoaWRlQmV6ZWw6IHRydWUsIC8vIGRlZmF1bHQgZmFsc2UsIGNhbiBoaWRlIHRoZSBzdXJyb3VuZGluZyBiZXplbFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUhlYWRlcnMoKTpIdHRwSGVhZGVyc3tcclxuICAgICAgICBsZXQgc2F2ZWRfdG9rZW4gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tlblwiKTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlciA9IHtcclxuICAgICAgICAgICAgXCJTZWNyZXRcIjp0aGlzLmtleUFQSSxcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6XCJCZWFyZXIgXCIrc2F2ZWRfdG9rZW4sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycyhoZWFkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlcnJvckNhdGNoZXIoZXJyOkh0dHBFcnJvclJlc3BvbnNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgaGFwcGVuZWQgJHtKU09OLnN0cmluZ2lmeShlcnIpfWApO1xyXG4gICAgICAgIFRvYXN0Lm1ha2VUZXh0KGVyci5lcnJvci5tZXNzYWdlKS5zaG93KCk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKVxyXG4gICAgfVxyXG5cclxufSJdfQ==