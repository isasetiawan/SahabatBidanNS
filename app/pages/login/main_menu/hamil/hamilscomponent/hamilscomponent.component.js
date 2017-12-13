"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ibuhamilservice_1 = require("../../anaks/ibuhamilservice");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var add_hamil_component_component_1 = require("../add-hamil-component/add-hamil-component.component");
var nativescript_angular_1 = require("nativescript-angular");
var Toast = require("nativescript-toast");
var dialogs = require("ui/dialogs");
var ka_be_service_1 = require("./ka-be.service");
var moment = require("moment");
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
        this.route.navigate(["kehamilan"], navextra);
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
        this.kbServ.editKabe(this.orangtua.id, kabe_post).subscribe(function (res) { return Toast.makeText(res.message).show(); }, function (err) { return Toast.makeText(err.json().message).show(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtaWxzY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbWlsc2NvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsMENBQXlFO0FBQ3pFLCtEQUE4RDtBQUM5RCw0RkFBMEY7QUFFMUYsc0dBQWtHO0FBQ2xHLDZEQUE2RjtBQUM3RiwwQ0FBNEM7QUFDNUMsb0NBQXFDO0FBQ3JDLGlEQUE0QztBQUM1QywrQkFBZ0M7QUFTaEM7SUFPSSxrQ0FDWSxRQUF1QixFQUN2QixTQUF5QixFQUN6QixNQUFrQixFQUNsQixLQUF3QixFQUN4QixJQUFxQixFQUNyQixLQUFZO1FBTnhCLGlCQXlCQztRQXhCVyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUdwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQzNCLFVBQUEsTUFBTTtZQUNGLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLHdCQUF3QjtZQUN4QixZQUFZLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2hGLFlBQVksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLFNB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aWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJYnVoYW1pbHNlcnZpY2UgfSBmcm9tICcuLi8uLi9hbmFrcy9pYnVoYW1pbHNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEFkZEhhbWlsQ29tcG9uZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLWhhbWlsLWNvbXBvbmVudC9hZGQtaGFtaWwtY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge01vZGFsRGlhbG9nUGFyYW1zLCBNb2RhbERpYWxvZ1NlcnZpY2UsIFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiXG5pbXBvcnQge0thQmVTZXJ2aWNlfSBmcm9tIFwiLi9rYS1iZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudFwiXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1oYW1pbHNjb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGFtaWxzY29tcG9uZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGFtaWxzY29tcG9uZW50LmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbSWJ1aGFtaWxzZXJ2aWNlLEthQmVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIYW1pbHNjb21wb25lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgb3Jhbmd0dWE6YW55O1xuICAgIGtlaGFtaWxhczpPYnNlcnZhYmxlQXJyYXk8YW55PjtcblxuICAgIGthYmVzOkthYmU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3RSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBidW1pbFNlcnY6SWJ1aGFtaWxzZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGtiU2VydjpLYUJlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbDpNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmNyZjpWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHJvdXRlOlJvdXRlclxuICAgICl7XG5cbiAgICAgICAgdGhpcy5rYWJlcyA9IG5ldyBLYWJlKCk7XG5cbiAgICAgICAgdGhpcy5rZWhhbWlsYXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMuYWN0Um91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcmFuZ3R1YV9yYXcgPSBKU09OLnBhcnNlKHBhcmFtcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy9oYW5kbGluZyBuZXN0ZWQgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIG9yYW5ndHVhX3Jhdy5wcm92aW5zaSA9IG9yYW5ndHVhX3Jhdy5wcm92aW5zaSA/IG9yYW5ndHVhX3Jhdy5wcm92aW5zaS5uYW1hIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgb3Jhbmd0dWFfcmF3LmthYnVwYXRlbiA9IG9yYW5ndHVhX3Jhdy5rYWJ1cGF0ZW4gPyBvcmFuZ3R1YV9yYXcucHJvdmluc2kua2FidXBhdGVuIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgb3Jhbmd0dWFfcmF3LmtlY2FtYXRhbiA9IG9yYW5ndHVhX3Jhdy5rZWNhbWF0YW4gPyBvcmFuZ3R1YV9yYXcua2VjYW1hdGFuLm5hbWEgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBvcmFuZ3R1YV9yYXcua2VsdXJhaGFuID0gb3Jhbmd0dWFfcmF3LmtlbHVyYWhhbiA/IG9yYW5ndHVhX3Jhdy5rZWx1cmFoYW4ubmFtYSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Jhbmd0dWEgPSBvcmFuZ3R1YV9yYXc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZF9rYWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZHByZWdzKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICB9XG5cbiAgICBsb2FkcHJlZ3MoYXJncyl7XG4gICAgICAgIHRoaXMuYnVtaWxTZXJ2LmdldFByZWduYW5jaWVzKHRoaXMub3Jhbmd0dWEuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcz0+e1xuICAgICAgICAgICAgICAgIHRoaXMua2VoYW1pbGFzID0gbmV3IE9ic2VydmFibGVBcnJheShyZXMuY29udGVudCk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgIT09IG51bGwpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgKSAgICAgICAgXG4gICAgfVxuXG4gICAgYWRkSGFtaWxNb2RhbHMoKXtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmdWxsc2NyZWVuOmZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y3JmLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIG9yYW5ndHVhX2lkOnRoaXMub3Jhbmd0dWEuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoQWRkSGFtaWxDb21wb25lbnRDb21wb25lbnQsb3B0aW9ucykudGhlbihcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkcHJlZ3MobnVsbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGVkaXRIYW1pbE1vZGFscyhrZWhhbWlsYW46YW55KXtcblxuICAgICAgICBsZXQgayA9IHtcbiAgICAgICAgICAgIEhQSFQ6a2VoYW1pbGFuLkhQSFQsXG4gICAgICAgICAgICBoYW1pbF9rZTprZWhhbWlsYW4uaGFtaWxfa2UsXG4gICAgICAgICAgICBpc19kcm9wb3V0OmtlaGFtaWxhbi5pc19kcm9wb3V0XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmdWxsc2NyZWVuOmZhbHNlLFxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y3JmLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIGRhdGE6ayxcbiAgICAgICAgICAgICAgICBrZWhhbWlsYW5faWQ6a2VoYW1pbGFuLmlkLFxuICAgICAgICAgICAgICAgIG9yYW5ndHVhX2lkOnRoaXMub3Jhbmd0dWEuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChBZGRIYW1pbENvbXBvbmVudENvbXBvbmVudCxvcHRpb25zKS50aGVuKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRwcmVncyhudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZGVsZXRlX3ByZWcoaWQ6bnVtYmVyKXtcbiAgICAgICAgZGlhbG9ncy5jb25maXJtKFwiQXBha2FoIGFuZGEgeWFraW4gaW5naW4gbWVuZ2hhcHVzIGtlaGFtaWxhbj9cIikudGhlbihcbiAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bWlsU2Vydi5kZWxldGVQcmVnKGlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICByZXM9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZHByZWdzKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIG9uX2hhbWlsX3NlbGVjdGVkKGlkX2tlaGFtaWxhbjpudW1iZXIpe1xuICAgICAgICBsZXQgbmF2ZXh0cmE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7aWRfa2VoYW1pbGFuOmlkX2tlaGFtaWxhbiwgaWRfb3Jhbmd0dWE6dGhpcy5vcmFuZ3R1YS5pZH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbXCJrZWhhbWlsYW5cIl0sIG5hdmV4dHJhKVxuICAgIH1cblxuICAgIGxvYWRfa2FiZSgpe1xuICAgICAgICB0aGlzLmtiU2Vydi5nZXRLYWJlKHRoaXMub3Jhbmd0dWEuaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcz0+e1xuICAgICAgICAgICAgICAgIGxldCByYXcgPSByZXMuY29udGVudDtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFhYWlpaSBcIitKU09OLnN0cmluZ2lmeShyYXcpKTtcblxuICAgICAgICAgICAgICAgIHJhdy5tYWwgPSBuZXcgQ2hvaWNlcyhyYXcubWFsKTtcbiAgICAgICAgICAgICAgICByYXcua29uZG9tID0gbmV3IENob2ljZXMocmF3LmtvbmRvbSk7XG4gICAgICAgICAgICAgICAgcmF3LnBpbCA9IG5ldyBDaG9pY2VzKHJhdy5waWwpO1xuICAgICAgICAgICAgICAgIHJhdy5zdW50aWsgPSBuZXcgQ2hvaWNlcyhyYXcuc3VudGlrKTtcbiAgICAgICAgICAgICAgICByYXcuYWtkciA9IG5ldyBDaG9pY2VzKHJhdy5ha2RyKTtcbiAgICAgICAgICAgICAgICByYXcuaW5wbGFudCA9IG5ldyBDaG9pY2VzKHJhdy5pbnBsYW50KTtcbiAgICAgICAgICAgICAgICByYXcubW93ID0gbmV3IENob2ljZXMocmF3Lm1vdyk7XG4gICAgICAgICAgICAgICAgcmF3Lm1vcCA9IG5ldyBDaG9pY2VzKHJhdy5tb3ApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5rYWJlcyA9IHJhdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzYXZlS0IoKXtcbiAgICAgICAgLy90cmFuc2Zvcm1hc2lcbiAgICAgICAgbGV0IGthYmVfcG9zdCA9IG5ldyBLYWJlKCk7XG4gICAgICAgIGthYmVfcG9zdC5tYWwgPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLm1hbCk7XG4gICAgICAgIGthYmVfcG9zdC5rb25kb20gPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLmtvbmRvbSk7XG4gICAgICAgIGthYmVfcG9zdC5waWwgPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLnBpbCk7XG4gICAgICAgIGthYmVfcG9zdC5zdW50aWsgPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLnN1bnRpayk7XG4gICAgICAgIGthYmVfcG9zdC5ha2RyID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5ha2RyKTtcbiAgICAgICAga2FiZV9wb3N0LmlucGxhbnQgPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLmlucGxhbnQpO1xuICAgICAgICBrYWJlX3Bvc3QubW93ID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5tb3cpO1xuICAgICAgICBrYWJlX3Bvc3QubW9wID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5tb3ApO1xuICAgICAgICBrYWJlX3Bvc3QudGFuZ2dhbF9wZW1lcmlrc2FhbiA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShrYWJlX3Bvc3QpKVxuICAgICAgICB0aGlzLmtiU2Vydi5lZGl0S2FiZSh0aGlzLm9yYW5ndHVhLmlkLGthYmVfcG9zdCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzPT5Ub2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpLFxuICAgICAgICAgICAgZXJyID0+IFRvYXN0Lm1ha2VUZXh0KGVyci5qc29uKCkubWVzc2FnZSkuc2hvdygpXG5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjaG9pY2VzdG9zdHJpbmcoY2hvOkNob2ljZXMpe1xuICAgICAgICBsZXQgcmVuY2FuYSA9ICFjaG8ucmVuY2FuYSA/IFwiMFwiIDogXCIxXCI7XG4gICAgICAgIGxldCBsYWtzYW5hID0gIWNoby5sYWtzYW5hID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgcmV0dXJuIHJlbmNhbmErXCItXCIrbGFrc2FuYTtcbiAgICB9XG5cbn1cblxuY2xhc3MgS2FiZSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBiaWRhbl9pZDogbnVtYmVyO1xuICAgIG9yYW5ndHVhX2lkOiBudW1iZXI7XG4gICAgdGFuZ2dhbF9wZW1lcmlrc2Fhbjogc3RyaW5nID0gbW9tZW50KCkuZm9ybWF0KCk7XG4gICAgbWFsOiBhbnkgPSBuZXcgQ2hvaWNlcygnMC0wJyk7XG4gICAga29uZG9tOiBhbnkgPSBuZXcgQ2hvaWNlcygnMC0wJyk7XG4gICAgcGlsOiBhbnkgPSBuZXcgQ2hvaWNlcygnMC0wJyk7XG4gICAgc3VudGlrOiBhbnkgPSBuZXcgQ2hvaWNlcygnMC0wJyk7XG4gICAgYWtkcjogYW55ID0gbmV3IENob2ljZXMoJzAtMCcpO1xuICAgIGlucGxhbnQ6IGFueSA9IG5ldyBDaG9pY2VzKCcwLTAnKTtcbiAgICBtb3c6IGFueSA9IG5ldyBDaG9pY2VzKCcwLTAnKTtcbiAgICBtb3A6IGFueSA9IG5ldyBDaG9pY2VzKCcwLTAnKTtcblxufVxuY2xhc3MgQ2hvaWNlcyB7XG4gICAgcmVuY2FuYTogYm9vbGVhbjtcbiAgICBsYWtzYW5hOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyOnN0cmluZyl7XG4gICAgICAgIGxldCBiID0gc3RyLnNwbGl0KCctJyk7XG4gICAgICAgIHRoaXMucmVuY2FuYSA9IGJbMF0gPT09ICcxJztcbiAgICAgICAgdGhpcy5sYWtzYW5hID0gYlsxXSA9PT0gJzEnO1xuICAgIH1cbn1cblxuIl19