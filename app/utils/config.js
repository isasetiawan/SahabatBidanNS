"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx_1 = require("rxjs/Rx");
var Toast = require("nativescript-toast");
var http_1 = require("@angular/common/http");
var dialogs = require("ui/dialogs");
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
        if (err.error.content !== undefined) {
            var errors = "";
            for (var key in err.error.content) {
                errors += err.error.content[key] + "\n";
            }
            dialogs.alert({
                title: err.error.message,
                message: errors,
                okButtonText: "Ok"
            }).then(function () { });
        }
        return Rx_1.Observable.throw(err);
    };
    // static urlAPI = "http://10.0.2.2:8000/api";
    Config.urlAPI = "https://dev.bidan.sahabatbundaku.org/api";
    Config.keyAPI = "fEZYTJ8L2K8y94fmJ8c94stx6plDmL62";
    Config.progress_dialog_options = {
        message: 'Memproses data',
        progress: 0.65,
        android: {
            indeterminate: true,
            cancelable: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOEJBQXFDO0FBQ3JDLDBDQUEyQztBQUMzQyw2Q0FBb0U7QUFDcEUsb0NBQXNDO0FBRXRDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBR2xEO0lBQUE7SUEyREEsQ0FBQztJQTlCVSxvQkFBYSxHQUFwQjtRQUNJLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakQsSUFBSSxNQUFNLEdBQUc7WUFDVCxRQUFRLEVBQUMsSUFBSSxDQUFDLE1BQU07WUFDcEIsZUFBZSxFQUFDLFNBQVMsR0FBQyxXQUFXO1NBQ3hDLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxrQkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxtQkFBWSxHQUFuQixVQUFvQixHQUFxQjtRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFrQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRyxDQUFDLENBQUM7UUFDckQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXpDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDakMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztnQkFDL0IsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUM1QyxDQUFDO1lBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDVixLQUFLLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPO2dCQUN2QixPQUFPLEVBQUMsTUFBTTtnQkFDZCxZQUFZLEVBQUMsSUFBSTthQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUF4REQsOENBQThDO0lBQ3ZDLGFBQU0sR0FBRywwQ0FBMEMsQ0FBQztJQUNwRCxhQUFNLEdBQUcsa0NBQWtDLENBQUM7SUFFNUMsOEJBQXVCLEdBQUc7UUFDN0IsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLEVBQUUsSUFBSTtRQUNkLE9BQU8sRUFBRTtZQUNMLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGNBQWMsRUFBRSxVQUFDLE1BQU0sSUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQyxDQUFDO1lBQ2hFLFlBQVk7WUFDWixtQ0FBbUM7WUFDbkMsK0JBQStCO1lBQy9CLGFBQWEsRUFBRSxDQUFDO1lBQ2hCLGlCQUFpQixFQUFFLENBQUM7U0FDdkI7UUFDRCxHQUFHLEVBQUU7WUFDRCxPQUFPLEVBQUUsZUFBZTtZQUN4QixNQUFNLEVBQUUsRUFBRTtZQUNWLGFBQWEsRUFBRSxJQUFJO1lBQ25CLEtBQUssRUFBRSxTQUFTO1lBQ2hCLGVBQWUsRUFBRSxRQUFRO1lBQ3pCLHNCQUFzQixFQUFFLEtBQUs7WUFDN0IsU0FBUyxFQUFFLElBQUk7U0FDbEI7S0FDSixDQUFDO0lBZ0NOLGFBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCJcclxuaW1wb3J0IHtIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5sZXQgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XHJcbiAgICAvLyBzdGF0aWMgdXJsQVBJID0gXCJodHRwOi8vMTAuMC4yLjI6ODAwMC9hcGlcIjtcclxuICAgIHN0YXRpYyB1cmxBUEkgPSBcImh0dHBzOi8vZGV2LmJpZGFuLnNhaGFiYXRidW5kYWt1Lm9yZy9hcGlcIjtcclxuICAgIHN0YXRpYyBrZXlBUEkgPSBcImZFWllUSjhMMks4eTk0Zm1KOGM5NHN0eDZwbERtTDYyXCI7XHJcblxyXG4gICAgc3RhdGljIHByb2dyZXNzX2RpYWxvZ19vcHRpb25zID0ge1xyXG4gICAgICAgIG1lc3NhZ2U6ICdNZW1wcm9zZXMgZGF0YScsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IDAuNjUsXHJcbiAgICAgICAgYW5kcm9pZDoge1xyXG4gICAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjYW5jZWxMaXN0ZW5lcjogKGRpYWxvZykgPT4geyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgICAgICAgIC8vIG1heDogMTAwLFxyXG4gICAgICAgICAgICAvLyBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgICAgICAgIC8vIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuICAgICAgICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlvczoge1xyXG4gICAgICAgICAgICBkZXRhaWxzOiBcIk1lbXJvc2VzIGRhdGFcIixcclxuICAgICAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICAgICAgZGltQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICAgICAgY29sb3I6IFwiIzRCOUVENlwiLCAvLyBjb2xvciBvZiBpbmRpY2F0b3IgYW5kIGxhYmVsc1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXHJcbiAgICAgICAgICAgIHVzZXJJbnRlcmFjdGlvbkVuYWJsZWQ6IGZhbHNlLCAvLyBkZWZhdWx0IHRydWUuIFNldCBmYWxzZSBzbyB0aGF0IHRoZSB0b3VjaGVzIHdpbGwgZmFsbCB0aHJvdWdoIGl0LlxyXG4gICAgICAgICAgICBoaWRlQmV6ZWw6IHRydWUsIC8vIGRlZmF1bHQgZmFsc2UsIGNhbiBoaWRlIHRoZSBzdXJyb3VuZGluZyBiZXplbFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUhlYWRlcnMoKTpIdHRwSGVhZGVyc3tcclxuICAgICAgICBsZXQgc2F2ZWRfdG9rZW4gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ0b2tlblwiKTtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlciA9IHtcclxuICAgICAgICAgICAgXCJTZWNyZXRcIjp0aGlzLmtleUFQSSxcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6XCJCZWFyZXIgXCIrc2F2ZWRfdG9rZW4sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwSGVhZGVycyhoZWFkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlcnJvckNhdGNoZXIoZXJyOkh0dHBFcnJvclJlc3BvbnNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgaGFwcGVuZWQgJHtKU09OLnN0cmluZ2lmeShlcnIpfWApO1xyXG4gICAgICAgIFRvYXN0Lm1ha2VUZXh0KGVyci5lcnJvci5tZXNzYWdlKS5zaG93KCk7XHJcblxyXG4gICAgICAgIGlmIChlcnIuZXJyb3IuY29udGVudCAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgbGV0IGVycm9ycyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBlcnIuZXJyb3IuY29udGVudCl7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnMgKz0gZXJyLmVycm9yLmNvbnRlbnRba2V5XSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTplcnIuZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OlwiT2tcIlxyXG4gICAgICAgICAgICB9KS50aGVuKCgpPT57fSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpXHJcbiAgICB9XHJcblxyXG59Il19