"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var riwayat_kehamilan_service_1 = require("./riwayat-kehamilan.service");
var router_1 = require("@angular/router");
var Toast = require("nativescript-toast");
var riwayat_kesehatan_service_1 = require("./riwayat-kesehatan.service");
var riwayat_keluhan_service_1 = require("./riwayat-keluhan.service");
var melahirkan_service_1 = require("./melahirkan.service");
var persalinan_service_1 = require("./persalinan.service");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var rencana_persalinan_service_1 = require("./rencana-persalinan.service");
var nativescript_angular_1 = require("nativescript-angular");
var modal_add_plans_component_1 = require("./modal-add-plans/modal-add-plans.component");
var pemeriksaan_service_1 = require("./pemeriksaan.service");
var common_1 = require("@angular/common");
var resume_component_1 = require("./pemeriksaan/resume/resume.component");
var nifas_service_1 = require("./nifas/nifas.service");
var moment = require("moment");
var KehamilanComponent = (function () {
    function KehamilanComponent(riwkserv, riwkes, riwkelu, melahirkanServ, persalinanServ, plansServ, actRoute, routExt, modal, vcrf, pemeriksaanServ, location, nivserv) {
        this.riwkserv = riwkserv;
        this.riwkes = riwkes;
        this.riwkelu = riwkelu;
        this.melahirkanServ = melahirkanServ;
        this.persalinanServ = persalinanServ;
        this.plansServ = plansServ;
        this.actRoute = actRoute;
        this.routExt = routExt;
        this.modal = modal;
        this.vcrf = vcrf;
        this.pemeriksaanServ = pemeriksaanServ;
        this.location = location;
        this.nivserv = nivserv;
        this.moment = moment;
        this.dropoutChoice = [
            { key: "1", label: "Ya" },
            { key: "0", label: "Tidak" },
        ];
        this.penolongChoides = [
            { key: 1, label: "Ya" },
            { key: 0, label: "Bukan" },
        ];
        this.keluhanChoices = [
            { key: 1, label: "Ya" },
            { key: 0, label: "Tidak" },
        ];
        this.r_kontrasepsi = ["Tidak Ada", "AKDR/IUD", "Suntik", "Implan/Susuk"];
        this.gerakan_janin = [
            "Belum Terdeteksi",
            "Tidak Terdeteksi",
            "Kurang dari 4 kali",
            "Antara 4 hingga 10 kali",
            "Lebih dari 10 kali"
        ];
        // Persalinan
        this.presentasies = ["", "Puncak Kepala", "Bokong", "Belakang Kepala", "Dahi", "Lintang", "Muka", "Kaki", "Menumbung", "Campur"];
        this.caras = ["", "Normal", "Vacum", "Forceps", "Sectio Caesar"];
        this.rujukans = ["", "Puskesmas", "Rumah Sakit Bersalin", "Rumah Sakit Ibu & Anak", "Rumah Sakit", "Lainnya", "Tidak Dirujuk"];
        this.rencanas = new observable_array_1.ObservableArray();
        this.pemeriksaans = new observable_array_1.ObservableArray();
        this.nifases = new observable_array_1.ObservableArray();
    }
    KehamilanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (params) {
            _this.id_kehamilan = params.id_kehamilan;
            _this.id_orangtua = params.id_orangtua;
            _this.load_r_kehamilan();
            _this.load_r_kesehatan();
            _this.load_r_keluhan();
            _this.load_melahirkan();
            _this.load_persalinan();
            _this.load_rencanas(null);
            _this.load_pemeriksaans(null);
            _this.loadNifases(null);
        });
        this.location.onPopState(function () {
            _this.load_pemeriksaans(null);
            _this.loadNifases(null);
        });
    };
    KehamilanComponent.prototype.load_r_kehamilan = function () {
        var _this = this;
        this.riwkserv.getRKehamilan(this.id_kehamilan).subscribe(function (res) {
            _this.riwayat = res.content;
        });
    };
    KehamilanComponent.prototype.saverkeham = function () {
        this.riwkserv.updateRkehamilan(this.id_kehamilan, this.riwayat).subscribe(function (res) { return Toast.makeText(res.message).show(); });
    };
    // Riwayat Kesehatan
    KehamilanComponent.prototype.load_r_kesehatan = function () {
        var _this = this;
        this.riwkes.getRKesehatan(this.id_kehamilan).subscribe(function (res) { return _this.kesehatan = res.content; });
    };
    KehamilanComponent.prototype.save_r_kesehatan = function () {
        console.log(JSON.stringify(this.kesehatan));
        this.riwkes.updateRKesehatan(this.id_kehamilan, this.kesehatan).subscribe(function (res) { return Toast.makeText(res.message).show(); });
    };
    // Riwayat Keluhan
    KehamilanComponent.prototype.load_r_keluhan = function () {
        var _this = this;
        this.riwkelu.getRKeluhan(this.id_kehamilan).subscribe(function (res) { return _this.keluhan = res.content; });
    };
    KehamilanComponent.prototype.save_r_keluhan = function () {
        this.riwkelu.updateRKeluha(this.id_kehamilan, this.keluhan).subscribe(function (res) { return Toast.makeText(res.message).show(); });
    };
    // Melahirkan
    KehamilanComponent.prototype.load_melahirkan = function () {
        var _this = this;
        this.melahirkanServ.getMelahirkan(this.id_kehamilan).subscribe(function (res) { return _this.melahirkan = res.content; });
    };
    KehamilanComponent.prototype.save_melahirkan = function () {
        var _this = this;
        console.log(JSON.stringify(this.melahirkan));
        this.melahirkanServ.updateMelahirkan(this.id_kehamilan, this.melahirkan).subscribe(function (res) {
            Toast.makeText(res.message).show();
            _this.load_melahirkan();
        });
    };
    KehamilanComponent.prototype.load_persalinan = function () {
        var _this = this;
        this.persalinanServ.getpersalinan(this.id_kehamilan).subscribe(function (res) { return _this.persalinan = res.content; });
    };
    KehamilanComponent.prototype.save_persalinan = function () {
        // console.log(JSON.stringify(this.persalinan))
        this.persalinanServ.updatepersalinan(this.id_kehamilan, this.persalinan).subscribe(function (res) { return Toast.makeText(res.message).show(); });
    };
    KehamilanComponent.prototype.load_rencanas = function (args) {
        var _this = this;
        this.plansServ.getplans(this.id_kehamilan).subscribe(function (res) {
            _this.rencanas = new observable_array_1.ObservableArray(res.content);
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    // Rencana Persalinan
    KehamilanComponent.prototype.addPlansModal = function () {
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
    KehamilanComponent.prototype.editPlansModal = function (plan) {
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
    KehamilanComponent.prototype.deleteplan = function (id_plan) {
        var _this = this;
        this.plansServ.delete(this.id_kehamilan, id_plan).subscribe(function (res) {
            Toast.makeText(res.message);
            _this.load_rencanas(null);
        });
    };
    // Load Pemeriksaan
    KehamilanComponent.prototype.load_pemeriksaans = function (args) {
        var _this = this;
        this.pemeriksaanServ.list(this.id_kehamilan).subscribe(function (res) {
            _this.pemeriksaans = res.content;
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    KehamilanComponent.prototype.edit_pemeriksaan = function (pemeriksaan) {
        var extra = {
            queryParams: { id_kehamilan: this.id_kehamilan, data: JSON.stringify(pemeriksaan), id_pemeriksaan: pemeriksaan.id }
        };
        this.routExt.navigate(['pemeriksaan'], extra);
    };
    KehamilanComponent.prototype.view_resume_pemeriksaan = function (pemeriksaan) {
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
    KehamilanComponent.prototype.add_pemeriksaan = function (pemeriksaan) {
        var extra = {
            queryParams: { id_kehamilan: this.id_kehamilan }
        };
        this.routExt.navigate(['pemeriksaan'], extra);
    };
    KehamilanComponent.prototype.delete_pemeriksaan = function (pemeriksaan) {
        var _this = this;
        this.pemeriksaanServ.hapus(this.id_kehamilan, pemeriksaan.id).subscribe(function (res) {
            Toast.makeText(res.message).show();
            _this.load_pemeriksaans(null);
        });
    };
    // Tindakan
    KehamilanComponent.prototype.gotoTindakan = function (pemeriksaan) {
        var extra = {
            queryParams: {
                id_pemeriksaan: pemeriksaan.id,
                id_kehamilan: this.id_kehamilan
            }
        };
        this.routExt.navigate(['tindakan'], extra);
    };
    //Nifas
    KehamilanComponent.prototype.loadNifases = function (args) {
        var _this = this;
        this.nivserv.list(this.id_kehamilan).subscribe(function (res) {
            console.log(JSON.stringify(res.content));
            _this.nifases = res.content;
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    KehamilanComponent.prototype.edit_nifas = function (nifas) {
        var extra = {
            queryParams: {
                id_kehamilan: this.id_kehamilan,
                nifas: JSON.stringify(nifas)
            }
        };
        this.routExt.navigate(['nifas'], extra);
    };
    KehamilanComponent.prototype.add_nifas = function () {
        var extra = {
            queryParams: {
                id_kehamilan: this.id_kehamilan
            }
        };
        this.routExt.navigate(['nifas'], extra);
    };
    KehamilanComponent.prototype.delete_nifas = function (nifas) {
        var _this = this;
        this.nivserv.delete(this.id_kehamilan, nifas.id).subscribe(function (res) {
            Toast.makeText(res.message).show();
            _this.loadNifases(null);
        }, function (err) {
            Toast.makeText(err.json().message).show();
        });
    };
    KehamilanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-kehamilan',
            templateUrl: './kehamilan.component.html',
            styleUrls: ['./kehamilan.component.css'],
            providers: [
                riwayat_kehamilan_service_1.RiwayatKehamilanService,
                riwayat_kesehatan_service_1.RiwayatKesehatanService,
                riwayat_keluhan_service_1.RiwayatKeluhanService,
                persalinan_service_1.PersalinanService,
                melahirkan_service_1.MelahirkanService,
                rencana_persalinan_service_1.RencanaPersalinanService,
                pemeriksaan_service_1.PemeriksaanService,
                nifas_service_1.NifasService,
            ]
        }),
        __metadata("design:paramtypes", [riwayat_kehamilan_service_1.RiwayatKehamilanService,
            riwayat_kesehatan_service_1.RiwayatKesehatanService,
            riwayat_keluhan_service_1.RiwayatKeluhanService,
            melahirkan_service_1.MelahirkanService,
            persalinan_service_1.PersalinanService,
            rencana_persalinan_service_1.RencanaPersalinanService,
            router_1.ActivatedRoute,
            nativescript_angular_1.RouterExtensions,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef,
            pemeriksaan_service_1.PemeriksaanService,
            common_1.PlatformLocation,
            nifas_service_1.NifasService])
    ], KehamilanComponent);
    return KehamilanComponent;
}());
exports.KehamilanComponent = KehamilanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VoYW1pbGFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImtlaGFtaWxhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0U7QUFDbEUseUVBQW9FO0FBQ3BFLDBDQUFpRTtBQUNqRSwwQ0FBNEM7QUFDNUMseUVBQW9FO0FBQ3BFLHFFQUFnRTtBQUNoRSwyREFBdUQ7QUFDdkQsMkRBQXVEO0FBQ3ZELDJFQUF1RTtBQUN2RSwyRUFBc0U7QUFDdEUsNkRBQTZGO0FBQzdGLHlGQUFtRjtBQUNuRiw2REFBeUQ7QUFDekQsMENBQWlEO0FBQ2pELDBFQUFzRTtBQUN0RSx1REFBcUQ7QUFFckQsK0JBQWdDO0FBbUJoQztJQXVDSSw0QkFDWSxRQUFnQyxFQUNoQyxNQUE4QixFQUM5QixPQUE2QixFQUM3QixjQUFnQyxFQUNoQyxjQUFnQyxFQUNoQyxTQUFrQyxFQUNsQyxRQUF1QixFQUN2QixPQUF3QixFQUN4QixLQUF3QixFQUN4QixJQUFxQixFQUNyQixlQUFrQyxFQUNsQyxRQUF5QixFQUN6QixPQUFvQjtRQVpwQixhQUFRLEdBQVIsUUFBUSxDQUF3QjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUM5QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQUM3QixtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQXlCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUFDckIsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUF6Q2hDLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFFaEIsa0JB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QkFDTixtREFBdUI7Z0JBQ3ZCLG1EQUF1QjtnQkFDdkIsK0NBQXFCO2dCQUNyQixzQ0FBaUI7Z0JBQ2pCLHNDQUFpQjtnQkFDakIscURBQXdCO2dCQUN4Qix3Q0FBa0I7Z0JBQ2xCLDRCQUFZO2FBQ2Y7U0FDSixDQUFDO3lDQXlDdUIsbURBQXVCO1lBQ3pCLG1EQUF1QjtZQUN0QiwrQ0FBcUI7WUFDZCxzQ0FBaUI7WUFDakIsc0NBQWlCO1lBQ3RCLHFEQUF3QjtZQUN6Qix1QkFBYztZQUNmLHVDQUFnQjtZQUNsQix5Q0FBa0I7WUFDbkIsdUJBQWdCO1lBQ0wsd0NBQWtCO1lBQ3pCLHlCQUFnQjtZQUNqQiw0QkFBWTtPQXBEdkIsa0JBQWtCLENBb1U5QjtJQUFELHlCQUFDO0NBQUEsQUFwVUQsSUFvVUM7QUFwVVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Jpd2F5YXRLZWhhbWlsYW5TZXJ2aWNlfSBmcm9tIFwiLi9yaXdheWF0LWtlaGFtaWxhbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5pbXBvcnQge1Jpd2F5YXRLZXNlaGF0YW5TZXJ2aWNlfSBmcm9tIFwiLi9yaXdheWF0LWtlc2VoYXRhbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1Jpd2F5YXRLZWx1aGFuU2VydmljZX0gZnJvbSBcIi4vcml3YXlhdC1rZWx1aGFuLnNlcnZpY2VcIjtcbmltcG9ydCB7TWVsYWhpcmthblNlcnZpY2V9IGZyb20gXCIuL21lbGFoaXJrYW4uc2VydmljZVwiO1xuaW1wb3J0IHtQZXJzYWxpbmFuU2VydmljZX0gZnJvbSBcIi4vcGVyc2FsaW5hbi5zZXJ2aWNlXCI7XG5pbXBvcnQge09ic2VydmFibGVBcnJheX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQge1JlbmNhbmFQZXJzYWxpbmFuU2VydmljZX0gZnJvbSBcIi4vcmVuY2FuYS1wZXJzYWxpbmFuLnNlcnZpY2VcIjtcbmltcG9ydCB7TW9kYWxEaWFsb2dQYXJhbXMsIE1vZGFsRGlhbG9nU2VydmljZSwgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge01vZGFsQWRkUGxhbnNDb21wb25lbnR9IGZyb20gXCIuL21vZGFsLWFkZC1wbGFucy9tb2RhbC1hZGQtcGxhbnMuY29tcG9uZW50XCI7XG5pbXBvcnQge1BlbWVyaWtzYWFuU2VydmljZX0gZnJvbSBcIi4vcGVtZXJpa3NhYW4uc2VydmljZVwiO1xuaW1wb3J0IHtQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1Jlc3VtZUNvbXBvbmVudH0gZnJvbSBcIi4vcGVtZXJpa3NhYW4vcmVzdW1lL3Jlc3VtZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5pZmFzU2VydmljZSB9IGZyb20gJy4vbmlmYXMvbmlmYXMuc2VydmljZSc7XG5pbXBvcnQge05pZmFzfSBmcm9tICcuL25pZmFzL05pZmFzJ1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzL2RpYWxvZ3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLWtlaGFtaWxhbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2tlaGFtaWxhbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4va2VoYW1pbGFuLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBSaXdheWF0S2VoYW1pbGFuU2VydmljZSxcbiAgICAgICAgUml3YXlhdEtlc2VoYXRhblNlcnZpY2UsXG4gICAgICAgIFJpd2F5YXRLZWx1aGFuU2VydmljZSxcbiAgICAgICAgUGVyc2FsaW5hblNlcnZpY2UsXG4gICAgICAgIE1lbGFoaXJrYW5TZXJ2aWNlLFxuICAgICAgICBSZW5jYW5hUGVyc2FsaW5hblNlcnZpY2UsXG4gICAgICAgIFBlbWVyaWtzYWFuU2VydmljZSxcbiAgICAgICAgTmlmYXNTZXJ2aWNlLFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgS2VoYW1pbGFuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHJpd2F5YXQ6YW55O1xuICAgIGtlc2VoYXRhbjphbnk7XG4gICAgbWVsYWhpcmthbjphbnk7XG4gICAga2VsdWhhbjphbnk7XG4gICAgcGVyc2FsaW5hbjphbnk7XG4gICAgcmVuY2FuYXM6T2JzZXJ2YWJsZUFycmF5PGFueT47XG4gICAgcGVtZXJpa3NhYW5zOk9ic2VydmFibGVBcnJheTxhbnk+O1xuICAgIG5pZmFzZXM6T2JzZXJ2YWJsZUFycmF5PE5pZmFzPjtcblxuICAgIG1vbWVudCA9IG1vbWVudDtcblxuICAgIGRyb3BvdXRDaG9pY2UgPSBbXG4gICAgICAgIHtrZXk6XCIxXCIsbGFiZWw6XCJZYVwifSxcbiAgICAgICAge2tleTpcIjBcIixsYWJlbDpcIlRpZGFrXCJ9LFxuXG4gICAgXTtcblxuICAgIHBlbm9sb25nQ2hvaWRlcyA9IFtcbiAgICAgICAge2tleToxLCBsYWJlbDpcIllhXCJ9LFxuICAgICAgICB7a2V5OjAsIGxhYmVsOlwiQnVrYW5cIn0sXG4gICAgXTtcblxuICAgIGtlbHVoYW5DaG9pY2VzID0gW1xuICAgICAgICB7a2V5OjEsIGxhYmVsOlwiWWFcIn0sXG4gICAgICAgIHtrZXk6MCwgbGFiZWw6XCJUaWRha1wifSxcbiAgICBdO1xuXG4gICAgcl9rb250cmFzZXBzaSA9IFtcIlRpZGFrIEFkYVwiLFwiQUtEUi9JVURcIixcIlN1bnRpa1wiLFwiSW1wbGFuL1N1c3VrXCJdO1xuXG4gICAgZ2VyYWthbl9qYW5pbiA9IFtcbiAgICAgICAgXCJCZWx1bSBUZXJkZXRla3NpXCIsXG4gICAgICAgIFwiVGlkYWsgVGVyZGV0ZWtzaVwiLFxuICAgICAgICBcIkt1cmFuZyBkYXJpIDQga2FsaVwiLFxuICAgICAgICBcIkFudGFyYSA0IGhpbmdnYSAxMCBrYWxpXCIsXG4gICAgICAgIFwiTGViaWggZGFyaSAxMCBrYWxpXCJcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcml3a3NlcnY6Uml3YXlhdEtlaGFtaWxhblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcml3a2VzOlJpd2F5YXRLZXNlaGF0YW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJpd2tlbHU6Uml3YXlhdEtlbHVoYW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG1lbGFoaXJrYW5TZXJ2Ok1lbGFoaXJrYW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBlcnNhbGluYW5TZXJ2OlBlcnNhbGluYW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBsYW5zU2VydjpSZW5jYW5hUGVyc2FsaW5hblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWN0Um91dGU6QWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dEV4dDpSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIG1vZGFsOk1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y3JmOlZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgcGVtZXJpa3NhYW5TZXJ2OlBlbWVyaWtzYWFuU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjpQbGF0Zm9ybUxvY2F0aW9uLFxuICAgICAgICBwcml2YXRlIG5pdnNlcnY6TmlmYXNTZXJ2aWNlXG5cbiAgICApIHtcbiAgICAgICAgdGhpcy5yZW5jYW5hcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5wZW1lcmlrc2FhbnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMubmlmYXNlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgICB9XG5cbiAgICBpZF9rZWhhbWlsYW46bnVtYmVyO1xuICAgIGlkX29yYW5ndHVhOm51bWJlcjtcblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuYWN0Um91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgIHBhcmFtcz0+e1xuICAgICAgICAgICAgICB0aGlzLmlkX2tlaGFtaWxhbiA9IHBhcmFtcy5pZF9rZWhhbWlsYW47XG4gICAgICAgICAgICAgIHRoaXMuaWRfb3Jhbmd0dWEgPSBwYXJhbXMuaWRfb3Jhbmd0dWE7XG4gICAgICAgICAgICAgIHRoaXMubG9hZF9yX2tlaGFtaWxhbigpO1xuICAgICAgICAgICAgICB0aGlzLmxvYWRfcl9rZXNlaGF0YW4oKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkX3Jfa2VsdWhhbigpO1xuICAgICAgICAgICAgICB0aGlzLmxvYWRfbWVsYWhpcmthbigpO1xuICAgICAgICAgICAgICB0aGlzLmxvYWRfcGVyc2FsaW5hbigpO1xuICAgICAgICAgICAgICB0aGlzLmxvYWRfcmVuY2FuYXMobnVsbCk7XG4gICAgICAgICAgICAgIHRoaXMubG9hZF9wZW1lcmlrc2FhbnMobnVsbCk7XG4gICAgICAgICAgICAgIHRoaXMubG9hZE5pZmFzZXMobnVsbClcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubG9jYXRpb24ub25Qb3BTdGF0ZSgoKT0+e1xuICAgICAgICAgICAgdGhpcy5sb2FkX3BlbWVyaWtzYWFucyhudWxsKTtcbiAgICAgICAgICAgIHRoaXMubG9hZE5pZmFzZXMobnVsbCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbG9hZF9yX2tlaGFtaWxhbigpe1xuICAgICAgdGhpcy5yaXdrc2Vydi5nZXRSS2VoYW1pbGFuKHRoaXMuaWRfa2VoYW1pbGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5yaXdheWF0ID0gcmVzLmNvbnRlbnQ7XG4gICAgICAgICAgfVxuICAgICAgKVxuICAgIH1cblxuICAgIHNhdmVya2VoYW0oKXtcbiAgICAgICAgdGhpcy5yaXdrc2Vydi51cGRhdGVSa2VoYW1pbGFuKHRoaXMuaWRfa2VoYW1pbGFuLCB0aGlzLnJpd2F5YXQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gUml3YXlhdCBLZXNlaGF0YW5cblxuICAgIGxvYWRfcl9rZXNlaGF0YW4oKXtcbiAgICAgICAgdGhpcy5yaXdrZXMuZ2V0Uktlc2VoYXRhbih0aGlzLmlkX2tlaGFtaWxhbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHRoaXMua2VzZWhhdGFuID0gcmVzLmNvbnRlbnRcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHNhdmVfcl9rZXNlaGF0YW4oKXtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5rZXNlaGF0YW4pKTtcbiAgICAgICAgdGhpcy5yaXdrZXMudXBkYXRlUktlc2VoYXRhbih0aGlzLmlkX2tlaGFtaWxhbiwgdGhpcy5rZXNlaGF0YW4pLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvLyBSaXdheWF0IEtlbHVoYW5cblxuICAgIGxvYWRfcl9rZWx1aGFuKCl7XG4gICAgICAgIHRoaXMucml3a2VsdS5nZXRSS2VsdWhhbih0aGlzLmlkX2tlaGFtaWxhbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHRoaXMua2VsdWhhbiA9IHJlcy5jb250ZW50XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBzYXZlX3Jfa2VsdWhhbigpe1xuICAgICAgICB0aGlzLnJpd2tlbHUudXBkYXRlUktlbHVoYSh0aGlzLmlkX2tlaGFtaWxhbiwgdGhpcy5rZWx1aGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKVxuICAgICAgICApXG4gICAgfVxuXG4gICAgLy8gTWVsYWhpcmthblxuXG4gICAgbG9hZF9tZWxhaGlya2FuKCl7XG4gICAgICAgIHRoaXMubWVsYWhpcmthblNlcnYuZ2V0TWVsYWhpcmthbih0aGlzLmlkX2tlaGFtaWxhbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHRoaXMubWVsYWhpcmthbiA9IHJlcy5jb250ZW50XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2F2ZV9tZWxhaGlya2FuKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMubWVsYWhpcmthbikpO1xuICAgICAgICB0aGlzLm1lbGFoaXJrYW5TZXJ2LnVwZGF0ZU1lbGFoaXJrYW4odGhpcy5pZF9rZWhhbWlsYW4sdGhpcy5tZWxhaGlya2FuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkX21lbGFoaXJrYW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIFBlcnNhbGluYW5cblxuICAgIHByZXNlbnRhc2llczphbnlbXT1bXCJcIixcIlB1bmNhayBLZXBhbGFcIixcIkJva29uZ1wiLFwiQmVsYWthbmcgS2VwYWxhXCIsXCJEYWhpXCIsXCJMaW50YW5nXCIsXCJNdWthXCIsXCJLYWtpXCIsXCJNZW51bWJ1bmdcIixcIkNhbXB1clwiXTtcbiAgICBjYXJhczphbnlbXT1bXCJcIixcIk5vcm1hbFwiLFwiVmFjdW1cIixcIkZvcmNlcHNcIixcIlNlY3RpbyBDYWVzYXJcIl07XG4gICAgcnVqdWthbnM6YW55W109W1wiXCIsXCJQdXNrZXNtYXNcIixcIlJ1bWFoIFNha2l0IEJlcnNhbGluXCIsXCJSdW1haCBTYWtpdCBJYnUgJiBBbmFrXCIsXCJSdW1haCBTYWtpdFwiLFwiTGFpbm55YVwiLFwiVGlkYWsgRGlydWp1a1wiXTtcblxuICAgIGxvYWRfcGVyc2FsaW5hbigpe1xuICAgICAgICB0aGlzLnBlcnNhbGluYW5TZXJ2LmdldHBlcnNhbGluYW4odGhpcy5pZF9rZWhhbWlsYW4pLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB0aGlzLnBlcnNhbGluYW4gPSByZXMuY29udGVudFxuICAgICAgICApXG4gICAgfVxuXG4gICAgc2F2ZV9wZXJzYWxpbmFuKCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGVyc2FsaW5hbikpXG4gICAgICAgIHRoaXMucGVyc2FsaW5hblNlcnYudXBkYXRlcGVyc2FsaW5hbih0aGlzLmlkX2tlaGFtaWxhbix0aGlzLnBlcnNhbGluYW4pLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbG9hZF9yZW5jYW5hcyhhcmdzKXtcbiAgICAgICAgdGhpcy5wbGFuc1NlcnYuZ2V0cGxhbnModGhpcy5pZF9rZWhhbWlsYW4pLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5jYW5hcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkocmVzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChhcmdzICE9PSBudWxsKSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgLy8gUmVuY2FuYSBQZXJzYWxpbmFuXG5cbiAgICBhZGRQbGFuc01vZGFsKCl7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZnVsbHNjcmVlbjpmYWxzZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNyZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICBpZF9rZWhhbWlsYW46dGhpcy5pZF9rZWhhbWlsYW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTW9kYWxBZGRQbGFuc0NvbXBvbmVudCxvcHRpb25zKS50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRfcmVuY2FuYXMobnVsbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGVkaXRQbGFuc01vZGFsKHBsYW4pe1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46ZmFsc2UsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjcmYsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgaWRfa2VoYW1pbGFuOnRoaXMuaWRfa2VoYW1pbGFuLFxuICAgICAgICAgICAgICAgIHBsYW46cGxhblxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChNb2RhbEFkZFBsYW5zQ29tcG9uZW50LG9wdGlvbnMpLnRoZW4oXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZF9yZW5jYW5hcyhudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZGVsZXRlcGxhbihpZF9wbGFuKXtcbiAgICAgICAgdGhpcy5wbGFuc1NlcnYuZGVsZXRlKHRoaXMuaWRfa2VoYW1pbGFuICxpZF9wbGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXM9PntcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkX3JlbmNhbmFzKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIExvYWQgUGVtZXJpa3NhYW5cblxuICAgIGxvYWRfcGVtZXJpa3NhYW5zKGFyZ3Mpe1xuICAgICAgICB0aGlzLnBlbWVyaWtzYWFuU2Vydi5saXN0KHRoaXMuaWRfa2VoYW1pbGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGVtZXJpa3NhYW5zID0gcmVzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgIT09IG51bGwpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZWRpdF9wZW1lcmlrc2FhbihwZW1lcmlrc2Fhbil7XG4gICAgICAgIGxldCBleHRyYTpOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6e2lkX2tlaGFtaWxhbjp0aGlzLmlkX2tlaGFtaWxhbiwgZGF0YTpKU09OLnN0cmluZ2lmeShwZW1lcmlrc2FhbiksIGlkX3BlbWVyaWtzYWFuOnBlbWVyaWtzYWFuLmlkfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm91dEV4dC5uYXZpZ2F0ZShbJ3BlbWVyaWtzYWFuJ10sZXh0cmEpXG4gICAgfVxuXG4gICAgdmlld19yZXN1bWVfcGVtZXJpa3NhYW4ocGVtZXJpa3NhYW4pe1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46ZmFsc2UsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjcmYsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgaWRfa2VoYW1pbGFuOnRoaXMuaWRfa2VoYW1pbGFuLFxuICAgICAgICAgICAgICAgIGlkX29yYW5ndHVhOnRoaXMuaWRfb3Jhbmd0dWEsXG4gICAgICAgICAgICAgICAgcGVtZXJpa3NhYW46cGVtZXJpa3NhYW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoUmVzdW1lQ29tcG9uZW50LG9wdGlvbnMpLnRoZW4oXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZF9wZW1lcmlrc2FhbnMobnVsbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGFkZF9wZW1lcmlrc2FhbihwZW1lcmlrc2Fhbil7XG4gICAgICAgIGxldCBleHRyYTpOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6e2lkX2tlaGFtaWxhbjp0aGlzLmlkX2tlaGFtaWxhbn1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJvdXRFeHQubmF2aWdhdGUoWydwZW1lcmlrc2FhbiddLGV4dHJhKVxuICAgIH1cblxuICAgIGRlbGV0ZV9wZW1lcmlrc2FhbihwZW1lcmlrc2Fhbil7XG4gICAgICAgIHRoaXMucGVtZXJpa3NhYW5TZXJ2LmhhcHVzKHRoaXMuaWRfa2VoYW1pbGFuLHBlbWVyaWtzYWFuLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkX3BlbWVyaWtzYWFucyhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBUaW5kYWthblxuXG4gICAgZ290b1RpbmRha2FuKHBlbWVyaWtzYWFuKXtcbiAgICAgICAgbGV0IGV4dHJhOk5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkX3BlbWVyaWtzYWFuOnBlbWVyaWtzYWFuLmlkLFxuICAgICAgICAgICAgICAgIGlkX2tlaGFtaWxhbjp0aGlzLmlkX2tlaGFtaWxhblxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJvdXRFeHQubmF2aWdhdGUoWyd0aW5kYWthbiddLCBleHRyYSk7XG4gICAgfVxuXG4gICAgLy9OaWZhc1xuXG4gICAgbG9hZE5pZmFzZXMoYXJncyl7XG4gICAgICAgIHRoaXMubml2c2Vydi5saXN0KHRoaXMuaWRfa2VoYW1pbGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcy5jb250ZW50KSk7XG4gICAgICAgICAgICAgICAgdGhpcy5uaWZhc2VzID0gcmVzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgIT09IG51bGwpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBlZGl0X25pZmFzKG5pZmFzOk5pZmFzKXtcbiAgICAgICAgbGV0IGV4dHJhOk5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkX2tlaGFtaWxhbjp0aGlzLmlkX2tlaGFtaWxhbixcbiAgICAgICAgICAgICAgICBuaWZhczpKU09OLnN0cmluZ2lmeShuaWZhcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0RXh0Lm5hdmlnYXRlKFsnbmlmYXMnXSwgZXh0cmEpO1xuICAgIH1cblxuICAgIGFkZF9uaWZhcygpe1xuICAgICAgICBsZXQgZXh0cmE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWRfa2VoYW1pbGFuOnRoaXMuaWRfa2VoYW1pbGFuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucm91dEV4dC5uYXZpZ2F0ZShbJ25pZmFzJ10sIGV4dHJhKTtcbiAgICB9XG5cbiAgICBkZWxldGVfbmlmYXMobmlmYXM6TmlmYXMpe1xuICAgICAgICB0aGlzLm5pdnNlcnYuZGVsZXRlKHRoaXMuaWRfa2VoYW1pbGFuLG5pZmFzLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTmlmYXNlcyhudWxsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KGVyci5qc29uKCkubWVzc2FnZSkuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG59Il19