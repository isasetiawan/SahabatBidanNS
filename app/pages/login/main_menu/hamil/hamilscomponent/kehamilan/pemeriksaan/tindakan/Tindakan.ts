export class Tindakan {
    id: number;
    pemeriksaan_id: number;
    imunisasi_tt1: number;
    imunisasi_tt2: number;
    imunisasi_tt3: number;
    imunisasi_tt4: number;
    imunisasi_tt5: number;
    imunisasi_lain?: number;
    jumlah_pemberian_tablet_fe?: number;
    kapsul_iodium: number;
    tindakan_lain?: string;
    saran?: string;
    berkunjung_lagi_pada: string;
}