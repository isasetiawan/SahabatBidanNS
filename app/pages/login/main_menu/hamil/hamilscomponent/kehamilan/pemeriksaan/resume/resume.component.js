"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pemeriksaan_service_1 = require("../../pemeriksaan.service");
var nativescript_angular_1 = require("nativescript-angular");
var Toast = require("nativescript-toast");
var ResumeComponent = (function () {
    function ResumeComponent(serv, params) {
        this.serv = serv;
        this.params = params;
        this.resume_all = "";
        this.resume_ibu = "";
        this.resume_janin = "";
        this.id_kehamilan = params.context.id_kehamilan;
        this.id_pemeriksaan = params.context.pemeriksaan.id;
        this.id_orangtua = params.context.id_orangtua;
        console.log(this.id_pemeriksaan);
        console.log(this.id_kehamilan);
    }
    ResumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.resume(this.id_orangtua, this.id_kehamilan, this.id_pemeriksaan).subscribe(function (res) {
            _this.resume_all = res.content.resume_all;
            _this.resume_ibu = res.content.resume_ibu;
            _this.resume_janin = res.content.resume_janin;
            console.log(_this.resume_all);
            console.log(_this.resume_ibu);
            console.log(_this.resume_janin);
        }, function (err) {
            Toast.makeText(err.json().message).show();
        });
    };
    ResumeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-resume',
            templateUrl: './resume.component.html',
            styleUrls: ['./resume.component.css'],
            providers: [pemeriksaan_service_1.PemeriksaanService]
        }),
        __metadata("design:paramtypes", [pemeriksaan_service_1.PemeriksaanService, nativescript_angular_1.ModalDialogParams])
    ], ResumeComponent);
    return ResumeComponent;
}());
exports.ResumeComponent = ResumeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc3VtZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUVBQTZEO0FBQzdELDZEQUF1RDtBQUN2RCwwQ0FBMkM7QUFVM0M7SUFVSSx5QkFBb0IsSUFBdUIsRUFBVSxNQUF3QjtRQUF6RCxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBSjdFLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUNyQixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUduQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUMvRSxVQUFBLEdBQUc7WUFDQyxLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDekMsS0FBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVuQyxDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBakNRLGVBQWU7UUFSM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFNBQVMsRUFBQyxDQUFDLHdDQUFrQixDQUFDO1NBRWpDLENBQUM7eUNBVzJCLHdDQUFrQixFQUFpQix3Q0FBaUI7T0FWcEUsZUFBZSxDQXFDM0I7SUFBRCxzQkFBQztDQUFBLEFBckNELElBcUNDO0FBckNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGVtZXJpa3NhYW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vcGVtZXJpa3NhYW4uc2VydmljZVwiO1xuaW1wb3J0IHtNb2RhbERpYWxvZ1BhcmFtc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtcmVzdW1lJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVzdW1lLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9yZXN1bWUuY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVyczpbUGVtZXJpa3NhYW5TZXJ2aWNlXVxuXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VtZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBpZF9rZWhhbWlsYW46bnVtYmVyO1xuICAgIGlkX3BlbWVyaWtzYWFuOm51bWJlcjtcbiAgICBpZF9vcmFuZ3R1YTpudW1iZXI7XG5cbiAgICByZXN1bWVfYWxsOnN0cmluZz1cIlwiO1xuICAgIHJlc3VtZV9pYnU6c3RyaW5nPVwiXCI7XG4gICAgcmVzdW1lX2phbmluOnN0cmluZz1cIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2OlBlbWVyaWtzYWFuU2VydmljZSwgcHJpdmF0ZSBwYXJhbXM6TW9kYWxEaWFsb2dQYXJhbXMpIHtcbiAgICAgICAgdGhpcy5pZF9rZWhhbWlsYW4gPSBwYXJhbXMuY29udGV4dC5pZF9rZWhhbWlsYW47XG4gICAgICAgIHRoaXMuaWRfcGVtZXJpa3NhYW4gPSBwYXJhbXMuY29udGV4dC5wZW1lcmlrc2Fhbi5pZDtcbiAgICAgICAgdGhpcy5pZF9vcmFuZ3R1YSA9IHBhcmFtcy5jb250ZXh0LmlkX29yYW5ndHVhO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkX3BlbWVyaWtzYWFuKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pZF9rZWhhbWlsYW4pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNlcnYucmVzdW1lKHRoaXMuaWRfb3Jhbmd0dWEgLHRoaXMuaWRfa2VoYW1pbGFuLHRoaXMuaWRfcGVtZXJpa3NhYW4pLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bWVfYWxsID0gcmVzLmNvbnRlbnQucmVzdW1lX2FsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VtZV9pYnUgPSByZXMuY29udGVudC5yZXN1bWVfaWJ1O1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdW1lX2phbmluID0gcmVzLmNvbnRlbnQucmVzdW1lX2phbmluO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzdW1lX2FsbCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXN1bWVfaWJ1KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3VtZV9qYW5pbik7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KGVyci5qc29uKCkubWVzc2FnZSkuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuXG5cbn1cbiJdfQ==