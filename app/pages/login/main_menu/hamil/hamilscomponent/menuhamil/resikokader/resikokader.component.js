"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ResikoKader_1 = require("./ResikoKader");
var resiko_kader_service_1 = require("./resiko-kader.service");
var Toast = require("nativescript-toast");
var ResikokaderComponent = (function () {
    function ResikokaderComponent(actroute, route, serv) {
        this.actroute = actroute;
        this.route = route;
        this.serv = serv;
        this.resiko = new ResikoKader_1.ResikoKader();
    }
    ResikokaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actroute.queryParams.subscribe(function (params) {
            console.log(JSON.stringify(params));
            _this.load(params.id_kehamilan);
        });
    };
    ResikokaderComponent.prototype.load = function (id_kehamilan) {
        var _this = this;
        this.serv.getresiko(id_kehamilan).subscribe(function (res) {
            _this.resiko.kehamilan_id = res.content.kehamilan_id;
            _this.resiko.pendeteksi = res.content.pendeteksi;
            _this.resiko.muda_hamil = res.content.muda_hamil;
            _this.resiko.lambat_hamil = res.content.lambat_hamil;
            _this.resiko.tua_hamil = res.content.tua_hamil;
            _this.resiko.cepat_hamil = res.content.cepat_hamil;
            _this.resiko.lama_hamil = res.content.lama_hamil;
            _this.resiko.banyak_anak = res.content.banyak_anak;
            _this.resiko.umur_tua = res.content.umur_tua;
            _this.resiko.pendek = res.content.pendek;
            _this.resiko.gagal_hamil = res.content.gagal_hamil;
            _this.resiko.vakum = res.content.vakum;
            _this.resiko.uri_dirogoh = res.content.uri_dirogoh;
            _this.resiko.infus = res.content.infus;
            console.log(JSON.stringify(_this.resiko));
        });
    };
    ResikokaderComponent.prototype.save = function () {
        this.serv.updateresiko(this.resiko.kehamilan_id, this.resiko).subscribe(function (res) { return Toast.makeText(res.message).show(); });
    };
    ResikokaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [resiko_kader_service_1.ResikoKaderService],
            selector: 'app-resikokader',
            templateUrl: './resikokader.component.html',
            styleUrls: ['./resikokader.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            resiko_kader_service_1.ResikoKaderService])
    ], ResikokaderComponent);
    return ResikokaderComponent;
}());
exports.ResikokaderComponent = ResikokaderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaWtva2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzaWtva2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF1RDtBQUN2RCw2Q0FBMEM7QUFDMUMsK0RBQTBEO0FBQzFELDBDQUE0QztBQVM1QztJQUlJLDhCQUNZLFFBQXVCLEVBQ3ZCLEtBQVksRUFDWixJQUF1QjtRQUZ2QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUxuQyxXQUFNLEdBQWUsSUFBSSx5QkFBVyxFQUFFLENBQUM7SUFNbkMsQ0FBQztJQUVMLHVDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDL0IsVUFBQSxNQUFNO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDbEMsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBRUQsbUNBQUksR0FBSixVQUFLLFlBQW1CO1FBQXhCLGlCQXFCQztRQXBCRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQ3ZDLFVBQUEsR0FBRztZQUNDLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3BELEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ2hELEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ2hELEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3BELEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ2xELEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ2hELEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ2xELEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzVDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ2xELEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ2xELEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFFRCxtQ0FBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FDbkUsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBbEMsQ0FBa0MsQ0FDNUMsQ0FBQztJQUNOLENBQUM7SUE5Q1Esb0JBQW9CO1FBUGhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDakIsU0FBUyxFQUFDLENBQUMseUNBQWtCLENBQUM7WUFDaEMsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7eUNBTXVCLHVCQUFjO1lBQ2pCLGVBQU07WUFDUCx5Q0FBa0I7T0FQMUIsb0JBQW9CLENBZ0RoQztJQUFELDJCQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtSZXNpa29LYWRlcn0gZnJvbSBcIi4vUmVzaWtvS2FkZXJcIjtcbmltcG9ydCB7UmVzaWtvS2FkZXJTZXJ2aWNlfSBmcm9tIFwiLi9yZXNpa28ta2FkZXIuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBwcm92aWRlcnM6W1Jlc2lrb0thZGVyU2VydmljZV0sXG4gIHNlbGVjdG9yOiAnYXBwLXJlc2lrb2thZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc2lrb2thZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzaWtva2FkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNpa29rYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICByZXNpa286UmVzaWtvS2FkZXIgPSBuZXcgUmVzaWtvS2FkZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjdHJvdXRlOkFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOlJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBzZXJ2OlJlc2lrb0thZGVyU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLmFjdHJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcbiAgICAgICAgICAgIHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkKHBhcmFtcy5pZF9rZWhhbWlsYW4pXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBsb2FkKGlkX2tlaGFtaWxhbjpudW1iZXIpe1xuICAgICAgICB0aGlzLnNlcnYuZ2V0cmVzaWtvKGlkX2tlaGFtaWxhbikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2lrby5rZWhhbWlsYW5faWQgPSByZXMuY29udGVudC5rZWhhbWlsYW5faWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpa28ucGVuZGV0ZWtzaSA9IHJlcy5jb250ZW50LnBlbmRldGVrc2k7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpa28ubXVkYV9oYW1pbCA9IHJlcy5jb250ZW50Lm11ZGFfaGFtaWw7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpa28ubGFtYmF0X2hhbWlsID0gcmVzLmNvbnRlbnQubGFtYmF0X2hhbWlsO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaWtvLnR1YV9oYW1pbCA9IHJlcy5jb250ZW50LnR1YV9oYW1pbDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2lrby5jZXBhdF9oYW1pbCA9IHJlcy5jb250ZW50LmNlcGF0X2hhbWlsO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaWtvLmxhbWFfaGFtaWwgPSByZXMuY29udGVudC5sYW1hX2hhbWlsO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaWtvLmJhbnlha19hbmFrID0gcmVzLmNvbnRlbnQuYmFueWFrX2FuYWs7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpa28udW11cl90dWEgPSByZXMuY29udGVudC51bXVyX3R1YTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2lrby5wZW5kZWsgPSByZXMuY29udGVudC5wZW5kZWs7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpa28uZ2FnYWxfaGFtaWwgPSByZXMuY29udGVudC5nYWdhbF9oYW1pbDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2lrby52YWt1bSA9IHJlcy5jb250ZW50LnZha3VtO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaWtvLnVyaV9kaXJvZ29oID0gcmVzLmNvbnRlbnQudXJpX2Rpcm9nb2g7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpa28uaW5mdXMgPSByZXMuY29udGVudC5pbmZ1cztcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmVzaWtvKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBzYXZlKCl7XG4gICAgICAgIHRoaXMuc2Vydi51cGRhdGVyZXNpa28odGhpcy5yZXNpa28ua2VoYW1pbGFuX2lkLCB0aGlzLnJlc2lrbykuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KClcbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==