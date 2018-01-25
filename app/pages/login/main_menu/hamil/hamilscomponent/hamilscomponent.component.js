"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var add_hamil_component_component_1 = require("../add-hamil-component/add-hamil-component.component");
var nativescript_angular_1 = require("nativescript-angular");
var Toast = require("nativescript-toast");
var dialogs = require("ui/dialogs");
var ka_be_service_1 = require("./ka-be.service");
var moment = require("moment");
var ibuhamilservice_1 = require("../../ibuhamilservice");
var HamilscomponentComponent = (function () {
    function HamilscomponentComponent(actRoute, bumilServ, kbServ, modal, vcrf, route) {
        var _this = this;
        this.actRoute = actRoute;
        this.bumilServ = bumilServ;
        this.kbServ = kbServ;
        this.modal = modal;
        this.vcrf = vcrf;
        this.route = route;
        this.kabes = new Kabe();
        this.kehamilas = new observable_array_1.ObservableArray();
        this.actRoute.queryParams.subscribe(function (params) {
            var orangtua_raw = JSON.parse(params.data);
            //handling nested object
            orangtua_raw.provinsi = orangtua_raw.provinsi ? orangtua_raw.provinsi.nama : "";
            orangtua_raw.kabupaten = orangtua_raw.kabupaten ? orangtua_raw.provinsi.kabupaten : "";
            orangtua_raw.kecamatan = orangtua_raw.kecamatan ? orangtua_raw.kecamatan.nama : "";
            orangtua_raw.kelurahan = orangtua_raw.kelurahan ? orangtua_raw.kelurahan.nama : "";
            _this.orangtua = orangtua_raw;
            _this.load_kabe();
            _this.loadpregs(null);
        });
    }
    HamilscomponentComponent.prototype.ngOnInit = function () {
    };
    HamilscomponentComponent.prototype.loadpregs = function (args) {
        var _this = this;
        this.bumilServ.getPregnancies(this.orangtua.id).subscribe(function (res) {
            _this.kehamilas = new observable_array_1.ObservableArray(res.content);
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    HamilscomponentComponent.prototype.addHamilModals = function () {
        var _this = this;
        var options = {
            fullscreen: false,
            viewContainerRef: this.vcrf,
            context: {
                orangtua_id: this.orangtua.id
            }
        };
        this.modal.showModal(add_hamil_component_component_1.AddHamilComponentComponent, options).then(function (res) {
            _this.loadpregs(null);
        });
    };
    HamilscomponentComponent.prototype.editHamilModals = function (kehamilan) {
        var _this = this;
        var k = {
            HPHT: kehamilan.HPHT,
            hamil_ke: kehamilan.hamil_ke,
            is_dropout: kehamilan.is_dropout
        };
        var options = {
            fullscreen: false,
            viewContainerRef: this.vcrf,
            context: {
                data: k,
                kehamilan_id: kehamilan.id,
                orangtua_id: this.orangtua.id
            }
        };
        this.modal.showModal(add_hamil_component_component_1.AddHamilComponentComponent, options).then(function (res) {
            _this.loadpregs(null);
        });
    };
    HamilscomponentComponent.prototype.delete_preg = function (id) {
        var _this = this;
        dialogs.confirm("Apakah anda yakin ingin menghapus kehamilan?").then(function (result) {
            if (result) {
                _this.bumilServ.deletePreg(id).subscribe(function (res) {
                    Toast.makeText(res.message).show();
                    _this.loadpregs(null);
                });
            }
        });
    };
    HamilscomponentComponent.prototype.on_hamil_selected = function (id_kehamilan) {
        var navextra = {
            queryParams: { id_kehamilan: id_kehamilan, id_orangtua: this.orangtua.id }
        };
        this.route.navigate(["menuhamil"], navextra);
    };
    HamilscomponentComponent.prototype.load_kabe = function () {
        var _this = this;
        this.kbServ.getKabe(this.orangtua.id).subscribe(function (res) {
            var raw = res.content;
            console.log("haaaiii " + JSON.stringify(raw));
            raw.mal = new Choices(raw.mal);
            raw.kondom = new Choices(raw.kondom);
            raw.pil = new Choices(raw.pil);
            raw.suntik = new Choices(raw.suntik);
            raw.akdr = new Choices(raw.akdr);
            raw.inplant = new Choices(raw.inplant);
            raw.mow = new Choices(raw.mow);
            raw.mop = new Choices(raw.mop);
            _this.kabes = raw;
        });
    };
    HamilscomponentComponent.prototype.saveKB = function () {
        //transformasi
        var kabe_post = new Kabe();
        kabe_post.mal = this.choicestostring(this.kabes.mal);
        kabe_post.kondom = this.choicestostring(this.kabes.kondom);
        kabe_post.pil = this.choicestostring(this.kabes.pil);
        kabe_post.suntik = this.choicestostring(this.kabes.suntik);
        kabe_post.akdr = this.choicestostring(this.kabes.akdr);
        kabe_post.inplant = this.choicestostring(this.kabes.inplant);
        kabe_post.mow = this.choicestostring(this.kabes.mow);
        kabe_post.mop = this.choicestostring(this.kabes.mop);
        kabe_post.tanggal_pemeriksaan = moment().format('YYYY-MM-DD');
        console.log(JSON.stringify(kabe_post));
        this.kbServ.editKabe(this.orangtua.id, kabe_post).subscribe(function (res) { return Toast.makeText(res.message).show(); });
    };
    HamilscomponentComponent.prototype.choicestostring = function (cho) {
        var rencana = !cho.rencana ? "0" : "1";
        var laksana = !cho.laksana ? "0" : "1";
        return rencana + "-" + laksana;
    };
    HamilscomponentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-hamilscomponent',
            templateUrl: './hamilscomponent.component.html',
            styleUrls: ['./hamilscomponent.component.css'],
            providers: [ibuhamilservice_1.Ibuhamilservice, ka_be_service_1.KaBeService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            ibuhamilservice_1.Ibuhamilservice,
            ka_be_service_1.KaBeService,
            nativescript_angular_1.ModalDialogService,
            core_1.ViewContainerRef,
            router_1.Router])
    ], HamilscomponentComponent);
    return HamilscomponentComponent;
}());
exports.HamilscomponentComponent = HamilscomponentComponent;
var Kabe = (function () {
    function Kabe() {
        this.tanggal_pemeriksaan = moment().format();
        this.mal = new Choices('0-0');
        this.kondom = new Choices('0-0');
        this.pil = new Choices('0-0');
        this.suntik = new Choices('0-0');
        this.akdr = new Choices('0-0');
        this.inplant = new Choices('0-0');
        this.mow = new Choices('0-0');
        this.mop = new Choices('0-0');
    }
    return Kabe;
}());
var Choices = (function () {
    function Choices(str) {
        var b = str.split('-');
        this.rencana = b[0] === '1';
        this.laksana = b[1] === '1';
    }
    return Choices;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtaWxzY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbWlsc2NvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQyxzQ0FBb0U7QUFDckUsMENBQXlFO0FBQ3pFLDRGQUEwRjtBQUUxRixzR0FBa0c7QUFDbEcsNkRBQTZGO0FBQzdGLDBDQUE0QztBQUM1QyxvQ0FBcUM7QUFDckMsaURBQTRDO0FBQzVDLCtCQUFnQztBQUNoQyx5REFBc0Q7QUFTdEQ7SUFPSSxrQ0FDWSxRQUF1QixFQUN2QixTQUF5QixFQUN6QixNQUFrQixFQUNsQixLQUF3QixFQUN4QixJQUFxQixFQUNyQixLQUFZO1FBTnhCLGlCQXlCQztRQXhCVyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUdwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQzNCLFVBQUEsTUFBTTtZQUNGLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLHdCQUF3QjtZQUN4QixZQUFZLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2hGLFlBQVksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFNB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QkFBQztDQUFBLEFBMUpELElBMEpDO0FBMUpZLDREQUF3QjtBQTRKckM7SUFBQTtRQUlJLHdCQUFtQixHQUFXLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hELFFBQUcsR0FBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixXQUFNLEdBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsUUFBRyxHQUFRLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLFdBQU0sR0FBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxTQUFJLEdBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsWUFBTyxHQUFRLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLFFBQUcsR0FBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixRQUFHLEdBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbEMsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQUNEO0lBSUksaUJBQVksR0FBVTtRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUM7SUFDaEMsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQyIsInNvdXJjZXNDb250ZW50IjpbIiBpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhcywgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEFkZEhhbWlsQ29tcG9uZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLWhhbWlsLWNvbXBvbmVudC9hZGQtaGFtaWwtY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge01vZGFsRGlhbG9nUGFyYW1zLCBNb2RhbERpYWxvZ1NlcnZpY2UsIFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiXG5pbXBvcnQge0thQmVTZXJ2aWNlfSBmcm9tIFwiLi9rYS1iZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiXG5pbXBvcnQge0lidWhhbWlsc2VydmljZX0gZnJvbSBcIi4uLy4uL2lidWhhbWlsc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtaGFtaWxzY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hhbWlsc2NvbXBvbmVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hhbWlsc2NvbXBvbmVudC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW0lidWhhbWlsc2VydmljZSxLYUJlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSGFtaWxzY29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG9yYW5ndHVhOmFueTtcbiAgICBrZWhhbWlsYXM6T2JzZXJ2YWJsZUFycmF5PGFueT47XG5cbiAgICBrYWJlczpLYWJlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWN0Um91dGU6QWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgYnVtaWxTZXJ2OklidWhhbWlsc2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBrYlNlcnY6S2FCZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbW9kYWw6TW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjcmY6Vmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTpSb3V0ZXJcbiAgICApe1xuXG4gICAgICAgIHRoaXMua2FiZXMgPSBuZXcgS2FiZSgpO1xuXG4gICAgICAgIHRoaXMua2VoYW1pbGFzID0gbmV3IE9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmFjdFJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBwYXJhbXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3Jhbmd0dWFfcmF3ID0gSlNPTi5wYXJzZShwYXJhbXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vaGFuZGxpbmcgbmVzdGVkIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBvcmFuZ3R1YV9yYXcucHJvdmluc2kgPSBvcmFuZ3R1YV9yYXcucHJvdmluc2kgPyBvcmFuZ3R1YV9yYXcucHJvdmluc2kubmFtYSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIG9yYW5ndHVhX3Jhdy5rYWJ1cGF0ZW4gPSBvcmFuZ3R1YV9yYXcua2FidXBhdGVuID8gb3Jhbmd0dWFfcmF3LnByb3ZpbnNpLmthYnVwYXRlbiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIG9yYW5ndHVhX3Jhdy5rZWNhbWF0YW4gPSBvcmFuZ3R1YV9yYXcua2VjYW1hdGFuID8gb3Jhbmd0dWFfcmF3LmtlY2FtYXRhbi5uYW1hIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgb3Jhbmd0dWFfcmF3LmtlbHVyYWhhbiA9IG9yYW5ndHVhX3Jhdy5rZWx1cmFoYW4gPyBvcmFuZ3R1YV9yYXcua2VsdXJhaGFuLm5hbWEgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yYW5ndHVhID0gb3Jhbmd0dWFfcmF3O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRfa2FiZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRwcmVncyhudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgfVxuXG4gICAgbG9hZHByZWdzKGFyZ3Mpe1xuICAgICAgICB0aGlzLmJ1bWlsU2Vydi5nZXRQcmVnbmFuY2llcyh0aGlzLm9yYW5ndHVhLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXM9PntcbiAgICAgICAgICAgICAgICB0aGlzLmtlaGFtaWxhcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkocmVzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChhcmdzICE9PSBudWxsKSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICkgICAgICAgIFxuICAgIH1cblxuICAgIGFkZEhhbWlsTW9kYWxzKCl7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZnVsbHNjcmVlbjpmYWxzZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNyZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICBvcmFuZ3R1YV9pZDp0aGlzLm9yYW5ndHVhLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKEFkZEhhbWlsQ29tcG9uZW50Q29tcG9uZW50LG9wdGlvbnMpLnRoZW4oXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZHByZWdzKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBlZGl0SGFtaWxNb2RhbHMoa2VoYW1pbGFuOmFueSl7XG5cbiAgICAgICAgbGV0IGsgPSB7XG4gICAgICAgICAgICBIUEhUOmtlaGFtaWxhbi5IUEhULFxuICAgICAgICAgICAgaGFtaWxfa2U6a2VoYW1pbGFuLmhhbWlsX2tlLFxuICAgICAgICAgICAgaXNfZHJvcG91dDprZWhhbWlsYW4uaXNfZHJvcG91dFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZnVsbHNjcmVlbjpmYWxzZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNyZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICBkYXRhOmssXG4gICAgICAgICAgICAgICAga2VoYW1pbGFuX2lkOmtlaGFtaWxhbi5pZCxcbiAgICAgICAgICAgICAgICBvcmFuZ3R1YV9pZDp0aGlzLm9yYW5ndHVhLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoQWRkSGFtaWxDb21wb25lbnRDb21wb25lbnQsb3B0aW9ucykudGhlbihcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkcHJlZ3MobnVsbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGRlbGV0ZV9wcmVnKGlkOm51bWJlcil7XG4gICAgICAgIGRpYWxvZ3MuY29uZmlybShcIkFwYWthaCBhbmRhIHlha2luIGluZ2luIG1lbmdoYXB1cyBrZWhhbWlsYW4/XCIpLnRoZW4oXG4gICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idW1pbFNlcnYuZGVsZXRlUHJlZyhpZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRwcmVncyhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBvbl9oYW1pbF9zZWxlY3RlZChpZF9rZWhhbWlsYW46bnVtYmVyKXtcbiAgICAgICAgbGV0IG5hdmV4dHJhOk5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge2lkX2tlaGFtaWxhbjppZF9rZWhhbWlsYW4sIGlkX29yYW5ndHVhOnRoaXMub3Jhbmd0dWEuaWR9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucm91dGUubmF2aWdhdGUoW1wibWVudWhhbWlsXCJdLCBuYXZleHRyYSlcbiAgICB9XG5cbiAgICBsb2FkX2thYmUoKXtcbiAgICAgICAgdGhpcy5rYlNlcnYuZ2V0S2FiZSh0aGlzLm9yYW5ndHVhLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXM9PntcbiAgICAgICAgICAgICAgICBsZXQgcmF3ID0gcmVzLmNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhYWFpaWkgXCIrSlNPTi5zdHJpbmdpZnkocmF3KSk7XG5cbiAgICAgICAgICAgICAgICByYXcubWFsID0gbmV3IENob2ljZXMocmF3Lm1hbCk7XG4gICAgICAgICAgICAgICAgcmF3LmtvbmRvbSA9IG5ldyBDaG9pY2VzKHJhdy5rb25kb20pO1xuICAgICAgICAgICAgICAgIHJhdy5waWwgPSBuZXcgQ2hvaWNlcyhyYXcucGlsKTtcbiAgICAgICAgICAgICAgICByYXcuc3VudGlrID0gbmV3IENob2ljZXMocmF3LnN1bnRpayk7XG4gICAgICAgICAgICAgICAgcmF3LmFrZHIgPSBuZXcgQ2hvaWNlcyhyYXcuYWtkcik7XG4gICAgICAgICAgICAgICAgcmF3LmlucGxhbnQgPSBuZXcgQ2hvaWNlcyhyYXcuaW5wbGFudCk7XG4gICAgICAgICAgICAgICAgcmF3Lm1vdyA9IG5ldyBDaG9pY2VzKHJhdy5tb3cpO1xuICAgICAgICAgICAgICAgIHJhdy5tb3AgPSBuZXcgQ2hvaWNlcyhyYXcubW9wKTtcblxuICAgICAgICAgICAgICAgIHRoaXMua2FiZXMgPSByYXc7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2F2ZUtCKCl7XG4gICAgICAgIC8vdHJhbnNmb3JtYXNpXG4gICAgICAgIGxldCBrYWJlX3Bvc3QgPSBuZXcgS2FiZSgpO1xuICAgICAgICBrYWJlX3Bvc3QubWFsID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5tYWwpO1xuICAgICAgICBrYWJlX3Bvc3Qua29uZG9tID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5rb25kb20pO1xuICAgICAgICBrYWJlX3Bvc3QucGlsID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5waWwpO1xuICAgICAgICBrYWJlX3Bvc3Quc3VudGlrID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5zdW50aWspO1xuICAgICAgICBrYWJlX3Bvc3QuYWtkciA9IHRoaXMuY2hvaWNlc3Rvc3RyaW5nKHRoaXMua2FiZXMuYWtkcik7XG4gICAgICAgIGthYmVfcG9zdC5pbnBsYW50ID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5pbnBsYW50KTtcbiAgICAgICAga2FiZV9wb3N0Lm1vdyA9IHRoaXMuY2hvaWNlc3Rvc3RyaW5nKHRoaXMua2FiZXMubW93KTtcbiAgICAgICAga2FiZV9wb3N0Lm1vcCA9IHRoaXMuY2hvaWNlc3Rvc3RyaW5nKHRoaXMua2FiZXMubW9wKTtcbiAgICAgICAga2FiZV9wb3N0LnRhbmdnYWxfcGVtZXJpa3NhYW4gPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoa2FiZV9wb3N0KSlcbiAgICAgICAgdGhpcy5rYlNlcnYuZWRpdEthYmUodGhpcy5vcmFuZ3R1YS5pZCxrYWJlX3Bvc3QpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcz0+VG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKSxcblxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNob2ljZXN0b3N0cmluZyhjaG86Q2hvaWNlcyl7XG4gICAgICAgIGxldCByZW5jYW5hID0gIWNoby5yZW5jYW5hID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgbGV0IGxha3NhbmEgPSAhY2hvLmxha3NhbmEgPyBcIjBcIiA6IFwiMVwiO1xuICAgICAgICByZXR1cm4gcmVuY2FuYStcIi1cIitsYWtzYW5hO1xuICAgIH1cblxufVxuXG5jbGFzcyBLYWJlIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGJpZGFuX2lkOiBudW1iZXI7XG4gICAgb3Jhbmd0dWFfaWQ6IG51bWJlcjtcbiAgICB0YW5nZ2FsX3BlbWVyaWtzYWFuOiBzdHJpbmcgPSBtb21lbnQoKS5mb3JtYXQoKTtcbiAgICBtYWw6IGFueSA9IG5ldyBDaG9pY2VzKCcwLTAnKTtcbiAgICBrb25kb206IGFueSA9IG5ldyBDaG9pY2VzKCcwLTAnKTtcbiAgICBwaWw6IGFueSA9IG5ldyBDaG9pY2VzKCcwLTAnKTtcbiAgICBzdW50aWs6IGFueSA9IG5ldyBDaG9pY2VzKCcwLTAnKTtcbiAgICBha2RyOiBhbnkgPSBuZXcgQ2hvaWNlcygnMC0wJyk7XG4gICAgaW5wbGFudDogYW55ID0gbmV3IENob2ljZXMoJzAtMCcpO1xuICAgIG1vdzogYW55ID0gbmV3IENob2ljZXMoJzAtMCcpO1xuICAgIG1vcDogYW55ID0gbmV3IENob2ljZXMoJzAtMCcpO1xuXG59XG5jbGFzcyBDaG9pY2VzIHtcbiAgICByZW5jYW5hOiBib29sZWFuO1xuICAgIGxha3NhbmE6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihzdHI6c3RyaW5nKXtcbiAgICAgICAgbGV0IGIgPSBzdHIuc3BsaXQoJy0nKTtcbiAgICAgICAgdGhpcy5yZW5jYW5hID0gYlswXSA9PT0gJzEnO1xuICAgICAgICB0aGlzLmxha3NhbmEgPSBiWzFdID09PSAnMSc7XG4gICAgfVxufVxuXG4iXX0=