"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var tumbuh_service_1 = require("./tumbuh.service");
var Toast = require("nativescript-toast");
var nativescript_angular_1 = require("nativescript-angular");
var tumbuh_modal_1 = require("./modal/tumbuh.modal");
var moment = require("moment");
var TumbuhComponent = (function () {
    function TumbuhComponent(router, service, modal, vcref) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.modal = modal;
        this.vcref = vcref;
        this.router.queryParams.subscribe(function (p) {
            _this.anak = p;
            _this.loadtumbuh(null);
            console.log(JSON.stringify(_this.anak));
        });
    }
    TumbuhComponent.prototype.ngOnInit = function () { };
    TumbuhComponent.prototype.showDate = function (date) {
        moment.locale("id");
        return moment(date).local().format("D MMMM Y");
    };
    TumbuhComponent.prototype.loadtumbuh = function (args) {
        var _this = this;
        this.service.show(this.anak.id).subscribe(function (response) {
            _this.pertumbuhan = response.content;
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
        //load graph tbu
        this.service.tbu(this.anak.id).subscribe(function (res) {
            _this.tbus = res.content;
            _this.s_tbu = res.content.map(function (x) { return x.standar_tumbuh; });
        });
        //load graph bbu
        this.service.bbu(this.anak.id).subscribe(function (res) {
            _this.bbus = res.content;
            _this.s_bbu = res.content.map(function (x) { return x.standar_berat; });
        });
        //load graph tbbu
        this.service.tbbb(this.anak.id).subscribe(function (res) {
            _this.tbbbs = res.content;
            _this.s_tbbbs = res.content.map(function (x) { return x.standar; });
        });
    };
    TumbuhComponent.prototype.showModal = function (tumbuh, i) {
        var _this = this;
        var options = {
            context: tumbuh,
            fullscreen: false,
            viewContainerRef: this.vcref
        };
        this.modal.showModal(tumbuh_modal_1.TumbuhModal, options).then(function (response_modal) {
            if (response_modal) {
                if (response_modal.is_store) {
                    _this.service.store(_this.anak.id, response_modal.tumbuh).subscribe(function (res) {
                        Toast.makeText(res.message).show();
                        _this.loadtumbuh(null);
                    });
                }
                else {
                    _this.service.update(_this.anak.id, response_modal.tumbuh).subscribe(function (res) {
                        Toast.makeText(res.message).show();
                        // this.pertumbuhan[i].result = response_modal.tumbuh;
                        _this.loadtumbuh(null);
                    });
                }
            }
        });
    };
    TumbuhComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-tumbuh',
            templateUrl: './tumbuh.component.html',
            styleUrls: ['./tumbuh.component.css'],
            providers: [tumbuh_service_1.TumbuhService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            tumbuh_service_1.TumbuhService,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], TumbuhComponent);
    return TumbuhComponent;
}());
exports.TumbuhComponent = TumbuhComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVtYnVoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR1bWJ1aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0U7QUFFbEUsMENBQStDO0FBQy9DLG1EQUErQztBQUUvQywwQ0FBNEM7QUFFNUMsNkRBQXdEO0FBQ3hELHFEQUFpRDtBQUNqRCwrQkFBaUM7QUFVakM7SUFhSSx5QkFDWSxNQUFxQixFQUNyQixPQUFxQixFQUNyQixLQUF3QixFQUN4QixLQUFzQjtRQUpsQyxpQkFhQztRQVpXLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUc5QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBUyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELGtDQUFRLEdBQVIsY0FBVyxDQUFDO0lBRVosa0NBQVEsR0FBUixVQUFTLElBQVc7UUFDaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRU8sb0NBQVUsR0FBbEIsVUFBbUIsSUFBSTtRQUF2QixpQkErQkM7UUE5QkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3JDLFVBQUEsUUFBUTtZQUNKLEtBQUksQ0FBQyxXQUFXLEdBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO2dCQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsQ0FBQTtRQUNoRSxDQUFDLENBQ0osQ0FBQztRQUVGLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDcEMsVUFBQSxHQUFHO1lBQ0MsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxDQUFDLENBQUMsY0FBYyxFQUFoQixDQUFnQixDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUNKLENBQUM7UUFFRixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3BDLFVBQUEsR0FBRztZQUNDLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFFLE9BQUEsQ0FBQyxDQUFDLGFBQWEsRUFBZixDQUFlLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQ0osQ0FBQztRQUVGLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDckMsVUFBQSxHQUFHO1lBQ0MsS0FBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFULENBQVMsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELG1DQUFTLEdBQVQsVUFBVSxNQUFNLEVBQUUsQ0FBQztRQUFuQixpQkEwQkM7UUF6QkcsSUFBSSxPQUFPLEdBQUc7WUFDVixPQUFPLEVBQUUsTUFBTTtZQUNmLFVBQVUsRUFBQyxLQUFLO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQy9CLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQywwQkFBVyxFQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLGNBQWM7WUFDekQsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDakIsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQzVELFVBQUEsR0FBRzt3QkFDQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDekIsQ0FBQyxDQUNKLENBQUE7Z0JBQ0wsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUM3RCxVQUFBLEdBQUc7d0JBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ25DLHNEQUFzRDt3QkFDdEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUNKLENBQUE7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE5RlEsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsU0FBUyxFQUFDLENBQUMsOEJBQWEsQ0FBQztTQUM1QixDQUFDO3lDQWVxQix1QkFBYztZQUNiLDhCQUFhO1lBQ2YseUNBQWtCO1lBQ2xCLHVCQUFnQjtPQWpCekIsZUFBZSxDQStGM0I7SUFBRCxzQkFBQztDQUFBLEFBL0ZELElBK0ZDO0FBL0ZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuYWt9IGZyb20gXCIuLi8uLi9hbmFrXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1R1bWJ1aFNlcnZpY2V9IGZyb20gXCIuL3R1bWJ1aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1R1bWJ1aH0gZnJvbSBcIi4vdHVtYnVoXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5pbXBvcnQge09ic2VydmFibGVBcnJheX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQge01vZGFsRGlhbG9nU2VydmljZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge1R1bWJ1aE1vZGFsfSBmcm9tIFwiLi9tb2RhbC90dW1idWgubW9kYWxcIjtcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQge1JhZExpc3RWaWV3fSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLXR1bWJ1aCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3R1bWJ1aC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdHVtYnVoLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6W1R1bWJ1aFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFR1bWJ1aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBhbmFrOkFuYWs7XG4gICAgcGVydHVtYnVoYW46T2JzZXJ2YWJsZUFycmF5PGFueT47XG4gICAgYmJ1czpBcnJheTxhbnk+O1xuICAgIHRidXM6QXJyYXk8YW55PjtcbiAgICB0YmJiczpBcnJheTxhbnk+O1xuXG4gICAgc190YnU6QXJyYXk8YW55PjtcbiAgICBzX2JidTpBcnJheTxhbnk+O1xuICAgIHNfdGJiYnM6QXJyYXk8YW55PjtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOkFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHNlcnZpY2U6VHVtYnVoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbDpNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmNyZWY6Vmlld0NvbnRhaW5lclJlZlxuXG4gICAgKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHA9PntcbiAgICAgICAgICAgIHRoaXMuYW5hayA9IHAgYXMgQW5haztcbiAgICAgICAgICAgIHRoaXMubG9hZHR1bWJ1aChudWxsKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuYW5haykpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXt9XG5cbiAgICBzaG93RGF0ZShkYXRlOnN0cmluZyl7XG4gICAgICAgIG1vbWVudC5sb2NhbGUoXCJpZFwiKTtcbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5sb2NhbCgpLmZvcm1hdChcIkQgTU1NTSBZXCIpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkdHVtYnVoKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNob3codGhpcy5hbmFrLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXNwb25zZT0+e1xuICAgICAgICAgICAgICAgIHRoaXMucGVydHVtYnVoYW49cmVzcG9uc2UuY29udGVudDtcbiAgICAgICAgICAgICAgICBpZiAoYXJncyAhPT0gbnVsbCkgYXJncy5vYmplY3Qubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9sb2FkIGdyYXBoIHRidVxuICAgICAgICB0aGlzLnNlcnZpY2UudGJ1KHRoaXMuYW5hay5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+e1xuICAgICAgICAgICAgICAgIHRoaXMudGJ1cyA9IHJlcy5jb250ZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuc190YnUgPSByZXMuY29udGVudC5tYXAoeD0+eC5zdGFuZGFyX3R1bWJ1aCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIC8vbG9hZCBncmFwaCBiYnVcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmJidSh0aGlzLmFuYWsuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PntcbiAgICAgICAgICAgICAgICB0aGlzLmJidXMgPSByZXMuY29udGVudDtcbiAgICAgICAgICAgICAgICB0aGlzLnNfYmJ1ID0gcmVzLmNvbnRlbnQubWFwKHg9Pnguc3RhbmRhcl9iZXJhdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIC8vbG9hZCBncmFwaCB0YmJ1XG4gICAgICAgIHRoaXMuc2VydmljZS50YmJiKHRoaXMuYW5hay5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRiYmJzID0gcmVzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zX3RiYmJzID0gcmVzLmNvbnRlbnQubWFwKHg9Pnguc3RhbmRhcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNob3dNb2RhbCh0dW1idWgsIGkpe1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHR1bWJ1aCxcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46ZmFsc2UsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjcmVmXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKFR1bWJ1aE1vZGFsLG9wdGlvbnMpLnRoZW4ocmVzcG9uc2VfbW9kYWw9PntcbiAgICAgICAgICAgIGlmIChyZXNwb25zZV9tb2RhbCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZV9tb2RhbC5pc19zdG9yZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc3RvcmUodGhpcy5hbmFrLmlkLHJlc3BvbnNlX21vZGFsLnR1bWJ1aCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZHR1bWJ1aChudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZSh0aGlzLmFuYWsuaWQscmVzcG9uc2VfbW9kYWwudHVtYnVoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wZXJ0dW1idWhhbltpXS5yZXN1bHQgPSByZXNwb25zZV9tb2RhbC50dW1idWg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkdHVtYnVoKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==