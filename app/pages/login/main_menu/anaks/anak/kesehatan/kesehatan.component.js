"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var kesehatan_service_1 = require("./kesehatan.service");
var nativescript_angular_1 = require("nativescript-angular");
var detil_kesehatan_component_1 = require("./detil-kesehatan/detil-kesehatan.component");
var KesehatanComponent = (function () {
    function KesehatanComponent(router, serv, vcrf, modal) {
        var _this = this;
        this.router = router;
        this.serv = serv;
        this.vcrf = vcrf;
        this.modal = modal;
        this.statuses = [
            "Meninggal",
            "Sehat",
            "Sakit"
        ];
        this.router.queryParams.subscribe(function (p) {
            _this.anak = p;
            _this.loadkesehtan(null);
            // console.log(JSON.stringify(this.anak))
        });
    }
    KesehatanComponent.prototype.loadkesehtan = function (args) {
        var _this = this;
        this.serv.index(this.anak).subscribe(function (res) {
            _this.kesehatans = res.content;
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    KesehatanComponent.prototype.view = function (item) {
        var _this = this;
        item.anak = this.anak;
        var options = {
            context: item,
            fullscreen: false,
            viewContainerRef: this.vcrf
        };
        console.log(JSON.stringify(options.context));
        this.modal.showModal(detil_kesehatan_component_1.DetilKesehatanComponent, options).then(function (res) { return _this.loadkesehtan(null); });
    };
    KesehatanComponent.prototype.ngOnInit = function () { };
    KesehatanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-kesehatan',
            templateUrl: './kesehatan.component.html',
            styleUrls: ['./kesehatan.component.css'],
            providers: [kesehatan_service_1.KesehatanService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            kesehatan_service_1.KesehatanService,
            core_1.ViewContainerRef,
            nativescript_angular_1.ModalDialogService])
    ], KesehatanComponent);
    return KesehatanComponent;
}());
exports.KesehatanComponent = KesehatanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VzZWhhdGFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImtlc2VoYXRhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0U7QUFFbEUsMENBQStDO0FBQy9DLHlEQUFxRDtBQUNyRCw2REFBd0Q7QUFFeEQseUZBQW9GO0FBU3BGO0lBVUksNEJBQ1ksTUFBcUIsRUFDckIsSUFBcUIsRUFDckIsSUFBcUIsRUFDckIsS0FBd0I7UUFKcEMsaUJBWUM7UUFYVyxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQWlCO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQWlCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBVnBDLGFBQVEsR0FBRztZQUNQLFdBQVc7WUFDWCxPQUFPO1lBQ1AsT0FBTztTQUNWLENBQUM7UUFTRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBUyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIseUNBQXlDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYSxJQUFJO1FBQWpCLGlCQU9DO1FBTkcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDaEMsVUFBQSxHQUFHO1lBQ0MsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7Z0JBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELGlDQUFJLEdBQUosVUFBSyxJQUFJO1FBQVQsaUJBV0M7UUFWRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBQyxLQUFLO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJO1NBQzlCLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsbURBQXVCLEVBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUN0RCxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQXZCLENBQXVCLENBQ2pDLENBQUE7SUFDTCxDQUFDO0lBRUQscUNBQVEsR0FBUixjQUFhLENBQUM7SUE5Q0wsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUNoQyxDQUFDO3lDQVlxQix1QkFBYztZQUNoQixvQ0FBZ0I7WUFDaEIsdUJBQWdCO1lBQ2YseUNBQWtCO09BZDNCLGtCQUFrQixDQWdEOUI7SUFBRCx5QkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBbmFrfSBmcm9tIFwiLi4vLi4vYW5ha1wiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtLZXNlaGF0YW5TZXJ2aWNlfSBmcm9tIFwiLi9rZXNlaGF0YW4uc2VydmljZVwiO1xuaW1wb3J0IHtNb2RhbERpYWxvZ1NlcnZpY2V9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtNb2RhbFZha3NpbkNvbXBvbmVudH0gZnJvbSBcIi4uL3Zha3Npbi9tb2RhbC12YWtzaW4vbW9kYWwtdmFrc2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEZXRpbEtlc2VoYXRhbkNvbXBvbmVudH0gZnJvbSBcIi4vZGV0aWwta2VzZWhhdGFuL2RldGlsLWtlc2VoYXRhbi5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1rZXNlaGF0YW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9rZXNlaGF0YW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2tlc2VoYXRhbi5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbS2VzZWhhdGFuU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgS2VzZWhhdGFuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGFuYWs6QW5haztcbiAgICBrZXNlaGF0YW5zOmFueVtdO1xuICAgIHN0YXR1c2VzID0gW1xuICAgICAgICBcIk1lbmluZ2dhbFwiLFxuICAgICAgICBcIlNlaGF0XCIsXG4gICAgICAgIFwiU2FraXRcIlxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6QWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgc2VydjpLZXNlaGF0YW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjcmY6Vmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSBtb2RhbDpNb2RhbERpYWxvZ1NlcnZpY2VcblxuICAgICkge1xuICAgICAgICB0aGlzLnJvdXRlci5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocD0+e1xuICAgICAgICAgICAgdGhpcy5hbmFrID0gcCBhcyBBbmFrO1xuICAgICAgICAgICAgdGhpcy5sb2Fka2VzZWh0YW4obnVsbCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmFuYWspKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2Fka2VzZWh0YW4oYXJncyl7XG4gICAgICAgIHRoaXMuc2Vydi5pbmRleCh0aGlzLmFuYWspLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXNlaGF0YW5zID0gcmVzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgIT09IG51bGwpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHZpZXcoaXRlbSl7XG4gICAgICAgIGl0ZW0uYW5hayA9IHRoaXMuYW5haztcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiBpdGVtLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjpmYWxzZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNyZlxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcHRpb25zLmNvbnRleHQpKTtcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoRGV0aWxLZXNlaGF0YW5Db21wb25lbnQsb3B0aW9ucykudGhlbihcbiAgICAgICAgICAgIHJlcyA9PiB0aGlzLmxvYWRrZXNlaHRhbihudWxsKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxufVxuIl19