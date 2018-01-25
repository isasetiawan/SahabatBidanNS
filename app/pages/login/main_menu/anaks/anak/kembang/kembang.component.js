"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kembang_service_1 = require("./kembang.service");
var nativescript_angular_1 = require("nativescript-angular");
var router_1 = require("@angular/router");
var modal_kembang_component_1 = require("./modal-kembang/modal-kembang.component");
var Toast = require("nativescript-toast");
var KembangComponent = (function () {
    function KembangComponent(service, actrout, modal, vcrf) {
        var _this = this;
        this.service = service;
        this.actrout = actrout;
        this.modal = modal;
        this.vcrf = vcrf;
        this.actrout.queryParams.subscribe(function (params) { return _this.anak = params; });
    }
    KembangComponent.prototype.ngOnInit = function () {
        this.loadkembangs(null);
    };
    KembangComponent.prototype.loadkembangs = function (args) {
        var _this = this;
        this.service.index(this.anak).subscribe(function (res) {
            _this.kembangs = res.content;
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    KembangComponent.prototype.viewkembang = function (item) {
        var _this = this;
        var options = {
            context: item,
            fullscreen: true,
            viewContainerRef: this.vcrf
        };
        if (item.hasil) {
            this.modal.showModal(modal_kembang_component_1.ModalKembangComponent, options).then(function (res) { return _this.loadkembangs(null); });
        }
        else {
            Toast.makeText("Belum diperiksa oleh pasien").show();
        }
    };
    KembangComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-kembang',
            templateUrl: './kembang.component.html',
            styleUrls: ['./kembang.component.css'],
            providers: [kembang_service_1.KembangService]
        }),
        __metadata("design:paramtypes", [kembang_service_1.KembangService,
            router_1.ActivatedRoute,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], KembangComponent);
    return KembangComponent;
}());
exports.KembangComponent = KembangComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VtYmFuZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZW1iYW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRTtBQUNsRSxxREFBaUQ7QUFDakQsNkRBQTBFO0FBQzFFLDBDQUErQztBQUUvQyxtRkFBOEU7QUFDOUUsMENBQTRDO0FBUzVDO0lBSUksMEJBQW9CLE9BQXNCLEVBQ3RCLE9BQXNCLEVBQ3RCLEtBQXdCLEVBQ3hCLElBQXFCO1FBSHpDLGlCQU9DO1FBUG1CLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFpQjtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQzlCLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFjLEVBQTFCLENBQTBCLENBQ3ZDLENBQUE7SUFDTCxDQUFDO0lBSUQsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxJQUFJO1FBQWpCLGlCQU9DO1FBTkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDbkMsVUFBQSxHQUFHO1lBQ0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxJQUFRO1FBQXBCLGlCQWFDO1FBWkcsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBQyxJQUFJO1lBQ2YsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDOUIsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsK0NBQXFCLEVBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNwRCxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQXZCLENBQXVCLENBQ2pDLENBQUE7UUFDTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixLQUFLLENBQUMsUUFBUSxDQUFDLDZCQUE2QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDeEQsQ0FBQztJQUNMLENBQUM7SUF6Q1EsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxTQUFTLEVBQUMsQ0FBQyxnQ0FBYyxDQUFDO1NBQzdCLENBQUM7eUNBSzhCLGdDQUFjO1lBQ2QsdUJBQWM7WUFDaEIseUNBQWtCO1lBQ25CLHVCQUFnQjtPQVBoQyxnQkFBZ0IsQ0EyQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7S2VtYmFuZ1NlcnZpY2V9IGZyb20gXCIuL2tlbWJhbmcuc2VydmljZVwiO1xuaW1wb3J0IHtNb2RhbERpYWxvZ1NlcnZpY2UsIFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtBbmFrfSBmcm9tIFwiLi4vLi4vYW5ha1wiO1xuaW1wb3J0IHtNb2RhbEtlbWJhbmdDb21wb25lbnR9IGZyb20gXCIuL21vZGFsLWtlbWJhbmcvbW9kYWwta2VtYmFuZy5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1rZW1iYW5nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4va2VtYmFuZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4va2VtYmFuZy5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOltLZW1iYW5nU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgS2VtYmFuZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIGFuYWs6QW5haztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTpLZW1iYW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFjdHJvdXQ6QWN0aXZhdGVkUm91dGUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBtb2RhbDpNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB2Y3JmOlZpZXdDb250YWluZXJSZWYpe1xuICAgICAgICB0aGlzLmFjdHJvdXQucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcGFyYW1zID0+IHRoaXMuYW5hayA9IHBhcmFtcyBhcyBBbmFrXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBrZW1iYW5nczogYW55W107XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLmxvYWRrZW1iYW5ncyhudWxsKTtcbiAgICB9XG5cbiAgICBsb2Fka2VtYmFuZ3MoYXJncyl7XG4gICAgICAgIHRoaXMuc2VydmljZS5pbmRleCh0aGlzLmFuYWspLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZW1iYW5ncyA9IHJlcy5jb250ZW50O1xuICAgICAgICAgICAgICAgIGlmIChhcmdzICE9PSBudWxsKSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHZpZXdrZW1iYW5nKGl0ZW06YW55KXtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiBpdGVtLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjp0cnVlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y3JmXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpdGVtLmhhc2lsKXtcbiAgICAgICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKE1vZGFsS2VtYmFuZ0NvbXBvbmVudCxvcHRpb25zKS50aGVuKFxuICAgICAgICAgICAgICAgIHJlcyA9PiB0aGlzLmxvYWRrZW1iYW5ncyhudWxsKVxuICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoXCJCZWx1bSBkaXBlcmlrc2Egb2xlaCBwYXNpZW5cIikuc2hvdygpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==