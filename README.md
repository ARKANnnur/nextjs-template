# nextjs-template

Next.js 16 Starter Template yang distrukturkan menggunakan arsitektur **Feature-Driven / Vertical Slicing**. Project ini siap digunakan untuk pengembangan frontend skala menengah hingga besar dengan fungsionalitas state management, persistence, dan form validation yang aman.

---

## 🚀 Tech Stack

Template ini dibekali dengan modul-modul modern berikut:

### Core Framework
*   **Next.js 16 (App Router)** - Framework React modern dengan performa Turbopack.
*   **React 19 & React DOM 19** - Library antarmuka komponen terbaru.
*   **TypeScript** - Pengetikan statis yang aman untuk keandalan kode.

### Styling & UI
*   **Tailwind CSS v4** - Framework utility-first CSS dengan compiler mesin baru yang super cepat.
*   **PostCSS** - Pemrosesan CSS dengan standar web terbaru.

### State Management & Persistence
*   **Redux Toolkit & React Redux** - Manajemen state global yang andal dan terstruktur.
*   **Redux Persist** - Penyimpanan state otomatis ke LocalStorage dengan penanganan SSR-safe.
*   **Redux Persist Transform Encrypt** - Mengamankan data state yang tersimpan dengan enkripsi kunci rahasia.

### Form & Validation
*   **React Hook Form** - Manajemen form performa tinggi tanpa re-render berlebih.
*   **Zod** - Skema validasi data deklaratif yang terintegrasi dengan TypeScript.
*   **@hookform/resolvers** - Adapter untuk menyambungkan Zod ke React Hook Form.

### Testing & Mocking
*   **Vitest** - Runner test berbasis Vite yang sangat cepat.
*   **React Testing Library** - Pengujian komponen React berbasis perilaku pengguna.
*   **MSW (Mock Service Worker)** - Mocking API network level untuk unit & integration testing yang solid.

---

## 📂 Struktur Folder (Vertical Slicing)

Arsitektur project ini memisahkan fitur-fitur utama ke dalam potongan mandiri (*Vertical Slices*) di dalam folder `features/`, menjaganya tetap terisolasi dan mudah dikelola:

```text
├── app/                      # Routing & Page Layout Layer (Next.js App Router)
├── features/                 # Tempat potongan fitur mandiri (Vertical Slices)
│   ├── auth/                 # Fitur Authentication (components, hooks, store, types)
│   │   ├── components/       # UI khusus auth
│   │   ├── store/            # Redux Slice & Thunks khusus auth
│   │   └── index.ts          # Public API / Entrypoint fitur auth
│   └── users/                # Fitur User (Profile, settings, dll)
├── components/               # Komponen global / reusable (ui/ & common/)
├── hooks/                    # Global React custom hooks (e.g. useDebounce)
├── lib/                      # Konfigurasi library & utilities global (e.g. store, cn)
├── services/                 # Konfigurasi global API client / fetcher
└── types/                    # Tipe data TypeScript global
```

---

## ⚙️ Cara Penggunaan & Setup

Ikuti langkah-langkah di bawah ini untuk memulai project baru menggunakan template ini:

### 1. Clone Repository
Clone template ini ke folder komputer lokal Anda:
```bash
git clone <repository-url> nama-project-anda
cd nama-project-anda
```

### 2. Jalankan Script Setup
Template ini dilengkapi dengan script inisialisasi interaktif untuk menyesuaikan nama project secara otomatis:
```bash
npm run setup
```
*Script ini akan otomatis:*
1. Meminta Anda memasukkan nama project baru.
2. Mengganti semua teks placeholder `nextjs-template` di file `package.json`, `package-lock.json`, dan `README.md`.
3. Mengatur ulang repository Git baru (menghapus riwayat commit template).
4. Menghapus script setup itu sendiri agar bersih.

### 3. Install Dependencies (Jika belum ter-install)
```bash
npm install
```

### 4. Jalankan Development Server
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) pada browser Anda untuk melihat demo modul Auth dan User Profile yang saling tersinkronisasi.

---

## 🛠️ Perintah Terminal Lainnya

*   **Build untuk Production:**
    ```bash
    npm run build
    ```
*   **Run Production Server:**
    ```bash
    npm run start
    ```
*   **Linting Kode:**
    ```bash
    npm run lint
    ```
*   **Menjalankan Unit Test (Vitest):**
    ```bash
    npx vitest
    ```
