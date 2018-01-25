"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pemeriksaan_service_1 = require("../../kehamilan/pemeriksaan.service");
var router_1 = require("@angular/router");
var Toast = require("nativescript-toast");
var resume_component_1 = require("../../kehamilan/pemeriksaan/resume/resume.component");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs = require("ui/dialogs");
var common_1 = require("@angular/common");
var PemeriksaanKehamilanComponent = (function () {
    function PemeriksaanKehamilanComponent(actRoute, route, pemeriksaanServ, routExt, vcrf, modal, location) {
        this.actRoute = actRoute;
        this.route = route;
        this.pemeriksaanServ = pemeriksaanServ;
        this.routExt = routExt;
        this.vcrf = vcrf;
        this.modal = modal;
        this.location = location;
    }
    PemeriksaanKehamilanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (params) {
            _this.id_kehamilan = params.id_kehamilan;
            _this.id_orangtua = params.id_orangtua;
        });
        this.load_pemeriksaans(null);
        this.location.onPopState(function () {
            _this.load_pemeriksaans(null);
        });
    };
    PemeriksaanKehamilanComponent.prototype.load_pemeriksaans = function (args) {
        var _this = this;
        this.pemeriksaanServ.list(this.id_kehamilan).subscribe(function (res) {
            _this.pemeriksaans = res.content;
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    PemeriksaanKehamilanComponent.prototype.edit_pemeriksaan = function (pemeriksaan) {
        var extra = {
            queryParams: { id_kehamilan: this.id_kehamilan, data: JSON.stringify(pemeriksaan), id_pemeriksaan: pemeriksaan.id }
        };
        this.routExt.navigate(['pemeriksaan'], extra);
    };
    PemeriksaanKehamilanComponent.prototype.view_resume_pemeriksaan = function (pemeriksaan) {
        var _this = this;
        var options = {
            fullscreen: false,
            viewContainerRef: this.vcrf,
            context: {
                id_kehamilan: this.id_kehamilan,
                id_orangtua: this.id_orangtua,
                pemeriksaan: pemeriksaan
            }
        };
        this.modal.showModal(resume_component_1.ResumeComponent, options).then(function (res) {
            _this.load_pemeriksaans(null);
        });
    };
    PemeriksaanKehamilanComponent.prototype.add_pemeriksaan = function (pemeriksaan) {
        var extra = {
            queryParams: { id_kehamilan: this.id_kehamilan }
        };
        this.routExt.navigate(['pemeriksaan'], extra);
    };
    PemeriksaanKehamilanComponent.prototype.delete_pemeriksaan = function (pemeriksaan) {
        var _this = this;
        dialogs.confirm({
            title: "Konfirmasi",
            message: "Anda yakin ingin menghapus data?",
            okButtonText: "Ya",
            cancelButtonText: "Tidak"
        }).then(function (result) {
            if (result) {
                _this.pemeriksaanServ.hapus(_this.id_kehamilan, pemeriksaan.id).subscribe(function (res) {
                    Toast.makeText(res.message).show();
                    _this.load_pemeriksaans(null);
                });
            }
        });
    };
    PemeriksaanKehamilanComponent.prototype.gotoTindakan = function (pemeriksaan) {
        var extra = {
            queryParams: {
                id_pemeriksaan: pemeriksaan.id,
                id_kehamilan: this.id_kehamilan
            }
        };
        this.routExt.navigate(['tindakan'], extra);
    };
    PemeriksaanKehamilanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-pemeriksaan-kehamilan',
            templateUrl: './pemeriksaan-kehamilan.component.html',
            styleUrls: ['./pemeriksaan-kehamilan.component.css'],
            providers: [pemeriksaan_service_1.PemeriksaanService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            pemeriksaan_service_1.PemeriksaanService,
            nativescript_angular_1.RouterExtensions,
            core_1.ViewContainerRef,
            nativescript_angular_1.ModalDialogService,
            common_1.PlatformLocation])
    ], PemeriksaanKehamilanComponent);
    return PemeriksaanKehamilanComponent;
}());
exports.PemeriksaanKehamilanComponent = PemeriksaanKehamilanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVtZXJpa3NhYW4ta2VoYW1pbGFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlbWVyaWtzYWFuLWtlaGFtaWxhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0U7QUFDbEUsMkVBQXVFO0FBQ3ZFLDBDQUF5RTtBQUN6RSwwQ0FBNEM7QUFDNUMsd0ZBQW9GO0FBQ3BGLDZEQUEwRTtBQUMxRSxvQ0FBcUM7QUFDckMsMENBQWlEO0FBU2pEO0lBTUksdUNBQ1ksUUFBdUIsRUFDdkIsS0FBWSxFQUNaLGVBQWtDLEVBQ2xDLE9BQXdCLEVBQ3hCLElBQXFCLEVBQ3JCLEtBQXdCLEVBQ3hCLFFBQXlCO1FBTnpCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFpQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUdqQyxDQUFDO0lBRUwsZ0RBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUMvQixVQUFBLE1BQU07WUFDRixLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDeEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQzFDLENBQUMsQ0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCx5REFBaUIs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Q0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBcEdRLDZCQUE2QjtRQVB6QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztZQUNwRCxTQUFTLEVBQUMsQ0FBQyx3Q0FBa0IsQ0FBQztTQUNqQyxDQUFDO3lDQVF1Qix1QkFBYztZQUNqQixlQUFNO1lBQ0ksd0NBQWtCO1lBQzFCLHVDQUFnQjtZQUNuQix1QkFBZ0I7WUFDZix5Q0FBa0I7WUFDZix5QkFBZ0I7T0FiNUIsNkJBQTZCLENBc0d6QztJQUFELG9DQUFDO0NBQUEsQUF0R0QsSUFzR0M7QUF0R1ksc0VBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BlbWVyaWtzYWFuU2VydmljZX0gZnJvbSBcIi4uLy4uL2tlaGFtaWxhbi9wZW1lcmlrc2Fhbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbmltcG9ydCB7UmVzdW1lQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4va2VoYW1pbGFuL3BlbWVyaWtzYWFuL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50XCI7XG5pbXBvcnQge01vZGFsRGlhbG9nU2VydmljZSwgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnXG5pbXBvcnQge1BsYXRmb3JtTG9jYXRpb259IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1wZW1lcmlrc2Fhbi1rZWhhbWlsYW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wZW1lcmlrc2Fhbi1rZWhhbWlsYW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3BlbWVyaWtzYWFuLWtlaGFtaWxhbi5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOltQZW1lcmlrc2FhblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFBlbWVyaWtzYWFuS2VoYW1pbGFuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGlkX2tlaGFtaWxhbjpudW1iZXI7XG4gICAgaWRfb3Jhbmd0dWE6bnVtYmVyO1xuICAgIHBlbWVyaWtzYWFuczphbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3RSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTpSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcGVtZXJpa3NhYW5TZXJ2OlBlbWVyaWtzYWFuU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0RXh0OlJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgdmNyZjpWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIG1vZGFsOk1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjpQbGF0Zm9ybUxvY2F0aW9uLFxuXG5cbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYWN0Um91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcGFyYW1zPT57XG4gICAgICAgICAgICAgICAgdGhpcy5pZF9rZWhhbWlsYW4gPSBwYXJhbXMuaWRfa2VoYW1pbGFuO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRfb3Jhbmd0dWEgPSBwYXJhbXMuaWRfb3Jhbmd0dWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubG9hZF9wZW1lcmlrc2FhbnMobnVsbCk7XG4gICAgICAgIHRoaXMubG9jYXRpb24ub25Qb3BTdGF0ZSgoKT0+e1xuICAgICAgICAgICAgdGhpcy5sb2FkX3BlbWVyaWtzYWFucyhudWxsKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsb2FkX3BlbWVyaWtzYWFucyhhcmdzKXtcbiAgICAgICAgdGhpcy5wZW1lcmlrc2FhblNlcnYubGlzdCh0aGlzLmlkX2tlaGFtaWxhbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbWVyaWtzYWFucyA9IHJlcy5jb250ZW50O1xuICAgICAgICAgICAgICAgIGlmIChhcmdzICE9PSBudWxsKSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGVkaXRfcGVtZXJpa3NhYW4ocGVtZXJpa3NhYW4pe1xuICAgICAgICBsZXQgZXh0cmE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOntpZF9rZWhhbWlsYW46dGhpcy5pZF9rZWhhbWlsYW4sIGRhdGE6SlNPTi5zdHJpbmdpZnkocGVtZXJpa3NhYW4pLCBpZF9wZW1lcmlrc2FhbjpwZW1lcmlrc2Fhbi5pZH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJvdXRFeHQubmF2aWdhdGUoWydwZW1lcmlrc2FhbiddLGV4dHJhKVxuICAgIH1cblxuICAgIHZpZXdfcmVzdW1lX3BlbWVyaWtzYWFuKHBlbWVyaWtzYWFuKXtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmdWxsc2NyZWVuOmZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y3JmLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIGlkX2tlaGFtaWxhbjp0aGlzLmlkX2tlaGFtaWxhbixcbiAgICAgICAgICAgICAgICBpZF9vcmFuZ3R1YTp0aGlzLmlkX29yYW5ndHVhLFxuICAgICAgICAgICAgICAgIHBlbWVyaWtzYWFuOnBlbWVyaWtzYWFuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKFJlc3VtZUNvbXBvbmVudCxvcHRpb25zKS50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRfcGVtZXJpa3NhYW5zKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBhZGRfcGVtZXJpa3NhYW4ocGVtZXJpa3NhYW4pe1xuICAgICAgICBsZXQgZXh0cmE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOntpZF9rZWhhbWlsYW46dGhpcy5pZF9rZWhhbWlsYW59XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yb3V0RXh0Lm5hdmlnYXRlKFsncGVtZXJpa3NhYW4nXSxleHRyYSlcbiAgICB9XG5cbiAgICBkZWxldGVfcGVtZXJpa3NhYW4ocGVtZXJpa3NhYW4pe1xuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xuICAgICAgICAgICAgdGl0bGU6IFwiS29uZmlybWFzaVwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJBbmRhIHlha2luIGluZ2luIG1lbmdoYXB1cyBkYXRhP1wiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIllhXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIlRpZGFrXCJcbiAgICAgICAgfSkudGhlbihyZXN1bHQ9PntcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVtZXJpa3NhYW5TZXJ2LmhhcHVzKHRoaXMuaWRfa2VoYW1pbGFuLHBlbWVyaWtzYWFuLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkX3BlbWVyaWtzYWFucyhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ290b1RpbmRha2FuKHBlbWVyaWtzYWFuKSB7XG4gICAgICAgIGxldCBleHRyYTogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWRfcGVtZXJpa3NhYW46IHBlbWVyaWtzYWFuLmlkLFxuICAgICAgICAgICAgICAgIGlkX2tlaGFtaWxhbjogdGhpcy5pZF9rZWhhbWlsYW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0RXh0Lm5hdmlnYXRlKFsndGluZGFrYW4nXSwgZXh0cmEpO1xuICAgIH1cblxufVxuIl19