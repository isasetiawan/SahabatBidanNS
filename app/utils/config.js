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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOEJBQXFDO0FBQ3JDLDBDQUEyQztBQUMzQyw2Q0FBb0U7QUFFcEUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFHbEQ7SUFBQTtJQThDQSxDQUFDO0lBakJVLG9CQUFhLEdBQXBCO1FBQ0ksSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqRCxJQUFJLE1BQU0sR0FBRztZQUNULFFBQVEsRUFBQyxJQUFJLENBQUMsTUFBTTtZQUNwQixlQUFlLEVBQUMsU0FBUyxHQUFDLFdBQVc7U0FDeEMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLGtCQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLG1CQUFZLEdBQW5CLFVBQW9CLEdBQXFCO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQWtCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQTNDRCw4Q0FBOEM7SUFDdkMsYUFBTSxHQUFHLHlDQUF5QyxDQUFDO0lBQ25ELGFBQU0sR0FBRyxrQ0FBa0MsQ0FBQztJQUU1Qyw4QkFBdUIsR0FBRztRQUM3QixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsT0FBTyxFQUFFO1lBQ0wsYUFBYSxFQUFFLElBQUk7WUFDbkIsVUFBVSxFQUFFLElBQUk7WUFDaEIsY0FBYyxFQUFFLFVBQUMsTUFBTSxJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFDaEUsWUFBWTtZQUNaLG1DQUFtQztZQUNuQywrQkFBK0I7WUFDL0IsYUFBYSxFQUFFLENBQUM7WUFDaEIsaUJBQWlCLEVBQUUsQ0FBQztTQUN2QjtRQUNELEdBQUcsRUFBRTtZQUNELE9BQU8sRUFBRSxlQUFlO1lBQ3hCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsYUFBYSxFQUFFLElBQUk7WUFDbkIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsZUFBZSxFQUFFLFFBQVE7WUFDekIsc0JBQXNCLEVBQUUsS0FBSztZQUM3QixTQUFTLEVBQUUsSUFBSTtTQUNsQjtLQUNKLENBQUM7SUFtQk4sYUFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIlxyXG5pbXBvcnQge0h0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5sZXQgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XHJcbiAgICAvLyBzdGF0aWMgdXJsQVBJID0gXCJodHRwOi8vMTAuMC4yLjI6ODAwMC9hcGlcIjtcclxuICAgIHN0YXRpYyB1cmxBUEkgPSBcImh0dHA6Ly9kZXYuYmlkYW4uc2FoYWJhdGJ1bmRha3Uub3JnL2FwaVwiO1xyXG4gICAgc3RhdGljIGtleUFQSSA9IFwiZkVaWVRKOEwySzh5OTRmbUo4Yzk0c3R4NnBsRG1MNjJcIjtcclxuXHJcbiAgICBzdGF0aWMgcHJvZ3Jlc3NfZGlhbG9nX29wdGlvbnMgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogJ01lbXByb3NlcyBkYXRhJyxcclxuICAgICAgICBwcm9ncmVzczogMC42NSxcclxuICAgICAgICBhbmRyb2lkOiB7XHJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbExpc3RlbmVyOiAoZGlhbG9nKSA9PiB7IGNvbnNvbGUubG9nKFwiTG9hZGluZyBjYW5jZWxsZWRcIikgfSxcclxuICAgICAgICAgICAgLy8gbWF4OiAxMDAsXHJcbiAgICAgICAgICAgIC8vIHByb2dyZXNzTnVtYmVyRm9ybWF0OiBcIiUxZC8lMmRcIixcclxuICAgICAgICAgICAgLy8gcHJvZ3Jlc3NQZXJjZW50Rm9ybWF0OiAwLjUzLFxyXG4gICAgICAgICAgICBwcm9ncmVzc1N0eWxlOiAxLFxyXG4gICAgICAgICAgICBzZWNvbmRhcnlQcm9ncmVzczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW9zOiB7XHJcbiAgICAgICAgICAgIGRldGFpbHM6IFwiTWVtcm9zZXMgZGF0YVwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IDEwLFxyXG4gICAgICAgICAgICBkaW1CYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjNEI5RUQ2XCIsIC8vIGNvbG9yIG9mIGluZGljYXRvciBhbmQgbGFiZWxzXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgICAgICAgICAgdXNlckludGVyYWN0aW9uRW5hYmxlZDogZmFsc2UsIC8vIGRlZmF1bHQgdHJ1ZS4gU2V0IGZhbHNlIHNvIHRoYXQgdGhlIHRvdWNoZXMgd2lsbCBmYWxsIHRocm91Z2ggaXQuXHJcbiAgICAgICAgICAgIGhpZGVCZXplbDogdHJ1ZSwgLy8gZGVmYXVsdCBmYWxzZSwgY2FuIGhpZGUgdGhlIHN1cnJvdW5kaW5nIGJlemVsXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlSGVhZGVycygpOkh0dHBIZWFkZXJze1xyXG4gICAgICAgIGxldCBzYXZlZF90b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva2VuXCIpO1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVyID0ge1xyXG4gICAgICAgICAgICBcIlNlY3JldFwiOnRoaXMua2V5QVBJLFxyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjpcIkJlYXJlciBcIitzYXZlZF90b2tlbixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKGhlYWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVycm9yQ2F0Y2hlcihlcnI6SHR0cEVycm9yUmVzcG9uc2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBoYXBwZW5lZCAke0pTT04uc3RyaW5naWZ5KGVycil9YCk7XHJcbiAgICAgICAgVG9hc3QubWFrZVRleHQoZXJyLmVycm9yLm1lc3NhZ2UpLnNob3coKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpXHJcbiAgICB9XHJcblxyXG59Il19