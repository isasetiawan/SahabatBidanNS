"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var orangtua_service_1 = require("../orangtua.service");
var Toast = require("nativescript-toast");
var ibuhamilservice_1 = require("../anaks/ibuhamilservice");
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
            }, function (err) {
                Toast.makeText(err.json().message).show();
            });
        }
        else {
            this.bumilServ.pair(this.args).subscribe(function (res) {
                Toast.makeText(res.message).show();
                _this.params.closeCallback();
            }, function (err) {
                Toast.makeText(err.json().message).show();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFpcmluZy1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWlyaW5nLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUN4Qyw2REFBdUQ7QUFDdkQsd0RBQW9EO0FBQ3BELDBDQUEyQztBQUMzQyw0REFBeUQ7QUFRekQ7SUFLSSwrQkFDWSxRQUF3QixFQUN4QixTQUF5QixFQUN6QixNQUF3QjtRQUZ4QixhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFnQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUVoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQUEsaUJBeUJDO1FBeEJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDbkMsVUFBQSxHQUFHO2dCQUNDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLENBQUMsRUFDRCxVQUFBLEdBQUc7Z0JBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUNwQyxVQUFBLEdBQUc7Z0JBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDaEMsQ0FBQyxFQUNELFVBQUEsR0FBRztnQkFDQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUM7SUFFTCxDQUFDO0lBdkNRLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUMsQ0FBQyxrQ0FBZSxFQUFFLGlDQUFlLENBQUM7U0FDL0MsQ0FBQzt5Q0FPdUIsa0NBQWU7WUFDZCxpQ0FBZTtZQUNsQix3Q0FBaUI7T0FSM0IscUJBQXFCLENBeUNqQztJQUFELDRCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksc0RBQXFCO0FBMkNsQztJQUlJLGtCQUFZLFFBQWdCLEVBQUUsUUFBZ0I7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge01vZGFsRGlhbG9nUGFyYW1zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHtPcmFuZ3R1YVNlcnZpY2V9IGZyb20gXCIuLi9vcmFuZ3R1YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIlxyXG5pbXBvcnQge0lidWhhbWlsc2VydmljZX0gZnJvbSBcIi4uL2FuYWtzL2lidWhhbWlsc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1tb2RhbC1wYWlyaW5nXCIsXHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhaXJpbmctbW9kYWwuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczpbT3Jhbmd0dWFTZXJ2aWNlLCBJYnVoYW1pbHNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWlyaW5nTW9kYWxDb21wb25lbnQge1xyXG5cclxuICAgIGFyZ3M6UGFpckFyZ3M7XHJcbiAgICBtb2RlOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG9ydHVTZXJ2Ok9yYW5ndHVhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGJ1bWlsU2VydjpJYnVoYW1pbHNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBwYXJhbXM6TW9kYWxEaWFsb2dQYXJhbXNcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuYXJncyA9IG5ldyBQYWlyQXJncyhcIlwiLFwiXCIpO1xyXG4gICAgICAgIHRoaXMubW9kZSA9IHRoaXMucGFyYW1zLmNvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcmdzLnBhc3N3b3JkLHRoaXMuYXJncy51c2VybmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09IFwiYW5ha1wiKXtcclxuICAgICAgICAgICAgdGhpcy5vcnR1U2Vydi5wYWlyKHRoaXMuYXJncykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChlcnIuanNvbigpLm1lc3NhZ2UpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJ1bWlsU2Vydi5wYWlyKHRoaXMuYXJncykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChlcnIuanNvbigpLm1lc3NhZ2UpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgUGFpckFyZ3Mge1xyXG4gICAgdXNlcm5hbWU6c3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgfVxyXG59Il19