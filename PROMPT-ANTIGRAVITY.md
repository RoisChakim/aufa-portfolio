# Prompt untuk Antigravity — menjalankan web portfolio aufa-portfolio di laptop

Salin seluruh teks di dalam kotak di bawah ini ke Antigravity setelah ZIP `aufa-portfolio.zip` diekstrak di laptop.

---

```
Kamu adalah asisten coding di laptop saya. Tugasmu: menjalankan project web portfolio "aufa-portfolio" (Next.js) yang baru saja saya ekstrak dari ZIP, sampai webnya bisa dibuka di browser lokal. Kerjakan langkah demi langkah, laporkan hasil setiap langkah, dan JANGAN mengubah isi/konten webnya (semua data di folder data/ adalah data asli pemiliknya — jangan mengarang atau mengganti teks, nama, link, atau proyek).

Konteks project:
- Stack: Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, sudah selesai dibangun dan lolos production build (8 halaman statis, termasuk 3 halaman detail /projects/[slug]).
- Folder project berisi package.json dan package-lock.json. Folder node_modules dan .next SENGAJA tidak disertakan di ZIP, jadi wajib install ulang.

Langkah kerja:
1. Cek Node.js: jalankan `node -v` dan `npm -v`. Syarat minimal Node 20 LTS. Kalau belum ada atau versinya di bawah 20, berhenti dan beri tahu saya cara install Node.js LTS dari nodejs.org — jangan lanjut dulu.
2. Pastikan kamu berada di folder project (folder yang berisi package.json bernama "aufa-portfolio"). Tampilkan isi folder untuk memastikan.
3. Jalankan `npm install` (atau `npm ci` bila package-lock.json ada). Ini butuh koneksi internet dan bisa memakan beberapa menit. Laporkan bila ada error.
4. Jalankan mode development: `npm run dev`, lalu buka http://localhost:3000 di browser.
5. Verifikasi halaman utama tampil dan cek fungsi berikut satu per satu, laporkan hasilnya:
   - Hero menampilkan nama "AUFA ROISUL CHAKIM" dan peran "WEB DEVELOPER".
   - Kartu ID di hero bisa didrag dengan mouse/sentuhan dan kembali memegas saat dilepas.
   - Toggle tema (System/Dark/Light) bekerja.
   - Toggle bahasa EN/ID bekerja.
   - Section About, Selected Works, Skills, Experience, Education, Contact tampil semua.
   - Tiga halaman detail proyek bisa dibuka: /projects/roi-ai-metadata-pro, /projects/remotion-4k-adobestock, /projects/microservices-order-inventory.
6. Setelah mode dev terverifikasi, tes mode production: hentikan dev server, jalankan `npm run build` (harus sukses, 8 halaman), lalu `npm run start` dan buka lagi http://localhost:3000. Laporkan hasilnya.

Pemecahan masalah bila terjadi error:
- Port 3000 sudah dipakai: jalankan `npm run dev -- -p 3100` dan buka http://localhost:3100.
- Install gagal/corrupt: hapus folder node_modules dan file package-lock.json, lalu ulangi `npm install`.
- Error soal font Google: project ini sudah diatur TIDAK mengambil font dari Google Fonts saat build, jadi error seperti itu seharusnya tidak muncul; bila muncul, laporkan persis pesan errornya ke saya, jangan mengganti font sendiri.
- Error lain: tampilkan pesan error lengkapnya dan usulkan perbaikannya dulu sebelum mengubah file apa pun selain perbaikan konfigurasi lokal yang aman.

Di akhir, buat ringkasan singkat: versi Node, apakah install berhasil, apakah dev dan production jalan, alamat lokal webnya, dan hasil cek 6 fungsi di langkah 5.
```

---

Catatan untuk pemilik (tidak perlu disalin ke Antigravity):
- Web yang sama juga tersedia sebagai pratinjau mandiri di Library Muse ("Aufa Portfolio — Web Next.js") — bisa dibuka dan dijelajahi langsung, tanpa menjalankan server. Pratinjau ini TIDAK ada di Panel Hermes & 9Router (panel dikembalikan seperti semula atas permintaan pemilik, 8 Nov 2026). Salinan produksi di komputer Muse tidak perlu jalan untuk mencoba webnya.
- Deploy publik (domain + Cloudflare Tunnel) tetap bisa dilakukan kapan saja nanti; file project ini tidak berubah oleh jalur itu.
