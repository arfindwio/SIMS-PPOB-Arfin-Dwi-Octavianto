# SIMS PPOB - Sistem Informasi Manajemen Pembayaran PPOB

SIMS PPOB adalah platform online yang memudahkan pengguna dalam melakukan berbagai transaksi PPOB (Payment Point Online Bank) seperti top-up, pembayaran, dan memantau riwayat transaksi.

## Fitur

1. **Registrasi**
2. **Login**
3. **Lihat Profil**
4. **Update Profil Data**
5. **Update Profil Picture**
6. **Top Up**
7. **Pembayaran**
8. **Riwayat Transaksi**

## Instalasi

### Langkah-langkah Instalasi

1. Clone repository ini ke dalam direktori lokal:
   ```bash
   git clone https://github.com/arfindwio/SIMS-PPOB-Arfin-Dwi-Octavianto.git
   ```
2. Pindah ke direktori aplikasi:
   ```bash
   cd SIMS-PPOB-Arfin-Dwi-Octavianto
   ```
3. Instal dependensi menggunakan Composer (jika ada):
   ```bash
   npm install
   # or
   yarn install
   ```
4. Pengaturan .env:
   - Di dalam root proyek, buat file .env jika belum ada.
   - Tambahkan variabel VITE_API_URL untuk menyimpan URL API yang akan digunakan oleh aplikasi.
   ```bash
   VITE_API_URL=http://localhost:8000/api
   ```
5. Jalankan aplikasi secara lokal menggunakan Vite:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
6. Akses aplikasi di browser melalui `http://localhost:5173`.
