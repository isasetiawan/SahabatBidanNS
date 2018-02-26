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
var common_1 = require("@angular/common");
var HamilscomponentComponent = (function () {
    function HamilscomponentComponent(actRoute, bumilServ, kbServ, modal, vcrf, route, location) {
        var _this = this;
        this.actRoute = actRoute;
        this.bumilServ = bumilServ;
        this.kbServ = kbServ;
        this.modal = modal;
        this.vcrf = vcrf;
        this.route = route;
        this.location = location;
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
        var _this = this;
        this.location.onPopState(function () { _this.loadpregs(null); });
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
    HamilscomponentComponent.prototype.on_hamil_selected = function (item) {
        delete item.melahirkan;
        var navextra = {
            queryParams: item
        };
        this.route.navigate(["menuhamil"], navextra);
    };
    HamilscomponentComponent.prototype.load_kabe = function () {
        var _this = this;
        this.kbServ.getKabe(this.orangtua.id).subscribe(function (res) {
            var raw = res.content;
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
            router_1.Router,
            common_1.PlatformLocation])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtaWxzY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbWlsc2NvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQyxzQ0FBb0U7QUFDckUsMENBQXlFO0FBQ3pFLDRGQUEwRjtBQUUxRixzR0FBa0c7QUFDbEcsNkRBQTZGO0FBQzdGLDBDQUE0QztBQUM1QyxvQ0FBcUM7QUFDckMsaURBQTRDO0FBQzVDLCtCQUFnQztBQUNoQyx5REFBc0Q7QUFDckQsMENBQWlEO0FBU2xEO0lBT0ksa0NBQ1ksUUFBdUIsRUFDdkIsU0FBeUIsRUFDekIsTUFBa0IsRUFDbEIsS0FBd0IsRUFDeEIsSUFBcUIsRUFDckIsS0FBWSxFQUNaLFFBQXlCO1FBUHJDLGlCQTBCQztRQXpCVyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBR2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDM0IsVUFBQSxNQUFNO1lBQ0YsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0Msd0JBQXdCO1lBQ3hCLFlBQVksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDaEYsWUFBWSxDQUFDLFNB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QjtZQUNuQix1QkFBZ0I7WUFDZixlQUFNO1lBQ0gseUJBQWdCO09BZDVCLHdCQUF3QixDQTJKcEM7SUFBRCwrQkFBQztDQUFBLEFBM0pELElBMkpDO0FBM0pZLDREQUF3QjtBQTZKckM7SUFBQTtRQUlJLHdCQUFtQixHQUFXLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hELFFBQUcsR0FBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixXQUFNLEdBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsUUFBRyxHQUFRLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLFdBQU0sR0FBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxTQUFJLEdBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsWUFBTyxHQUFRLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLFFBQUcsR0FBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixRQUFHLEdBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbEMsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQUNEO0lBSUksaUJBQVksR0FBVTtRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUM7SUFDaEMsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQyIsInNvdXJjZXNDb250ZW50IjpbIiBpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkV4dHJhcywgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEFkZEhhbWlsQ29tcG9uZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLWhhbWlsLWNvbXBvbmVudC9hZGQtaGFtaWwtY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge01vZGFsRGlhbG9nUGFyYW1zLCBNb2RhbERpYWxvZ1NlcnZpY2UsIFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiXG5pbXBvcnQge0thQmVTZXJ2aWNlfSBmcm9tIFwiLi9rYS1iZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiXG5pbXBvcnQge0lidWhhbWlsc2VydmljZX0gZnJvbSBcIi4uLy4uL2lidWhhbWlsc2VydmljZVwiO1xuIGltcG9ydCB7UGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtaGFtaWxzY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hhbWlsc2NvbXBvbmVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hhbWlsc2NvbXBvbmVudC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW0lidWhhbWlsc2VydmljZSxLYUJlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSGFtaWxzY29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG9yYW5ndHVhOmFueTtcbiAgICBrZWhhbWlsYXM6T2JzZXJ2YWJsZUFycmF5PGFueT47XG5cbiAgICBrYWJlczpLYWJlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWN0Um91dGU6QWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgYnVtaWxTZXJ2OklidWhhbWlsc2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBrYlNlcnY6S2FCZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbW9kYWw6TW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjcmY6Vmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTpSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246UGxhdGZvcm1Mb2NhdGlvblxuICAgICl7XG5cbiAgICAgICAgdGhpcy5rYWJlcyA9IG5ldyBLYWJlKCk7XG5cbiAgICAgICAgdGhpcy5rZWhhbWlsYXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMuYWN0Um91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcmFuZ3R1YV9yYXcgPSBKU09OLnBhcnNlKHBhcmFtcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy9oYW5kbGluZyBuZXN0ZWQgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIG9yYW5ndHVhX3Jhdy5wcm92aW5zaSA9IG9yYW5ndHVhX3Jhdy5wcm92aW5zaSA/IG9yYW5ndHVhX3Jhdy5wcm92aW5zaS5uYW1hIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgb3Jhbmd0dWFfcmF3LmthYnVwYXRlbiA9IG9yYW5ndHVhX3Jhdy5rYWJ1cGF0ZW4gPyBvcmFuZ3R1YV9yYXcucHJvdmluc2kua2FidXBhdGVuIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgb3Jhbmd0dWFfcmF3LmtlY2FtYXRhbiA9IG9yYW5ndHVhX3Jhdy5rZWNhbWF0YW4gPyBvcmFuZ3R1YV9yYXcua2VjYW1hdGFuLm5hbWEgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBvcmFuZ3R1YV9yYXcua2VsdXJhaGFuID0gb3Jhbmd0dWFfcmF3LmtlbHVyYWhhbiA/IG9yYW5ndHVhX3Jhdy5rZWx1cmFoYW4ubmFtYSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Jhbmd0dWEgPSBvcmFuZ3R1YV9yYXc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZF9rYWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZHByZWdzKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5vblBvcFN0YXRlKCgpPT57dGhpcy5sb2FkcHJlZ3MobnVsbCl9KVxuICAgIH1cblxuICAgIGxvYWRwcmVncyhhcmdzKXtcbiAgICAgICAgdGhpcy5idW1pbFNlcnYuZ2V0UHJlZ25hbmNpZXModGhpcy5vcmFuZ3R1YS5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzPT57XG4gICAgICAgICAgICAgICAgdGhpcy5rZWhhbWlsYXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHJlcy5jb250ZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoYXJncyAhPT0gbnVsbCkgYXJncy5vYmplY3Qubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICApICAgICAgICBcbiAgICB9XG5cbiAgICBhZGRIYW1pbE1vZGFscygpe1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46ZmFsc2UsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjcmYsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgb3Jhbmd0dWFfaWQ6dGhpcy5vcmFuZ3R1YS5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChBZGRIYW1pbENvbXBvbmVudENvbXBvbmVudCxvcHRpb25zKS50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRwcmVncyhudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZWRpdEhhbWlsTW9kYWxzKGtlaGFtaWxhbjphbnkpe1xuXG4gICAgICAgIGxldCBrID0ge1xuICAgICAgICAgICAgSFBIVDprZWhhbWlsYW4uSFBIVCxcbiAgICAgICAgICAgIGhhbWlsX2tlOmtlaGFtaWxhbi5oYW1pbF9rZSxcbiAgICAgICAgICAgIGlzX2Ryb3BvdXQ6a2VoYW1pbGFuLmlzX2Ryb3BvdXRcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46ZmFsc2UsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjcmYsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgZGF0YTprLFxuICAgICAgICAgICAgICAgIGtlaGFtaWxhbl9pZDprZWhhbWlsYW4uaWQsXG4gICAgICAgICAgICAgICAgb3Jhbmd0dWFfaWQ6dGhpcy5vcmFuZ3R1YS5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKEFkZEhhbWlsQ29tcG9uZW50Q29tcG9uZW50LG9wdGlvbnMpLnRoZW4oXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZHByZWdzKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBkZWxldGVfcHJlZyhpZDpudW1iZXIpe1xuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oXCJBcGFrYWggYW5kYSB5YWtpbiBpbmdpbiBtZW5naGFwdXMga2VoYW1pbGFuP1wiKS50aGVuKFxuICAgICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVtaWxTZXJ2LmRlbGV0ZVByZWcoaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcz0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkcHJlZ3MobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgb25faGFtaWxfc2VsZWN0ZWQoaXRlbSl7XG4gICAgICAgIGRlbGV0ZSBpdGVtLm1lbGFoaXJrYW47XG4gICAgICAgIGxldCBuYXZleHRyYTpOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGl0ZW1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbXCJtZW51aGFtaWxcIl0sIG5hdmV4dHJhKVxuXG4gICAgfVxuXG4gICAgbG9hZF9rYWJlKCl7XG4gICAgICAgIHRoaXMua2JTZXJ2LmdldEthYmUodGhpcy5vcmFuZ3R1YS5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzPT57XG4gICAgICAgICAgICAgICAgbGV0IHJhdyA9IHJlcy5jb250ZW50O1xuICAgICAgICAgICAgICAgIHJhdy5tYWwgPSBuZXcgQ2hvaWNlcyhyYXcubWFsKTtcbiAgICAgICAgICAgICAgICByYXcua29uZG9tID0gbmV3IENob2ljZXMocmF3LmtvbmRvbSk7XG4gICAgICAgICAgICAgICAgcmF3LnBpbCA9IG5ldyBDaG9pY2VzKHJhdy5waWwpO1xuICAgICAgICAgICAgICAgIHJhdy5zdW50aWsgPSBuZXcgQ2hvaWNlcyhyYXcuc3VudGlrKTtcbiAgICAgICAgICAgICAgICByYXcuYWtkciA9IG5ldyBDaG9pY2VzKHJhdy5ha2RyKTtcbiAgICAgICAgICAgICAgICByYXcuaW5wbGFudCA9IG5ldyBDaG9pY2VzKHJhdy5pbnBsYW50KTtcbiAgICAgICAgICAgICAgICByYXcubW93ID0gbmV3IENob2ljZXMocmF3Lm1vdyk7XG4gICAgICAgICAgICAgICAgcmF3Lm1vcCA9IG5ldyBDaG9pY2VzKHJhdy5tb3ApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5rYWJlcyA9IHJhdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzYXZlS0IoKXtcbiAgICAgICAgLy90cmFuc2Zvcm1hc2lcbiAgICAgICAgbGV0IGthYmVfcG9zdCA9IG5ldyBLYWJlKCk7XG4gICAgICAgIGthYmVfcG9zdC5tYWwgPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLm1hbCk7XG4gICAgICAgIGthYmVfcG9zdC5rb25kb20gPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLmtvbmRvbSk7XG4gICAgICAgIGthYmVfcG9zdC5waWwgPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLnBpbCk7XG4gICAgICAgIGthYmVfcG9zdC5zdW50aWsgPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLnN1bnRpayk7XG4gICAgICAgIGthYmVfcG9zdC5ha2RyID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5ha2RyKTtcbiAgICAgICAga2FiZV9wb3N0LmlucGxhbnQgPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLmlucGxhbnQpO1xuICAgICAgICBrYWJlX3Bvc3QubW93ID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5tb3cpO1xuICAgICAgICBrYWJlX3Bvc3QubW9wID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5tb3ApO1xuICAgICAgICBrYWJlX3Bvc3QudGFuZ2dhbF9wZW1lcmlrc2FhbiA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShrYWJlX3Bvc3QpKVxuICAgICAgICB0aGlzLmtiU2Vydi5lZGl0S2FiZSh0aGlzLm9yYW5ndHVhLmlkLGthYmVfcG9zdCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzPT5Ub2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpLFxuXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2hvaWNlc3Rvc3RyaW5nKGNobzpDaG9pY2VzKXtcbiAgICAgICAgbGV0IHJlbmNhbmEgPSAhY2hvLnJlbmNhbmEgPyBcIjBcIiA6IFwiMVwiO1xuICAgICAgICBsZXQgbGFrc2FuYSA9ICFjaG8ubGFrc2FuYSA/IFwiMFwiIDogXCIxXCI7XG4gICAgICAgIHJldHVybiByZW5jYW5hK1wiLVwiK2xha3NhbmE7XG4gICAgfVxuXG59XG5cbmNsYXNzIEthYmUge1xuICAgIGlkOiBudW1iZXI7XG4gICAgYmlkYW5faWQ6IG51bWJlcjtcbiAgICBvcmFuZ3R1YV9pZDogbnVtYmVyO1xuICAgIHRhbmdnYWxfcGVtZXJpa3NhYW46IHN0cmluZyA9IG1vbWVudCgpLmZvcm1hdCgpO1xuICAgIG1hbDogYW55ID0gbmV3IENob2ljZXMoJzAtMCcpO1xuICAgIGtvbmRvbTogYW55ID0gbmV3IENob2ljZXMoJzAtMCcpO1xuICAgIHBpbDogYW55ID0gbmV3IENob2ljZXMoJzAtMCcpO1xuICAgIHN1bnRpazogYW55ID0gbmV3IENob2ljZXMoJzAtMCcpO1xuICAgIGFrZHI6IGFueSA9IG5ldyBDaG9pY2VzKCcwLTAnKTtcbiAgICBpbnBsYW50OiBhbnkgPSBuZXcgQ2hvaWNlcygnMC0wJyk7XG4gICAgbW93OiBhbnkgPSBuZXcgQ2hvaWNlcygnMC0wJyk7XG4gICAgbW9wOiBhbnkgPSBuZXcgQ2hvaWNlcygnMC0wJyk7XG5cbn1cbmNsYXNzIENob2ljZXMge1xuICAgIHJlbmNhbmE6IGJvb2xlYW47XG4gICAgbGFrc2FuYTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHN0cjpzdHJpbmcpe1xuICAgICAgICBsZXQgYiA9IHN0ci5zcGxpdCgnLScpO1xuICAgICAgICB0aGlzLnJlbmNhbmEgPSBiWzBdID09PSAnMSc7XG4gICAgICAgIHRoaXMubGFrc2FuYSA9IGJbMV0gPT09ICcxJztcbiAgICB9XG59XG5cbiJdfQ==