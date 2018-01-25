"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_add_plans_component_1 = require("../../kehamilan/modal-add-plans/modal-add-plans.component");
var Toast = require("nativescript-toast");
var rencana_persalinan_service_1 = require("../../kehamilan/rencana-persalinan.service");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs = require("tns-core-modules/ui/dialogs");
var RencanaPersalinanComponent = (function () {
    function RencanaPersalinanComponent(actRoute, route, plansServ, vcrf, modal) {
        this.actRoute = actRoute;
        this.route = route;
        this.plansServ = plansServ;
        this.vcrf = vcrf;
        this.modal = modal;
        this.rencanas = new observable_array_1.ObservableArray();
    }
    RencanaPersalinanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (params) {
            _this.id_kehamilan = params.id_kehamilan;
            _this.id_orangtua = params.id_orangtua;
        });
        this.load_rencanas(null);
    };
    RencanaPersalinanComponent.prototype.load_rencanas = function (args) {
        var _this = this;
        this.plansServ.getplans(this.id_kehamilan).subscribe(function (res) {
            _this.rencanas = new observable_array_1.ObservableArray(res.content);
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    RencanaPersalinanComponent.prototype.addPlansModal = function () {
        var _this = this;
        var options = {
            fullscreen: false,
            viewContainerRef: this.vcrf,
            context: {
                id_kehamilan: this.id_kehamilan
            }
        };
        this.modal.showModal(modal_add_plans_component_1.ModalAddPlansComponent, options).then(function (res) {
            _this.load_rencanas(null);
        });
    };
    RencanaPersalinanComponent.prototype.editPlansModal = function (plan) {
        var _this = this;
        var options = {
            fullscreen: false,
            viewContainerRef: this.vcrf,
            context: {
                id_kehamilan: this.id_kehamilan,
                plan: plan
            }
        };
        this.modal.showModal(modal_add_plans_component_1.ModalAddPlansComponent, options).then(function (res) {
            _this.load_rencanas(null);
        });
    };
    RencanaPersalinanComponent.prototype.deleteplan = function (id_plan) {
        var _this = this;
        dialogs.confirm({
            title: "Konfirmasi",
            message: "Anda yakin ingin menghapus data?",
            okButtonText: "Ya",
            cancelButtonText: "Tidak"
        }).then(function (result) {
            if (result) {
                _this.plansServ.delete(_this.id_kehamilan, id_plan).subscribe(function (res) {
                    Toast.makeText(res.message);
                    _this.load_rencanas(null);
                });
            }
        });
    };
    RencanaPersalinanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-rencana-persalinan',
            templateUrl: './rencana-persalinan.component.html',
            styleUrls: ['./rencana-persalinan.component.css'],
            providers: [rencana_persalinan_service_1.RencanaPersalinanService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            rencana_persalinan_service_1.RencanaPersalinanService,
            core_1.ViewContainerRef,
            nativescript_angular_1.ModalDialogService])
    ], RencanaPersalinanComponent);
    return RencanaPersalinanComponent;
}());
exports.RencanaPersalinanComponent = RencanaPersalinanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuY2FuYS1wZXJzYWxpbmFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlbmNhbmEtcGVyc2FsaW5hbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0U7QUFDbEUsMENBQXVEO0FBQ3ZELHVHQUFpRztBQUNqRywwQ0FBNEM7QUFDNUMseUZBQW9GO0FBQ3BGLDJFQUF1RTtBQUN2RSw2REFBd0Q7QUFDeEQscURBQXVEO0FBU3ZEO0lBT0ksb0NBQ1ksUUFBdUIsRUFDdkIsS0FBWSxFQUNaLFNBQWtDLEVBQ2xDLElBQXFCLEVBQ3JCLEtBQXdCO1FBSnhCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLGNBQVMsR0FBVCxTQUFTLENBQXlCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQWlCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBUnBDLGFBQVEsR0FBd0IsSUFBSSxrQ0FBZSxFQUFFLENBQUM7SUFXbEQsQ0FBQztJQUVMLDZDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDL0IsVUFBQSxNQUFNO1lBQ0YsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUMxQyxDQUFDLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGtEQUFhLEdBQWIsVUFBYyxJQUFJO1FBQWxCLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FDaEQsVUFBQSxHQUFHO1lBQ0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGtDQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBRWpFLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELGtEQUFhLEdBQWI7UUFBQSxpQkFhQztRQVpHLElBQUksT0FBTyxHQUFHO1lBQ1YsVUFBVSxFQUFDLEtBQUs7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDM0IsT0FBTyxFQUFFO2dCQUNMLFlBQVksRUFBQyxJQUFJLENBQUMsWUFBWTthQUNqQztTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxrREFBc0IsRUFBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3JELFVBQUEsR0FBRztZQUNDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBRUQsbURBQWMsR0FBZCxVQUFlLElBQUk7UUFBbkIsaUJBY0M7UUFiRyxJQUFJLE9BQU8sR0FBRztZQUNWLFVBQVUsRUFBQyxLQUFLO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJO1lBQzNCLE9BQU8sRUFBRTtnQkFDTCxZQUFZLEVBQUMsSUFBSSxDQUFDLFlBQVk7Z0JBQzlCLElBQUksRUFBQyxJQUFJO2FBQ1o7U0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsa0RBQXNCLEVBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNyRCxVQUFBLEdBQUc7WUFDQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELCtDQUFVLEdBQVYsVUFBVyxPQUFPO1FBQWxCLGlCQWlCQztRQWhCRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLGtDQUFrQztZQUMzQyxZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxPQUFPO1NBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ04sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDVCxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FDdkQsVUFBQSxHQUFHO29CQUNDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1QixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixDQUFDLENBQ0osQ0FBQztZQUNOLENBQUM7UUFDTCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFyRlEsMEJBQTBCO1FBUHRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1lBQy9DLFNBQVMsRUFBQyxDQUFDLHFEQUF3QixDQUFDO1NBQ3ZDLENBQUM7eUNBU3VCLHVCQUFjO1lBQ2pCLGVBQU07WUFDRixxREFBd0I7WUFDN0IsdUJBQWdCO1lBQ2YseUNBQWtCO09BWjNCLDBCQUEwQixDQXVGdEM7SUFBRCxpQ0FBQztDQUFBLEFBdkZELElBdUZDO0FBdkZZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge01vZGFsQWRkUGxhbnNDb21wb25lbnR9IGZyb20gXCIuLi8uLi9rZWhhbWlsYW4vbW9kYWwtYWRkLXBsYW5zL21vZGFsLWFkZC1wbGFucy5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbmltcG9ydCB7UmVuY2FuYVBlcnNhbGluYW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4va2VoYW1pbGFuL3JlbmNhbmEtcGVyc2FsaW5hbi5zZXJ2aWNlXCI7XG5pbXBvcnQge09ic2VydmFibGVBcnJheX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQge01vZGFsRGlhbG9nU2VydmljZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXJlbmNhbmEtcGVyc2FsaW5hbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZW5jYW5hLXBlcnNhbGluYW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZW5jYW5hLXBlcnNhbGluYW4uY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVyczpbUmVuY2FuYVBlcnNhbGluYW5TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBSZW5jYW5hUGVyc2FsaW5hbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpZF9rZWhhbWlsYW46bnVtYmVyO1xuICAgIGlkX29yYW5ndHVhOm51bWJlcjtcbiAgICByZW5jYW5hczpPYnNlcnZhYmxlQXJyYXk8YW55PiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWN0Um91dGU6QWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGU6Um91dGVyLFxuICAgICAgICBwcml2YXRlIHBsYW5zU2VydjpSZW5jYW5hUGVyc2FsaW5hblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmNyZjpWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIG1vZGFsOk1vZGFsRGlhbG9nU2VydmljZSxcblxuXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFjdFJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcbiAgICAgICAgICAgIHBhcmFtcz0+e1xuICAgICAgICAgICAgICAgIHRoaXMuaWRfa2VoYW1pbGFuID0gcGFyYW1zLmlkX2tlaGFtaWxhbjtcbiAgICAgICAgICAgICAgICB0aGlzLmlkX29yYW5ndHVhID0gcGFyYW1zLmlkX29yYW5ndHVhO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxvYWRfcmVuY2FuYXMobnVsbCk7XG4gICAgfVxuXG4gICAgbG9hZF9yZW5jYW5hcyhhcmdzKXtcbiAgICAgICAgdGhpcy5wbGFuc1NlcnYuZ2V0cGxhbnModGhpcy5pZF9rZWhhbWlsYW4pLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5jYW5hcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkocmVzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChhcmdzICE9PSBudWxsKSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgYWRkUGxhbnNNb2RhbCgpe1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46ZmFsc2UsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjcmYsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgaWRfa2VoYW1pbGFuOnRoaXMuaWRfa2VoYW1pbGFuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKE1vZGFsQWRkUGxhbnNDb21wb25lbnQsb3B0aW9ucykudGhlbihcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkX3JlbmNhbmFzKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBlZGl0UGxhbnNNb2RhbChwbGFuKXtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmdWxsc2NyZWVuOmZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y3JmLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIGlkX2tlaGFtaWxhbjp0aGlzLmlkX2tlaGFtaWxhbixcbiAgICAgICAgICAgICAgICBwbGFuOnBsYW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTW9kYWxBZGRQbGFuc0NvbXBvbmVudCxvcHRpb25zKS50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRfcmVuY2FuYXMobnVsbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGRlbGV0ZXBsYW4oaWRfcGxhbil7XG4gICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgICAgICAgICB0aXRsZTogXCJLb25maXJtYXNpXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkFuZGEgeWFraW4gaW5naW4gbWVuZ2hhcHVzIGRhdGE/XCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiWWFcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiVGlkYWtcIlxuICAgICAgICB9KS50aGVuKHJlc3VsdD0+e1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFuc1NlcnYuZGVsZXRlKHRoaXMuaWRfa2VoYW1pbGFuICxpZF9wbGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICByZXM9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkX3JlbmNhbmFzKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==