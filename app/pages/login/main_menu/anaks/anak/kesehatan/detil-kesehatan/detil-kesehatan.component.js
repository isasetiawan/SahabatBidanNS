"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var Kesehatan_1 = require("../Kesehatan");
var kesehatan_service_1 = require("../kesehatan.service");
var Toast = require("nativescript-toast");
var DetilKesehatanComponent = (function () {
    function DetilKesehatanComponent(modal, service) {
        var _this = this;
        this.modal = modal;
        this.service = service;
        this.statuses = [
            { key: 0, label: "Meninggal" },
            { key: 1, label: "Sehat" },
            { key: 2, label: "Sakit" }
        ];
        this.submitsucess = function (res) {
            Toast.makeText(res.message).show();
            _this.modal.closeCallback();
        };
        var params = this.modal.context;
        this.tahap = params.detail_tumbuh;
        this.hasilKesehatan = new Kesehatan_1.Kesehatan();
        if (params.result !== null) {
            this.isstore = false;
            this.hasilKesehatan.id = params.result.id;
            this.hasilKesehatan.tumbuh_id = params.result.tumbuh_id;
            this.hasilKesehatan.anak_id = params.result.anak.id;
            this.hasilKesehatan.penyebab = params.result.penyebab;
            this.hasilKesehatan.status = params.result.status;
            this.bidan = params.result.bidan;
        }
        else {
            this.isstore = true;
            this.hasilKesehatan.tumbuh_id = params.id;
            this.hasilKesehatan.anak_id = params.anak.id;
        }
    }
    DetilKesehatanComponent.prototype.ngOnInit = function () { };
    DetilKesehatanComponent.prototype.submit = function () {
        console.log(JSON.stringify(this.hasilKesehatan));
        if (this.isstore) {
            this.service.store(this.hasilKesehatan).subscribe(this.submitsucess);
        }
        else {
            this.service.edit(this.hasilKesehatan).subscribe(this.submitsucess);
        }
    };
    DetilKesehatanComponent.prototype.validate = function () {
        this.service.validate(this.hasilKesehatan).subscribe(this.submitsucess);
    };
    DetilKesehatanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-detil-kesehatan',
            templateUrl: './detil-kesehatan.component.html',
            styleUrls: ['./detil-kesehatan.component.css'],
            providers: [kesehatan_service_1.KesehatanService]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.ModalDialogParams,
            kesehatan_service_1.KesehatanService])
    ], DetilKesehatanComponent);
    return DetilKesehatanComponent;
}());
exports.DetilKesehatanComponent = DetilKesehatanComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0aWwta2VzZWhhdGFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGlsLWtlc2VoYXRhbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXVEO0FBQ3ZELDBDQUF1QztBQUN2QywwREFBc0Q7QUFDdEQsMENBQTRDO0FBVTVDO0lBWUksaUNBQ1ksS0FBdUIsRUFDdkIsT0FBd0I7UUFGcEMsaUJBdUJDO1FBdEJXLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBVHBDLGFBQVEsR0FBRztZQUNQLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDO1lBQ3pCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDO1lBQ3JCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDO1NBQ3hCLENBQUM7UUE4QkYsaUJBQVksR0FBRyxVQUFDLEdBQUc7WUFDZixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQzlCLENBQUMsQ0FBQztRQTFCRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUVoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFFbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUV0QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3RELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNqRCxDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFRLEdBQVIsY0FBYSxDQUFDO0lBT2Qsd0NBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNqRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hFLENBQUM7SUFDTCxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUF2RFEsdUJBQXVCO1FBUG5DLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1lBQzVDLFNBQVMsRUFBRyxDQUFDLG9DQUFnQixDQUFDO1NBQ2pDLENBQUM7eUNBY29CLHdDQUFpQjtZQUNmLG9DQUFnQjtPQWQzQix1QkFBdUIsQ0F5RG5DO0lBQUQsOEJBQUM7Q0FBQSxBQXpERCxJQXlEQztBQXpEWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2RhbERpYWxvZ1BhcmFtc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge0tlc2VoYXRhbn0gZnJvbSBcIi4uL0tlc2VoYXRhblwiO1xuaW1wb3J0IHtLZXNlaGF0YW5TZXJ2aWNlfSBmcm9tIFwiLi4va2VzZWhhdGFuLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbmltcG9ydCB7YWxlcnR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWRldGlsLWtlc2VoYXRhbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXRpbC1rZXNlaGF0YW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZXRpbC1rZXNlaGF0YW4uY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVycyA6IFtLZXNlaGF0YW5TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBEZXRpbEtlc2VoYXRhbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBoYXNpbEtlc2VoYXRhbjpLZXNlaGF0YW47XG4gICAgdGFoYXA6c3RyaW5nO1xuICAgIGJpZGFuOkJpZGFuO1xuICAgIHN0YXR1c2VzID0gW1xuICAgICAgICB7a2V5OjAsbGFiZWw6XCJNZW5pbmdnYWxcIn0sXG4gICAgICAgIHtrZXk6MSxsYWJlbDpcIlNlaGF0XCJ9LFxuICAgICAgICB7a2V5OjIsbGFiZWw6XCJTYWtpdFwifVxuICAgIF07XG4gICAgaXNzdG9yZTpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbW9kYWw6TW9kYWxEaWFsb2dQYXJhbXMsXG4gICAgICAgIHByaXZhdGUgc2VydmljZTpLZXNlaGF0YW5TZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLm1vZGFsLmNvbnRleHQ7XG5cbiAgICAgICAgdGhpcy50YWhhcCA9IHBhcmFtcy5kZXRhaWxfdHVtYnVoO1xuXG4gICAgICAgIHRoaXMuaGFzaWxLZXNlaGF0YW4gPSBuZXcgS2VzZWhhdGFuKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5yZXN1bHQgIT09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5pc3N0b3JlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmhhc2lsS2VzZWhhdGFuLmlkID0gcGFyYW1zLnJlc3VsdC5pZDtcbiAgICAgICAgICAgIHRoaXMuaGFzaWxLZXNlaGF0YW4udHVtYnVoX2lkID0gcGFyYW1zLnJlc3VsdC50dW1idWhfaWQ7XG4gICAgICAgICAgICB0aGlzLmhhc2lsS2VzZWhhdGFuLmFuYWtfaWQgPSBwYXJhbXMucmVzdWx0LmFuYWsuaWQ7XG4gICAgICAgICAgICB0aGlzLmhhc2lsS2VzZWhhdGFuLnBlbnllYmFiID0gcGFyYW1zLnJlc3VsdC5wZW55ZWJhYjtcbiAgICAgICAgICAgIHRoaXMuaGFzaWxLZXNlaGF0YW4uc3RhdHVzID0gcGFyYW1zLnJlc3VsdC5zdGF0dXM7XG4gICAgICAgICAgICB0aGlzLmJpZGFuID0gcGFyYW1zLnJlc3VsdC5iaWRhbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNzdG9yZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmhhc2lsS2VzZWhhdGFuLnR1bWJ1aF9pZCA9IHBhcmFtcy5pZDtcbiAgICAgICAgICAgIHRoaXMuaGFzaWxLZXNlaGF0YW4uYW5ha19pZCA9IHBhcmFtcy5hbmFrLmlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxuICAgIHN1Ym1pdHN1Y2VzcyA9IChyZXMpPT57XG4gICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgIHRoaXMubW9kYWwuY2xvc2VDYWxsYmFjaygpXG4gICAgfTtcblxuICAgIHN1Ym1pdCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmhhc2lsS2VzZWhhdGFuKSk7XG4gICAgICAgIGlmICh0aGlzLmlzc3RvcmUpIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5zdG9yZSh0aGlzLmhhc2lsS2VzZWhhdGFuKS5zdWJzY3JpYmUodGhpcy5zdWJtaXRzdWNlc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmVkaXQodGhpcy5oYXNpbEtlc2VoYXRhbikuc3Vic2NyaWJlKHRoaXMuc3VibWl0c3VjZXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlKCl7XG4gICAgICAgIHRoaXMuc2VydmljZS52YWxpZGF0ZSh0aGlzLmhhc2lsS2VzZWhhdGFuKS5zdWJzY3JpYmUodGhpcy5zdWJtaXRzdWNlc3MpXG4gICAgfVxuXG59XG4iXX0=