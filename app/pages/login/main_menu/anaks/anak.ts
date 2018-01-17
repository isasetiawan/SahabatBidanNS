export class Anak{
    id:number;
    orangtua_id:number;
    nama:string;
    gender:string;
    birthdate:string;

    constructor(id: number, orangtua_id: number, nama: string, gender: string, birthdate: string) {
        this.id = id;
        this.orangtua_id = orangtua_id;
        this.nama = nama;
        this.gender = gender;
        this.birthdate = birthdate;
    }


}