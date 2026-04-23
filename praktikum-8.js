function tampilkanUcapan() {
    let sekarang = new Date();

    let jam = sekarang.getHours();
    let menit = sekarang.getMinutes();
    let detik = sekarang.getSeconds();

    let hariIndex = sekarang.getDay();
    let tanggal = sekarang.getDate();
    let bulanIndex = sekarang.getMonth();
    let tahun = sekarang.getFullYear();

    let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
                 "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let ucapanEl = document.getElementById("ucapan");
    let tanggalEl = document.getElementById("tanggal");
    let jamEl = document.getElementById("jam");

    // Format waktu
    jam = jam < 10 ? "0" + jam : jam;
    menit = menit < 10 ? "0" + menit : menit;
    detik = detik < 10 ? "0" + detik : detik;

    let waktu = jam + ":" + menit + ":" + detik;
    let tanggalLengkap = hari[hariIndex] + ", " + tanggal + " " + bulan[bulanIndex] + " " + tahun;

    let ucapan = "";

    let jamAsli = sekarang.getHours();

    if ((jamAsli === 0 && sekarang.getMinutes() >= 1) || (jamAsli >= 1 && jamAsli <= 10)) {
        ucapan = "SELAMAT PAGI";
        document.body.style.background = "linear-gradient(135deg, #fceabb, #f8b500)";
    } 
    else if (jamAsli >= 11 && jamAsli <= 13) {
        ucapan = "SELAMAT SIANG";
        document.body.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)";
    } 
    else if (jamAsli >= 14 && jamAsli <= 17) {
        ucapan = "SELAMAT SORE";
        document.body.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
    } 
    else {
        ucapan = "SELAMAT PETANG";
        document.body.style.background = "linear-gradient(135deg, #2c3e50, #4ca1af)";
        document.body.style.color = "white";
    }

    ucapanEl.innerHTML = ucapan;
    tanggalEl.innerHTML = tanggalLengkap;
    jamEl.innerHTML = waktu;
}

// update tiap detik
setInterval(tampilkanUcapan, 1000);