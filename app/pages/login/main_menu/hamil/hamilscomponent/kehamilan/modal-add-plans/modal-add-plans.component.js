"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var rencana_1 = require("./rencana");
var rencana_persalinan_service_1 = require("../rencana-persalinan.service");
var Toast = require("nativescript-toast");
var ModalAddPlansComponent = (function () {
    function ModalAddPlansComponent(params, serv) {
        this.params = params;
        this.serv = serv;
        this.penolongs = [
            { key: 1, label: "Keluarga" },
            { key: 2, label: "Dukun" },
            { key: 3, label: "Bidan" },
            { key: 4, label: "dr. Umum" },
            { key: 5, label: "dr. Spesialis" },
            { key: 6, label: "Lain" },
            { key: 7, label: "Tidak ada" },
        ];
        this.tempats = [
            { key: 1, label: "Rumah" },
            { key: 2, label: "Poskesdes" },
            { key: 3, label: "Pustu" },
            { key: 4, label: "Puskesmas" },
            { key: 5, label: "Rumah Sakit Bersalin" },
            { key: 6, label: "Rumah Sakit Ibu Anak" },
            { key: 7, label: "Rumah Sakit" },
            { key: 8, label: "Rumah Sakit Odha" },
            { key: 9, label: "Praktek mandiri" },
            { key: 10, label: "Klinik" },
        ];
        this.pendampings = [
            { key: 1, label: "Suami" },
            { key: 2, label: "Keluarga" },
            { key: 3, label: "Teman" },
            { key: 4, label: "Tetangga" },
            { key: 5, label: "Lain" },
            { key: 6, label: "Tidak Ada" },
        ];
        this.transportasies = [
            { key: 1, label: "Suami" },
            { key: 2, label: "Keluarga" },
            { key: 3, label: "Teman" },
            { key: 4, label: "Tetangga" },
            { key: 5, label: "Lain" },
            { key: 6, label: "Tidak Ada" },
        ];
        this.pendonors = [
            { key: 1, label: "Suami" },
            { key: 2, label: "Keluarga" },
            { key: 3, label: "Teman" },
            { key: 4, label: "Tetangga" },
            { key: 5, label: "Lain" },
            { key: 6, label: "Tidak Ada" },
        ];
        console.log(JSON.stringify(this.params.context));
        this.id_kehamilan = params.context.id_kehamilan;
        if (this.params.context.plan) {
            this.isedit = true;
            this.rencana = this.params.context.plan;
        }
        else {
            this.isedit = false;
            this.rencana = new rencana_1.Rencana();
        }
    }
    ModalAddPlansComponent.prototype.ngOnInit = function () {
    };
    ModalAddPlansComponent.prototype.submit = function () {
        var _this = this;
        console.log(JSON.stringify(this.rencana));
        if (this.isedit) {
            this.serv.edit(this.id_kehamilan, this.rencana.id, this.rencana).subscribe(function (res) {
                Toast.makeText(res.message).show();
                _this.params.closeCallback();
            });
        }
        else {
            this.serv.addplan(this.id_kehamilan, this.rencana).subscribe(function (res) {
                Toast.makeText(res.message).show();
                _this.params.closeCallback();
            });
        }
    };
    ModalAddPlansComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-modal-add-plans',
            templateUrl: './modal-add-plans.component.html',
            styleUrls: ['./modal-add-plans.component.css'],
            providers: [rencana_persalinan_service_1.RencanaPersalinanService]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.ModalDialogParams, rencana_persalinan_service_1.RencanaPersalinanService])
    ], ModalAddPlansComponent);
    return ModalAddPlansComponent;
}());
exports.ModalAddPlansComponent = ModalAddPlansComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYWRkLXBsYW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFsLWFkZC1wbGFucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXVEO0FBQ3ZELHFDQUFrQztBQUNsQyw0RUFBdUU7QUFDdkUsMENBQTRDO0FBUzVDO0lBeURJLGdDQUFvQixNQUF3QixFQUFVLElBQTZCO1FBQS9ELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBeUI7UUFuRG5GLGNBQVMsR0FBRztZQUNSLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsVUFBVSxFQUFDO1lBQ3pCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFDO1lBQ3RCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFDO1lBQ3RCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsVUFBVSxFQUFDO1lBQ3pCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsZUFBZSxFQUFDO1lBQzlCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsTUFBTSxFQUFDO1lBQ3JCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsV0FBVyxFQUFDO1NBQzdCLENBQUM7UUFFRixZQUFPLEdBQUc7WUFDTixFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQztZQUN0QixFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLFdBQVcsRUFBQztZQUMxQixFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQztZQUN0QixFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLFdBQVcsRUFBQztZQUMxQixFQUFD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c0IsQ0FnR2xDO0lBQUQsNkJBQUM7Q0FBQSxBQWhHRCxJQWdHQztBQWhHWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2RhbERpYWxvZ1BhcmFtc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge1JlbmNhbmF9IGZyb20gXCIuL3JlbmNhbmFcIjtcbmltcG9ydCB7UmVuY2FuYVBlcnNhbGluYW5TZXJ2aWNlfSBmcm9tIFwiLi4vcmVuY2FuYS1wZXJzYWxpbmFuLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLW1vZGFsLWFkZC1wbGFucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1hZGQtcGxhbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC1hZGQtcGxhbnMuY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVyczpbUmVuY2FuYVBlcnNhbGluYW5TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEFkZFBsYW5zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGlkX2tlaGFtaWxhbjpudW1iZXI7XG4gICAgcmVuY2FuYTpSZW5jYW5hO1xuICAgIGlzZWRpdDpib29sZWFuO1xuXG4gICAgcGVub2xvbmdzID0gW1xuICAgICAgICB7a2V5OjEsIGxhYmVsOlwiS2VsdWFyZ2FcIn0sXG4gICAgICAgIHtrZXk6MiwgbGFiZWw6XCJEdWt1blwifSxcbiAgICAgICAge2tleTozLCBsYWJlbDpcIkJpZGFuXCJ9LFxuICAgICAgICB7a2V5OjQsIGxhYmVsOlwiZHIuIFVtdW1cIn0sXG4gICAgICAgIHtrZXk6NSwgbGFiZWw6XCJkci4gU3Blc2lhbGlzXCJ9LFxuICAgICAgICB7a2V5OjYsIGxhYmVsOlwiTGFpblwifSxcbiAgICAgICAge2tleTo3LCBsYWJlbDpcIlRpZGFrIGFkYVwifSxcbiAgICBdO1xuXG4gICAgdGVtcGF0cyA9IFtcbiAgICAgICAge2tleToxLCBsYWJlbDpcIlJ1bWFoXCJ9LFxuICAgICAgICB7a2V5OjIsIGxhYmVsOlwiUG9za2VzZGVzXCJ9LFxuICAgICAgICB7a2V5OjMsIGxhYmVsOlwiUHVzdHVcIn0sXG4gICAgICAgIHtrZXk6NCwgbGFiZWw6XCJQdXNrZXNtYXNcIn0sXG4gICAgICAgIHtrZXk6NSwgbGFiZWw6XCJSdW1haCBTYWtpdCBCZXJzYWxpblwifSxcbiAgICAgICAge2tleTo2LCBsYWJlbDpcIlJ1bWFoIFNha2l0IElidSBBbmFrXCJ9LFxuICAgICAgICB7a2V5OjcsIGxhYmVsOlwiUnVtYWggU2FraXRcIn0sXG4gICAgICAgIHtrZXk6OCwgbGFiZWw6XCJSdW1haCBTYWtpdCBPZGhhXCJ9LFxuICAgICAgICB7a2V5OjksIGxhYmVsOlwiUHJha3RlayBtYW5kaXJpXCJ9LFxuICAgICAgICB7a2V5OjEwLCBsYWJlbDpcIktsaW5pa1wifSxcblxuICAgIF07XG5cbiAgICBwZW5kYW1waW5ncyA9IFtcbiAgICAgICAge2tleToxLCBsYWJlbDpcIlN1YW1pXCJ9LFxuICAgICAgICB7a2V5OjIsIGxhYmVsOlwiS2VsdWFyZ2FcIn0sXG4gICAgICAgIHtrZXk6MywgbGFiZWw6XCJUZW1hblwifSxcbiAgICAgICAge2tleTo0LCBsYWJlbDpcIlRldGFuZ2dhXCJ9LFxuICAgICAgICB7a2V5OjUsIGxhYmVsOlwiTGFpblwifSxcbiAgICAgICAge2tleTo2LCBsYWJlbDpcIlRpZGFrIEFkYVwifSxcbiAgICBdO1xuXG4gICAgdHJhbnNwb3J0YXNpZXMgPSBbXG4gICAgICAgIHtrZXk6MSwgbGFiZWw6XCJTdWFtaVwifSxcbiAgICAgICAge2tleToyLCBsYWJlbDpcIktlbHVhcmdhXCJ9LFxuICAgICAgICB7a2V5OjMsIGxhYmVsOlwiVGVtYW5cIn0sXG4gICAgICAgIHtrZXk6NCwgbGFiZWw6XCJUZXRhbmdnYVwifSxcbiAgICAgICAge2tleTo1LCBsYWJlbDpcIkxhaW5cIn0sXG4gICAgICAgIHtrZXk6NiwgbGFiZWw6XCJUaWRhayBBZGFcIn0sXG4gICAgXTtcblxuICAgIHBlbmRvbm9ycyA9IFtcbiAgICAgICAge2tleToxLCBsYWJlbDpcIlN1YW1pXCJ9LFxuICAgICAgICB7a2V5OjIsIGxhYmVsOlwiS2VsdWFyZ2FcIn0sXG4gICAgICAgIHtrZXk6MywgbGFiZWw6XCJUZW1hblwifSxcbiAgICAgICAge2tleTo0LCBsYWJlbDpcIlRldGFuZ2dhXCJ9LFxuICAgICAgICB7a2V5OjUsIGxhYmVsOlwiTGFpblwifSxcbiAgICAgICAge2tleTo2LCBsYWJlbDpcIlRpZGFrIEFkYVwifSxcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6TW9kYWxEaWFsb2dQYXJhbXMsIHByaXZhdGUgc2VydjpSZW5jYW5hUGVyc2FsaW5hblNlcnZpY2Upe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGFyYW1zLmNvbnRleHQpKTtcblxuICAgICAgICB0aGlzLmlkX2tlaGFtaWxhbiA9IHBhcmFtcy5jb250ZXh0LmlkX2tlaGFtaWxhbjtcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLmNvbnRleHQucGxhbikge1xuICAgICAgICAgICAgdGhpcy5pc2VkaXQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yZW5jYW5hID0gdGhpcy5wYXJhbXMuY29udGV4dC5wbGFuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzZWRpdCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5yZW5jYW5hID0gbmV3IFJlbmNhbmEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxuXG4gICAgc3VibWl0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmVuY2FuYSkpO1xuICAgICAgICBpZiAodGhpcy5pc2VkaXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vydi5lZGl0KHRoaXMuaWRfa2VoYW1pbGFuLHRoaXMucmVuY2FuYS5pZCx0aGlzLnJlbmNhbmEpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Vydi5hZGRwbGFuKHRoaXMuaWRfa2VoYW1pbGFuLCB0aGlzLnJlbmNhbmEpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbiJdfQ==