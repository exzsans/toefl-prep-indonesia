import React, { useState } from 'react';
import {
  Rocket,
  Globe,
  Github,
  Cloud,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Terminal,
  Layers,
  ArrowRight
} from 'lucide-react';

export const DeploymentGuideSection: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'vercel' | 'netlify' | 'github'>('vercel');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-2">
          <Rocket className="w-3.5 h-3.5" />
          <span>Panduan Deploy Gratis</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Langkah Mudah Mendeploy Web App TOEFL Prep Secara Gratis
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 max-w-2xl leading-relaxed">
          Aplikasi ini adalah Single Page Application (SPA) berbasis React + Vite murni dengan penyimpanan localStorage, sehingga dapat di-hosting 100% gratis dengan kecepatan kilat, SSL gratis, dan domain kustom di Vercel, Netlify, atau GitHub Pages.
        </p>
      </div>

      {/* Platform Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => setActivePlatform('vercel')}
          className={`p-4 rounded-2xl border text-left transition-all ${
            activePlatform === 'vercel'
              ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-500 ring-2 ring-indigo-500/20'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-sm text-slate-900 dark:text-white">▲ Vercel</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
              Paling Direkomendasikan
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Deploy tercepat dalam 1 menit via GitHub atau Vercel CLI.
          </p>
        </button>

        <button
          onClick={() => setActivePlatform('netlify')}
          className={`p-4 rounded-2xl border text-left transition-all ${
            activePlatform === 'netlify'
              ? 'bg-cyan-50/70 dark:bg-cyan-950/40 border-cyan-500 ring-2 ring-cyan-500/20'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-sm text-slate-900 dark:text-white">◆ Netlify</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
              Bisa Drag & Drop
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Tarik & lepas folder <code>dist</code> langsung tanpa terminal.
          </p>
        </button>

        <button
          onClick={() => setActivePlatform('github')}
          className={`p-4 rounded-2xl border text-left transition-all ${
            activePlatform === 'github'
              ? 'bg-purple-50/70 dark:bg-purple-950/40 border-purple-500 ring-2 ring-purple-500/20'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-sm text-slate-900 dark:text-white">🐙 GitHub Pages</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
              Terintegrasi Repo
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Hosting gratis langsung dari repositori GitHub Anda.
          </p>
        </button>
      </div>

      {/* ================= PLATFORM 1: VERCEL GUIDE ================= */}
      {activePlatform === 'vercel' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
            <Globe className="w-5 h-5" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Cara Deploy ke Vercel (Gratis Selamanya)
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-bold flex items-center justify-center text-xs flex-shrink-0">
                1
              </span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  Push source code ke GitHub
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Buat repositori baru di GitHub (misalnya <code>toefl-prep-indonesia</code>), lalu push seluruh file project ke repositori tersebut.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-bold flex items-center justify-center text-xs flex-shrink-0">
                2
              </span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  Buka vercel.com & Hubungkan Akun GitHub
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Masuk ke dashboard <b>vercel.com</b> dengan akun GitHub Anda, lalu klik tombol <b>"Add New... → Project"</b>.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-bold flex items-center justify-center text-xs flex-shrink-0">
                3
              </span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  Konfigurasi Pengaturan Build
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Vercel akan mendeteksi framework <b>Vite</b> secara otomatis. Pastikan pengaturannya seperti berikut:
                </p>
                <div className="mt-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-mono text-xs space-y-1">
                  <div><b>Framework Preset:</b> Vite</div>
                  <div><b>Build Command:</b> <code>npm run build</code></div>
                  <div><b>Output Directory:</b> <code>dist</code></div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-bold flex items-center justify-center text-xs flex-shrink-0">
                4
              </span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  Klik "Deploy" dan Selesai! 🎉
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Dalam 30-60 detik, website Anda akan langsung aktif dengan link domain <code>https://nama-project.vercel.app</code> lengkap dengan sertifikat SSL gratis (HTTPS).
                </p>
              </div>
            </div>
          </div>

          {/* Vercel rewrite tip */}
          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 text-xs text-indigo-900 dark:text-indigo-200 space-y-2">
            <b className="font-bold">💡 Tips SPA Routing di Vercel:</b>
            <p>
              Jika Anda ingin routing SPA berjalan mulus saat halaman di-refresh, tambahkan file <code>vercel.json</code> di root proyek dengan isi:
            </p>
            <div className="flex items-center justify-between p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800 font-mono text-[11px]">
              <span>{`{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`}</span>
              <button
                onClick={() => handleCopy('{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }', 'vercel_json')}
                className="ml-2 text-indigo-600 font-bold"
              >
                {copiedText === 'vercel_json' ? 'Tersalin!' : 'Salin'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= PLATFORM 2: NETLIFY GUIDE ================= */}
      {activePlatform === 'netlify' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400">
            <Cloud className="w-5 h-5" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Cara Deploy ke Netlify (Metode Drag & Drop atau Git)
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                Metode 1: Drag & Drop Folder `dist` (Paling Cepat Tanpa Git)
              </h3>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <li>Buka terminal proyek Anda dan jalankan perintah: <code>npm run build</code></li>
                <li>Perintah tersebut akan menghasilkan folder bernama <code>dist</code> di komputer Anda.</li>
                <li>Buka <b>app.netlify.com/drop</b> di browser Anda.</li>
                <li>Tarik (drag) folder <code>dist</code> dan lepaskan (drop) ke area bertuliskan <i>"Drag and drop your site output folder here"</i>.</li>
                <li>Netlify akan langsung mengonlinekan web app Anda dalam 10 detik!</li>
              </ol>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                Metode 2: Terhubung Otomatis ke GitHub
              </h3>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <li>Login ke <b>netlify.com</b> → klik <b>"Add new site"</b> → <b>"Import an existing project"</b>.</li>
                <li>Pilih <b>GitHub</b> dan pilih repositori proyek Anda.</li>
                <li>Atur <b>Build command:</b> <code>npm run build</code> dan <b>Publish directory:</b> <code>dist</code>.</li>
                <li>Klik <b>"Deploy site"</b>. Setiap kali Anda push update baru, Netlify akan otomatis memperbarui website Anda.</li>
              </ol>
            </div>
          </div>

          {/* Netlify redirects tip */}
          <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-900 text-xs text-cyan-900 dark:text-cyan-200 space-y-2">
            <b className="font-bold">💡 Tips File _redirects di Netlify:</b>
            <p>
              Supaya tidak muncul error 404 saat pengguna me-refresh URL, buat file bernama <code>public/_redirects</code> dengan isi satu baris:
            </p>
            <div className="flex items-center justify-between p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-cyan-200 dark:border-cyan-800 font-mono text-[11px]">
              <span>/*    /index.html   200</span>
              <button
                onClick={() => handleCopy('/*    /index.html   200', 'netlify_redirects')}
                className="ml-2 text-cyan-600 font-bold"
              >
                {copiedText === 'netlify_redirects' ? 'Tersalin!' : 'Salin'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= PLATFORM 3: GITHUB PAGES GUIDE ================= */}
      {activePlatform === 'github' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
            <Github className="w-5 h-5" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Cara Deploy ke GitHub Pages
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-bold flex items-center justify-center text-xs flex-shrink-0">
                1
              </span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  Sesuaikan "base" di file <code>vite.config.ts</code>
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Karena URL GitHub Pages berada di subfolder <code>https://username.github.io/nama-repo/</code>, tambahkan baris <code>base: '/nama-repo/'</code> pada <code>vite.config.ts</code>.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-bold flex items-center justify-center text-xs flex-shrink-0">
                2
              </span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  Instal paket gh-pages
                </p>
                <div className="mt-1.5 p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl font-mono text-xs flex items-center justify-between">
                  <code>npm install -D gh-pages</code>
                  <button
                    onClick={() => handleCopy('npm install -D gh-pages', 'gh_install')}
                    className="text-purple-600 font-bold"
                  >
                    {copiedText === 'gh_install' ? 'Tersalin!' : 'Salin'}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-bold flex items-center justify-center text-xs flex-shrink-0">
                3
              </span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  Tambahkan script deploy di <code>package.json</code>
                </p>
                <div className="mt-1.5 p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl font-mono text-[11px]">
                  <div>"scripts": &#123;</div>
                  <div className="pl-4">"predeploy": "npm run build",</div>
                  <div className="pl-4">"deploy": "gh-pages -d dist"</div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-bold flex items-center justify-center text-xs flex-shrink-0">
                4
              </span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  Jalankan perintah deploy
                </p>
                <div className="mt-1.5 p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl font-mono text-xs flex items-center justify-between">
                  <code>npm run deploy</code>
                  <button
                    onClick={() => handleCopy('npm run deploy', 'gh_deploy')}
                    className="text-purple-600 font-bold"
                  >
                    {copiedText === 'gh_deploy' ? 'Tersalin!' : 'Salin'}
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Buka tab <b>Settings → Pages</b> di repositori GitHub Anda dan pilih branch <b>gh-pages</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
