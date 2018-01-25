"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Toast = require("nativescript-toast");
var melahirkan_service_1 = require("../../kehamilan/melahirkan.service");
var router_1 = require("@angular/router");
var MelahirkanComponent = (function () {
    function MelahirkanComponent(actRoute, route, melahirkanServ) {
        this.actRoute = actRoute;
        this.route = route;
        this.melahirkanServ = melahirkanServ;
        this.keluhanChoices = [
            { key: 1, label: "Ya" },
            { key: 0, label: "Tidak" },
        ];
    }
    MelahirkanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (params) {
            _this.id_kehamilan = params.id_kehamilan;
            _this.id_orangtua = params.id_orangtua;
        });
        this.load_melahirkan();
    };
    MelahirkanComponent.prototype.load_melahirkan = function () {
        var _this = this;
        this.melahirkanServ.getMelahirkan(this.id_kehamilan).subscribe(function (res) { return _this.melahirkan = res.content; });
    };
    MelahirkanComponent.prototype.save_melahirkan = function () {
        var _this = this;
        console.log(JSON.stringify(this.melahirkan));
        this.melahirkanServ.updateMelahirkan(this.id_kehamilan, this.melahirkan).subscribe(function (res) {
            Toast.makeText(res.message).show();
            _this.load_melahirkan();
        });
    };
    MelahirkanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-melahirkan',
            templateUrl: './melahirkan.component.html',
            styleUrls: ['./melahirkan.component.css'],
            providers: [melahirkan_service_1.MelahirkanService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            melahirkan_service_1.MelahirkanService])
    ], MelahirkanComponent);
    return MelahirkanComponent;
}());
exports.MelahirkanComponent = MelahirkanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVsYWhpcmthbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZWxhaGlya2FuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBNEM7QUFDNUMseUVBQXFFO0FBQ3JFLDBDQUF1RDtBQVN2RDtJQVdJLDZCQUNZLFFBQXVCLEVBQ3ZCLEtBQVksRUFDWixjQUFnQztRQUZoQyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFSNUMsbUJBQWMsR0FBRztZQUNiLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsSUFBSSxFQUFDO1lBQ25CLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFDO1NBQ3pCLENBQUM7SUFPRSxDQUFDO0lBRUwsc0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUMvQixVQUFBLE1BQU07WUFDRixLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDeEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQzFDLENBQUMsQ0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUMxRCxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBN0IsQ0FBNkIsQ0FDdkMsQ0FBQztJQUNOLENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQUEsaUJBUUM7UUFQRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQzdFLFVBQUEsR0FBRztZQUNDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUExQ1EsbUJBQW1CO1FBUC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLHNDQUFpQixDQUFDO1NBQ2pDLENBQUM7eUNBYXVCLHVCQUFjO1lBQ2pCLGVBQU07WUFDRyxzQ0FBaUI7T0FkbkMsbUJBQW1CLENBNEMvQjtJQUFELDBCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbmltcG9ydCB7TWVsYWhpcmthblNlcnZpY2V9IGZyb20gXCIuLi8uLi9rZWhhbWlsYW4vbWVsYWhpcmthbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1tZWxhaGlya2FuJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWVsYWhpcmthbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbWVsYWhpcmthbi5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbTWVsYWhpcmthblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE1lbGFoaXJrYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaWRfa2VoYW1pbGFuOm51bWJlcjtcbiAgICBpZF9vcmFuZ3R1YTpudW1iZXI7XG4gICAgbWVsYWhpcmthbjphbnk7XG5cbiAgICBrZWx1aGFuQ2hvaWNlcyA9IFtcbiAgICAgICAge2tleToxLCBsYWJlbDpcIllhXCJ9LFxuICAgICAgICB7a2V5OjAsIGxhYmVsOlwiVGlkYWtcIn0sXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjdFJvdXRlOkFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOlJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBtZWxhaGlya2FuU2VydjpNZWxhaGlya2FuU2VydmljZSxcblxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hY3RSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICBwYXJhbXM9PntcbiAgICAgICAgICAgICAgICB0aGlzLmlkX2tlaGFtaWxhbiA9IHBhcmFtcy5pZF9rZWhhbWlsYW47XG4gICAgICAgICAgICAgICAgdGhpcy5pZF9vcmFuZ3R1YSA9IHBhcmFtcy5pZF9vcmFuZ3R1YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5sb2FkX21lbGFoaXJrYW4oKVxuICAgIH1cblxuICAgIGxvYWRfbWVsYWhpcmthbigpe1xuICAgICAgICB0aGlzLm1lbGFoaXJrYW5TZXJ2LmdldE1lbGFoaXJrYW4odGhpcy5pZF9rZWhhbWlsYW4pLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB0aGlzLm1lbGFoaXJrYW4gPSByZXMuY29udGVudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNhdmVfbWVsYWhpcmthbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLm1lbGFoaXJrYW4pKTtcbiAgICAgICAgdGhpcy5tZWxhaGlya2FuU2Vydi51cGRhdGVNZWxhaGlya2FuKHRoaXMuaWRfa2VoYW1pbGFuLHRoaXMubWVsYWhpcmthbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZF9tZWxhaGlya2FuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=