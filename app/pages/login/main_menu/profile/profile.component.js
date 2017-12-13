"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bidan_service_1 = require("../../bidan.service");
var nativescript_angular_1 = require("nativescript-angular");
var Toast = require("nativescript-toast");
var dialogs = require("ui/dialogs");
var ProfileComponent = (function () {
    function ProfileComponent(bidanServ, routExt) {
        this.bidanServ = bidanServ;
        this.routExt = routExt;
        this.whatsgoingon = function (err) {
            Toast.makeText(err.json().message);
        };
        this.provinces = [];
        this.kabupatens = [];
        this.kecamatans = [];
        this.puskesmases = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.loadprofile();
    };
    ProfileComponent.prototype.loadprovinces = function () {
        var _this = this;
        this.bidanServ.provinsi().subscribe(function (res) {
            res.content.forEach(function (x) { return _this.provinces.push(x); });
            _this.selprov = _this.provinces.find(function (x) { return x.id === _this.bidan.provinsi_id; }).nama;
        }, this.whatsgoingon);
    };
    ProfileComponent.prototype.askprovince = function () {
        var _this = this;
        dialogs.action({
            message: "Pilih Provinsi Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.provinces.map(function (x) { return x.nama; })
        }).then(function (result) {
            if (result !== "Batal" && result !== _this.selprov) {
                _this.selprov = result;
                _this.bidan.provinsi_id = _this.provinces.find(function (x) { return x.nama === result; }).id;
                _this.selkab = "";
                _this.selkec = "";
                _this.selpus = "";
                _this.loadkabupatens();
            }
        });
    };
    ProfileComponent.prototype.loadkabupatens = function () {
        var _this = this;
        if (this.bidan.provinsi_id !== null) {
            this.bidanServ.kabupaten(this.bidan.provinsi_id).subscribe(function (res) {
                _this.kabupatens = res.content;
                _this.selkab = _this.kabupatens.find(function (x) { return x.id === _this.bidan.kabupaten_id; }).nama;
            }, this.whatsgoingon);
        }
    };
    ProfileComponent.prototype.askkabupaten = function () {
        var _this = this;
        dialogs.action({
            message: "Pilih Kabupaten/Kota Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.kabupatens.map(function (x) { return x.nama; })
        }).then(function (result) {
            if (result !== "Batal" && result !== _this.selkab) {
                _this.selkab = result;
                _this.bidan.kabupaten_id = _this.kabupatens.find(function (x) { return x.nama === result; }).id;
                _this.selkec = "";
                _this.selpus = "";
                _this.loadkecamatans();
            }
        });
    };
    ProfileComponent.prototype.loadkecamatans = function () {
        var _this = this;
        if (this.bidan.kabupaten_id !== null) {
            this.bidanServ.kecamatan(this.bidan.kabupaten_id).subscribe(function (res) {
                _this.kecamatans = res.content;
                _this.selkec = _this.kecamatans.find(function (x) { return x.id === _this.bidan.kecamatan_id; }).nama;
            }, this.whatsgoingon);
        }
    };
    ProfileComponent.prototype.askkecamatan = function () {
        var _this = this;
        dialogs.action({
            message: "Pilih Kecamatan Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.kecamatans.map(function (x) { return x.nama; })
        }).then(function (result) {
            if (result !== "Batal" && result !== _this.selkec) {
                _this.selkec = result;
                _this.bidan.kecamatan_id = _this.kecamatans.find(function (x) { return x.nama === result; }).id;
                _this.selpus = "";
                _this.loadpuskesmas();
            }
        });
    };
    ProfileComponent.prototype.loadpuskesmas = function () {
        var _this = this;
        if (this.bidan.kecamatan_id !== null) {
            this.bidanServ.puskesmas(this.bidan.kecamatan_id).subscribe(function (res) {
                _this.puskesmases = res.content;
                _this.selpus = _this.puskesmases.find(function (x) { return x.id === _this.bidan.puskesmas_id; }).nama;
            }, this.whatsgoingon);
        }
    };
    ProfileComponent.prototype.askpuskesmas = function () {
        var _this = this;
        dialogs.action({
            message: "Pilih Puskesmas Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.puskesmases.map(function (x) { return x.nama; })
        }).then(function (result) {
            if (result !== "Batal" && result !== _this.selpus) {
                _this.selpus = result;
                _this.bidan.puskesmas_id = _this.puskesmases.find(function (x) { return x.nama === result; }).id;
                _this.loadkelurahan();
            }
        });
    };
    ProfileComponent.prototype.loadkelurahan = function () {
        var _this = this;
        if (this.bidan.puskesmas_id !== null) {
            this.bidanServ.kelurahan(this.bidan.puskesmas_id).subscribe(function (res) {
                _this.kelurahan = res.content;
                _this.selkelu = _this.kelurahan.find(function (x) { return x.id === _this.bidan.kelurahan_id; }).nama;
            });
        }
    };
    ProfileComponent.prototype.askkelurahan = function () {
        var _this = this;
        dialogs.action({
            message: "Pilih Kelurahan Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.kelurahan.map(function (x) { return x.nama; })
        }).then(function (result) {
            if (result !== "Batal" && result !== _this.selkelu) {
                _this.selkelu = result;
                _this.bidan.kelurahan_id = _this.kelurahan.find(function (x) { return x.nama === result; }).id;
            }
        });
    };
    ProfileComponent.prototype.loadprofile = function () {
        var _this = this;
        this.bidanServ.profile().subscribe(function (res) {
            _this.bidan = res.content;
            _this.loadprovinces();
            _this.loadkabupatens();
            _this.loadkecamatans();
            _this.loadpuskesmas();
            _this.loadkelurahan();
        }, this.whatsgoingon);
    };
    ProfileComponent.prototype.editprofile = function () {
        var _this = this;
        this.bidanServ.updateProfile(this.bidan).subscribe(function (res) {
            Toast.makeText(res.message).show();
            _this.routExt.backToPreviousPage();
        }, function (err) { return console.log(JSON.stringify(err)); });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: "ns-profile",
            moduleId: module.id,
            templateUrl: "./profile.component.html",
            providers: [bidan_service_1.BidanService]
        }),
        __metadata("design:paramtypes", [bidan_service_1.BidanService,
            nativescript_angular_1.RouterExtensions])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxxREFBaUQ7QUFDakQsNkRBQXNEO0FBQ3RELDBDQUEyQztBQUMzQyxvQ0FBc0M7QUFRdEM7SUEyQkksMEJBQ1ksU0FBc0IsRUFDdEIsT0FBd0I7UUFEeEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQVZwQyxpQkFBWSxHQUFHLFVBQUEsR0FBRztZQUNkLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQztRQVVFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFaRCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFZRCx3Q0FBYSxHQUFiO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FDL0IsVUFBQSxHQUFHO1lBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1lBQ2pELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEtBQUksQ0FB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QztZQUNuQyxLQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDdEMsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQWhDLENBQWdDLENBQzFDLENBQUM7SUFDTixDQUFDO0lBaE1RLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLFlBQVk7WUFDckIsUUFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLFdBQVcsRUFBQywwQkFBMEI7WUFDdEMsU0FBUyxFQUFDLENBQUMsNEJBQVksQ0FBQztTQUMzQixDQUFDO3lDQTZCd0IsNEJBQVk7WUFDZCx1Q0FBZ0I7T0E3QjNCLGdCQUFnQixDQWtNNUI7SUFBRCx1QkFBQztDQUFBLEFBbE1ELElBa01DO0FBbE1ZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7QmlkYW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vYmlkYW4uc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCJcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcIm5zLXByb2ZpbGVcIixcclxuICAgIG1vZHVsZUlkOm1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOlwiLi9wcm9maWxlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6W0JpZGFuU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgYmlkYW46QmlkYW47XHJcblxyXG4gICAgcHJvdmluY2VzOmFueVtdO1xyXG4gICAgc2VscHJvdjpzdHJpbmc7XHJcblxyXG4gICAga2FidXBhdGVuczphbnlbXTtcclxuICAgIHNlbGthYjpzdHJpbmc7XHJcblxyXG4gICAga2VjYW1hdGFuczphbnlbXTtcclxuICAgIHNlbGtlYzpzdHJpbmc7XHJcblxyXG4gICAgcHVza2VzbWFzZXM6YW55W107XHJcbiAgICBzZWxwdXM6c3RyaW5nO1xyXG5cclxuICAgIGtlbHVyYWhhbjphbnlbXTtcclxuICAgIHNlbGtlbHU6c3RyaW5nO1xyXG5cclxuICAgIHdoYXRzZ29pbmdvbiA9IGVyciA9PiB7XHJcbiAgICAgICAgVG9hc3QubWFrZVRleHQoZXJyLmpzb24oKS5tZXNzYWdlKTtcclxuICAgIH07XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2FkcHJvZmlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYmlkYW5TZXJ2OkJpZGFuU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRFeHQ6Um91dGVyRXh0ZW5zaW9ucyxcclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5wcm92aW5jZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmthYnVwYXRlbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmtlY2FtYXRhbnMgPSBbXTtcclxuICAgICAgICB0aGlzLnB1c2tlc21hc2VzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZHByb3ZpbmNlcygpe1xyXG4gICAgICAgIHRoaXMuYmlkYW5TZXJ2LnByb3ZpbnNpKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXM9PntcclxuICAgICAgICAgICAgICAgIHJlcy5jb250ZW50LmZvckVhY2goeCA9PiB0aGlzLnByb3ZpbmNlcy5wdXNoKHgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VscHJvdiA9IHRoaXMucHJvdmluY2VzLmZpbmQoeCA9PiB4LmlkID09PSB0aGlzLmJpZGFuLnByb3ZpbnNpX2lkKS5uYW1hO1xyXG4gICAgICAgICAgICB9LHRoaXMud2hhdHNnb2luZ29uXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc2twcm92aW5jZSgpe1xyXG4gICAgICAgIGRpYWxvZ3MuYWN0aW9uKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJQaWxpaCBQcm92aW5zaSBBbmRhIEJla2VyamFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJCYXRhbFwiLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiB0aGlzLnByb3ZpbmNlcy5tYXAoeCA9PiB4Lm5hbWEpXHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBcIkJhdGFsXCIgJiYgcmVzdWx0ICE9PSB0aGlzLnNlbHByb3Ype1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxwcm92ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaWRhbi5wcm92aW5zaV9pZCA9IHRoaXMucHJvdmluY2VzLmZpbmQoeCA9PiB4Lm5hbWEgPT09IHJlc3VsdCkuaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGthYiA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGtlYyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHB1cyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRrYWJ1cGF0ZW5zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2Fka2FidXBhdGVucygpe1xyXG4gICAgICAgIGlmICh0aGlzLmJpZGFuLnByb3ZpbnNpX2lkICE9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5iaWRhblNlcnYua2FidXBhdGVuKHRoaXMuYmlkYW4ucHJvdmluc2lfaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2FidXBhdGVucyA9IHJlcy5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vsa2FiID0gdGhpcy5rYWJ1cGF0ZW5zLmZpbmQoeD0+IHguaWQgPT09IHRoaXMuYmlkYW4ua2FidXBhdGVuX2lkKS5uYW1hO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRoaXMud2hhdHNnb2luZ29uXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXNra2FidXBhdGVuKCl7XHJcbiAgICAgICAgZGlhbG9ncy5hY3Rpb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlBpbGloIEthYnVwYXRlbi9Lb3RhIEFuZGEgQmVrZXJqYVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkJhdGFsXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMua2FidXBhdGVucy5tYXAoeCA9PiB4Lm5hbWEpXHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBcIkJhdGFsXCIgJiYgcmVzdWx0ICE9PSB0aGlzLnNlbGthYil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGthYiA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmlkYW4ua2FidXBhdGVuX2lkPSB0aGlzLmthYnVwYXRlbnMuZmluZCh4ID0+IHgubmFtYSA9PT0gcmVzdWx0KS5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vsa2VjID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VscHVzID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGtlY2FtYXRhbnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRrZWNhbWF0YW5zKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYmlkYW4ua2FidXBhdGVuX2lkICE9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5iaWRhblNlcnYua2VjYW1hdGFuKHRoaXMuYmlkYW4ua2FidXBhdGVuX2lkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXM9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtlY2FtYXRhbnMgPSByZXMuY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGtlYyA9IHRoaXMua2VjYW1hdGFucy5maW5kKHg9PnguaWQgPT09IHRoaXMuYmlkYW4ua2VjYW1hdGFuX2lkKS5uYW1hO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRoaXMud2hhdHNnb2luZ29uXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXNra2VjYW1hdGFuKCl7XHJcbiAgICAgICAgZGlhbG9ncy5hY3Rpb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlBpbGloIEtlY2FtYXRhbiBBbmRhIEJla2VyamFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJCYXRhbFwiLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiB0aGlzLmtlY2FtYXRhbnMubWFwKHggPT4geC5uYW1hKVxyXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gXCJCYXRhbFwiICYmIHJlc3VsdCAhPT0gdGhpcy5zZWxrZWMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxrZWMgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpZGFuLmtlY2FtYXRhbl9pZD0gdGhpcy5rZWNhbWF0YW5zLmZpbmQoeCA9PiB4Lm5hbWEgPT09IHJlc3VsdCkuaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbHB1cyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRwdXNrZXNtYXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRwdXNrZXNtYXMoKXtcclxuICAgICAgICBpZiAodGhpcy5iaWRhbi5rZWNhbWF0YW5faWQgIT09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmJpZGFuU2Vydi5wdXNrZXNtYXModGhpcy5iaWRhbi5rZWNhbWF0YW5faWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVza2VzbWFzZXMgPSByZXMuY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbHB1cyA9IHRoaXMucHVza2VzbWFzZXMuZmluZCh4PT54LmlkID09PSB0aGlzLmJpZGFuLnB1c2tlc21hc19pZCkubmFtYTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLndoYXRzZ29pbmdvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc2twdXNrZXNtYXMoKXtcclxuICAgICAgICBkaWFsb2dzLmFjdGlvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGlsaWggUHVza2VzbWFzIEFuZGEgQmVrZXJqYVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkJhdGFsXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMucHVza2VzbWFzZXMubWFwKHggPT4geC5uYW1hKVxyXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gXCJCYXRhbFwiICYmIHJlc3VsdCAhPT0gdGhpcy5zZWxwdXMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxwdXMgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpZGFuLnB1c2tlc21hc19pZCA9IHRoaXMucHVza2VzbWFzZXMuZmluZCh4ID0+IHgubmFtYSA9PT0gcmVzdWx0KS5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGtlbHVyYWhhbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2Fka2VsdXJhaGFuKCl7XHJcbiAgICAgICAgaWYodGhpcy5iaWRhbi5wdXNrZXNtYXNfaWQgIT09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmJpZGFuU2Vydi5rZWx1cmFoYW4odGhpcy5iaWRhbi5wdXNrZXNtYXNfaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZWx1cmFoYW4gPSByZXMuY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGtlbHUgPSB0aGlzLmtlbHVyYWhhbi5maW5kKHg9PnguaWQ9PT10aGlzLmJpZGFuLmtlbHVyYWhhbl9pZCkubmFtYTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXNra2VsdXJhaGFuKCl7XHJcbiAgICAgICAgZGlhbG9ncy5hY3Rpb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlBpbGloIEtlbHVyYWhhbiBBbmRhIEJla2VyamFcIixcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJCYXRhbFwiLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiB0aGlzLmtlbHVyYWhhbi5tYXAoeCA9PiB4Lm5hbWEpXHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBcIkJhdGFsXCIgJiYgcmVzdWx0ICE9PSB0aGlzLnNlbGtlbHUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxrZWx1ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaWRhbi5rZWx1cmFoYW5faWQ9IHRoaXMua2VsdXJhaGFuLmZpbmQoeCA9PiB4Lm5hbWEgPT09IHJlc3VsdCkuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9hZHByb2ZpbGUoKXtcclxuICAgICAgICB0aGlzLmJpZGFuU2Vydi5wcm9maWxlKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaWRhbiA9IDxCaWRhbj4gcmVzLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRwcm92aW5jZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGthYnVwYXRlbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGtlY2FtYXRhbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZHB1c2tlc21hcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2Fka2VsdXJhaGFuKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMud2hhdHNnb2luZ29uXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlZGl0cHJvZmlsZSgpe1xyXG4gICAgICAgIHRoaXMuYmlkYW5TZXJ2LnVwZGF0ZVByb2ZpbGUodGhpcy5iaWRhbikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dEV4dC5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycikpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn0iXX0=