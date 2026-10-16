import React from 'react';
import {
  BarChart3,
  Trophy,
  CheckCircle2,
  TrendingUp,
  RotateCcw,
  BookOpen,
  FileText,
  BookMarked,
  Headphones,
  Award,
  Calendar,
  Clock
} from 'lucide-react';
import { UserProgress } from '../data/types';
import { getScoreEvaluation } from '../services/storage';

interface StatisticsSectionProps {
  progress: UserProgress;
  totalVocabCount: number;
  totalGrammarQuestionsCount: number;
  totalReadingQuestionsCount: number;
  totalListeningCount: number;
  onResetProgress: () => void;
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({
  progress,
  totalVocabCount,
  totalGrammarQuestionsCount,
  totalReadingQuestionsCount,
  totalListeningCount,
  onResetProgress
}) => {
  const answeredTotal = Object.keys(progress.answeredQuestions).length;
  const correctTotal = Object.values(progress.answeredQuestions).filter((q) => q.isCorrect).length;
  const overallAccuracy = answeredTotal > 0 ? Math.round((correctTotal / answeredTotal) * 100) : 0;

  const knownVocabCount = progress.knownVocab.length;
  const vocabMasteryRate = Math.min(100, Math.round((knownVocabCount / totalVocabCount) * 100));

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
            <BarChart3 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span>Statistik & Progres Belajar</span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Pantau perkembangan penguasaan materi, akurasi pengerjaan soal, dan riwayat skor simulasi Anda.
          </p>
        </div>

        <button
          onClick={() => {
            if (confirm('Apakah Anda yakin ingin mengatur ulang (reset) progres belajar dan riwayat ujian? Tindakan ini tidak dapat dibatalkan.')) {
              onResetProgress();
            }
          }}
          className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors self-start sm:self-center"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Progres</span>
        </button>
      </div>

      {/* Primary KPI Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            Total Soal Dikerjakan
          </div>
          <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {answeredTotal}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            {correctTotal} dijawab dengan benar
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            Akurasi Pengerjaan
          </div>
          <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
            {overallAccuracy}%
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Persentase jawaban tepat
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            Kosakata Dikuasai
          </div>
          <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
            {knownVocabCount}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            {vocabMasteryRate}% dari 500 Academic Word List
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
            Simulasi Selesai
          </div>
          <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
            {progress.simulationHistory.length}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Sesi ujian terlaksana
          </p>
        </div>
      </div>

      {/* Progress Breakdown Bars by Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Penguasaan per Kategori Materi
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Kemajuan belajar Anda di setiap pilar tes TOEFL.
          </p>
        </div>

        <div className="space-y-5">
          {/* Section 1: Vocab */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="flex items-center space-x-1.5 text-blue-600 dark:text-blue-400">
                <BookOpen className="w-4 h-4" />
                <span>Academic Vocabulary (AWL)</span>
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                {knownVocabCount} / {totalVocabCount} kata ({vocabMasteryRate}%)
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${vocabMasteryRate}%` }}
              />
            </div>
          </div>

          {/* Section 2: Grammar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="flex items-center space-x-1.5 text-emerald-600 dark:text-emerald-400">
                <FileText className="w-4 h-4" />
                <span>Grammar & Structure</span>
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                {answeredTotal} soal dijawab
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.round((answeredTotal / (totalGrammarQuestionsCount || 1)) * 100))}%` }}
              />
            </div>
          </div>

          {/* Section 3: Listening */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span className="flex items-center space-x-1.5 text-amber-600 dark:text-amber-400">
                <Headphones className="w-4 h-4" />
                <span>Listening Audio Exercises</span>
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                {Object.keys(progress.listeningAttempts).length} / {totalListeningCount} audio dicoba
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(
                    100,
                    Math.round((Object.keys(progress.listeningAttempts).length / (totalListeningCount || 1)) * 100)
                  )}%`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Simulation Attempt History */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span>Riwayat Simulasi Ujian TOEFL</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Daftar sesi ujian yang telah diselesaikan beserta rincian skor.
          </p>
        </div>

        {progress.simulationHistory.length === 0 ? (
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-center text-xs text-slate-500">
            Belum ada riwayat simulasi ujian. Buka tab <b>Simulasi Ujian</b> untuk memulai uji kemampuan pertama Anda!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="py-3 px-4 font-bold">Tanggal</th>
                  <th className="py-3 px-4 font-bold">Durasi</th>
                  <th className="py-3 px-4 font-bold">Listening</th>
                  <th className="py-3 px-4 font-bold">Structure</th>
                  <th className="py-3 px-4 font-bold">Reading</th>
                  <th className="py-3 px-4 font-bold">Skor Total</th>
                  <th className="py-3 px-4 font-bold">Level / CEFR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {progress.simulationHistory.map((res) => {
                  const evalInfo = getScoreEvaluation(res.totalScaledScore);
                  return (
                    <tr key={res.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">
                        {res.date}
                      </td>
                      <td className="py-3 px-4 text-slate-500">
                        {Math.round(res.timeSpentSeconds / 60)} menit
                      </td>
                      <td className="py-3 px-4 font-semibold text-amber-600 dark:text-amber-400">
                        {res.listening.scaled}
                      </td>
                      <td className="py-3 px-4 font-semibold text-emerald-600 dark:text-emerald-400">
                        {res.structure.scaled}
                      </td>
                      <td className="py-3 px-4 font-semibold text-purple-600 dark:text-purple-400">
                        {res.reading.scaled}
                      </td>
                      <td className="py-3 px-4 font-extrabold text-sm text-indigo-600 dark:text-indigo-400">
                        {res.totalScaledScore}
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">
                        {evalInfo.level} ({evalInfo.cefr})
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
