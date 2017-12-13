import * as moment from "moment";

export class Rencana {
    id: number;
    bidan_id: number;
    kehamilan_id: number;
    tanggal: string = moment().format('YYYY-MM-DD');
    penolong?: number = 1;
    tempat?: number = 1;
    pendamping?: number = 1;
    transportasi?: number = 1;
    pendonor?: number = 1;
}
