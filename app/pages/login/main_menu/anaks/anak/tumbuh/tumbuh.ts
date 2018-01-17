import moment = require("moment");

export class Tumbuh {
    id: string = "";
    tumbuh_id: string = "";
    bidan_id: string = "";
    tanggal: string = moment().toString();
    berat: string = "";
    tinggi: string = "";
    hasil: string = "";
    gizi:string = "";

    constructor(p) {
        if (p!==null){
            this.id = p.id;
            this.tumbuh_id = p.tumbuh_id;
            this.bidan_id = p.bidan_id;
            this.tanggal = p.tanggal;
            this.berat = p.berat;
            this.tinggi = p.tinggi;
            this.hasil = p.hasil;
            this.gizi = p.gizi;
        }
    }
}