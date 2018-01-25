"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var moment = require("moment/moment");
var tumbuh_1 = require("../tumbuh");
var tumbuh_service_1 = require("../tumbuh.service");
var Toast = require("nativescript-toast");
var TumbuhModal = (function () {
    function TumbuhModal(params, service) {
        this.params = params;
        this.service = service;
        this.is_store = true;
        this.tumbuh = new tumbuh_1.Tumbuh();
        if (this.params.context.result !== null) {
            Object.assign(this.tumbuh, this.params.context.result);
            this.is_store = false;
        }
        else {
            this.tumbuh.tumbuh_id = this.params.context.id;
            console.log(this.params.context.id);
        }
    }
    TumbuhModal.prototype.submit = function () {
        //mengubah format tanggal;
        this.tumbuh.tanggal = moment(this.tumbuh.tanggal).format("Y-MM-DD");
        this.params.closeCallback({ tumbuh: this.tumbuh, is_store: this.is_store });
    };
    TumbuhModal.prototype.validate = function () {
        var _this = this;
        this.service.validasi(this.tumbuh.id).subscribe(function (res) {
            Toast.makeText(res.message).show();
            _this.params.closeCallback();
        }, function (err) {
            Toast.makeText(err.json().message).show();
        });
    };
    TumbuhModal = __decorate([
        core_1.Component({
            selector: "ns-modal-tumbuh",
            moduleId: module.id,
            templateUrl: "./tumbuh.modal.html",
            providers: [tumbuh_service_1.TumbuhService]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.ModalDialogParams, tumbuh_service_1.TumbuhService])
    ], TumbuhModal);
    return TumbuhModal;
}());
exports.TumbuhModal = TumbuhModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVtYnVoLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHVtYnVoLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLDZEQUF1RDtBQUN2RCxzQ0FBdUM7QUFDdkMsb0NBQWlDO0FBQ2pDLG9EQUFnRDtBQUNoRCwwQ0FBNEM7QUFRNUM7SUFLSSxxQkFBMkIsTUFBd0IsRUFBUyxPQUFxQjtRQUF0RCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFGakYsYUFBUSxHQUFXLElBQUksQ0FBQztRQUdwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFDM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7SUFDTCxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUMzQyxVQUFBLEdBQUc7WUFDQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2hDLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QyxDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFoQ1EsV0FBVztRQU52QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUMsQ0FBQyw4QkFBYSxDQUFDO1NBQzVCLENBQUM7eUNBTW9DLHdDQUFpQixFQUFpQiw4QkFBYTtPQUx4RSxXQUFXLENBaUN2QjtJQUFELGtCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtNb2RhbERpYWxvZ1BhcmFtc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50L21vbWVudFwiXHJcbmltcG9ydCB7VHVtYnVofSBmcm9tIFwiLi4vdHVtYnVoXCI7XHJcbmltcG9ydCB7VHVtYnVoU2VydmljZX0gZnJvbSBcIi4uL3R1bWJ1aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtbW9kYWwtdHVtYnVoXCIsXHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3R1bWJ1aC5tb2RhbC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6W1R1bWJ1aFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUdW1idWhNb2RhbCB7XHJcblxyXG4gICAgdHVtYnVoOlR1bWJ1aDtcclxuICAgIGlzX3N0b3JlOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczpNb2RhbERpYWxvZ1BhcmFtcyxwcml2YXRlIHNlcnZpY2U6VHVtYnVoU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy50dW1idWggPSBuZXcgVHVtYnVoKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLmNvbnRleHQucmVzdWx0ICE9PSBudWxsKXtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnR1bWJ1aCwgdGhpcy5wYXJhbXMuY29udGV4dC5yZXN1bHQpO1xyXG4gICAgICAgICAgICB0aGlzLmlzX3N0b3JlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50dW1idWgudHVtYnVoX2lkID0gdGhpcy5wYXJhbXMuY29udGV4dC5pZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wYXJhbXMuY29udGV4dC5pZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCl7XHJcbiAgICAgICAgLy9tZW5ndWJhaCBmb3JtYXQgdGFuZ2dhbDtcclxuICAgICAgICB0aGlzLnR1bWJ1aC50YW5nZ2FsID0gbW9tZW50KHRoaXMudHVtYnVoLnRhbmdnYWwpLmZvcm1hdChcIlktTU0tRERcIik7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7dHVtYnVoOnRoaXMudHVtYnVoLCBpc19zdG9yZTp0aGlzLmlzX3N0b3JlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoKXtcclxuICAgICAgICB0aGlzLnNlcnZpY2UudmFsaWRhc2kodGhpcy50dW1idWguaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChlcnIuanNvbigpLm1lc3NhZ2UpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuIl19