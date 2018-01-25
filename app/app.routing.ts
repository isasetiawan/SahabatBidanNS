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
import { NifasComponent } from "./pages/login/main_menu/hamil/hamilscomponent/kehamilan/nifas/nifas.component";
import {AnakComponent} from "./pages/login/main_menu/anaks/anak/anak.component";
import {TumbuhComponent} from "./pages/login/main_menu/anaks/anak/tumbuh/tumbuh.component";
import {KembangComponent} from "./pages/login/main_menu/anaks/anak/kembang/kembang.component";
import {VaksinComponent} from "./pages/login/main_menu/anaks/anak/vaksin/vaksin.component";
import {KesehatanComponent} from "./pages/login/main_menu/anaks/anak/kesehatan/kesehatan.component";
import {MenuhamilComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/menuhamil.component";
import {RiwayatKehamilanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/riwayat-kehamilan/riwayat-kehamilan.component";
import {RiwayatKesehatanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/riwayat-kesehatan/riwayat-kesehatan.component";
import {KeluhanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/keluhan/keluhan.component";
import {PemeriksaanKehamilanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/pemeriksaan-kehamilan/pemeriksaan-kehamilan.component";
import {RencanaPersalinanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/rencana-persalinan/rencana-persalinan.component";
import {PersalinanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/persalinan/persalinan.component";
import {MelahirkanComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/melahirkan/melahirkan.component";
import {NifasesComponent} from "./pages/login/main_menu/hamil/hamilscomponent/menuhamil/nifases/nifases.component";


const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "menu", component: MainmenuComponent },
    { path: "profile", component: ProfileComponent },
    { path: "anakpairing", component: AnaksComponent },
    { path: "hamils", component: HamilscomponentComponent },
    { path: "kehamilan", component: KehamilanComponent },
    { path: "pemeriksaan", component: PemeriksaanComponent},
    { path: "tindakan", component:TindakanComponent },
    { path: "nifas", component:NifasComponent },
    { path: "anak", component:AnakComponent },
    { path: "tumbuh", component:TumbuhComponent},
    { path: "kembang", component:KembangComponent},
    { path: "vaksin", component:VaksinComponent},
    { path: "kesehatan", component:KesehatanComponent},
    { path: "menuhamil", component:MenuhamilComponent },
    { path: "riwayat_kehamilan", component:RiwayatKehamilanComponent },
    { path: "riwayat_kesehatan", component:RiwayatKesehatanComponent},
    { path: "keluhan", component:KeluhanComponent},
    { path: "pemeriksaan_kehamilan", component:PemeriksaanKehamilanComponent},
    { path: "rencana_persalinan", component:RencanaPersalinanComponent},
    { path: "persalinan", component:PersalinanComponent},
    { path: "melahirkan", component:MelahirkanComponent},
    { path: "nifases", component:NifasesComponent},


];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }