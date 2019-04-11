export class Kehamilan {
    id:number = 0;
    orangtua_id:number = 0;
    hamil_ke:number = 0;
    HPHT:string = new Date().toISOString().slice(0,10);
    is_dropout:boolean = false;
    risk_by_sistem:string = "";
    risk_by_kader:string = "";
    kia:number = 0;
    lila:number = 0.0;
    tinggi_badan:number = 0.0;
}