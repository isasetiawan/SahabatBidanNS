"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PemeriksaanVaksin_1 = require("../PemeriksaanVaksin");
var vaksin_service_1 = require("../vaksin.service");
var nativescript_angular_1 = require("nativescript-angular");
var Toast = require("nativescript-toast");
var moment = require("moment");
var ModalVaksinComponent = (function () {
    function ModalVaksinComponent(serv, dialog) {
        this.serv = serv;
        this.dialog = dialog;
        this.vaksin_name = this.dialog.context.vaksin.title;
        if (this.dialog.context.vaksin.hasil !== null) {
            this.vaksinperiksa = this.dialog.context.vaksin.hasil;
            this.isedit = true;
        }
        else {
            this.vaksinperiksa = new PemeriksaanVaksin_1.default();
            this.vaksinperiksa.vaksinasi_id = this.dialog.context.vaksin.id;
            this.isedit = false;
            console.log(JSON.stringify(this.vaksinperiksa));
        }
    }
    ModalVaksinComponent.prototype.ngOnInit = function () { };
    ModalVaksinComponent.prototype.send = function () {
        var _this = this;
        if (this.vaksinperiksa.tanggal !== null)
            this.vaksinperiksa.tanggal = moment(this.vaksinperiksa.tanggal).format('YYYY-MM-DD');
        else
            this.vaksinperiksa.tanggal = moment().format('YYYY-MM-DD');
        console.log(JSON.stringify(this.vaksinperiksa));
        if (!this.isedit) {
            this.serv.store(this.dialog.context.anak, this.vaksinperiksa).subscribe(function (res) {
                Toast.makeText(res.message).show();
                _this.dialog.closeCallback();
            });
        }
        else {
            this.serv.edit(this.dialog.context.anak, this.vaksinperiksa).subscribe(function (res) {
                Toast.makeText(res.message).show();
                _this.dialog.closeCallback();
            });
        }
    };
    ModalVaksinComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-modal-vaksin',
            templateUrl: './modal-vaksin.component.html',
            styleUrls: ['./modal-vaksin.component.css'],
            providers: [vaksin_service_1.VaksinService]
        }),
        __metadata("design:paramtypes", [vaksin_service_1.VaksinService,
            nativescript_angular_1.ModalDialogParams])
    ], ModalVaksinComponent);
    return ModalVaksinComponent;
}());
exports.ModalVaksinComponent = ModalVaksinComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdmFrc2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFsLXZha3Npbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMERBQXFEO0FBQ3JELG9EQUFnRDtBQUNoRCw2REFBdUQ7QUFFdkQsMENBQTRDO0FBQzVDLCtCQUFpQztBQVVqQztJQU1JLDhCQUFvQixJQUFrQixFQUNsQixNQUF3QjtRQUR4QixTQUFJLEdBQUosSUFBSSxDQUFjO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBRXhDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVwRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSwyQkFBaUIsRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBRXBELENBQUM7SUFFTCxDQUFDO0lBRUQsdUNBQVEsR0FBUixjQUFXLENBQUM7SUFFWixtQ0FBSSxHQUFKO1FBQUEsaUJBdUJDO1FBdEJHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekYsSUFBSTtZQUNBLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUcvRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUMzRSxVQUFBLEdBQUc7Z0JBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUE7WUFDL0IsQ0FBQyxDQUNKLENBQUE7UUFDTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FDMUUsVUFBQSxHQUFHO2dCQUNDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFBO1lBQy9CLENBQUMsQ0FDSixDQUFBO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFqRFEsb0JBQW9CO1FBUGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQzNDLFNBQVMsRUFBQyxDQUFDLDhCQUFhLENBQUM7U0FDNUIsQ0FBQzt5Q0FPMkIsOEJBQWE7WUFDWCx3Q0FBaUI7T0FQbkMsb0JBQW9CLENBbURoQztJQUFELDJCQUFDO0NBQUEsQUFuREQsSUFtREM7QUFuRFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBQZW1lcmlrc2FhblZha3NpbiBmcm9tIFwiLi4vUGVtZXJpa3NhYW5WYWtzaW5cIjtcbmltcG9ydCB7VmFrc2luU2VydmljZX0gZnJvbSBcIi4uL3Zha3Npbi5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZGFsRGlhbG9nUGFyYW1zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7QW5ha30gZnJvbSBcIi4uLy4uLy4uL2FuYWtcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1tb2RhbC12YWtzaW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC12YWtzaW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL21vZGFsLXZha3Npbi5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOltWYWtzaW5TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFZha3NpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB2YWtzaW5wZXJpa3NhOlBlbWVyaWtzYWFuVmFrc2luO1xuICAgIGlzZWRpdDpib29sZWFuO1xuICAgIHZha3Npbl9uYW1lOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydjpWYWtzaW5TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZGlhbG9nOk1vZGFsRGlhbG9nUGFyYW1zKSB7XG5cbiAgICAgICAgdGhpcy52YWtzaW5fbmFtZSA9IHRoaXMuZGlhbG9nLmNvbnRleHQudmFrc2luLnRpdGxlO1xuXG4gICAgICAgIGlmICh0aGlzLmRpYWxvZy5jb250ZXh0LnZha3Npbi5oYXNpbCAhPT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnZha3NpbnBlcmlrc2EgPSB0aGlzLmRpYWxvZy5jb250ZXh0LnZha3Npbi5oYXNpbDtcbiAgICAgICAgICAgIHRoaXMuaXNlZGl0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFrc2lucGVyaWtzYSA9IG5ldyBQZW1lcmlrc2FhblZha3NpbigpO1xuICAgICAgICAgICAgdGhpcy52YWtzaW5wZXJpa3NhLnZha3NpbmFzaV9pZCA9IHRoaXMuZGlhbG9nLmNvbnRleHQudmFrc2luLmlkO1xuICAgICAgICAgICAgdGhpcy5pc2VkaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMudmFrc2lucGVyaWtzYSkpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG5nT25Jbml0KCl7fVxuXG4gICAgc2VuZCgpe1xuICAgICAgICBpZiAodGhpcy52YWtzaW5wZXJpa3NhLnRhbmdnYWwgIT09IG51bGwpXG4gICAgICAgICAgICB0aGlzLnZha3NpbnBlcmlrc2EudGFuZ2dhbCA9IG1vbWVudCh0aGlzLnZha3NpbnBlcmlrc2EudGFuZ2dhbCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMudmFrc2lucGVyaWtzYS50YW5nZ2FsID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG5cblxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnZha3NpbnBlcmlrc2EpKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzZWRpdCkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2LnN0b3JlKHRoaXMuZGlhbG9nLmNvbnRleHQuYW5hayBhcyBBbmFrLCB0aGlzLnZha3NpbnBlcmlrc2EpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZUNhbGxiYWNrKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlcnYuZWRpdCh0aGlzLmRpYWxvZy5jb250ZXh0LmFuYWsgYXMgQW5haywgdGhpcy52YWtzaW5wZXJpa3NhKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2VDYWxsYmFjaygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=