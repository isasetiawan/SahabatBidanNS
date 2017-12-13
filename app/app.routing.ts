import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component"
import {MainmenuComponent} from "./pages/login/main_menu/mainmenu.component";
import {ProfileComponent} from "./pages/login/main_menu/profile/profile.component";
import {AnaksComponent} from "./pages/login/main_menu/anaks/anaks.component";
import {HamilscomponentComponent} from "./pages/login/main_menu/hamil/hamilscomponent/hamilscomponent.component";
import {KehamilanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/kehamilan/kehamilan.component";
import {PemeriksaanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/kehamilan/pemeriksaan/pemeriksaan.component";
import {TindakanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/kehamilan/pemeriksaan/tindakan/tindakan.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "menu", component: MainmenuComponent },
    { path: "profile", component: ProfileComponent },
    { path: "anakpairing", component: AnaksComponent },
    { path: "hamils", component: HamilscomponentComponent },
    { path: "kehamilan", component: KehamilanComponent },
    { path: "pemeriksaan", component: PemeriksaanComponent},
    { path: "tindakan", component:TindakanComponent }



];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }