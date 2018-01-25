export class Nifas {
    id: number;
    tanggal: string =new Date().toISOString().substring(0, 10);
    hari_ke: number = 0;
    kf: number = 0;
    td: string = "";
    suhu: string = "";
    catat_buku: number = 0;
    fe: string = "";
    vit_a: number = 0;
    cd4: string = "";
    anti_malaria: string = "";
    anti_tb: string = "";
    thorax: number = 0;
    komplikasi: string = "";
    dirujuk: string = "";
    tiba: string = "";
    pulang: string = "";
}