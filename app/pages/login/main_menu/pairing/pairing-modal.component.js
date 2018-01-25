"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var orangtua_service_1 = require("../orangtua.service");
var Toast = require("nativescript-toast");
var ibuhamilservice_1 = require("../ibuhamilservice");
var PairingModalComponent = (function () {
    function PairingModalComponent(ortuServ, bumilServ, params) {
        this.ortuServ = ortuServ;
        this.bumilServ = bumilServ;
        this.params = params;
        this.args = new PairArgs("", "");
        this.mode = this.params.context;
    }
    PairingModalComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.args.password, this.args.username);
        if (this.mode === "anak") {
            this.ortuServ.pair(this.args).subscribe(function (res) {
                Toast.makeText(res.message).show();
                _this.params.closeCallback();
            });
        }
        else {
            this.bumilServ.pair(this.args).subscribe(function (res) {
                Toast.makeText(res.message).show();
                _this.params.closeCallback();
            });
        }
    };
    PairingModalComponent = __decorate([
        core_1.Component({
            selector: "ns-modal-pairing",
            moduleId: module.id,
            templateUrl: "./pairing-modal.component.html",
            providers: [orangtua_service_1.OrangtuaService, ibuhamilservice_1.Ibuhamilservice]
        }),
        __metadata("design:paramtypes", [orangtua_service_1.OrangtuaService,
            ibuhamilservice_1.Ibuhamilservice,
            nativescript_angular_1.ModalDialogParams])
    ], PairingModalComponent);
    return PairingModalComponent;
}());
exports.PairingModalComponent = PairingModalComponent;
var PairArgs = (function () {
    function PairArgs(username, password) {
        this.username = username;
        this.password = password;
    }
    return PairArgs;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFpcmluZy1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWlyaW5nLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUN4Qyw2REFBdUQ7QUFDdkQsd0RBQW9EO0FBQ3BELDBDQUEyQztBQUMzQyxzREFBbUQ7QUFRbkQ7SUFLSSwrQkFDWSxRQUF3QixFQUN4QixTQUF5QixFQUN6QixNQUF3QjtRQUZ4QixhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFnQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUVoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQUEsaUJBbUJDO1FBbEJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDbkMsVUFBQSxHQUFHO2dCQUNDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDcEMsVUFBQSxHQUFHO2dCQUNDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQztJQUVMLENBQUM7SUFqQ1EscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBQyxDQUFDLGtDQUFlLEVBQUUsaUNBQWUsQ0FBQztTQUMvQyxDQUFDO3lDQU91QixrQ0FBZTtZQUNkLGlDQUFlO1lBQ2xCLHdDQUFpQjtPQVIzQixxQkFBcUIsQ0FtQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSxzREFBcUI7QUFxQ2xDO0lBSUksa0JBQVksUUFBZ0IsRUFBRSxRQUFnQjtRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUFSRCxJQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TW9kYWxEaWFsb2dQYXJhbXN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge09yYW5ndHVhU2VydmljZX0gZnJvbSBcIi4uL29yYW5ndHVhLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiXHJcbmltcG9ydCB7SWJ1aGFtaWxzZXJ2aWNlfSBmcm9tIFwiLi4vaWJ1aGFtaWxzZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLW1vZGFsLXBhaXJpbmdcIixcclxuICAgIG1vZHVsZUlkOm1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFpcmluZy1tb2RhbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOltPcmFuZ3R1YVNlcnZpY2UsIElidWhhbWlsc2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhaXJpbmdNb2RhbENvbXBvbmVudCB7XHJcblxyXG4gICAgYXJnczpQYWlyQXJncztcclxuICAgIG1vZGU6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgb3J0dVNlcnY6T3Jhbmd0dWFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYnVtaWxTZXJ2OklidWhhbWlsc2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHBhcmFtczpNb2RhbERpYWxvZ1BhcmFtc1xyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5hcmdzID0gbmV3IFBhaXJBcmdzKFwiXCIsXCJcIik7XHJcbiAgICAgICAgdGhpcy5tb2RlID0gdGhpcy5wYXJhbXMuY29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFyZ3MucGFzc3dvcmQsdGhpcy5hcmdzLnVzZXJuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gXCJhbmFrXCIpe1xyXG4gICAgICAgICAgICB0aGlzLm9ydHVTZXJ2LnBhaXIodGhpcy5hcmdzKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXM9PntcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJ1bWlsU2Vydi5wYWlyKHRoaXMuYXJncykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFBhaXJBcmdzIHtcclxuICAgIHVzZXJuYW1lOnN0cmluZztcclxuICAgIHBhc3N3b3JkOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgIH1cclxufSJdfQ==