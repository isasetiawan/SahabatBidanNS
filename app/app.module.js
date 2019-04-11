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
var nifas_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/kehamilan/nifas/nifas.component");
var anak_component_1 = require("./pages/login/main_menu/anaks/anak/anak.component");
var tumbuh_component_1 = require("./pages/login/main_menu/anaks/anak/tumbuh/tumbuh.component");
var tumbuh_modal_1 = require("./pages/login/main_menu/anaks/anak/tumbuh/modal/tumbuh.modal");
var angular_3 = require("nativescript-pro-ui/chart/angular");
var kembang_component_1 = require("./pages/login/main_menu/anaks/anak/kembang/kembang.component");
var modal_kembang_component_1 = require("./pages/login/main_menu/anaks/anak/kembang/modal-kembang/modal-kembang.component");
var vaksin_component_1 = require("./pages/login/main_menu/anaks/anak/vaksin/vaksin.component");
var modal_vaksin_component_1 = require("./pages/login/main_menu/anaks/anak/vaksin/modal-vaksin/modal-vaksin.component");
var angular_4 = require("nativescript-checkbox/angular");
var kesehatan_component_1 = require("./pages/login/main_menu/anaks/anak/kesehatan/kesehatan.component");
var detil_kesehatan_component_1 = require("./pages/login/main_menu/anaks/anak/kesehatan/detil-kesehatan/detil-kesehatan.component");
var http_client_1 = require("nativescript-angular/http-client");
var http_2 = require("@angular/common/http");
var auth_interceptor_service_1 = require("./auth-interceptor.service");
var angular_5 = require("nativescript-drop-down/angular");
var menuhamil_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/menuhamil/menuhamil.component");
var riwayat_kehamilan_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/menuhamil/riwayat-kehamilan/riwayat-kehamilan.component");
var riwayat_kesehatan_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/menuhamil/riwayat-kesehatan/riwayat-kesehatan.component");
var keluhan_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/menuhamil/keluhan/keluhan.component");
var pemeriksaan_kehamilan_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/menuhamil/pemeriksaan-kehamilan/pemeriksaan-kehamilan.component");
var rencana_persalinan_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/menuhamil/rencana-persalinan/rencana-persalinan.component");
var persalinan_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/menuhamil/persalinan/persalinan.component");
var melahirkan_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/menuhamil/melahirkan/melahirkan.component");
var nifases_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/menuhamil/nifases/nifases.component");
var bidan_service_1 = require("./pages/login/bidan.service");
var resikokader_component_1 = require("./pages/login/main_menu/hamil/hamilscomponent/menuhamil/resikokader/resikokader.component");
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
                http_client_1.NativeScriptHttpClientModule,
                http_1.NativeScriptHttpModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIDataFormModule,
                angular_3.NativeScriptUIChartModule,
                angular_2.NativeScriptUIListViewModule,
                angular_4.TNSCheckBoxModule,
                angular_5.DropDownModule
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
                tindakan_component_1.TindakanComponent,
                nifas_component_1.NifasComponent,
                anak_component_1.AnakComponent,
                tumbuh_component_1.TumbuhComponent,
                tumbuh_modal_1.TumbuhModal,
                kembang_component_1.KembangComponent,
                modal_kembang_component_1.ModalKembangComponent,
                vaksin_component_1.VaksinComponent,
                modal_vaksin_component_1.ModalVaksinComponent,
                kesehatan_component_1.KesehatanComponent,
                detil_kesehatan_component_1.DetilKesehatanComponent,
                menuhamil_component_1.MenuhamilComponent,
                riwayat_kehamilan_component_1.RiwayatKehamilanComponent,
                riwayat_kesehatan_component_1.RiwayatKesehatanComponent,
                keluhan_component_1.KeluhanComponent,
                pemeriksaan_kehamilan_component_1.PemeriksaanKehamilanComponent,
                rencana_persalinan_component_1.RencanaPersalinanComponent,
                persalinan_component_1.PersalinanComponent,
                melahirkan_component_1.MelahirkanComponent,
                nifases_component_1.NifasesComponent,
                resikokader_component_1.ResikokaderComponent,
            ],
            providers: [
                bidan_service_1.BidanService,
                {
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_service_1.AuthInterceptorService,
                    multi: true
                }
            ],
            entryComponents: [
                pairing_modal_component_1.PairingModalComponent,
                add_hamil_component_component_1.AddHamilComponentComponent,
                modal_add_plans_component_1.ModalAddPlansComponent,
                resume_component_1.ResumeComponent,
                tumbuh_modal_1.TumbuhModal,
                modal_kembang_component_1.ModalKembangComponent,
                modal_vaksin_component_1.ModalVaksinComponent,
                detil_kesehatan_component_1.DetilKesehatanComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFHL0MsaUVBQThEO0FBQzlELGlGQUE2RTtBQUM3RSxnRUFBa0Y7QUFDbEYsZ0VBQWtGO0FBQ2xGLHVGQUFtRjtBQUVuRiwyRUFBMkU7QUFDM0Usb0RBQXFFO0FBRXJFLDZFQUE2RTtBQUM3RSxrREFBbUU7QUFDbkUsbUdBQThGO0FBQzlGLGlGQUE2RTtBQUM3RSxxSEFBaUg7QUFDakgsaUlBQTZIO0FBQzdILG1IQUErRztBQUMvRywrSUFBeUk7QUFDekksbUlBQStIO0FBQy9ILGdJQUE0SDtBQUM1SCxzSUFBa0k7QUFDbEksaUhBQStHO0FBQy9HLG9GQUFnRjtBQUNoRiwrRkFBMkY7QUFDM0YsNkZBQXlGO0FBQ3pGLDZEQUE0RTtBQUM1RSxrR0FBOEY7QUFDOUYsNEhBQXVIO0FBQ3ZILCtGQUEyRjtBQUMzRix3SEFBbUg7QUFDbkgseURBQWtFO0FBQ2xFLHdHQUFvRztBQUNwRyxvSUFBK0g7QUFDL0gsZ0VBQThFO0FBQzlFLDZDQUF1RDtBQUN2RCx1RUFBa0U7QUFDbEUsMERBQWdFO0FBQ2hFLG1IQUErRztBQUMvRyxxSkFBZ0o7QUFDaEoscUpBQWdKO0FBQ2hKLHVIQUFtSDtBQUNuSCxpS0FBNEo7QUFDNUosd0pBQW1KO0FBQ25KLGdJQUE0SDtBQUM1SCxnSUFBNEg7QUFDNUgsdUhBQW1IO0FBQ25ILDZEQUF5RDtBQUN6RCxtSUFBK0g7QUE4RS9IO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTVFckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLDBDQUE0QjtnQkFDNUIsNkJBQXNCO2dCQUN0QiwrQkFBdUI7Z0JBQ3ZCLHNDQUE0QjtnQkFDNUIsbUNBQXlCO2dCQUN6QixzQ0FBNEI7Z0JBQzVCLDJCQUFpQjtnQkFDakIsd0JBQWM7YUFDakI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2Qsc0NBQWlCO2dCQUNqQixvQ0FBZ0I7Z0JBQ2hCLCtDQUFxQjtnQkFDckIsZ0NBQWM7Z0JBQ2Qsb0RBQXdCO2dCQUN4QiwwREFBMEI7Z0JBQzFCLHdDQUFrQjtnQkFDbEIsa0RBQXNCO2dCQUN0Qiw0Q0FBb0I7Z0JBQ3BCLGtDQUFlO2dCQUNmLHNDQUFpQjtnQkFDakIsZ0NBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2YsMEJBQVc7Z0JBQ1gsb0NBQWdCO2dCQUNoQiwrQ0FBcUI7Z0JBQ3JCLGtDQUFlO2dCQUNmLDZDQUFvQjtnQkFDcEIsd0NBQWtCO2dCQUNsQixtREFBdUI7Z0JBQ3ZCLHdDQUFrQjtnQkFDbEIsdURBQXlCO2dCQUN6Qix1REFBeUI7Z0JBQ3pCLG9DQUFnQjtnQkFDaEIsK0RBQTZCO2dCQUM3Qix5REFBMEI7Z0JBQzFCLDBDQUFtQjtnQkFDbkIsMENBQW1CO2dCQUNuQixvQ0FBZ0I7Z0JBQ2hCLDRDQUFvQjthQUN2QjtZQUNELFNBQVMsRUFBRTtnQkFDUCw0QkFBWTtnQkFDWjtvQkFDSSxPQUFPLEVBQUUsd0JBQWlCO29CQUMxQixRQUFRLEVBQUUsaURBQXNCO29CQUNoQyxLQUFLLEVBQUUsSUFBSTtpQkFDZDthQUNKO1lBQ0QsZUFBZSxFQUFDO2dCQUNaLCtDQUFxQjtnQkFDckIsMERBQTBCO2dCQUMxQixrREFBc0I7Z0JBQ3RCLGtDQUFlO2dCQUNmLDBCQUFXO2dCQUNYLCtDQUFxQjtnQkFDckIsNkNBQW9CO2dCQUNwQixtREFBdUI7YUFDMUI7WUFDRCxPQUFPLEVBQUUsRUFFUjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIlxuaW1wb3J0IHtNYWlubWVudUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L21haW5tZW51LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7UHJvZmlsZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge1BhaXJpbmdNb2RhbENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L3BhaXJpbmcvcGFpcmluZy1tb2RhbC5jb21wb25lbnRcIjtcbmltcG9ydCB7QW5ha3NDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21haW5fbWVudS9hbmFrcy9hbmFrcy5jb21wb25lbnRcIjtcbmltcG9ydCB7SGFtaWxzY29tcG9uZW50Q29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvaGFtaWwvaGFtaWxzY29tcG9uZW50L2hhbWlsc2NvbXBvbmVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkZEhhbWlsQ29tcG9uZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L2hhbWlsL2FkZC1oYW1pbC1jb21wb25lbnQvYWRkLWhhbWlsLWNvbXBvbmVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7S2VoYW1pbGFuQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvaGFtaWwvaGFtaWxzY29tcG9uZW50L2tlaGFtaWxhbi9rZWhhbWlsYW4uY29tcG9uZW50XCI7XG5pbXBvcnQge01vZGFsQWRkUGxhbnNDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21haW5fbWVudS9oYW1pbC9oYW1pbHNjb21wb25lbnQva2VoYW1pbGFuL21vZGFsLWFkZC1wbGFucy9tb2RhbC1hZGQtcGxhbnMuY29tcG9uZW50XCI7XG5pbXBvcnQge1BlbWVyaWtzYWFuQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvaGFtaWwvaGFtaWxzY29tcG9uZW50L2tlaGFtaWxhbi9wZW1lcmlrc2Fhbi9wZW1lcmlrc2Fhbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVzdW1lQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvaGFtaWwvaGFtaWxzY29tcG9uZW50L2tlaGFtaWxhbi9wZW1lcmlrc2Fhbi9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUaW5kYWthbkNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L2hhbWlsL2hhbWlsc2NvbXBvbmVudC9rZWhhbWlsYW4vcGVtZXJpa3NhYW4vdGluZGFrYW4vdGluZGFrYW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOaWZhc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21haW5fbWVudS9oYW1pbC9oYW1pbHNjb21wb25lbnQva2VoYW1pbGFuL25pZmFzL25pZmFzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBbmFrQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvYW5ha3MvYW5hay9hbmFrLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUdW1idWhDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21haW5fbWVudS9hbmFrcy9hbmFrL3R1bWJ1aC90dW1idWguY29tcG9uZW50XCI7XG5pbXBvcnQge1R1bWJ1aE1vZGFsfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvYW5ha3MvYW5hay90dW1idWgvbW9kYWwvdHVtYnVoLm1vZGFsXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2NoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7S2VtYmFuZ0NvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L2FuYWtzL2FuYWsva2VtYmFuZy9rZW1iYW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNb2RhbEtlbWJhbmdDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21haW5fbWVudS9hbmFrcy9hbmFrL2tlbWJhbmcvbW9kYWwta2VtYmFuZy9tb2RhbC1rZW1iYW5nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtWYWtzaW5Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21haW5fbWVudS9hbmFrcy9hbmFrL3Zha3Npbi92YWtzaW4uY29tcG9uZW50XCI7XG5pbXBvcnQge01vZGFsVmFrc2luQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvYW5ha3MvYW5hay92YWtzaW4vbW9kYWwtdmFrc2luL21vZGFsLXZha3Npbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFROU0NoZWNrQm94TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNoZWNrYm94L2FuZ3VsYXInO1xuaW1wb3J0IHtLZXNlaGF0YW5Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21haW5fbWVudS9hbmFrcy9hbmFrL2tlc2VoYXRhbi9rZXNlaGF0YW4uY29tcG9uZW50XCI7XG5pbXBvcnQge0RldGlsS2VzZWhhdGFuQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvYW5ha3MvYW5hay9rZXNlaGF0YW4vZGV0aWwta2VzZWhhdGFuL2RldGlsLWtlc2VoYXRhbi5jb21wb25lbnRcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7QXV0aEludGVyY2VwdG9yU2VydmljZX0gZnJvbSBcIi4vYXV0aC1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEcm9wRG93bk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duL2FuZ3VsYXJcIjtcbmltcG9ydCB7TWVudWhhbWlsQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvaGFtaWwvaGFtaWxzY29tcG9uZW50L21lbnVoYW1pbC9tZW51aGFtaWwuY29tcG9uZW50XCI7XG5pbXBvcnQge1Jpd2F5YXRLZWhhbWlsYW5Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21haW5fbWVudS9oYW1pbC9oYW1pbHNjb21wb25lbnQvbWVudWhhbWlsL3Jpd2F5YXQta2VoYW1pbGFuL3Jpd2F5YXQta2VoYW1pbGFuLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSaXdheWF0S2VzZWhhdGFuQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvaGFtaWwvaGFtaWxzY29tcG9uZW50L21lbnVoYW1pbC9yaXdheWF0LWtlc2VoYXRhbi9yaXdheWF0LWtlc2VoYXRhbi5jb21wb25lbnRcIjtcbmltcG9ydCB7S2VsdWhhbkNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L2hhbWlsL2hhbWlsc2NvbXBvbmVudC9tZW51aGFtaWwva2VsdWhhbi9rZWx1aGFuLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQZW1lcmlrc2FhbktlaGFtaWxhbkNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L2hhbWlsL2hhbWlsc2NvbXBvbmVudC9tZW51aGFtaWwvcGVtZXJpa3NhYW4ta2VoYW1pbGFuL3BlbWVyaWtzYWFuLWtlaGFtaWxhbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UmVuY2FuYVBlcnNhbGluYW5Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21haW5fbWVudS9oYW1pbC9oYW1pbHNjb21wb25lbnQvbWVudWhhbWlsL3JlbmNhbmEtcGVyc2FsaW5hbi9yZW5jYW5hLXBlcnNhbGluYW4uY29tcG9uZW50XCI7XG5pbXBvcnQge1BlcnNhbGluYW5Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21haW5fbWVudS9oYW1pbC9oYW1pbHNjb21wb25lbnQvbWVudWhhbWlsL3BlcnNhbGluYW4vcGVyc2FsaW5hbi5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVsYWhpcmthbkNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L2hhbWlsL2hhbWlsc2NvbXBvbmVudC9tZW51aGFtaWwvbWVsYWhpcmthbi9tZWxhaGlya2FuLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOaWZhc2VzQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tYWluX21lbnUvaGFtaWwvaGFtaWxzY29tcG9uZW50L21lbnVoYW1pbC9uaWZhc2VzL25pZmFzZXMuY29tcG9uZW50XCI7XG5pbXBvcnQge0JpZGFuU2VydmljZX0gZnJvbSBcIi4vcGFnZXMvbG9naW4vYmlkYW4uc2VydmljZVwiO1xuaW1wb3J0IHtSZXNpa29rYWRlckNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWFpbl9tZW51L2hhbWlsL2hhbWlsc2NvbXBvbmVudC9tZW51aGFtaWwvcmVzaWtva2FkZXIvcmVzaWtva2FkZXIuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgVE5TQ2hlY2tCb3hNb2R1bGUsXG4gICAgICAgIERyb3BEb3duTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgTWFpbm1lbnVDb21wb25lbnQsXG4gICAgICAgIFByb2ZpbGVDb21wb25lbnQsXG4gICAgICAgIFBhaXJpbmdNb2RhbENvbXBvbmVudCxcbiAgICAgICAgQW5ha3NDb21wb25lbnQsXG4gICAgICAgIEhhbWlsc2NvbXBvbmVudENvbXBvbmVudCxcbiAgICAgICAgQWRkSGFtaWxDb21wb25lbnRDb21wb25lbnQsXG4gICAgICAgIEtlaGFtaWxhbkNvbXBvbmVudCxcbiAgICAgICAgTW9kYWxBZGRQbGFuc0NvbXBvbmVudCxcbiAgICAgICAgUGVtZXJpa3NhYW5Db21wb25lbnQsXG4gICAgICAgIFJlc3VtZUNvbXBvbmVudCxcbiAgICAgICAgVGluZGFrYW5Db21wb25lbnQsXG4gICAgICAgIE5pZmFzQ29tcG9uZW50LFxuICAgICAgICBBbmFrQ29tcG9uZW50LFxuICAgICAgICBUdW1idWhDb21wb25lbnQsXG4gICAgICAgIFR1bWJ1aE1vZGFsLFxuICAgICAgICBLZW1iYW5nQ29tcG9uZW50LFxuICAgICAgICBNb2RhbEtlbWJhbmdDb21wb25lbnQsXG4gICAgICAgIFZha3NpbkNvbXBvbmVudCxcbiAgICAgICAgTW9kYWxWYWtzaW5Db21wb25lbnQsXG4gICAgICAgIEtlc2VoYXRhbkNvbXBvbmVudCxcbiAgICAgICAgRGV0aWxLZXNlaGF0YW5Db21wb25lbnQsXG4gICAgICAgIE1lbnVoYW1pbENvbXBvbmVudCxcbiAgICAgICAgUml3YXlhdEtlaGFtaWxhbkNvbXBvbmVudCxcbiAgICAgICAgUml3YXlhdEtlc2VoYXRhbkNvbXBvbmVudCxcbiAgICAgICAgS2VsdWhhbkNvbXBvbmVudCxcbiAgICAgICAgUGVtZXJpa3NhYW5LZWhhbWlsYW5Db21wb25lbnQsXG4gICAgICAgIFJlbmNhbmFQZXJzYWxpbmFuQ29tcG9uZW50LFxuICAgICAgICBQZXJzYWxpbmFuQ29tcG9uZW50LFxuICAgICAgICBNZWxhaGlya2FuQ29tcG9uZW50LFxuICAgICAgICBOaWZhc2VzQ29tcG9uZW50LFxuICAgICAgICBSZXNpa29rYWRlckNvbXBvbmVudCxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBCaWRhblNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgICAgICAgdXNlQ2xhc3M6IEF1dGhJbnRlcmNlcHRvclNlcnZpY2UsXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6W1xuICAgICAgICBQYWlyaW5nTW9kYWxDb21wb25lbnQsXG4gICAgICAgIEFkZEhhbWlsQ29tcG9uZW50Q29tcG9uZW50LFxuICAgICAgICBNb2RhbEFkZFBsYW5zQ29tcG9uZW50LFxuICAgICAgICBSZXN1bWVDb21wb25lbnQsXG4gICAgICAgIFR1bWJ1aE1vZGFsLFxuICAgICAgICBNb2RhbEtlbWJhbmdDb21wb25lbnQsXG4gICAgICAgIE1vZGFsVmFrc2luQ29tcG9uZW50LFxuICAgICAgICBEZXRpbEtlc2VoYXRhbkNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==