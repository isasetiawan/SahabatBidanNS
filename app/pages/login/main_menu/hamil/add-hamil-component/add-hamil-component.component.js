"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var Toast = require("nativescript-toast");
var ibuhamilservice_1 = require("../../ibuhamilservice");
var AddHamilComponentComponent = (function () {
    function AddHamilComponentComponent(params, serv) {
        this.params = params;
        this.serv = serv;
        this.dropoutChoice = [
            { key: "1", label: "Ya" },
            { key: "0", label: "Tidak" },
        ];
        this.isedit = false;
        this.err_message = "";
        this.args = new Hamil();
        var d = new Date();
        var m = d.getUTCMonth() + 1;
        this.args.HPHT = d.getUTCFullYear() + "-" + m + "-" + d.getUTCDate();
        this.args.hamil_ke = 0;
        this.args.is_dropout = 0;
        this.id_orangtua = this.params.context.orangtua_id;
        if (this.params.context.data) {
            this.isedit = true;
            this.args = this.params.context.data;
            this.id_hamil = this.params.context.kehamilan_id;
        }
        console.log(this.id_orangtua + " " + this.id_hamil);
    }
    AddHamilComponentComponent.prototype.ngOnInit = function () { };
    AddHamilComponentComponent.prototype.submit = function () {
        var _this = this;
        console.log(JSON.stringify(this.args));
        if (this.isedit) {
            this.serv.editPregnancies(this.id_orangtua, this.id_hamil, this.args).subscribe(function (res) {
                Toast.makeText(res.message).show();
                _this.params.closeCallback();
            });
        }
        else {
            this.serv.addPregnancies(this.id_orangtua, this.args).subscribe(function (res) {
                Toast.makeText(res.message).show();
                _this.params.closeCallback();
            });
        }
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
var Hamil = (function () {
    function Hamil() {
    }
    return Hamil;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWhhbWlsLWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGQtaGFtaWwtY29tcG9uZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw2REFBdUQ7QUFDdkQsMENBQTRDO0FBQzVDLHlEQUFzRDtBQVN0RDtJQWFJLG9DQUNZLE1BQXdCLEVBQ3hCLElBQW9CO1FBRHBCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBUGhDLGtCQUFhLEdBQUc7WUFDWixFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQztZQUNwQixFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQztTQUMxQixDQUFDO1FBTUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLEdBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFFbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNyRCxDQUFDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDZDQUFRLEdBQVIsY0FBVyxDQUFDO0lBRVosMkNBQU0sR0FBTjtRQUFBLGlCQWlCQztRQWhCRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FDekUsVUFBQSxHQUFHO2dCQUNDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFBO1lBQy9CLENBQUMsQ0FDSixDQUFBO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUMzRCxVQUFBLEdBQUc7Z0JBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUE7WUFDL0IsQ0FBQyxDQUNKLENBQUE7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQXZEUSwwQkFBMEI7UUFQdEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7WUFDbEQsU0FBUyxFQUFDLENBQUMsaUNBQWUsQ0FBQztTQUM1QixDQUFDO3lDQWVxQix3Q0FBaUI7WUFDbkIsaUNBQWU7T0FmdkIsMEJBQTBCLENBeUR0QztJQUFELGlDQUFDO0NBQUEsQUF6REQsSUF5REM7QUF6RFksZ0VBQTBCO0FBMkR2QztJQUFBO0lBSUEsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vZGFsRGlhbG9nUGFyYW1zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcbmltcG9ydCB7SWJ1aGFtaWxzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vaWJ1aGFtaWxzZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1hZGQtaGFtaWwtY29tcG9uZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC1oYW1pbC1jb21wb25lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtaGFtaWwtY29tcG9uZW50LmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOltJYnVoYW1pbHNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFkZEhhbWlsQ29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGFyZ3M6SGFtaWw7XG4gICAgaXNlZGl0OmJvb2xlYW47XG4gICAgaWRfaGFtaWw6bnVtYmVyO1xuICAgIGlkX29yYW5ndHVhOm51bWJlcjtcbiAgICBlcnJfbWVzc2FnZTpzdHJpbmc7XG5cbiAgICBkcm9wb3V0Q2hvaWNlID0gW1xuICAgICAgICB7a2V5OlwiMVwiLGxhYmVsOlwiWWFcIn0sXG4gICAgICAgIHtrZXk6XCIwXCIsbGFiZWw6XCJUaWRha1wifSxcbiAgICBdO1xuICBcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwYXJhbXM6TW9kYWxEaWFsb2dQYXJhbXMsXG4gICAgICAgIHByaXZhdGUgc2VydjpJYnVoYW1pbHNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5pc2VkaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lcnJfbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuYXJncyA9IG5ldyBIYW1pbCgpO1xuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBtID0gZC5nZXRVVENNb250aCgpICsgMTtcbiAgICAgICAgdGhpcy5hcmdzLkhQSFQgPSBkLmdldFVUQ0Z1bGxZZWFyKCkrXCItXCIrbStcIi1cIitkLmdldFVUQ0RhdGUoKTtcbiAgICAgICAgdGhpcy5hcmdzLmhhbWlsX2tlID0gMDtcbiAgICAgICAgdGhpcy5hcmdzLmlzX2Ryb3BvdXQgPSAwO1xuICAgICAgICB0aGlzLmlkX29yYW5ndHVhID0gdGhpcy5wYXJhbXMuY29udGV4dC5vcmFuZ3R1YV9pZDtcblxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuY29udGV4dC5kYXRhKXtcbiAgICAgICAgICAgIHRoaXMuaXNlZGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYXJncyA9IHRoaXMucGFyYW1zLmNvbnRleHQuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuaWRfaGFtaWwgPSB0aGlzLnBhcmFtcy5jb250ZXh0LmtlaGFtaWxhbl9pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWRfb3Jhbmd0dWErXCIgXCIrdGhpcy5pZF9oYW1pbCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXt9XG5cbiAgICBzdWJtaXQoKXtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5hcmdzKSk7XG4gICAgICAgIGlmICh0aGlzLmlzZWRpdCkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2LmVkaXRQcmVnbmFuY2llcyh0aGlzLmlkX29yYW5ndHVhLHRoaXMuaWRfaGFtaWwsdGhpcy5hcmdzKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzPT57XG4gICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KHJlcy5tZXNzYWdlKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Vydi5hZGRQcmVnbmFuY2llcyh0aGlzLmlkX29yYW5ndHVhLCB0aGlzLmFyZ3MpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICByZXM9PntcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNsYXNzIEhhbWlsIHtcbiAgICBoYW1pbF9rZTpudW1iZXI7XG4gICAgSFBIVDpzdHJpbmc7XG4gICAgaXNfZHJvcG91dDpudW1iZXI7XG59Il19