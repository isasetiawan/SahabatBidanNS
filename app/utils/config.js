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
    // static urlAPI = "http://10.0.2.2:8000/api";
    Config.urlAPI = "http://dev.bidan.sahabatbundaku.org/api";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOEJBQXFDO0FBQ3JDLDBDQUEyQztBQUMzQyw2Q0FBb0U7QUFFcEUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFHbEQ7SUFBQTtJQThDQSxDQUFDO0lBakJVLG9CQUFhLEdBQXBCO1FBQ0ksSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqRCxJQUFJLE1BQU0sR0FBRztZQUNULFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTTtZQUNwQixlQUFlLEVBQUMsU0FBUyxHQUFDLFdBQVc7U0FDeEMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLGtCQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLG1CQUFZLEdBQW5CLFVBQW9CLEdBQXFCO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQWtCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQTNDRCw4Q0FBOEM7SUFDdkMsYUFBTSxHQUFHLHlDQUF5QyxDQUFDO0lBQ25ELGFBQU0sR0FBRyxrQ0FBa0MsQ0FBQztJQUU1Qyw4QkFBdUIsR0FBRztRQUM3QixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsT0FBTyxFQUFFO1lBQ0wsYUFBYSxFQUFFLElBQUk7WUFDbkIsVUFBVSxFQUFFLEtBQUs7WUFDakIsY0FBYyxFQUFFLFVBQUMsTUFBTSxJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFDaEUsWUFBWTtZQUNaLG1DQUFtQztZQUNuQywrQkFBK0I7WUFDL0IsYUFBYSxFQUFFLENBQUM7WUFDaEIsaUJBQWlCLEVBQUUsQ0FBQztTQUN2QjtRQUNELEdBQUcsRUFBRTtZQUNELE9BQU8sRUFBRSxlQUFlO1lBQ3hCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsYUFBYSxFQUFFLElBQUk7WUFDbkIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsZUFBZSxFQUFFLFFBQVE7WUFDekIsc0JBQXNCLEVBQUUsS0FBSztZQUM3QixTQUFTLEVBQUUsSUFBSTtTQUNsQjtLQUNKLENBQUM7SUFtQk4sYUFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIlxyXG5pbXBvcnQge0h0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5sZXQgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XHJcbiAgICAvLyBzdGF0aWMgdXJsQVBJID0gXCJodHRwOi8vMTAuMC4yLjI6ODAwMC9hcGlcIjtcclxuICAgIHN0YXRpYyB1cmxBUEkgPSBcImh0dHA6Ly9kZXYuYmlkYW4uc2FoYWJhdGJ1bmRha3Uub3JnL2FwaVwiO1xyXG4gICAgc3RhdGljIGtleUFQSSA9IFwiZkVaWVRKOEwySzh5OTRmbUo4Yzk0c3R4NnBsRG1MNjJcIjtcclxuXHJcbiAgICBzdGF0aWMgcHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogJ01lbXByb3NlcyBkYXRhJyxcclxuICAgICAgICBwcm9ncmVzczogMC42NSxcclxuICAgICAgICBhbmRyb2lkOiB7XHJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWxMaXN0ZW5lcjogKGRpYWxvZykgPT4geyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgICAgICAgIC8vIG1heDogMTAwLFxyXG4gICAgICAgICAgICAvLyBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgICAgICAgIC8vIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuICAgICAgICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlvczoge1xyXG4gICAgICAgICAgICBkZXRhaWxzOiBcIk1lbXJvc2VzIGRhdGFcIixcclxuICAgICAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICAgICAgZGltQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICAgICAgY29sb3I6IFwiIzRCOUVENlwiLCAvLyBjb2xvciBvZiBpbmRpY2F0b3IgYW5kIGxhYmVsc1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXHJcbiAgICAgICAgICAgIHVzZXJJbnRlcmFjdGlvbkVuYWJsZWQ6IGZhbHNlLCAvLyBkZWZhdWx0IHRydWUuIFNldCBmYWxzZSBzbyB0aGF0IHRoZSB0b3VjaGVzIHdpbGwgZmFsbCB0aHJvdWdoIGl0LlxyXG4gICAgICAgICAgICBoaWRlQmV6ZWw6IHRydWUsIC8vIGRlZmF1bHQgZmFsc2UsIGNhbiBoaWRlIHRoZSBzdXJyb3VuZGluZyBiZXplbFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUhlYWRlcnMoKTpIdHRwSGVhZGVyc3tcclxuICAgICAgICBsZXQgc2F2ZWRfdG9rZW4gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tlblwiKTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlciA9IHtcclxuICAgICAgICAgICAgXCJTZWNyZXRcIjp0aGlzLmtleUFQSSxcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6XCJCZWFyZXIgXCIrc2F2ZWRfdG9rZW4sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycyhoZWFkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlcnJvckNhdGNoZXIoZXJyOkh0dHBFcnJvclJlc3BvbnNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgaGFwcGVuZWQgJHtKU09OLnN0cmluZ2lmeShlcnIpfWApO1xyXG4gICAgICAgIFRvYXN0Lm1ha2VUZXh0KGVyci5lcnJvci5tZXNzYWdlKS5zaG93KCk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKVxyXG4gICAgfVxyXG5cclxufSJdfQ==