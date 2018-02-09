"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var kembang_service_1 = require("../kembang.service");
var Toast = require("nativescript-toast");
var ModalKembangComponent = (function () {
    function ModalKembangComponent(params, serv) {
        this.params = params;
        this.serv = serv;
        this.ansque = [];
        this.kembang = params.context;
        this.arange();
    }
    ModalKembangComponent.prototype.arange = function () {
        for (var i = 1; i <= 10; i++) {
            this.ansque.push({
                answer: this.kembang.hasil['jawaban_' + i],
                question: this.kembang.question[i - 1].pertanyaan
            });
        }
        console.log(JSON.stringify(this.ansque));
    };
    ModalKembangComponent.prototype.validate = function () {
        var _this = this;
        this.serv.validate(this.kembang.hasil.id).subscribe(function (res) {
            Toast.makeText(res.message).show();
            _this.params.closeCallback();
        });
    };
    ModalKembangComponent.prototype.ngOnInit = function () { };
    ModalKembangComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-modal-kembang',
            templateUrl: './modal-kembang.component.html',
            styleUrls: ['./modal-kembang.component.css'],
            providers: [kembang_service_1.KembangService]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.ModalDialogParams, kembang_service_1.KembangService])
    ], ModalKembangComponent);
    return ModalKembangComponent;
}());
exports.ModalKembangComponent = ModalKembangComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwta2VtYmFuZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC1rZW1iYW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCw2REFBdUQ7QUFDdkQsc0RBQWtEO0FBQ2xELDBDQUE0QztBQVM1QztJQUtJLCtCQUFvQixNQUF3QixFQUFTLElBQW1CO1FBQXBELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUZ4RSxXQUFNLEdBQU8sRUFBRSxDQUFDO1FBR1osSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsc0NBQU0sR0FBTjtRQUNJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsTUFBTSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLFFBQVEsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTthQUNqRCxDQUFDLENBQUE7UUFDTixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsSUFBSSxDQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ2hELFVBQUEsR0FBRztZQUNDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDL0IsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsd0NBQVEsR0FBUixjQUFhLENBQUM7SUE3QkwscUJBQXFCO1FBUGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1lBQzVDLFNBQVMsRUFBQyxDQUFDLGdDQUFjLENBQUM7U0FDN0IsQ0FBQzt5Q0FNNkIsd0NBQWlCLEVBQWMsZ0NBQWM7T0FML0QscUJBQXFCLENBK0JqQztJQUFELDRCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TW9kYWxEaWFsb2dQYXJhbXN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtLZW1iYW5nU2VydmljZX0gZnJvbSBcIi4uL2tlbWJhbmcuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLW1vZGFsLWtlbWJhbmcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1rZW1iYW5nLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb2RhbC1rZW1iYW5nLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6W0tlbWJhbmdTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbEtlbWJhbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAga2VtYmFuZzphbnk7XG4gICAgYW5zcXVlOmFueVtdPVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6TW9kYWxEaWFsb2dQYXJhbXMscHJpdmF0ZSBzZXJ2OktlbWJhbmdTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMua2VtYmFuZyA9IHBhcmFtcy5jb250ZXh0O1xuICAgICAgICB0aGlzLmFyYW5nZSgpO1xuICAgIH1cblxuICAgIGFyYW5nZSgpe1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuYW5zcXVlLnB1c2goe1xuICAgICAgICAgICAgICAgIGFuc3dlcjp0aGlzLmtlbWJhbmcuaGFzaWxbJ2phd2FiYW5fJytpXSxcbiAgICAgICAgICAgICAgICBxdWVzdGlvbjp0aGlzLmtlbWJhbmcucXVlc3Rpb25baS0xXS5wZXJ0YW55YWFuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuYW5zcXVlKSlcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpe1xuICAgICAgICB0aGlzLnNlcnYuIHZhbGlkYXRlKHRoaXMua2VtYmFuZy5oYXNpbC5pZCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbn1cbiJdfQ==