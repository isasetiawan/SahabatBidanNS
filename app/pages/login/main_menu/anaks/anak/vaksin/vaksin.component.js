"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("@angular/router");
var vaksin_service_1 = require("./vaksin.service");
var modal_vaksin_component_1 = require("./modal-vaksin/modal-vaksin.component");
var VaksinComponent = (function () {
    function VaksinComponent(router, serv, vcrf, modal) {
        var _this = this;
        this.router = router;
        this.serv = serv;
        this.vcrf = vcrf;
        this.modal = modal;
        this.router.queryParams.subscribe(function (res) {
            _this.anak = res;
            _this.loadvaksin(null);
        });
    }
    VaksinComponent.prototype.ngOnInit = function () {
    };
    VaksinComponent.prototype.loadvaksin = function (args) {
        var _this = this;
        this.serv.index(this.anak).subscribe(function (res) {
            _this.vaksines = res.content;
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    VaksinComponent.prototype.viewvaksin = function (item) {
        var _this = this;
        var options = {
            context: { vaksin: item, anak: this.anak },
            fullscreen: false,
            viewContainerRef: this.vcrf
        };
        console.log(JSON.stringify(options.context));
        this.modal.showModal(modal_vaksin_component_1.ModalVaksinComponent, options).then(function (res) { return _this.loadvaksin(null); });
    };
    VaksinComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-vaksin',
            templateUrl: './vaksin.component.html',
            styleUrls: ['./vaksin.component.css'],
            providers: [vaksin_service_1.VaksinService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            vaksin_service_1.VaksinService,
            core_1.ViewContainerRef,
            nativescript_angular_1.ModalDialogService])
    ], VaksinComponent);
    return VaksinComponent;
}());
exports.VaksinComponent = VaksinComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFrc2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZha3Npbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0U7QUFDbEUsNkRBQTBFO0FBQzFFLDBDQUErQztBQUUvQyxtREFBK0M7QUFJL0MsZ0ZBQTJFO0FBUzNFO0lBS0kseUJBQW9CLE1BQXFCLEVBQ3JCLElBQWtCLEVBQ2xCLElBQXFCLEVBQ3JCLEtBQXdCO1FBSDVDLGlCQVFDO1FBUm1CLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBYztRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFpQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ2pDLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBVyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUFmLGlCQU9DO1FBTkcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDaEMsVUFBQSxHQUFHO1lBQ0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxJQUFRO1FBQW5CLGlCQVVDO1FBVEcsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDO1lBQ3JDLFVBQVUsRUFBQyxLQUFLO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJO1NBQzlCLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsNkNBQW9CLEVBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNuRCxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQXJCLENBQXFCLENBQy9CLENBQUE7SUFDTCxDQUFDO0lBdENRLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ25DLFNBQVMsRUFBQyxDQUFDLDhCQUFhLENBQUM7U0FDNUIsQ0FBQzt5Q0FNNkIsdUJBQWM7WUFDaEIsOEJBQWE7WUFDYix1QkFBZ0I7WUFDZix5Q0FBa0I7T0FSbkMsZUFBZSxDQXdDM0I7SUFBRCxzQkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vZGFsRGlhbG9nU2VydmljZSwgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge0FuYWt9IGZyb20gXCIuLi8uLi9hbmFrXCI7XG5pbXBvcnQge1Zha3NpblNlcnZpY2V9IGZyb20gXCIuL3Zha3Npbi5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5pbXBvcnQge2FsZXJ0fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQge01vZGFsS2VtYmFuZ0NvbXBvbmVudH0gZnJvbSBcIi4uL2tlbWJhbmcvbW9kYWwta2VtYmFuZy9tb2RhbC1rZW1iYW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNb2RhbFZha3NpbkNvbXBvbmVudH0gZnJvbSBcIi4vbW9kYWwtdmFrc2luL21vZGFsLXZha3Npbi5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXZha3NpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi92YWtzaW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92YWtzaW4uY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVyczpbVmFrc2luU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVmFrc2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGFuYWs6QW5haztcbiAgICB2YWtzaW5lczphbnlbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOkFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgc2VydjpWYWtzaW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdmNyZjpWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbW9kYWw6TW9kYWxEaWFsb2dTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucm91dGVyLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmFrID0gcmVzIGFzIEFuYWs7XG4gICAgICAgICAgICB0aGlzLmxvYWR2YWtzaW4obnVsbClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBsb2FkdmFrc2luKGFyZ3Mpe1xuICAgICAgICB0aGlzLnNlcnYuaW5kZXgodGhpcy5hbmFrKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXM9PntcbiAgICAgICAgICAgICAgICB0aGlzLnZha3NpbmVzID0gcmVzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgIT09IG51bGwpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHZpZXd2YWtzaW4oaXRlbTphbnkpe1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHt2YWtzaW46aXRlbSxhbmFrOnRoaXMuYW5ha30sXG4gICAgICAgICAgICBmdWxsc2NyZWVuOmZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y3JmXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuY29udGV4dCkpO1xuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChNb2RhbFZha3NpbkNvbXBvbmVudCxvcHRpb25zKS50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHRoaXMubG9hZHZha3NpbihudWxsKVxuICAgICAgICApXG4gICAgfVxuXG59XG4iXX0=