export class Tumbuh {
    id: number;
    tumbuh_id: number;
    bidan_id: number ;
    tanggal: string = new Date().toISOString().substring(0, 10);
    tempat_pemeriksaan: string = "";
    berat: string = "";
    tinggi: string = "";
    hasil: string = "";
    gizi:string = "";


}