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
        console.log(JSON.stringify(this.rencana));
        if (this.isedit) {
            this.serv.edit(this.id_kehamilan, this.rencana.id, this.rencana).subscribe(function (res) { return Toast.makeText(res.message).show(); });
        }
        else {
            this.serv.addplan(this.id_kehamilan, this.rencana).subscribe(function (res) { return Toast.makeText(res.message).show(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYWRkLXBsYW5zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFsLWFkZC1wbGFucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNkRBQXVEO0FBQ3ZELHFDQUFrQztBQUNsQyw0RUFBdUU7QUFDdkUsMENBQTRDO0FBUzVDO0lBc0RJLGdDQUFvQixNQUF3QixFQUFVLElBQTZCO1FBQS9ELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBeUI7UUFoRG5GLGNBQVMsR0FBRztZQUNSLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsVUFBVSxFQUFDO1lBQ3pCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFDO1lBQ3RCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFDO1lBQ3RCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsVUFBVSxFQUFDO1lBQ3pCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsZUFBZSxFQUFDO1lBQzlCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsTUFBTSxFQUFDO1lBQ3JCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsV0FBVyxFQUFDO1NBQzdCLENBQUM7UUFFRixZQUFPLEdBQUc7WUFDTixFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQztZQUN0QixFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLFdBQVcsRUFBQztZQUMxQixFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQztZQUN0QixFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLFdBQVcsRUFBQztZQUMxQixFQUFD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QyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUNwRSxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFsQyxDQUFrQyxDQUM1QyxDQUFDO1FBQ04sQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUN4RCxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFsQyxDQUFrQyxDQUM1QyxDQUFDO1FBQ04sQ0FBQztJQUNMLENBQUM7SUFuRlEsc0JBQXNCO1FBUGxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1lBQzVDLFNBQVMsRUFBQyxDQUFDLHFEQUF3QixDQUFDO1NBQ3ZDLENBQUM7eUNBdUQ2Qix3Q0FBaUIsRUFBZSxxREFBd0I7T0F0RDFFLHNCQUFzQixDQXVGbEM7SUFBRCw2QkFBQztDQUFBLEFBdkZELElBdUZDO0FBdkZZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vZGFsRGlhbG9nUGFyYW1zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7UmVuY2FuYX0gZnJvbSBcIi4vcmVuY2FuYVwiO1xuaW1wb3J0IHtSZW5jYW5hUGVyc2FsaW5hblNlcnZpY2V9IGZyb20gXCIuLi9yZW5jYW5hLXBlcnNhbGluYW4uc2VydmljZVwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbW9kYWwtYWRkLXBsYW5zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLWFkZC1wbGFucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21vZGFsLWFkZC1wbGFucy5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOltSZW5jYW5hUGVyc2FsaW5hblNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQWRkUGxhbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaWRfa2VoYW1pbGFuOm51bWJlcjtcbiAgICByZW5jYW5hOlJlbmNhbmE7XG4gICAgaXNlZGl0OmJvb2xlYW47XG5cbiAgICBwZW5vbG9uZ3MgPSBbXG4gICAgICAgIHtrZXk6MSwgbGFiZWw6XCJLZWx1YXJnYVwifSxcbiAgICAgICAge2tleToyLCBsYWJlbDpcIkR1a3VuXCJ9LFxuICAgICAgICB7a2V5OjMsIGxhYmVsOlwiQmlkYW5cIn0sXG4gICAgICAgIHtrZXk6NCwgbGFiZWw6XCJkci4gVW11bVwifSxcbiAgICAgICAge2tleTo1LCBsYWJlbDpcImRyLiBTcGVzaWFsaXNcIn0sXG4gICAgICAgIHtrZXk6NiwgbGFiZWw6XCJMYWluXCJ9LFxuICAgICAgICB7a2V5OjcsIGxhYmVsOlwiVGlkYWsgYWRhXCJ9LFxuICAgIF07XG5cbiAgICB0ZW1wYXRzID0gW1xuICAgICAgICB7a2V5OjEsIGxhYmVsOlwiUnVtYWhcIn0sXG4gICAgICAgIHtrZXk6MiwgbGFiZWw6XCJQb3NrZXNkZXNcIn0sXG4gICAgICAgIHtrZXk6MywgbGFiZWw6XCJQdXN0dVwifSxcbiAgICAgICAge2tleTo0LCBsYWJlbDpcIlB1c2tlc21hc1wifSxcbiAgICAgICAge2tleTo1LCBsYWJlbDpcIlJ1bWFoIFNha2l0IEJlcnNhbGluXCJ9LFxuICAgICAgICB7a2V5OjYsIGxhYmVsOlwiUnVtYWggU2FraXQgSWJ1IEFuYWtcIn0sXG4gICAgICAgIHtrZXk6NywgbGFiZWw6XCJSdW1haCBTYWtpdFwifSxcbiAgICAgICAge2tleTo4LCBsYWJlbDpcIlJ1bWFoIFNha2l0IE9kaGFcIn0sXG4gICAgXTtcblxuICAgIHBlbmRhbXBpbmdzID0gW1xuICAgICAgICB7a2V5OjEsIGxhYmVsOlwiU3VhbWlcIn0sXG4gICAgICAgIHtrZXk6MiwgbGFiZWw6XCJLZWx1YXJnYVwifSxcbiAgICAgICAge2tleTozLCBsYWJlbDpcIlRlbWFuXCJ9LFxuICAgICAgICB7a2V5OjQsIGxhYmVsOlwiVGV0YW5nZ2FcIn0sXG4gICAgICAgIHtrZXk6NSwgbGFiZWw6XCJMYWluXCJ9LFxuICAgICAgICB7a2V5OjYsIGxhYmVsOlwiVGlkYWsgQWRhXCJ9LFxuICAgIF07XG5cbiAgICB0cmFuc3BvcnRhc2llcyA9IFtcbiAgICAgICAge2tleToxLCBsYWJlbDpcIlN1YW1pXCJ9LFxuICAgICAgICB7a2V5OjIsIGxhYmVsOlwiS2VsdWFyZ2FcIn0sXG4gICAgICAgIHtrZXk6MywgbGFiZWw6XCJUZW1hblwifSxcbiAgICAgICAge2tleTo0LCBsYWJlbDpcIlRldGFuZ2dhXCJ9LFxuICAgICAgICB7a2V5OjUsIGxhYmVsOlwiTGFpblwifSxcbiAgICAgICAge2tleTo2LCBsYWJlbDpcIlRpZGFrIEFkYVwifSxcbiAgICBdO1xuXG4gICAgcGVuZG9ub3JzID0gW1xuICAgICAgICB7a2V5OjEsIGxhYmVsOlwiU3VhbWlcIn0sXG4gICAgICAgIHtrZXk6MiwgbGFiZWw6XCJLZWx1YXJnYVwifSxcbiAgICAgICAge2tleTozLCBsYWJlbDpcIlRlbWFuXCJ9LFxuICAgICAgICB7a2V5OjQsIGxhYmVsOlwiVGV0YW5nZ2FcIn0sXG4gICAgICAgIHtrZXk6NSwgbGFiZWw6XCJMYWluXCJ9LFxuICAgICAgICB7a2V5OjYsIGxhYmVsOlwiVGlkYWsgQWRhXCJ9LFxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczpNb2RhbERpYWxvZ1BhcmFtcywgcHJpdmF0ZSBzZXJ2OlJlbmNhbmFQZXJzYWxpbmFuU2VydmljZSl7XG5cbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wYXJhbXMuY29udGV4dCkpO1xuXG4gICAgICAgIHRoaXMuaWRfa2VoYW1pbGFuID0gcGFyYW1zLmNvbnRleHQuaWRfa2VoYW1pbGFuO1xuICAgICAgICBpZiAodGhpcy5wYXJhbXMuY29udGV4dC5wbGFuKSB7XG4gICAgICAgICAgICB0aGlzLmlzZWRpdCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlbmNhbmEgPSB0aGlzLnBhcmFtcy5jb250ZXh0LnBsYW5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNlZGl0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJlbmNhbmEgPSBuZXcgUmVuY2FuYSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBzdWJtaXQoKXtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yZW5jYW5hKSk7XG4gICAgICAgIGlmICh0aGlzLmlzZWRpdCkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2LmVkaXQodGhpcy5pZF9rZWhhbWlsYW4sdGhpcy5yZW5jYW5hLmlkLHRoaXMucmVuY2FuYSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlcyA9PiBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXJ2LmFkZHBsYW4odGhpcy5pZF9rZWhhbWlsYW4sIHRoaXMucmVuY2FuYSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlcyA9PiBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxuIl19