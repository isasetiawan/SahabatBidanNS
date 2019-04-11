import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { LoginComponent } from "./pages/login/login.component"
import {MainmenuComponent} from "./pages/login/main_menu/mainmenu.component";
import {NativeScriptUIDataFormModule} from "nativescript-pro-ui/dataform/angular";
import {NativeScriptUIListViewModule} from "nativescript-pro-ui/listview/angular";
import {ProfileComponent} from "./pages/login/main_menu/profile/profile.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";
import {PairingModalComponent} from "./pages/login/main_menu/pairing/pairing-modal.component";
import {AnaksComponent} from "./pages/login/main_menu/anaks/anaks.component";
import {HamilscomponentComponent} from "./pages/login/main_menu/hamil/hamilscomponent/hamilscomponent.component";
import { AddHamilComponentComponent } from "./pages/login/main_menu/hamil/add-hamil-component/add-hamil-component.component";
import {KehamilanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/kehamilan/kehamilan.component";
import {ModalAddPlansComponent} from "./pages/login/main_menu/hamil/hamilscomponent/kehamilan/modal-add-plans/modal-add-plans.component";
import {PemeriksaanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/kehamilan/pemeriksaan/pemeriksaan.component";
import {ResumeComponent} from "./pages/login/main_menu/hamil/hamilscomponent/kehamilan/pemeriksaan/resume/resume.component";
import {TindakanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/kehamilan/pemeriksaan/tindakan/tindakan.component";
import { NifasComponent } from "./pages/login/main_menu/hamil/hamilscomponent/kehamilan/nifas/nifas.component";
import {AnakComponent} from "./pages/login/main_menu/anaks/anak/anak.component";
import {TumbuhComponent} from "./pages/login/main_menu/anaks/anak/tumbuh/tumbuh.component";
import {TumbuhModal} from "./pages/login/main_menu/anaks/anak/tumbuh/modal/tumbuh.modal";
import {NativeScriptUIChartModule} from "nativescript-pro-ui/chart/angular";
import {KembangComponent} from "./pages/login/main_menu/anaks/anak/kembang/kembang.component";
import {ModalKembangComponent} from "./pages/login/main_menu/anaks/anak/kembang/modal-kembang/modal-kembang.component";
import {VaksinComponent} from "./pages/login/main_menu/anaks/anak/vaksin/vaksin.component";
import {ModalVaksinComponent} from "./pages/login/main_menu/anaks/anak/vaksin/modal-vaksin/modal-vaksin.component";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import {KesehatanComponent} from "./pages/login/main_menu/anaks/anak/kesehatan/kesehatan.component";
import {DetilKesehatanComponent} from "./pages/login/main_menu/anaks/anak/kesehatan/detil-kesehatan/detil-kesehatan.component";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptorService} from "./auth-interceptor.service";
import { DropDownModule } from "nativescript-drop-down/angular";
import {MenuhamilComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/menuhamil.component";
import {RiwayatKehamilanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/riwayat-kehamilan/riwayat-kehamilan.component";
import {RiwayatKesehatanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/riwayat-kesehatan/riwayat-kesehatan.component";
import {KeluhanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/keluhan/keluhan.component";
import {PemeriksaanKehamilanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/pemeriksaan-kehamilan/pemeriksaan-kehamilan.component";
import {RencanaPersalinanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/rencana-persalinan/rencana-persalinan.component";
import {PersalinanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/persalinan/persalinan.component";
import {MelahirkanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/melahirkan/melahirkan.component";
import {NifasesComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/nifases/nifases.component";
import {BidanService} from "./pages/login/bidan.service";
import {ResikokaderComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/resikokader/resikokader.component";

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIChartModule,
        NativeScriptUIListViewModule,
        TNSCheckBoxModule,
        DropDownModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        MainmenuComponent,
        ProfileComponent,
        PairingModalComponent,
        AnaksComponent,
        HamilscomponentComponent,
        AddHamilComponentComponent,
        KehamilanComponent,
        ModalAddPlansComponent,
        PemeriksaanComponent,
        ResumeComponent,
        TindakanComponent,
        NifasComponent,
        AnakComponent,
        TumbuhComponent,
        TumbuhModal,
        KembangComponent,
        ModalKembangComponent,
        VaksinComponent,
        ModalVaksinComponent,
        KesehatanComponent,
        DetilKesehatanComponent,
        MenuhamilComponent,
        RiwayatKehamilanComponent,
        RiwayatKesehatanComponent,
        KeluhanComponent,
        PemeriksaanKehamilanComponent,
        RencanaPersalinanComponent,
        PersalinanComponent,
        MelahirkanComponent,
        NifasesComponent,
        ResikokaderComponent,
    ],
    providers: [
        BidanService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ],
    entryComponents:[
        PairingModalComponent,
        AddHamilComponentComponent,
        ModalAddPlansComponent,
        ResumeComponent,
        TumbuhModal,
        ModalKembangComponent,
        ModalVaksinComponent,
        DetilKesehatanComponent
    ],
    schemas: [

    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
