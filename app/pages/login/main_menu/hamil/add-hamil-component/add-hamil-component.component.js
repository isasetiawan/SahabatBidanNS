"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var Toast = require("nativescript-toast");
var ibuhamilservice_1 = require("../../ibuhamilservice");
var Kehamilan_1 = require("../hamilscomponent/menuhamil/Kehamilan");
var AddHamilComponentComponent = (function () {
    function AddHamilComponentComponent(params, serv) {
        this.params = params;
        this.serv = serv;
        this.dropoutChoice = [
            { key: "1", label: "Ya" },
            { key: "0", label: "Tidak" },
        ];
        this.args = new Kehamilan_1.Kehamilan();
        this.id_orangtua = this.params.context.orangtua_id;
        //testing
        // this.args.hamil_ke = 3;
        // this.args.HPHT = "2018-04-02"
        // this.args.lila = 12.4;
        // this.args.tinggi_badan = 123.41;
    }
    AddHamilComponentComponent.prototype.ngOnInit = function () { };
    AddHamilComponentComponent.prototype.submit = function () {
        var _this = this;
        console.log(JSON.stringify(this.args));
        // console.log(`idnya adalah ${this.id_orangtua}`)
        this.serv.addPregnancies(this.id_orangtua, this.args).subscribe(function (res) {
            Toast.makeText(res.message).show();
            _this.params.closeCallback();
        });
    };
    AddHamilComponentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-add-hamil-component',
            templateUrl: './add-hamil-component.component.html',
            styleUrls: ['./add-hamil-component.component.css'],
            providers: [ibuhamilservice_1.Ibuhamilservice]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.ModalDialogParams,
            ibuhamilservice_1.Ibuhamilservice])
    ], AddHamilComponentComponent);
    return AddHamilComponentComponent;
}());
exports.AddHamilComponentComponent = AddHamilComponentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWhhbWlsLWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGQtaGFtaWwtY29tcG9uZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw2REFBdUQ7QUFDdkQsMENBQTRDO0FBQzVDLHlEQUFzRDtBQUN0RCxvRUFBaUU7QUFTakU7SUFXSSxvQ0FDWSxNQUF3QixFQUN4QixJQUFvQjtRQURwQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQVBoQyxrQkFBYSxHQUFHO1lBQ1osRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUM7WUFDcEIsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUM7U0FDMUIsQ0FBQztRQU1FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFbkQsU0FBUztRQUNULDBCQUEwQjtRQUMxQixnQ0FBZ0M7UUFDaEMseUJBQXlCO1FBQ3pCLG1DQUFtQztJQUN2QyxDQUFDO0lBRUQsNkNBQVEsR0FBUixjQUFXLENBQUM7SUFFWiwyQ0FBTSxHQUFOO1FBQUEsaUJBU0M7UUFSRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkMsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDM0QsVUFBQSxHQUFHO1lBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUMvQixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFwQ1EsMEJBQTBCO1FBUHRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO1lBQ2xELFNBQVMsRUFBQyxDQUFDLGlDQUFlLENBQUM7U0FDNUIsQ0FBQzt5Q0FhcUIsd0NBQWlCO1lBQ25CLGlDQUFlO09BYnZCLDBCQUEwQixDQXNDdEM7SUFBRCxpQ0FBQztDQUFBLEFBdENELElBc0NDO0FBdENZLGdFQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vZGFsRGlhbG9nUGFyYW1zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbmltcG9ydCB7SWJ1aGFtaWxzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vaWJ1aGFtaWxzZXJ2aWNlXCI7XG5pbXBvcnQge0tlaGFtaWxhbn0gZnJvbSBcIi4uL2hhbWlsc2NvbXBvbmVudC9tZW51aGFtaWwvS2VoYW1pbGFuXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1hZGQtaGFtaWwtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1oYW1pbC1jb21wb25lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtaGFtaWwtY29tcG9uZW50LmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOltJYnVoYW1pbHNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFkZEhhbWlsQ29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGFyZ3M6S2VoYW1pbGFuO1xuICAgIGlkX29yYW5ndHVhOm51bWJlcjtcbiAgICBlcnJfbWVzc2FnZTpzdHJpbmc7XG5cbiAgICBkcm9wb3V0Q2hvaWNlID0gW1xuICAgICAgICB7a2V5OlwiMVwiLGxhYmVsOlwiWWFcIn0sXG4gICAgICAgIHtrZXk6XCIwXCIsbGFiZWw6XCJUaWRha1wifSxcbiAgICBdO1xuICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYXJhbXM6TW9kYWxEaWFsb2dQYXJhbXMsXG4gICAgICAgIHByaXZhdGUgc2VydjpJYnVoYW1pbHNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5hcmdzID0gbmV3IEtlaGFtaWxhbigpO1xuICAgICAgICB0aGlzLmlkX29yYW5ndHVhID0gdGhpcy5wYXJhbXMuY29udGV4dC5vcmFuZ3R1YV9pZDtcblxuICAgICAgICAvL3Rlc3RpbmdcbiAgICAgICAgLy8gdGhpcy5hcmdzLmhhbWlsX2tlID0gMztcbiAgICAgICAgLy8gdGhpcy5hcmdzLkhQSFQgPSBcIjIwMTgtMDQtMDJcIlxuICAgICAgICAvLyB0aGlzLmFyZ3MubGlsYSA9IDEyLjQ7XG4gICAgICAgIC8vIHRoaXMuYXJncy50aW5nZ2lfYmFkYW4gPSAxMjMuNDE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXt9XG5cbiAgICBzdWJtaXQoKXtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5hcmdzKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBpZG55YSBhZGFsYWggJHt0aGlzLmlkX29yYW5ndHVhfWApXG4gICAgICAgIHRoaXMuc2Vydi5hZGRQcmVnbmFuY2llcyh0aGlzLmlkX29yYW5ndHVhLCB0aGlzLmFyZ3MpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcz0+e1xuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbn0iXX0=