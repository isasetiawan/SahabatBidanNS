"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MenuhamilComponent = (function () {
    function MenuhamilComponent(actRoute, route) {
        this.actRoute = actRoute;
        this.route = route;
    }
    MenuhamilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (params) {
            _this.id_kehamilan = params.id_kehamilan;
            _this.id_orangtua = params.id_orangtua;
        });
    };
    MenuhamilComponent.prototype.gotosomewhere = function (where) {
        var navextra = {
            queryParams: { id_kehamilan: this.id_kehamilan, id_orangtua: this.id_orangtua }
        };
        this.route.navigate([where], navextra);
    };
    MenuhamilComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-menuhamil',
            templateUrl: './menuhamil.component.html',
            styleUrls: ['./menuhamil.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], MenuhamilComponent);
    return MenuhamilComponent;
}());
exports.MenuhamilComponent = MenuhamilComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudWhhbWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnVoYW1pbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlFO0FBUXpFO0lBS0ksNEJBQ1ksUUFBdUIsRUFDdkIsS0FBWTtRQURaLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBTztJQUVwQixDQUFDO0lBRUwscUNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUMvQixVQUFBLE1BQU07WUFDRixLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDeEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQzFDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELDBDQUFhLEdBQWIsVUFBYyxLQUFZO1FBQ3RCLElBQUksUUFBUSxHQUFvQjtZQUM1QixXQUFXLEVBQUUsRUFBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQztTQUM5RSxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBekJRLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FPdUIsdUJBQWM7WUFDakIsZUFBTTtPQVBmLGtCQUFrQixDQTJCOUI7SUFBRCx5QkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLW1lbnVoYW1pbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZW51aGFtaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZW51aGFtaWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVoYW1pbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpZF9rZWhhbWlsYW46bnVtYmVyO1xuICAgIGlkX29yYW5ndHVhOm51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjdFJvdXRlOkFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOlJvdXRlclxuXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuYWN0Um91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcGFyYW1zPT57XG4gICAgICAgICAgICAgICAgdGhpcy5pZF9rZWhhbWlsYW4gPSBwYXJhbXMuaWRfa2VoYW1pbGFuO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRfb3Jhbmd0dWEgPSBwYXJhbXMuaWRfb3Jhbmd0dWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ290b3NvbWV3aGVyZSh3aGVyZTpzdHJpbmcpe1xuICAgICAgICBsZXQgbmF2ZXh0cmE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7aWRfa2VoYW1pbGFuOnRoaXMuaWRfa2VoYW1pbGFuLCBpZF9vcmFuZ3R1YTp0aGlzLmlkX29yYW5ndHVhfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJvdXRlLm5hdmlnYXRlKFt3aGVyZV0sIG5hdmV4dHJhKVxuICAgIH1cblxufVxuIl19