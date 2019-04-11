"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResikoKader = (function () {
    function ResikoKader() {
        this.pendeteksi_choice = ['Paseien', 'Keluarga', 'Masyarakat', 'Dukun', 'Kader', 'Bidan', 'Perawat', 'Dokter', 'DSOG', 'tidak ada'];
        this.kehamilan_id = 0;
        this.pendeteksi = 0;
        this.muda_hamil = false;
        this.lambat_hamil = false;
        this.tua_hamil = false;
        this.cepat_hamil = false;
        this.lama_hamil = false;
        this.banyak_anak = false;
        this.umur_tua = false;
        this.pendek = false;
        this.gagal_hamil = false;
        this.vakum = false;
        this.uri_dirogoh = false;
        this.infus = false;
    }
    return ResikoKader;
}());
exports.ResikoKader = ResikoKader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzaWtvS2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXNpa29LYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7UUFFSSxzQkFBaUIsR0FBRyxDQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRXJILGlCQUFZLEdBQVUsQ0FBQyxDQUFDO1FBQ3hCLGVBQVUsR0FBVSxDQUFDLENBQUM7UUFDdEIsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUMzQixpQkFBWSxHQUFXLEtBQUssQ0FBQztRQUM3QixjQUFTLEdBQVcsS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxLQUFLLENBQUM7UUFDNUIsYUFBUSxHQUFXLEtBQUssQ0FBQztRQUN6QixXQUFNLEdBQVcsS0FBSyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsS0FBSyxDQUFDO1FBQzVCLFVBQUssR0FBVyxLQUFLLENBQUM7UUFDdEIsZ0JBQVcsR0FBVyxLQUFLLENBQUM7UUFDNUIsVUFBSyxHQUFXLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJlc2lrb0thZGVyIHtcclxuXHJcbiAgICBwZW5kZXRla3NpX2Nob2ljZSA9IFsnUGFzZWllbicsJ0tlbHVhcmdhJywnTWFzeWFyYWthdCcsJ0R1a3VuJywnS2FkZXInLCdCaWRhbicsJ1BlcmF3YXQnLCdEb2t0ZXInLCdEU09HJywndGlkYWsgYWRhJ11cclxuXHJcbiAgICBrZWhhbWlsYW5faWQ6bnVtYmVyID0gMDtcclxuICAgIHBlbmRldGVrc2k6bnVtYmVyID0gMDtcclxuICAgIG11ZGFfaGFtaWw6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbGFtYmF0X2hhbWlsOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHR1YV9oYW1pbDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBjZXBhdF9oYW1pbDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBsYW1hX2hhbWlsOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGJhbnlha19hbmFrOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHVtdXJfdHVhOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHBlbmRlazpib29sZWFuID0gZmFsc2U7XHJcbiAgICBnYWdhbF9oYW1pbDpib29sZWFuID0gZmFsc2U7XHJcbiAgICB2YWt1bTpib29sZWFuID0gZmFsc2U7XHJcbiAgICB1cmlfZGlyb2dvaDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBpbmZ1czpib29sZWFuID0gZmFsc2U7XHJcbn0iXX0=