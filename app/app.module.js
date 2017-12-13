"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var login_component_1 = require("./pages/login/login.component");
var mainmenu_component_1 = require("./pages/login/main_menu/mainmenu.component");
var angular_1 = require("nativescript-pro-ui/dataform/angular");
var angular_2 = require("nativescript-pro-ui/listview/angular");
var profile_component_1 = require("./pages/login/main_menu/profile/profile.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
var http_1 = require("nativescript-angular/http");
var pairing_modal_component_1 = require("./pages/login/main_menu/pairing/pairing-modal.component");
var anaks_component_1 = require("./pages/login/main_menu/anaks/anaks.component");
var hamilscomponent_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/hamilscomponent.component");
var add_hamil_component_component_1 = require("./pages/login/main_menu/hamil/add-hamil-component/add-hamil-component.component");
var kehamilan_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/kehamilan/kehamilan.component");
var modal_add_plans_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/kehamilan/modal-add-plans/modal-add-plans.component");
var pemeriksaan_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/kehamilan/pemeriksaan/pemeriksaan.component");
var resume_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/kehamilan/pemeriksaan/resume/resume.component");
var tindakan_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/kehamilan/pemeriksaan/tindakan/tindakan.component");
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent,
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                http_1.NativeScriptHttpModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIDataFormModule,
                angular_2.NativeScriptUIListViewModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                mainmenu_component_1.MainmenuComponent,
                profile_component_1.ProfileComponent,
                pairing_modal_component_1.PairingModalComponent,
                anaks_component_1.AnaksComponent,
                hamilscomponent_component_1.HamilscomponentComponent,
                add_hamil_component_component_1.AddHamilComponentComponent,
                kehamilan_component_1.KehamilanComponent,
                modal_add_plans_component_1.ModalAddPlansComponent,
                pemeriksaan_component_1.PemeriksaanComponent,
                resume_component_1.ResumeComponent,
                tindakan_component_1.TindakanComponent
            ],
            providers: [],
            entryComponents: [
                pairing_modal_component_1.PairingModalComponent,
                add_hamil_component_component_1.AddHamilComponentComponent,
                modal_add_plans_component_1.ModalAddPlansComponent,
                resume_component_1.ResumeComponent
            ],
            schemas: []
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFHL0MsaUVBQThEO0FBQzlELGlGQUE2RTtBQUM3RSxnRUFBa0Y7QUFDbEYsZ0VBQWtGO0FBQ2xGLHVGQUFtRjtBQUVuRiwyRUFBMkU7QUFDM0Usb0RBQXFFO0FBRXJFLDZFQUE2RTtBQUM3RSxrREFBbUU7QUFDbkUsbUdBQThGO0FBQzlGLGlGQUE2RTtBQUM3RSxxSEFBaUg7QUFDakgsaUlBQTZIO0FBQzdILG1IQUErRztBQUMvRywrSUFBeUk7QUFDekksbUlBQStIO0FBQy9ILGdJQUE0SDtBQUM1SCxzSUFBa0k7QUE2Q2xJO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTNDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLDZCQUFzQjtnQkFDdEIsK0JBQXVCO2dCQUN2QixzQ0FBNEI7Z0JBQzVCLHNDQUE0QjthQUMvQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCxzQ0FBaUI7Z0JBQ2pCLG9DQUFnQjtnQkFDaEIsK0NBQXFCO2dCQUNyQixnQ0FBYztnQkFDZCxvREFBd0I7Z0JBQ3hCLDBEQUEwQjtnQkFDMUIsd0NBQWtCO2dCQUNsQixrREFBc0I7Z0JBQ3RCLDRDQUFvQjtnQkFDcEIsa0NBQWU7Z0JBQ2Ysc0NBQWlCO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFLEVBRVY7WUFDRCxlQUFlLEVBQUM7Z0JBQ1osK0NBQXFCO2dCQUNyQiwwREFBMEI7Z0JBQzFCLGtEQUFzQjtnQkFDdEIsa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUUsRUFFUjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIlxuaW1wb3J0IHtNYWlubWVudUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L21haW5tZW51LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7UHJvZmlsZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge1BhaXJpbmdNb2RhbENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L3BhaXJpbmcvcGFpcmluZy1tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7QW5ha3NDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21haW5fbWVudS9hbmFrcy9hbmFrcy5jb21wb25lbnRcIjtcbmltcG9ydCB7SGFtaWxzY29tcG9uZW50Q29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvaGFtaWwvaGFtaWxzY29tcG9uZW50L2hhbWlsc2NvbXBvbmVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkZEhhbWlsQ29tcG9uZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L2hhbWlsL2FkZC1oYW1pbC1jb21wb25lbnQvYWRkLWhhbWlsLWNvbXBvbmVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7S2VoYW1pbGFuQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvaGFtaWwvaGFtaWxzY29tcG9uZW50L2tlaGFtaWxhbi9rZWhhbWlsYW4uY29tcG9uZW50XCI7XG5pbXBvcnQge01vZGFsQWRkUGxhbnNDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21haW5fbWVudS9oYW1pbC9oYW1pbHNjb21wb25lbnQva2VoYW1pbGFuL21vZGFsLWFkZC1wbGFucy9tb2RhbC1hZGQtcGxhbnMuY29tcG9uZW50XCI7XG5pbXBvcnQge1BlbWVyaWtzYWFuQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvaGFtaWwvaGFtaWxzY29tcG9uZW50L2tlaGFtaWxhbi9wZW1lcmlrc2Fhbi9wZW1lcmlrc2Fhbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVzdW1lQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvaGFtaWwvaGFtaWxzY29tcG9uZW50L2tlaGFtaWxhbi9wZW1lcmlrc2Fhbi9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUaW5kYWthbkNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L2hhbWlsL2hhbWlsc2NvbXBvbmVudC9rZWhhbWlsYW4vcGVtZXJpa3NhYW4vdGluZGFrYW4vdGluZGFrYW4uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBNYWlubWVudUNvbXBvbmVudCxcbiAgICAgICAgUHJvZmlsZUNvbXBvbmVudCxcbiAgICAgICAgUGFpcmluZ01vZGFsQ29tcG9uZW50LFxuICAgICAgICBBbmFrc0NvbXBvbmVudCxcbiAgICAgICAgSGFtaWxzY29tcG9uZW50Q29tcG9uZW50LFxuICAgICAgICBBZGRIYW1pbENvbXBvbmVudENvbXBvbmVudCxcbiAgICAgICAgS2VoYW1pbGFuQ29tcG9uZW50LFxuICAgICAgICBNb2RhbEFkZFBsYW5zQ29tcG9uZW50LFxuICAgICAgICBQZW1lcmlrc2FhbkNvbXBvbmVudCxcbiAgICAgICAgUmVzdW1lQ29tcG9uZW50LFxuICAgICAgICBUaW5kYWthbkNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG5cbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czpbXG4gICAgICAgIFBhaXJpbmdNb2RhbENvbXBvbmVudCxcbiAgICAgICAgQWRkSGFtaWxDb21wb25lbnRDb21wb25lbnQsXG4gICAgICAgIE1vZGFsQWRkUGxhbnNDb21wb25lbnQsXG4gICAgICAgIFJlc3VtZUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==