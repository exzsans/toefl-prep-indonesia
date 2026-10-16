import React, { useState, useEffect, useMemo } from 'react';
import {
  Timer,
  Play,
  Square,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Flag,
  ArrowRight,
  RotateCcw,
  Trophy,
  Award,
  ChevronLeft,
  ChevronRight,
  Headphones,
  FileText,
  BookMarked,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  QuestionItem,
  ReadingPassage,
  ListeningPassage,
  SimulationResult
} from '../data/types';
import {
  calculateSectionScaledScore,
  calculateTotalTOEFLScore,
  getScoreEvaluation,
  speakText,
  stopSpeaking
} from '../services/storage';

interface SimulationSectionProps {
  allGrammarQuestions: QuestionItem[];
  allReadingPassages: ReadingPassage[];
  allListeningPassages: ListeningPassage[];
  onSaveSimulationResult: (result: SimulationResult) => void;
}

interface SimItem {
  id: string;
  section: 'listening' | 'structure' | 'reading';
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  passageText?: string;
  listeningText?: string;
  audioTitle?: string;
}

export const SimulationSection: React.FC<SimulationSectionProps> = ({
  allGrammarQuestions,
  allReadingPassages,
  allListeningPassages,
  onSaveSimulationResult
}) => {
  const [simState, setSimState] = useState<'idle' | 'running' | 'finished'>('idle');
  const [simMode, setSimMode] = useState<'standard' | 'mini'>('mini');

  // Active Test State
  const [items, setItems] = useState<SimItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [flaggedItems, setFlaggedItems] = useState<Record<string, boolean>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(0);
  const [totalTimeSeconds, setTotalTimeSeconds] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Result state
  const [finalResult, setFinalResult] = useState<SimulationResult | null>(null);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'flagged'>('all');

  // Start Simulation
  const handleStartSimulation = (mode: 'standard' | 'mini') => {
    setSimMode(mode);

    // Mini: 10 Listening, 15 Structure, 12 Reading (3 passages * 4) = 37 items, 35 minutes
    // Standard: 20 Listening, 25 Structure, 20 Reading (5 passages * 4) = 65 items, 60 minutes
    const listeningCount = mode === 'mini' ? 4 : 7; // ~12 or ~21 questions
    const structureCount = mode === 'mini' ? 15 : 25;
    const passageCount = mode === 'mini' ? 3 : 5; // 12 or 20 questions
    const durationMinutes = mode === 'mini' ? 35 : 65;

    // Pick random listening passages
    const pickedListeningPassages = [...allListeningPassages]
      .sort(() => Math.random() - 0.5)
      .slice(0, listeningCount);

    const listeningItems: SimItem[] = [];
    pickedListeningPassages.forEach((lp) => {
      lp.qs.forEach((q) => {
        listeningItems.push({
          id: `sim_l_${q.id}`,
          section: 'listening',
          question: q.q,
          options: q.o,
          answer: q.a,
          explanation: q.e,
          listeningText: lp.text,
          audioTitle: lp.title
        });
      });
    });

    // Pick random structure questions
    const structureItems: SimItem[] = [...allGrammarQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, structureCount)
      .map((gq) => ({
        id: `sim_s_${gq.id}`,
        section: 'structure',
        question: gq.question,
        options: gq.options,
        answer: gq.answer,
        explanation: gq.explanation
      }));

    // Pick random reading passages
    const pickedReadingPassages = [...allReadingPassages]
      .sort(() => Math.random() - 0.5)
      .slice(0, passageCount);

    const readingItems: SimItem[] = [];
    pickedReadingPassages.forEach((rp) => {
      rp.questions.forEach((q) => {
        readingItems.push({
          id: `sim_r_${q.id}`,
          section: 'reading',
          question: q.question,
          options: q.options,
          answer: q.answer,
          explanation: q.explanation,
          passageText: rp.passage
        });
      });
    });

    const allItems = [...listeningItems, ...structureItems, ...readingItems];

    setItems(allItems);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedItems({});
    setTimeLeftSeconds(durationMinutes * 60);
    setTotalTimeSeconds(durationMinutes * 60);
    setFinalResult(null);
    setSimState('running');
  };

  // Timer Countdown Effect
  useEffect(() => {
    if (simState !== 'running') return;

    const interval = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishSimulation();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [simState, items, userAnswers]);

  // Audio Playback for listening items
  const handlePlayListeningAudio = (text?: string) => {
    if (!text) return;
    setIsAudioPlaying(true);
    speakText(text, 0.9, 1.0, () => {
      setIsAudioPlaying(false);
    });
  };

  const handleStopListeningAudio = () => {
    stopSpeaking();
    setIsAudioPlaying(false);
  };

  // Finish Simulation & Compute Scores
  const handleFinishSimulation = () => {
    stopSpeaking();
    setIsAudioPlaying(false);

    // Compute raw scores per section
    let listeningCorrect = 0;
    let listeningTotal = 0;
    let structureCorrect = 0;
    let structureTotal = 0;
    let readingCorrect = 0;
    let readingTotal = 0;

    items.forEach((item) => {
      const selected = userAnswers[item.id];
      const isCorrect = selected === item.answer;

      if (item.section === 'listening') {
        listeningTotal++;
        if (isCorrect) listeningCorrect++;
      } else if (item.section === 'structure') {
        structureTotal++;
        if (isCorrect) structureCorrect++;
      } else if (item.section === 'reading') {
        readingTotal++;
        if (isCorrect) readingCorrect++;
      }
    });

    const scaledListening = calculateSectionScaledScore(listeningCorrect, listeningTotal, 'listening');
    const scaledStructure = calculateSectionScaledScore(structureCorrect, structureTotal, 'structure');
    const scaledReading = calculateSectionScaledScore(readingCorrect, readingTotal, 'reading');
    const totalScaled = calculateTotalTOEFLScore(scaledListening, scaledStructure, scaledReading);

    const timeSpent = totalTimeSeconds - timeLeftSeconds;

    const result: SimulationResult = {
      id: `sim_${Date.now()}`,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
      durationMinutes: Math.round(totalTimeSeconds / 60),
      timeSpentSeconds: timeSpent,
      listening: {
        correct: listeningCorrect,
        total: listeningTotal,
        scaled: scaledListening
      },
      structure: {
        correct: structureCorrect,
        total: structureTotal,
        scaled: scaledStructure
      },
      reading: {
        correct: readingCorrect,
        total: readingTotal,
        scaled: scaledReading
      },
      totalScaledScore: totalScaled,
      answers: userAnswers
    };

    setFinalResult(result);
    setSimState('finished');
    onSaveSimulationResult(result);

    if (totalScaled >= 500) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentItem = items[currentIndex];

  return (
    <div className="space-y-6 pb-16">
      {/* ================= STATE 1: IDLE / CONFIGURATION ================= */}
      {simState === 'idle' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-sm">
              <Timer className="w-8 h-8" />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Simulasi Ujian TOEFL ITP
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-lg mx-auto">
                Rasakan atmosfer tes TOEFL sesungguhnya dengan kombinasi 3 bagian ujian, timer waktu mundur, dan konversi skor skala 310 - 677.
              </p>
            </div>

            {/* Test Structure Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40">
                <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-300 font-bold text-xs">
                  <Headphones className="w-4 h-4" />
                  <span>Section 1</span>
                </div>
                <div className="font-bold text-sm text-slate-900 dark:text-white mt-1">Listening</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Audio percakapan & kuliah
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
                <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
                  <FileText className="w-4 h-4" />
                  <span>Section 2</span>
                </div>
                <div className="font-bold text-sm text-slate-900 dark:text-white mt-1">Structure</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Tata bahasa & ekspresi tulis
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/40">
                <div className="flex items-center space-x-2 text-purple-700 dark:text-purple-300 font-bold text-xs">
                  <BookMarked className="w-4 h-4" />
                  <span>Section 3</span>
                </div>
                <div className="font-bold text-sm text-slate-900 dark:text-white mt-1">Reading</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Passage teks ilmiah akademik
                </div>
              </div>
            </div>

            {/* Mode selection buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => handleStartSimulation('mini')}
                className="w-full py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-bold text-sm shadow-md transition-all flex items-center justify-between"
              >
                <div className="text-left">
                  <div className="text-base font-extrabold">Mini Simulasi (35 Menit)</div>
                  <div className="text-xs text-indigo-200 font-normal">
                    Format ringkas ~37 butir soal · Cocok untuk latihan harian
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <button
                onClick={() => handleStartSimulation('standard')}
                className="w-full py-4 px-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-indigo-500 active:scale-98 font-bold text-sm shadow-sm transition-all flex items-center justify-between"
              >
                <div className="text-left">
                  <div className="text-base font-extrabold">Full Simulasi Standar (65 Menit)</div>
                  <div className="text-xs text-slate-400 font-normal">
                    Format lengkap ~65 butir soal · Mengukur daya tahan & fokus tes penuh
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= STATE 2: ACTIVE TEST ================= */}
      {simState === 'running' && currentItem && (
        <div className="space-y-4">
          {/* Top Sticky Test Bar */}
          <div className="sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
            {/* Section badge & question counter */}
            <div className="flex items-center space-x-2">
              <span
                className={`text-xs font-extrabold uppercase px-3 py-1 rounded-full ${
                  currentItem.section === 'listening'
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                    : currentItem.section === 'structure'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                }`}
              >
                Section: {currentItem.section}
              </span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Soal {currentIndex + 1} dari {items.length}
              </span>
            </div>

            {/* Timer Clock */}
            <div
              className={`flex items-center space-x-2 px-4 py-1.5 rounded-full font-mono text-sm font-extrabold border ${
                timeLeftSeconds < 300
                  ? 'bg-rose-50 text-rose-600 border-rose-300 animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700'
              }`}
            >
              <Timer className="w-4 h-4" />
              <span>{formatTimer(timeLeftSeconds)}</span>
            </div>

            {/* Flag & Finish Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  setFlaggedItems({
                    ...flaggedItems,
                    [currentItem.id]: !flaggedItems[currentItem.id]
                  })
                }
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
                  flaggedItems[currentItem.id]
                    ? 'bg-amber-500 text-white border-amber-600'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>{flaggedItems[currentItem.id] ? 'Ditandai Ragu' : 'Tandai Ragu'}</span>
              </button>

              <button
                onClick={() => {
                  if (confirm('Apakah Anda yakin ingin menyelesaikan simulasi sekarang?')) {
                    handleFinishSimulation();
                  }
                }}
                className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors"
              >
                Selesai Ujian
              </button>
            </div>
          </div>

          {/* Test Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Passage / Audio (if applicable) & Question Card */}
            <div className="lg:col-span-8 space-y-4">
              {/* Section 1 Listening Audio Box */}
              {currentItem.section === 'listening' && (
                <div className="bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-amber-900 dark:text-amber-200">
                        {currentItem.audioTitle || 'Audio Listening Percakapan'}
                      </div>
                      <div className="text-[11px] text-amber-700 dark:text-amber-400">
                        Dengarkan audio sebelum menjawab pertanyaan di bawah ini.
                      </div>
                    </div>
                  </div>

                  <div>
                    {!isAudioPlaying ? (
                      <button
                        onClick={() => handlePlayListeningAudio(currentItem.listeningText)}
                        className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-sm"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Putar Audio</span>
                      </button>
                    ) : (
                      <button
                        onClick={handleStopListeningAudio}
                        className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-sm"
                      >
                        <Square className="w-3.5 h-3.5 fill-current" />
                        <span>Stop</span>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Section 3 Reading Passage Box */}
              {currentItem.section === 'reading' && currentItem.passageText && (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-2">
                  <div className="text-xs uppercase font-extrabold tracking-wider text-purple-600 dark:text-purple-400">
                    Passage Bacaan:
                  </div>
                  <div className="font-serif text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-h-56 overflow-y-auto p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    {currentItem.passageText}
                  </div>
                </div>
              )}

              {/* Main Question Card */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                    {currentIndex + 1}. {currentItem.question}
                  </h3>
                </div>

                {/* Multiple Choice Options */}
                <div className="space-y-2.5">
                  {currentItem.options.map((opt, oIdx) => {
                    const isSelected = userAnswers[currentItem.id] === oIdx;

                    return (
                      <button
                        key={oIdx}
                        onClick={() =>
                          setUserAnswers({ ...userAnswers, [currentItem.id]: oIdx })
                        }
                        className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-indigo-50 dark:bg-indigo-950/70 border-indigo-600 text-indigo-950 dark:text-indigo-100 font-bold ring-2 ring-indigo-500/20'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-400 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span
                            className={`w-6 h-6 rounded-lg text-xs font-bold font-mono flex items-center justify-center ${
                              isSelected
                                ? 'bg-indigo-600 text-white'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                            }`}
                          >
                            {['A', 'B', 'C', 'D'][oIdx]}
                          </span>
                          <span>{opt}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Next / Previous Question Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => {
                      handleStopListeningAudio();
                      setCurrentIndex((prev) => Math.max(0, prev - 1));
                    }}
                    disabled={currentIndex === 0}
                    className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Sebelumnya</span>
                  </button>

                  <span className="text-xs text-slate-400 font-medium">
                    {Object.keys(userAnswers).length} dari {items.length} dijawab
                  </span>

                  <button
                    onClick={() => {
                      handleStopListeningAudio();
                      if (currentIndex < items.length - 1) {
                        setCurrentIndex((prev) => prev + 1);
                      } else {
                        if (confirm('Anda berada di nomor terakhir. Selesaikan ujian dan hitung skor sekarang?')) {
                          handleFinishSimulation();
                        }
                      }
                    }}
                    className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm"
                  >
                    <span>{currentIndex === items.length - 1 ? 'Selesai & Kumpul' : 'Berikutnya'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Question Palette Navigation Grid */}
            <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Navigasi Lembar Soal
                </h4>
                <span className="text-xs text-slate-400">
                  {Object.keys(userAnswers).length} Terjawab
                </span>
              </div>

              {/* Legend */}
              <div className="flex items-center space-x-3 text-[11px] text-slate-500 pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="flex items-center space-x-1">
                  <span className="w-3 h-3 rounded bg-indigo-600 block" />
                  <span>Terjawab</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-3 h-3 rounded bg-amber-500 block" />
                  <span>Ragu</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-3 h-3 rounded border border-slate-300 block" />
                  <span>Belum</span>
                </span>
              </div>

              {/* Number Buttons Grid */}
              <div className="grid grid-cols-5 sm:grid-cols-6 gap-2 max-h-72 overflow-y-auto pr-1">
                {items.map((item, idx) => {
                  const isAnswered = userAnswers[item.id] !== undefined;
                  const isFlagged = flaggedItems[item.id];
                  const isCurrent = currentIndex === idx;

                  let btnColor = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
                  if (isAnswered) {
                    btnColor = 'bg-indigo-600 text-white font-bold';
                  }
                  if (isFlagged) {
                    btnColor = 'bg-amber-500 text-white font-bold ring-2 ring-amber-300';
                  }

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleStopListeningAudio();
                        setCurrentIndex(idx);
                      }}
                      className={`h-9 rounded-xl text-xs font-mono transition-all flex items-center justify-center relative ${btnColor} ${
                        isCurrent ? 'ring-2 ring-indigo-500 scale-105 shadow-sm' : ''
                      }`}
                    >
                      <span>{idx + 1}</span>
                      {isFlagged && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white absolute top-1 right-1" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= STATE 3: FINISHED RESULTS & REVIEW ================= */}
      {simState === 'finished' && finalResult && (
        <div className="space-y-8">
          {/* Result Score Card */}
          <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-indigo-800/40 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold border border-white/15">
                <Trophy className="w-4 h-4" />
                <span>Simulasi Selesai</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Estimasi Skor Resmi TOEFL ITP Anda
              </h2>

              {/* Big Scaled Score */}
              <div className="py-2">
                <span className="text-6xl sm:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
                  {finalResult.totalScaledScore}
                </span>
                <span className="text-slate-400 text-lg font-medium ml-2">/ 677</span>
              </div>

              {/* Level & Evaluation */}
              {(() => {
                const evalInfo = getScoreEvaluation(finalResult.totalScaledScore);
                return (
                  <div className="space-y-2 max-w-xl mx-auto">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 text-sm font-bold">
                      Tingkat: {evalInfo.level} (CEFR {evalInfo.cefr})
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {evalInfo.description}
                    </p>
                  </div>
                );
              })()}

              {/* Section Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-left">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-amber-300 font-bold flex items-center space-x-1.5">
                    <Headphones className="w-4 h-4" />
                    <span>Listening Section</span>
                  </div>
                  <div className="text-2xl font-bold text-white mt-1">
                    {finalResult.listening.scaled} <span className="text-xs text-slate-400 font-normal">/ 68</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {finalResult.listening.correct} dari {finalResult.listening.total} benar (
                    {Math.round((finalResult.listening.correct / (finalResult.listening.total || 1)) * 100)}%)
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-emerald-300 font-bold flex items-center space-x-1.5">
                    <FileText className="w-4 h-4" />
                    <span>Structure & Written</span>
                  </div>
                  <div className="text-2xl font-bold text-white mt-1">
                    {finalResult.structure.scaled} <span className="text-xs text-slate-400 font-normal">/ 68</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {finalResult.structure.correct} dari {finalResult.structure.total} benar (
                    {Math.round((finalResult.structure.correct / (finalResult.structure.total || 1)) * 100)}%)
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-purple-300 font-bold flex items-center space-x-1.5">
                    <BookMarked className="w-4 h-4" />
                    <span>Reading Section</span>
                  </div>
                  <div className="text-2xl font-bold text-white mt-1">
                    {finalResult.reading.scaled} <span className="text-xs text-slate-400 font-normal">/ 67</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {finalResult.reading.correct} dari {finalResult.reading.total} benar (
                    {Math.round((finalResult.reading.correct / (finalResult.reading.total || 1)) * 100)}%)
                  </div>
                </div>
              </div>

              {/* Retake test CTA */}
              <div className="pt-4 flex justify-center space-x-3">
                <button
                  onClick={() => setSimState('idle')}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Ulangi Simulasi Baru</span>
                </button>
              </div>
            </div>
          </div>

          {/* ================= REVIEW ANSWER KEYS & EXPLANATIONS ================= */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Pembahasan Kunci Jawaban Lengkap
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Tinjau jawaban Anda dan pelajari pembahasan rumus bahasa Indonesia.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs">
                <button
                  onClick={() => setReviewFilter('all')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                    reviewFilter === 'all'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Semua Soal ({items.length})
                </button>
                <button
                  onClick={() => setReviewFilter('wrong')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                    reviewFilter === 'wrong'
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Jawaban Salah
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {items
                .filter((item) => {
                  const isCorrect = userAnswers[item.id] === item.answer;
                  if (reviewFilter === 'wrong') return !isCorrect;
                  if (reviewFilter === 'flagged') return flaggedItems[item.id];
                  return true;
                })
                .map((item, idx) => {
                  const selected = userAnswers[item.id];
                  const isCorrect = selected === item.answer;

                  return (
                    <div
                      key={item.id}
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-500 font-mono">
                            #{idx + 1}
                          </span>
                          <span className="uppercase text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                            {item.section}
                          </span>
                        </div>

                        <span
                          className={`flex items-center space-x-1 font-bold ${
                            isCorrect ? 'text-emerald-600' : 'text-rose-600'
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Benar</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4" />
                              <span>Salah / Tidak Dijawab</span>
                            </>
                          )}
                        </span>
                      </div>

                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {item.question}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {item.options.map((opt, oIdx) => {
                          const isUserPicked = selected === oIdx;
                          const isAnswerKey = oIdx === item.answer;

                          let badgeStyle =
                            'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';
                          if (isAnswerKey) {
                            badgeStyle =
                              'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                          } else if (isUserPicked && !isCorrect) {
                            badgeStyle =
                              'bg-rose-50 dark:bg-rose-950/70 border-rose-500 text-rose-800 dark:text-rose-200';
                          }

                          return (
                            <div
                              key={oIdx}
                              className={`p-2.5 rounded-xl border flex items-center justify-between ${badgeStyle}`}
                            >
                              <span>
                                <b className="mr-1.5 font-mono">{['A', 'B', 'C', 'D'][oIdx]}.</b>
                                {opt}
                              </span>
                              {isAnswerKey && (
                                <span className="text-[10px] font-bold text-emerald-600">
                                  Kunci Jawaban
                                </span>
                              )}
                              {isUserPicked && !isCorrect && (
                                <span className="text-[10px] font-bold text-rose-600">
                                  Pilihan Anda
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <b>Pembahasan:</b> {item.explanation}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
