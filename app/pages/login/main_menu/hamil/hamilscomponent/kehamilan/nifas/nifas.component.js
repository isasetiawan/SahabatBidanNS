"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nifas_service_1 = require("./nifas.service");
var Nifas_1 = require("./Nifas");
var router_1 = require("@angular/router");
var Toast = require("nativescript-toast");
var NifasComponent = (function () {
    function NifasComponent(nifasServ, actRoute) {
        var _this = this;
        this.nifasServ = nifasServ;
        this.actRoute = actRoute;
        this.yatak = [{ key: 0, label: "Tidak" }, { key: 1, label: "Ya" }];
        this.pone = [{ key: 0, label: "-" }, { key: 1, label: "+" }];
        this.is_edit = false;
        this.nifas = new Nifas_1.Nifas();
        this.actRoute.queryParams.subscribe(function (params) {
            _this.id_kehamilan = params.id_kehamilan;
            if (params.nifas) {
                _this.nifas = JSON.parse(params.nifas);
                _this.is_edit = true;
            }
        });
    }
    NifasComponent.prototype.submit = function () {
        console.log(JSON.stringify(this.nifas));
        if (!this.is_edit) {
            this.nifasServ.store(this.id_kehamilan, this.nifas).subscribe(function (res) {
                Toast.makeText(res.message).show();
            }, function (err) {
                Toast.makeText(err.json().message).show();
            });
        }
        else {
            this.nifasServ.edit(this.id_kehamilan, this.nifas.id, this.nifas).subscribe(function (res) {
                Toast.makeText(res.message).show();
            }, function (err) {
                Toast.makeText(err.json().message).show();
            });
        }
    };
    NifasComponent.prototype.ngOnInit = function () { };
    NifasComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-nifas',
            templateUrl: './nifas.component.html',
            styleUrls: ['./nifas.component.scss'],
            providers: [nifas_service_1.NifasService]
        }),
        __metadata("design:paramtypes", [nifas_service_1.NifasService,
            router_1.ActivatedRoute])
    ], NifasComponent);
    return NifasComponent;
}());
exports.NifasComponent = NifasComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmlmYXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmlmYXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlEQUErQztBQUMvQyxpQ0FBK0I7QUFDL0IsMENBQWlEO0FBQ2pELDBDQUEyQztBQVMzQztJQVVJLHdCQUNZLFNBQXNCLEVBQ3RCLFFBQXVCO1FBRm5DLGlCQWFDO1FBWlcsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBVG5DLFVBQUssR0FBRyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3BELFNBQUksR0FBRyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBVTFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3RDLEtBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN4QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUN4RCxVQUFBLEdBQUc7Z0JBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkMsQ0FBQyxFQUNELFVBQUEsR0FBRztnQkFDQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FDckUsVUFBQSxHQUFHO2dCQUNDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZDLENBQUMsRUFDRCxVQUFBLEdBQUc7Z0JBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUMsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFRLEdBQVIsY0FBYSxDQUFDO0lBaERMLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFNBQVMsRUFBQyxDQUFDLDRCQUFZLENBQUM7U0FDekIsQ0FBQzt5Q0FZd0IsNEJBQVk7WUFDYix1QkFBYztPQVoxQixjQUFjLENBa0QxQjtJQUFELHFCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmlmYXNTZXJ2aWNlIH0gZnJvbSAnLi9uaWZhcy5zZXJ2aWNlJztcbmltcG9ydCB7IE5pZmFzIH0gZnJvbSAnLi9OaWZhcydcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIlxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbmlmYXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmlmYXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uaWZhcy5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6W05pZmFzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmlmYXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbmlmYXM6TmlmYXM7XG4gICAgeWF0YWsgPSBbe2tleTowLGxhYmVsOlwiVGlkYWtcIn0sIHtrZXk6MSxsYWJlbDpcIllhXCJ9XTtcbiAgICBwb25lID0gW3trZXk6MCxsYWJlbDpcIi1cIn0sIHtrZXk6MSxsYWJlbDpcIitcIn1dO1xuICAgIFxuICAgIGlkX2tlaGFtaWxhbjpudW1iZXI7XG5cbiAgICBpc19lZGl0OmJvb2xlYW47XG4gIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5pZmFzU2VydjpOaWZhc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWN0Um91dGU6QWN0aXZhdGVkUm91dGVcbiAgICApIHsgXG4gICAgICAgIHRoaXMuaXNfZWRpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5pZmFzID0gbmV3IE5pZmFzKCk7XG4gICAgICAgIHRoaXMuYWN0Um91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcz0+e1xuICAgICAgICAgICAgdGhpcy5pZF9rZWhhbWlsYW4gPSBwYXJhbXMuaWRfa2VoYW1pbGFuO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5uaWZhcykge1xuICAgICAgICAgICAgICAgIHRoaXMubmlmYXMgPSBKU09OLnBhcnNlKHBhcmFtcy5uaWZhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc19lZGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdWJtaXQoKXtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5uaWZhcykpO1xuICAgICAgICBpZiAoIXRoaXMuaXNfZWRpdCl7XG4gICAgICAgICAgICB0aGlzLm5pZmFzU2Vydi5zdG9yZSh0aGlzLmlkX2tlaGFtaWxhbix0aGlzLm5pZmFzKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KGVyci5qc29uKCkubWVzc2FnZSkuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5pZmFzU2Vydi5lZGl0KHRoaXMuaWRfa2VoYW1pbGFuLHRoaXMubmlmYXMuaWQsdGhpcy5uaWZhcykuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChlcnIuanNvbigpLm1lc3NhZ2UpLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxufVxuIl19