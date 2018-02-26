"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ibuhamilservice_1 = require("../../../ibuhamilservice");
var Kehamilan_1 = require("./Kehamilan");
var Toast = require("nativescript-toast");
var nativescript_modal_datetimepicker_1 = require("nativescript-modal-datetimepicker");
var MenuhamilComponent = (function () {
    function MenuhamilComponent(actRoute, route, hamilservice) {
        this.actRoute = actRoute;
        this.route = route;
        this.hamilservice = hamilservice;
        this.picker = new nativescript_modal_datetimepicker_1.ModalDatetimepicker();
    }
    MenuhamilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kehamilan = new Kehamilan_1.Kehamilan();
        this.actRoute.queryParams.subscribe(function (params) {
            _this.kehamilan.id = params.id;
            _this.kehamilan.orangtua_id = params.orangtua_id;
            _this.kehamilan.hamil_ke = params.hamil_ke;
            _this.kehamilan.HPHT = params.HPHT;
            _this.kehamilan.is_dropout = params.is_dropout;
            _this.kehamilan.risk_by_sistem = params.risk_by_sistem;
            _this.kehamilan.risk_by_kader = params.risk_by_kader;
            _this.kehamilan.kia = params.kia;
            console.log(JSON.stringify(_this.kehamilan));
        });
    };
    MenuhamilComponent.prototype.selectdate = function () {
        var _this = this;
        this.picker.pickDate({
            is24HourView: true,
            startingDate: new Date(this.kehamilan.HPHT)
        }).then(function (result) {
            _this.kehamilan.HPHT = result.year + "-" + result.month + "-" + result.day;
        }).catch(function (error) {
            console.log("Error: " + error);
        });
    };
    MenuhamilComponent.prototype.gotosomewhere = function (where) {
        var navextra = {
            queryParams: { id_kehamilan: this.kehamilan.id, id_orangtua: this.kehamilan.orangtua_id }
        };
        this.route.navigate([where], navextra);
    };
    MenuhamilComponent.prototype.update = function () {
        console.log(JSON.stringify(this.kehamilan));
        this.hamilservice.editPregnancies(this.kehamilan.orangtua_id, this.kehamilan.id, this.kehamilan).subscribe(function (res) {
            Toast.makeText(res.message).show();
        });
    };
    MenuhamilComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [ibuhamilservice_1.Ibuhamilservice],
            selector: 'app-menuhamil',
            templateUrl: './menuhamil.component.html',
            styleUrls: ['./menuhamil.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            ibuhamilservice_1.Ibuhamilservice])
    ], MenuhamilComponent);
    return MenuhamilComponent;
}());
exports.MenuhamilComponent = MenuhamilComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudWhhbWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnVoYW1pbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlFO0FBQ3pFLDREQUF5RDtBQUN6RCx5Q0FBcUM7QUFDckMsMENBQTRDO0FBQzVDLHVGQUFxRjtBQVVyRjtJQUtJLDRCQUNZLFFBQXVCLEVBQ3ZCLEtBQVksRUFDWixZQUE0QjtRQUY1QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFMeEMsV0FBTSxHQUF1QixJQUFJLHVEQUFtQixFQUFFLENBQUM7SUFNbkQsQ0FBQztJQUVMLHFDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUE7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUMvQixVQUFBLE1BQU07WUFDRixLQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUMxQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDOUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztZQUN0RCxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQ3BELEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBQy9DLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFBQSxpQkFVQztRQVJHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2pCLFlBQVksRUFBQyxJQUFJO1lBQ2pCLFlBQVksRUFBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUM3QyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNYLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFNLE1BQU0sQ0FBQyxJQUFJLFNBQUksTUFBTSxDQUFDLEtBQUssU0FBSSxNQUFNLENBQUMsR0FBSyxDQUFBO1FBQ3hFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsS0FBWTtRQUN0QixJQUFJLFFBQVEsR0FBb0I7WUFDNUIsV0FBVyxFQUFFLEVBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBQztTQUN4RixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUN0RyxVQUFBLEdBQUc7WUFDQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QyxDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUF0RFEsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFDLENBQUMsaUNBQWUsQ0FBQztZQUMzQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7eUNBT3VCLHVCQUFjO1lBQ2pCLGVBQU07WUFDQyxpQ0FBZTtPQVIvQixrQkFBa0IsQ0F3RDlCO0lBQUQseUJBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhcywgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0lidWhhbWlsc2VydmljZX0gZnJvbSBcIi4uLy4uLy4uL2lidWhhbWlsc2VydmljZVwiO1xuaW1wb3J0IHtLZWhhbWlsYW59IGZyb20gXCIuL0tlaGFtaWxhblwiXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5pbXBvcnQge01vZGFsRGF0ZXRpbWVwaWNrZXIsIFBpY2tlck9wdGlvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtbW9kYWwtZGF0ZXRpbWVwaWNrZXJcIjtcbmltcG9ydCB7UGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHByb3ZpZGVyczpbSWJ1aGFtaWxzZXJ2aWNlXSxcbiAgICBzZWxlY3RvcjogJ2FwcC1tZW51aGFtaWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tZW51aGFtaWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21lbnVoYW1pbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWVudWhhbWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGtlaGFtaWxhbjpLZWhhbWlsYW47XG4gICAgcGlja2VyOk1vZGFsRGF0ZXRpbWVwaWNrZXIgPSBuZXcgTW9kYWxEYXRldGltZXBpY2tlcigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWN0Um91dGU6QWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGU6Um91dGVyLFxuICAgICAgICBwcml2YXRlIGhhbWlsc2VydmljZTpJYnVoYW1pbHNlcnZpY2UsXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMua2VoYW1pbGFuID0gbmV3IEtlaGFtaWxhbigpXG4gICAgICAgIHRoaXMuYWN0Um91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcGFyYW1zPT57XG4gICAgICAgICAgICAgICAgdGhpcy5rZWhhbWlsYW4uaWQgPSBwYXJhbXMuaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5rZWhhbWlsYW4ub3Jhbmd0dWFfaWQgPSBwYXJhbXMub3Jhbmd0dWFfaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5rZWhhbWlsYW4uaGFtaWxfa2UgPSBwYXJhbXMuaGFtaWxfa2U7XG4gICAgICAgICAgICAgICAgdGhpcy5rZWhhbWlsYW4uSFBIVCA9IHBhcmFtcy5IUEhUO1xuICAgICAgICAgICAgICAgIHRoaXMua2VoYW1pbGFuLmlzX2Ryb3BvdXQgPSBwYXJhbXMuaXNfZHJvcG91dDtcbiAgICAgICAgICAgICAgICB0aGlzLmtlaGFtaWxhbi5yaXNrX2J5X3Npc3RlbSA9IHBhcmFtcy5yaXNrX2J5X3Npc3RlbTtcbiAgICAgICAgICAgICAgICB0aGlzLmtlaGFtaWxhbi5yaXNrX2J5X2thZGVyID0gcGFyYW1zLnJpc2tfYnlfa2FkZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5rZWhhbWlsYW4ua2lhID0gcGFyYW1zLmtpYTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmtlaGFtaWxhbikpXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2VsZWN0ZGF0ZSgpe1xuXG4gICAgICAgIHRoaXMucGlja2VyLnBpY2tEYXRlKHtcbiAgICAgICAgICAgIGlzMjRIb3VyVmlldzp0cnVlLFxuICAgICAgICAgICAgc3RhcnRpbmdEYXRlOm5ldyBEYXRlKHRoaXMua2VoYW1pbGFuLkhQSFQpXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZWhhbWlsYW4uSFBIVCA9IGAke3Jlc3VsdC55ZWFyfS0ke3Jlc3VsdC5tb250aH0tJHtyZXN1bHQuZGF5fWBcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ290b3NvbWV3aGVyZSh3aGVyZTpzdHJpbmcpe1xuICAgICAgICBsZXQgbmF2ZXh0cmE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7aWRfa2VoYW1pbGFuOnRoaXMua2VoYW1pbGFuLmlkLCBpZF9vcmFuZ3R1YTp0aGlzLmtlaGFtaWxhbi5vcmFuZ3R1YV9pZH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbd2hlcmVdLCBuYXZleHRyYSlcbiAgICB9XG5cbiAgICB1cGRhdGUoKXtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5rZWhhbWlsYW4pKTtcbiAgICAgICAgdGhpcy5oYW1pbHNlcnZpY2UuZWRpdFByZWduYW5jaWVzKHRoaXMua2VoYW1pbGFuLm9yYW5ndHVhX2lkLCB0aGlzLmtlaGFtaWxhbi5pZCwgdGhpcy5rZWhhbWlsYW4pLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcz0+e1xuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbn1cbiJdfQ==