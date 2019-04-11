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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtaWxzY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbWlsc2NvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQyxzQ0FBb0U7QUFDckUsMENBQXlFO0FBQ3pFLDRGQUEwRjtBQUUxRixzR0FBa0c7QUFDbEcsNkRBQTZGO0FBQzdGLDBDQUE0QztBQUM1QyxvQ0FBcUM7QUFDckMsaURBQTRDO0FBQzVDLCtCQUFnQztBQUNoQyx5REFBc0Q7QUFDckQsMENBQWlEO0FBU2xEO0lBT0ksa0NBQ1ksUUFBdUIsRUFDdkIsU0FBeUIsRUFDekIsTUFBa0IsRUFDbEIsS0FBd0IsRUFDeEIsSUFBcUIsRUFDckIsS0FBWSxFQUNaLFFBQXlCO1FBUHJDLGlCQTBCQztRQXpCVyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQ3pCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBR2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDM0IsVUFBQSxNQUFNO1lBQ0YsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0Msd0JBQXdCO1lBQ3hCLFlBQVksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDaEYsWUFBWSxDQUFDLFNB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QUMsQ0FBQztJQUVsQyxDQUFDO0lBQUQsV0FBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBQ0Q7SUFJSSxpQkFBWSxHQUFVO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUMsQUFURCxJQVNDIiwic291cmNlc0NvbnRlbnQiOlsiIGltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQWRkSGFtaWxDb21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuLi9hZGQtaGFtaWwtY29tcG9uZW50L2FkZC1oYW1pbC1jb21wb25lbnQuY29tcG9uZW50JztcbmltcG9ydCB7TW9kYWxEaWFsb2dQYXJhbXMsIE1vZGFsRGlhbG9nU2VydmljZSwgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCJcbmltcG9ydCB7S2FCZVNlcnZpY2V9IGZyb20gXCIuL2thLWJlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50XCJcbmltcG9ydCB7SWJ1aGFtaWxzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vaWJ1aGFtaWxzZXJ2aWNlXCI7XG4gaW1wb3J0IHtQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1oYW1pbHNjb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGFtaWxzY29tcG9uZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGFtaWxzY29tcG9uZW50LmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbSWJ1aGFtaWxzZXJ2aWNlLEthQmVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIYW1pbHNjb21wb25lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgb3Jhbmd0dWE6YW55O1xuICAgIGtlaGFtaWxhczpPYnNlcnZhYmxlQXJyYXk8YW55PjtcblxuICAgIGthYmVzOkthYmU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3RSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBidW1pbFNlcnY6SWJ1aGFtaWxzZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGtiU2VydjpLYUJlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbDpNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmNyZjpWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHJvdXRlOlJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjpQbGF0Zm9ybUxvY2F0aW9uXG4gICAgKXtcblxuICAgICAgICB0aGlzLmthYmVzID0gbmV3IEthYmUoKTtcblxuICAgICAgICB0aGlzLmtlaGFtaWxhcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5hY3RSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcGFyYW1zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9yYW5ndHVhX3JhdyA9IEpTT04ucGFyc2UocGFyYW1zLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvL2hhbmRsaW5nIG5lc3RlZCBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgb3Jhbmd0dWFfcmF3LnByb3ZpbnNpID0gb3Jhbmd0dWFfcmF3LnByb3ZpbnNpID8gb3Jhbmd0dWFfcmF3LnByb3ZpbnNpLm5hbWEgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBvcmFuZ3R1YV9yYXcua2FidXBhdGVuID0gb3Jhbmd0dWFfcmF3LmthYnVwYXRlbiA/IG9yYW5ndHVhX3Jhdy5wcm92aW5zaS5rYWJ1cGF0ZW4gOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBvcmFuZ3R1YV9yYXcua2VjYW1hdGFuID0gb3Jhbmd0dWFfcmF3LmtlY2FtYXRhbiA/IG9yYW5ndHVhX3Jhdy5rZWNhbWF0YW4ubmFtYSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIG9yYW5ndHVhX3Jhdy5rZWx1cmFoYW4gPSBvcmFuZ3R1YV9yYXcua2VsdXJhaGFuID8gb3Jhbmd0dWFfcmF3LmtlbHVyYWhhbi5uYW1hIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmFuZ3R1YSA9IG9yYW5ndHVhX3JhdztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkX2thYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkcHJlZ3MobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLmxvY2F0aW9uLm9uUG9wU3RhdGUoKCk9Pnt0aGlzLmxvYWRwcmVncyhudWxsKX0pXG4gICAgfVxuXG4gICAgbG9hZHByZWdzKGFyZ3Mpe1xuICAgICAgICB0aGlzLmJ1bWlsU2Vydi5nZXRQcmVnbmFuY2llcyh0aGlzLm9yYW5ndHVhLmlkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXM9PntcbiAgICAgICAgICAgICAgICB0aGlzLmtlaGFtaWxhcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkocmVzLmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGlmIChhcmdzICE9PSBudWxsKSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICkgICAgICAgIFxuICAgIH1cblxuICAgIGFkZEhhbWlsTW9kYWxzKCl7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZnVsbHNjcmVlbjpmYWxzZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNyZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICBvcmFuZ3R1YV9pZDp0aGlzLm9yYW5ndHVhLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kYWwuc2hvd01vZGFsKEFkZEhhbWlsQ29tcG9uZW50Q29tcG9uZW50LG9wdGlvbnMpLnRoZW4oXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZHByZWdzKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBkZWxldGVfcHJlZyhpZDpudW1iZXIpe1xuICAgICAgICBkaWFsb2dzLmNvbmZpcm0oXCJBcGFrYWggYW5kYSB5YWtpbiBpbmdpbiBtZW5naGFwdXMga2VoYW1pbGFuP1wiKS50aGVuKFxuICAgICAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVtaWxTZXJ2LmRlbGV0ZVByZWcoaWQpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcz0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkcHJlZ3MobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgb25faGFtaWxfc2VsZWN0ZWQoaXRlbSl7XG4gICAgICAgIGRlbGV0ZSBpdGVtLm1lbGFoaXJrYW47XG4gICAgICAgIGxldCBuYXZleHRyYTpOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGl0ZW1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yb3V0ZS5uYXZpZ2F0ZShbXCJtZW51aGFtaWxcIl0sIG5hdmV4dHJhKVxuXG4gICAgfVxuXG4gICAgbG9hZF9rYWJlKCl7XG4gICAgICAgIHRoaXMua2JTZXJ2LmdldEthYmUodGhpcy5vcmFuZ3R1YS5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzPT57XG4gICAgICAgICAgICAgICAgbGV0IHJhdyA9IHJlcy5jb250ZW50O1xuICAgICAgICAgICAgICAgIHJhdy5tYWwgPSBuZXcgQ2hvaWNlcyhyYXcubWFsKTtcbiAgICAgICAgICAgICAgICByYXcua29uZG9tID0gbmV3IENob2ljZXMocmF3LmtvbmRvbSk7XG4gICAgICAgICAgICAgICAgcmF3LnBpbCA9IG5ldyBDaG9pY2VzKHJhdy5waWwpO1xuICAgICAgICAgICAgICAgIHJhdy5zdW50aWsgPSBuZXcgQ2hvaWNlcyhyYXcuc3VudGlrKTtcbiAgICAgICAgICAgICAgICByYXcuYWtkciA9IG5ldyBDaG9pY2VzKHJhdy5ha2RyKTtcbiAgICAgICAgICAgICAgICByYXcuaW5wbGFudCA9IG5ldyBDaG9pY2VzKHJhdy5pbnBsYW50KTtcbiAgICAgICAgICAgICAgICByYXcubW93ID0gbmV3IENob2ljZXMocmF3Lm1vdyk7XG4gICAgICAgICAgICAgICAgcmF3Lm1vcCA9IG5ldyBDaG9pY2VzKHJhdy5tb3ApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5rYWJlcyA9IHJhdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzYXZlS0IoKXtcbiAgICAgICAgLy90cmFuc2Zvcm1hc2lcbiAgICAgICAgbGV0IGthYmVfcG9zdCA9IG5ldyBLYWJlKCk7XG4gICAgICAgIGthYmVfcG9zdC5tYWwgPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLm1hbCk7XG4gICAgICAgIGthYmVfcG9zdC5rb25kb20gPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLmtvbmRvbSk7XG4gICAgICAgIGthYmVfcG9zdC5waWwgPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLnBpbCk7XG4gICAgICAgIGthYmVfcG9zdC5zdW50aWsgPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLnN1bnRpayk7XG4gICAgICAgIGthYmVfcG9zdC5ha2RyID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5ha2RyKTtcbiAgICAgICAga2FiZV9wb3N0LmlucGxhbnQgPSB0aGlzLmNob2ljZXN0b3N0cmluZyh0aGlzLmthYmVzLmlucGxhbnQpO1xuICAgICAgICBrYWJlX3Bvc3QubW93ID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5tb3cpO1xuICAgICAgICBrYWJlX3Bvc3QubW9wID0gdGhpcy5jaG9pY2VzdG9zdHJpbmcodGhpcy5rYWJlcy5tb3ApO1xuICAgICAgICBrYWJlX3Bvc3QudGFuZ2dhbF9wZW1lcmlrc2FhbiA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShrYWJlX3Bvc3QpKVxuICAgICAgICB0aGlzLmtiU2Vydi5lZGl0S2FiZSh0aGlzLm9yYW5ndHVhLmlkLGthYmVfcG9zdCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzPT5Ub2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpLFxuXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2hvaWNlc3Rvc3RyaW5nKGNobzpDaG9pY2VzKXtcbiAgICAgICAgbGV0IHJlbmNhbmEgPSAhY2hvLnJlbmNhbmEgPyBcIjBcIiA6IFwiMVwiO1xuICAgICAgICBsZXQgbGFrc2FuYSA9ICFjaG8ubGFrc2FuYSA/IFwiMFwiIDogXCIxXCI7XG4gICAgICAgIHJldHVybiByZW5jYW5hK1wiLVwiK2xha3NhbmE7XG4gICAgfVxuXG59XG5cbmNsYXNzIEthYmUge1xuICAgIGlkOiBudW1iZXI7XG4gICAgYmlkYW5faWQ6IG51bWJlcjtcbiAgICBvcmFuZ3R1YV9pZDogbnVtYmVyO1xuICAgIHRhbmdnYWxfcGVtZXJpa3NhYW46IHN0cmluZyA9IG1vbWVudCgpLmZvcm1hdCgpO1xuICAgIG1hbDogYW55ID0gbmV3IENob2ljZXMoJzAtMCcpO1xuICAgIGtvbmRvbTogYW55ID0gbmV3IENob2ljZXMoJzAtMCcpO1xuICAgIHBpbDogYW55ID0gbmV3IENob2ljZXMoJzAtMCcpO1xuICAgIHN1bnRpazogYW55ID0gbmV3IENob2ljZXMoJzAtMCcpO1xuICAgIGFrZHI6IGFueSA9IG5ldyBDaG9pY2VzKCcwLTAnKTtcbiAgICBpbnBsYW50OiBhbnkgPSBuZXcgQ2hvaWNlcygnMC0wJyk7XG4gICAgbW93OiBhbnkgPSBuZXcgQ2hvaWNlcygnMC0wJyk7XG4gICAgbW9wOiBhbnkgPSBuZXcgQ2hvaWNlcygnMC0wJyk7XG5cbn1cbmNsYXNzIENob2ljZXMge1xuICAgIHJlbmNhbmE6IGJvb2xlYW47XG4gICAgbGFrc2FuYTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHN0cjpzdHJpbmcpe1xuICAgICAgICBsZXQgYiA9IHN0ci5zcGxpdCgnLScpO1xuICAgICAgICB0aGlzLnJlbmNhbmEgPSBiWzBdID09PSAnMSc7XG4gICAgICAgIHRoaXMubGFrc2FuYSA9IGJbMV0gPT09ICcxJztcbiAgICB9XG59XG5cbiJdfQ==