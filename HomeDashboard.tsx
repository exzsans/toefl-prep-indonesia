import React from 'react';
import {
  Timer,
  BookOpen,
  FileText,
  Headphones,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Zap,
  RotateCw,
  BookMarked
} from 'lucide-react';
import { TabType } from './Navbar';
import { UserProgress } from '../data/types';
import { getScoreEvaluation } from '../services/storage';

interface HomeDashboardProps {
  onNavigate: (tab: TabType) => void;
  progress: UserProgress;
  totalVocabCount: number;
  totalGrammarQuestionsCount: number;
  totalReadingQuestionsCount: number;
  totalListeningCount: number;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  onNavigate,
  progress,
  totalVocabCount,
  totalGrammarQuestionsCount,
  totalReadingQuestionsCount,
  totalListeningCount
}) => {
  const answeredTotal = Object.keys(progress.answeredQuestions).length;
  const correctTotal = Object.values(progress.answeredQuestions).filter((q) => q.isCorrect).length;
  const overallAccuracy = answeredTotal > 0 ? Math.round((correctTotal / answeredTotal) * 100) : 0;
  const knownVocabCount = progress.knownVocab.length;
  const vocabPercent = Math.min(100, Math.round((knownVocabCount / totalVocabCount) * 100));

  const latestSimulation = progress.simulationHistory.length > 0
    ? progress.simulationHistory[progress.simulationHistory.length - 1]
    : null;

  const evaluation = latestSimulation ? getScoreEvaluation(latestSimulation.totalScaledScore) : null;

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-blue-700 to-indigo-900 text-white p-6 sm:p-10 shadow-xl shadow-indigo-600/10">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-blue-100 mb-4 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Persiapan TOEFL ITP Komprehensif Berbahasa Indonesia</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-3">
            Kuasai Tes TOEFL dengan Ribuan Bank Soal & Pembahasan Lengkap
          </h1>

          <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            Tingkatkan skor Anda secara terstruktur: 500 kosakata akademik AWL, 200 soal grammar dengan pembahasan rinci, 100 soal reading bertema sains & sejarah, 30 listening audio dengan teknologi suara browser, dan simulasi skor TOEFL ITP.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('simulasi')}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white text-indigo-700 font-bold text-sm shadow-md hover:bg-blue-50 active:scale-95 transition-all"
            >
              <Timer className="w-4 h-4 text-indigo-600" />
              <span>Mulai Simulasi Ujian</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => onNavigate('vocab')}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-indigo-950/40 text-white border border-white/20 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-cyan-300" />
              <span>Flashcard Vocabulary</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Metric 1: Vocab */}
        <div
          onClick={() => onNavigate('vocab')}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
              {vocabPercent}%
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {totalVocabCount}
          </div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
            Kosakata Akademik (AWL)
          </p>
          <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${vocabPercent}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-400 mt-1.5 block">
            {knownVocabCount} kata sudah dikuasai
          </span>
        </div>

        {/* Metric 2: Grammar */}
        <div
          onClick={() => onNavigate('grammar')}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">
              20 Rumus
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {totalGrammarQuestionsCount}
          </div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
            Soal Structure & Written
          </p>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-3 block">
            Tingkat Mudah, Menengah & Sulit →
          </span>
        </div>

        {/* Metric 3: Reading */}
        <div
          onClick={() => onNavigate('reading')}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookMarked className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300">
              25 Passage
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {totalReadingQuestionsCount}
          </div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
            Soal Reading Comprehension
          </p>
          <span className="text-[11px] text-purple-600 dark:text-purple-400 font-medium mt-3 block">
            Passage sains, sejarah, seni →
          </span>
        </div>

        {/* Metric 4: Listening */}
        <div
          onClick={() => onNavigate('listening')}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Headphones className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300">
              Audio TTS
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {totalListeningCount}
          </div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
            Skrip Listening Audio
          </p>
          <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium mt-3 block">
            Kampus & Kuliah Ilmiah →
          </span>
        </div>
      </div>

      {/* Latest Simulation Result Card (if any) or Quick Callout */}
      {latestSimulation && evaluation ? (
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 border border-slate-800 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs text-indigo-300 font-semibold mb-1">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Hasil Simulasi Ujian Terakhir ({latestSimulation.date})</span>
              </div>
              <div className="flex items-baseline space-x-3">
                <span className="text-4xl font-extrabold tracking-tight text-white">
                  {latestSimulation.totalScaledScore}
                </span>
                <span className="text-sm font-semibold px-2.5 py-1 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                  {evaluation.level} (CEFR {evaluation.cefr})
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-2 max-w-xl">
                {evaluation.description}
              </p>
            </div>

            <div className="flex items-center space-x-4 border-t md:border-t-0 md:border-l border-slate-800 pt-3 md:pt-0 md:pl-6">
              <div className="text-center">
                <div className="text-xs text-slate-400">Listening</div>
                <div className="font-bold text-base text-cyan-300">{latestSimulation.listening.scaled}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-400">Structure</div>
                <div className="font-bold text-base text-emerald-300">{latestSimulation.structure.scaled}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-400">Reading</div>
                <div className="font-bold text-base text-purple-300">{latestSimulation.reading.scaled}</div>
              </div>
              <button
                onClick={() => onNavigate('simulasi')}
                className="ml-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Uji Lagi
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-md">
              <Timer className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Belum Pernah Simulasi Ujian?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-lg">
                Uji kemampuan Anda dalam kondisi ujian sesungguhnya: timer hitung mundur, konversi skor standar TOEFL ITP (310 - 677), dan tinjauan kunci jawaban.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('simulasi')}
            className="self-start sm:self-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
          >
            Mulai Simulasi Sekarang
          </button>
        </div>
      )}

      {/* Feature Navigation Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Menu Belajar & Latihan Soal
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Pilih keterampilan yang ingin Anda tingkatkan hari ini
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Flashcard & Kuis Vocab */}
          <div
            onClick={() => onNavigate('vocab')}
            className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-600 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Vocabulary (500 AWL)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Pelajari 500 kosakata akademik AWL dengan flashcard bolak-balik, pengucapan suara audio, pencarian instan, dan kuis kosakata interaktif.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>Buka Flashcards & Kuis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Grammar & Structure */}
          <div
            onClick={() => onNavigate('grammar')}
            className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-400 dark:hover:border-emerald-600 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Structure & Written Expression
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                20 materi tata bahasa teruji dan 200 soal latihan Structure. Dilengkapi filter kategori (Inversion, Conditionals, Subjunctive) dan pembahasan bahasa Indonesia.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span>Latihan Soal Grammar</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Reading & Listening */}
          <div
            onClick={() => onNavigate('listening')}
            className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-amber-400 dark:hover:border-amber-600 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                Listening & Reading
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                30 skrip percakapan kampus & kuliah ilmiah dengan Text-to-Speech berkecepatan dinamis, serta 100 soal reading comprehension dengan passage akademik.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
              <span>Mulai Latihan Audio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Structured TOEFL Study Checklist */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
        <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1 flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>Keunggulan Platform TOEFL Prep Indonesia</span>
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Dirancang khusus untuk pembelajar Indonesia yang membidik beasiswa (LPDP, AAS, Chevening) atau syarat wisuda/BUMN.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300">
          <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span><b>100% Konten Original</b> tanpa menyalin dokumen berhak cipta resmi.</span>
          </div>

          <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span><b>Penyimpanan Lokal:</b> Progres & data tersimpan aman di browser Anda.</span>
          </div>

          <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span><b>Audio Listening TTS:</b> Berfungsi tanpa kuota audio besar.</span>
          </div>

          <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span><b>Dukungan Tambah Konten:</b> Form admin & impor JSON untuk memperbanyak soal.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
