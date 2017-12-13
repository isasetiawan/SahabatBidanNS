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

@NgModule({
    bootstrap: [
        AppComponent,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIListViewModule,
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
        TindakanComponent
    ],
    providers: [

    ],
    entryComponents:[
        PairingModalComponent,
        AddHamilComponentComponent,
        ModalAddPlansComponent,
        ResumeComponent
    ],
    schemas: [

    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
