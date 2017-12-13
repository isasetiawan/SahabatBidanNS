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
var KehamilanComponent = (function () {
    function KehamilanComponent(riwkserv, riwkes, riwkelu, melahirkanServ, persalinanServ, plansServ, actRoute, routExt, modal, vcrf, pemeriksaanServ, location) {
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
        this.rencanas = new observable_array_1.ObservableArray();
        this.pemeriksaans = new observable_array_1.ObservableArray();
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
        });
        this.location.onPopState(function () {
            _this.load_pemeriksaans(null);
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
        // console.log(JSON.stringify(this.melahirkan));
        this.melahirkanServ.updateMelahirkan(this.id_kehamilan, this.melahirkan).subscribe(function (res) { return Toast.makeText(res.message).show(); });
    };
    // Persalinan
    KehamilanComponent.prototype.load_persalinan = function () {
        var _this = this;
        this.persalinanServ.getpersalinan(this.id_kehamilan).subscribe(function (res) { return _this.persalinan = res.content; });
    };
    KehamilanComponent.prototype.save_persalinan = function () {
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
        }, function (err) {
            Toast.makeText(err.json().message).show();
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
                pemeriksaan_service_1.PemeriksaanService
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
            common_1.PlatformLocation])
    ], KehamilanComponent);
    return KehamilanComponent;
}());
exports.KehamilanComponent = KehamilanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VoYW1pbGFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImtlaGFtaWxhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0U7QUFDbEUseUVBQW9FO0FBQ3BFLDBDQUFpRTtBQUNqRSwwQ0FBNEM7QUFDNUMseUVBQW9FO0FBQ3BFLHFFQUFnRTtBQUNoRSwyREFBdUQ7QUFDdkQsMkRBQXVEO0FBQ3ZELDJFQUF1RTtBQUN2RSwyRUFBc0U7QUFDdEUsNkRBQTZGO0FBQzdGLHlGQUFtRjtBQUNuRiw2REFBeUQ7QUFDekQsMENBQWlEO0FBQ2pELDBFQUFzRTtBQWlCdEU7SUFvQ0ksNEJBQ1ksUUFBZ0MsRUFDaEMsTUFBOEIsRUFDOUIsT0FBNkIsRUFDN0IsY0FBZ0MsRUFDaEMsY0FBZ0MsRUFDaEMsU0FBa0MsRUFDbEMsUUFBdUIsRUFDdkIsT0FBd0IsRUFDeEIsS0FBd0IsRUFDeEIsSUFBcUIsRUFDckIsZUFBa0MsRUFDbEMsUUFBeUI7UUFYekIsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBd0I7UUFDOUIsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7UUFDN0IsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUF5QjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQWlCO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQXRDckMsa0JBQWEsR0FBRztZQUNaLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDO1lBQ3BCLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxL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QUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxTQUFTLEVBQUM7Z0JBQ04sbURBQXVCO2dCQUN2QixtREFBdUI7Z0JBQ3ZCLCtDQUFxQjtnQkFDckIsc0NBQWlCO2dCQUNqQixzQ0FBaUI7Z0JBQ2pCLHFEQUF3QjtnQkFDeEIsd0NBQWtCO2FBQ3JCO1NBQ0osQ0FBQzt5Q0FzQ3VCLG1EQUF1QjtZQUN6QixtREFBdUI7WUFDdEIsK0NBQXFCO1lBQ2Qsc0NBQWlCO1lBQ2pCLHNDQUFpQjtZQUN0QixxREFBd0I7WUFDekIsdUJBQWM7WUFDZix1Q0FBZ0I7WUFDbEIseUNBQWtCO1lBQ25CLHVCQUFnQjtZQUNMLHdDQUFrQjtZQUN6Qix5QkFBZ0I7T0FoRDVCLGtCQUFrQixDQTZROUI7SUFBRCx5QkFBQztDQUFBLEFBN1FELElBNlFDO0FBN1FZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSaXdheWF0S2VoYW1pbGFuU2VydmljZX0gZnJvbSBcIi4vcml3YXlhdC1rZWhhbWlsYW4uc2VydmljZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuaW1wb3J0IHtSaXdheWF0S2VzZWhhdGFuU2VydmljZX0gZnJvbSBcIi4vcml3YXlhdC1rZXNlaGF0YW4uc2VydmljZVwiO1xuaW1wb3J0IHtSaXdheWF0S2VsdWhhblNlcnZpY2V9IGZyb20gXCIuL3Jpd2F5YXQta2VsdWhhbi5zZXJ2aWNlXCI7XG5pbXBvcnQge01lbGFoaXJrYW5TZXJ2aWNlfSBmcm9tIFwiLi9tZWxhaGlya2FuLnNlcnZpY2VcIjtcbmltcG9ydCB7UGVyc2FsaW5hblNlcnZpY2V9IGZyb20gXCIuL3BlcnNhbGluYW4uc2VydmljZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlQXJyYXl9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHtSZW5jYW5hUGVyc2FsaW5hblNlcnZpY2V9IGZyb20gXCIuL3JlbmNhbmEtcGVyc2FsaW5hbi5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZGFsRGlhbG9nUGFyYW1zLCBNb2RhbERpYWxvZ1NlcnZpY2UsIFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtNb2RhbEFkZFBsYW5zQ29tcG9uZW50fSBmcm9tIFwiLi9tb2RhbC1hZGQtcGxhbnMvbW9kYWwtYWRkLXBsYW5zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQZW1lcmlrc2FhblNlcnZpY2V9IGZyb20gXCIuL3BlbWVyaWtzYWFuLnNlcnZpY2VcIjtcbmltcG9ydCB7UGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtSZXN1bWVDb21wb25lbnR9IGZyb20gXCIuL3BlbWVyaWtzYWFuL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAta2VoYW1pbGFuJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4va2VoYW1pbGFuLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9rZWhhbWlsYW4uY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIFJpd2F5YXRLZWhhbWlsYW5TZXJ2aWNlLFxuICAgICAgICBSaXdheWF0S2VzZWhhdGFuU2VydmljZSxcbiAgICAgICAgUml3YXlhdEtlbHVoYW5TZXJ2aWNlLFxuICAgICAgICBQZXJzYWxpbmFuU2VydmljZSxcbiAgICAgICAgTWVsYWhpcmthblNlcnZpY2UsXG4gICAgICAgIFJlbmNhbmFQZXJzYWxpbmFuU2VydmljZSxcbiAgICAgICAgUGVtZXJpa3NhYW5TZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBLZWhhbWlsYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcml3YXlhdDphbnk7XG4gICAga2VzZWhhdGFuOmFueTtcbiAgICBtZWxhaGlya2FuOmFueTtcbiAgICBrZWx1aGFuOmFueTtcbiAgICBwZXJzYWxpbmFuOmFueTtcbiAgICByZW5jYW5hczpPYnNlcnZhYmxlQXJyYXk8YW55PjtcbiAgICBwZW1lcmlrc2FhbnM6T2JzZXJ2YWJsZUFycmF5PGFueT5cblxuICAgIGRyb3BvdXRDaG9pY2UgPSBbXG4gICAgICAgIHtrZXk6XCIxXCIsbGFiZWw6XCJZYVwifSxcbiAgICAgICAge2tleTpcIjBcIixsYWJlbDpcIlRpZGFrXCJ9LFxuXG4gICAgXTtcblxuICAgIHBlbm9sb25nQ2hvaWRlcyA9IFtcbiAgICAgICAge2tleToxLCBsYWJlbDpcIllhXCJ9LFxuICAgICAgICB7a2V5OjAsIGxhYmVsOlwiQnVrYW5cIn0sXG4gICAgXTtcblxuICAgIGtlbHVoYW5DaG9pY2VzID0gW1xuICAgICAgICB7a2V5OjEsIGxhYmVsOlwiWWFcIn0sXG4gICAgICAgIHtrZXk6MCwgbGFiZWw6XCJUaWRha1wifSxcbiAgICBdO1xuXG4gICAgcl9rb250cmFzZXBzaSA9IFtcIlRpZGFrIEFkYVwiLFwiQUtEUi9JVURcIixcIlN1bnRpa1wiLFwiSW1wbGFuL1N1c3VrXCJdO1xuXG4gICAgZ2VyYWthbl9qYW5pbiA9IFtcbiAgICAgICAgXCJCZWx1bSBUZXJkZXRla3NpXCIsXG4gICAgICAgIFwiVGlkYWsgVGVyZGV0ZWtzaVwiLFxuICAgICAgICBcIkt1cmFuZyBkYXJpIDQga2FsaVwiLFxuICAgICAgICBcIkFudGFyYSA0IGhpbmdnYSAxMCBrYWxpXCIsXG4gICAgICAgIFwiTGViaWggZGFyaSAxMCBrYWxpXCJcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcml3a3NlcnY6Uml3YXlhdEtlaGFtaWxhblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcml3a2VzOlJpd2F5YXRLZXNlaGF0YW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJpd2tlbHU6Uml3YXlhdEtlbHVoYW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG1lbGFoaXJrYW5TZXJ2Ok1lbGFoaXJrYW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBlcnNhbGluYW5TZXJ2OlBlcnNhbGluYW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBsYW5zU2VydjpSZW5jYW5hUGVyc2FsaW5hblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWN0Um91dGU6QWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dEV4dDpSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIG1vZGFsOk1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y3JmOlZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgcGVtZXJpa3NhYW5TZXJ2OlBlbWVyaWtzYWFuU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjpQbGF0Zm9ybUxvY2F0aW9uXG5cbiAgICApIHtcbiAgICAgICAgdGhpcy5yZW5jYW5hcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5wZW1lcmlrc2FhbnMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgfVxuXG4gICAgaWRfa2VoYW1pbGFuOm51bWJlcjtcbiAgICBpZF9vcmFuZ3R1YTpudW1iZXI7XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLmFjdFJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcbiAgICAgICAgICBwYXJhbXM9PntcbiAgICAgICAgICAgICAgdGhpcy5pZF9rZWhhbWlsYW4gPSBwYXJhbXMuaWRfa2VoYW1pbGFuO1xuICAgICAgICAgICAgICB0aGlzLmlkX29yYW5ndHVhID0gcGFyYW1zLmlkX29yYW5ndHVhO1xuICAgICAgICAgICAgICB0aGlzLmxvYWRfcl9rZWhhbWlsYW4oKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkX3Jfa2VzZWhhdGFuKCk7XG4gICAgICAgICAgICAgIHRoaXMubG9hZF9yX2tlbHVoYW4oKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkX21lbGFoaXJrYW4oKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkX3BlcnNhbGluYW4oKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkX3JlbmNhbmFzKG51bGwpO1xuICAgICAgICAgICAgICB0aGlzLmxvYWRfcGVtZXJpa3NhYW5zKG51bGwpXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxvY2F0aW9uLm9uUG9wU3RhdGUoKCk9PntcbiAgICAgICAgICAgIHRoaXMubG9hZF9wZW1lcmlrc2FhbnMobnVsbClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsb2FkX3Jfa2VoYW1pbGFuKCl7XG4gICAgICB0aGlzLnJpd2tzZXJ2LmdldFJLZWhhbWlsYW4odGhpcy5pZF9rZWhhbWlsYW4pLnN1YnNjcmliZShcbiAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnJpd2F5YXQgPSByZXMuY29udGVudDtcbiAgICAgICAgICB9XG4gICAgICApXG4gICAgfVxuXG4gICAgc2F2ZXJrZWhhbSgpe1xuICAgICAgICB0aGlzLnJpd2tzZXJ2LnVwZGF0ZVJrZWhhbWlsYW4odGhpcy5pZF9rZWhhbWlsYW4sIHRoaXMucml3YXlhdCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSaXdheWF0IEtlc2VoYXRhblxuXG4gICAgbG9hZF9yX2tlc2VoYXRhbigpe1xuICAgICAgICB0aGlzLnJpd2tlcy5nZXRSS2VzZWhhdGFuKHRoaXMuaWRfa2VoYW1pbGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5rZXNlaGF0YW4gPSByZXMuY29udGVudFxuICAgICAgICApXG4gICAgfVxuXG4gICAgc2F2ZV9yX2tlc2VoYXRhbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmtlc2VoYXRhbikpO1xuICAgICAgICB0aGlzLnJpd2tlcy51cGRhdGVSS2VzZWhhdGFuKHRoaXMuaWRfa2VoYW1pbGFuLCB0aGlzLmtlc2VoYXRhbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KClcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIFJpd2F5YXQgS2VsdWhhblxuXG4gICAgbG9hZF9yX2tlbHVoYW4oKXtcbiAgICAgICAgdGhpcy5yaXdrZWx1LmdldFJLZWx1aGFuKHRoaXMuaWRfa2VoYW1pbGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5rZWx1aGFuID0gcmVzLmNvbnRlbnRcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHNhdmVfcl9rZWx1aGFuKCl7XG4gICAgICAgIHRoaXMucml3a2VsdS51cGRhdGVSS2VsdWhhKHRoaXMuaWRfa2VoYW1pbGFuLCB0aGlzLmtlbHVoYW4pLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvLyBNZWxhaGlya2FuXG5cbiAgICBsb2FkX21lbGFoaXJrYW4oKXtcbiAgICAgICAgdGhpcy5tZWxhaGlya2FuU2Vydi5nZXRNZWxhaGlya2FuKHRoaXMuaWRfa2VoYW1pbGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5tZWxhaGlya2FuID0gcmVzLmNvbnRlbnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzYXZlX21lbGFoaXJrYW4oKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5tZWxhaGlya2FuKSk7XG4gICAgICAgIHRoaXMubWVsYWhpcmthblNlcnYudXBkYXRlTWVsYWhpcmthbih0aGlzLmlkX2tlaGFtaWxhbix0aGlzLm1lbGFoaXJrYW4pLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvLyBQZXJzYWxpbmFuXG5cbiAgICBsb2FkX3BlcnNhbGluYW4oKXtcbiAgICAgICAgdGhpcy5wZXJzYWxpbmFuU2Vydi5nZXRwZXJzYWxpbmFuKHRoaXMuaWRfa2VoYW1pbGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5wZXJzYWxpbmFuID0gcmVzLmNvbnRlbnRcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHNhdmVfcGVyc2FsaW5hbigpe1xuICAgICAgICB0aGlzLnBlcnNhbGluYW5TZXJ2LnVwZGF0ZXBlcnNhbGluYW4odGhpcy5pZF9rZWhhbWlsYW4sdGhpcy5wZXJzYWxpbmFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4gVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGxvYWRfcmVuY2FuYXMoYXJncyl7XG4gICAgICAgIHRoaXMucGxhbnNTZXJ2LmdldHBsYW5zKHRoaXMuaWRfa2VoYW1pbGFuKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuY2FuYXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHJlcy5jb250ZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoYXJncyAhPT0gbnVsbCkgYXJncy5vYmplY3Qubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIFJlbmNhbmEgUGVyc2FsaW5hblxuXG4gICAgYWRkUGxhbnNNb2RhbCgpe1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46ZmFsc2UsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjcmYsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgaWRfa2VoYW1pbGFuOnRoaXMuaWRfa2VoYW1pbGFuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKE1vZGFsQWRkUGxhbnNDb21wb25lbnQsb3B0aW9ucykudGhlbihcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkX3JlbmNhbmFzKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBlZGl0UGxhbnNNb2RhbChwbGFuKXtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmdWxsc2NyZWVuOmZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y3JmLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIGlkX2tlaGFtaWxhbjp0aGlzLmlkX2tlaGFtaWxhbixcbiAgICAgICAgICAgICAgICBwbGFuOnBsYW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTW9kYWxBZGRQbGFuc0NvbXBvbmVudCxvcHRpb25zKS50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRfcmVuY2FuYXMobnVsbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGRlbGV0ZXBsYW4oaWRfcGxhbil7XG4gICAgICAgIHRoaXMucGxhbnNTZXJ2LmRlbGV0ZSh0aGlzLmlkX2tlaGFtaWxhbiAsaWRfcGxhbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzPT57XG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZF9yZW5jYW5hcyhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBMb2FkIFBlbWVyaWtzYWFuXG5cbiAgICBsb2FkX3BlbWVyaWtzYWFucyhhcmdzKXtcbiAgICAgICAgdGhpcy5wZW1lcmlrc2FhblNlcnYubGlzdCh0aGlzLmlkX2tlaGFtaWxhbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlbWVyaWtzYWFucyA9IHJlcy5jb250ZW50O1xuICAgICAgICAgICAgICAgIGlmIChhcmdzICE9PSBudWxsKSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGVkaXRfcGVtZXJpa3NhYW4ocGVtZXJpa3NhYW4pe1xuICAgICAgICBsZXQgZXh0cmE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOntpZF9rZWhhbWlsYW46dGhpcy5pZF9rZWhhbWlsYW4sIGRhdGE6SlNPTi5zdHJpbmdpZnkocGVtZXJpa3NhYW4pLCBpZF9wZW1lcmlrc2FhbjpwZW1lcmlrc2Fhbi5pZH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJvdXRFeHQubmF2aWdhdGUoWydwZW1lcmlrc2FhbiddLGV4dHJhKVxuICAgIH1cblxuICAgIHZpZXdfcmVzdW1lX3BlbWVyaWtzYWFuKHBlbWVyaWtzYWFuKXtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmdWxsc2NyZWVuOmZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y3JmLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIGlkX2tlaGFtaWxhbjp0aGlzLmlkX2tlaGFtaWxhbixcbiAgICAgICAgICAgICAgICBpZF9vcmFuZ3R1YTp0aGlzLmlkX29yYW5ndHVhLFxuICAgICAgICAgICAgICAgIHBlbWVyaWtzYWFuOnBlbWVyaWtzYWFuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKFJlc3VtZUNvbXBvbmVudCxvcHRpb25zKS50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRfcGVtZXJpa3NhYW5zKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBhZGRfcGVtZXJpa3NhYW4ocGVtZXJpa3NhYW4pe1xuICAgICAgICBsZXQgZXh0cmE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOntpZF9rZWhhbWlsYW46dGhpcy5pZF9rZWhhbWlsYW59XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yb3V0RXh0Lm5hdmlnYXRlKFsncGVtZXJpa3NhYW4nXSxleHRyYSlcbiAgICB9XG5cbiAgICBkZWxldGVfcGVtZXJpa3NhYW4ocGVtZXJpa3NhYW4pe1xuICAgICAgICB0aGlzLnBlbWVyaWtzYWFuU2Vydi5oYXB1cyh0aGlzLmlkX2tlaGFtaWxhbixwZW1lcmlrc2Fhbi5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZF9wZW1lcmlrc2FhbnMobnVsbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChlcnIuanNvbigpLm1lc3NhZ2UpLnNob3coKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIFRpbmRha2FuXG5cbiAgICBnb3RvVGluZGFrYW4ocGVtZXJpa3NhYW4pe1xuICAgICAgICBsZXQgZXh0cmE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgaWRfcGVtZXJpa3NhYW46cGVtZXJpa3NhYW4uaWQsXG4gICAgICAgICAgICAgICAgaWRfa2VoYW1pbGFuOnRoaXMuaWRfa2VoYW1pbGFuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucm91dEV4dC5uYXZpZ2F0ZShbJ3RpbmRha2FuJ10sIGV4dHJhKTtcbiAgICB9XG5cbn0iXX0=