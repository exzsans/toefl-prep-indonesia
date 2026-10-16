import React, { useState } from 'react';
import {
  Headphones,
  Play,
  Square,
  CheckCircle2,
  XCircle,
  FileText,
  ChevronLeft,
  ChevronRight,
  Gauge,
  HelpCircle,
  Volume2,
  MessageSquare,
  GraduationCap
} from 'lucide-react';
import { ListeningPassage } from '../data/types';
import { speakText, stopSpeaking } from '../services/storage';

interface ListeningSectionProps {
  passages: ListeningPassage[];
  listeningAttempts: Record<string, { score: number; total: number; timestamp: number }>;
  onSaveAttempt: (passageId: string, score: number, total: number) => void;
}

export const ListeningSection: React.FC<ListeningSectionProps> = ({
  passages,
  listeningAttempts,
  onSaveAttempt
}) => {
  const [selectedPassageIndex, setSelectedPassageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.9);
  const [showTranscript, setShowTranscript] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const currentPassage = passages[selectedPassageIndex] || passages[0];

  const handlePlayAudio = () => {
    setIsPlaying(true);
    speakText(currentPassage.text, speechRate, 1.0, () => {
      setIsPlaying(false);
    });
  };

  const handleStopAudio = () => {
    stopSpeaking();
    setIsPlaying(false);
  };

  const handleSelectAnswer = (qId: string, optionIndex: number) => {
    const newAnswers = { ...answers, [qId]: optionIndex };
    setAnswers(newAnswers);

    // If all questions in this passage are answered, save score
    const allAnswered = currentPassage.qs.every((q) => newAnswers[q.id] !== undefined);
    if (allAnswered) {
      let correctCount = 0;
      currentPassage.qs.forEach((q) => {
        if (newAnswers[q.id] === q.a) {
          correctCount++;
        }
      });
      onSaveAttempt(currentPassage.id, correctCount, currentPassage.qs.length);
    }
  };

  const handleNext = () => {
    handleStopAudio();
    setShowTranscript(false);
    setSelectedPassageIndex((prev) => (prev + 1) % passages.length);
  };

  const handlePrev = () => {
    handleStopAudio();
    setShowTranscript(false);
    setSelectedPassageIndex((prev) => (prev - 1 + passages.length) % passages.length);
  };

  const attempt = listeningAttempts[currentPassage.id];

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
            <Headphones className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            <span>Listening Comprehension (30 Audio TTS)</span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Percakapan kampus & kuliah ilmiah berbahasa Inggris dengan suara bawaan browser dan kecepatan dinamis.
          </p>
        </div>

        {/* Passage Dropdown */}
        <div className="flex items-center space-x-2">
          <select
            value={selectedPassageIndex}
            onChange={(e) => {
              handleStopAudio();
              setShowTranscript(false);
              setSelectedPassageIndex(Number(e.target.value));
            }}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 font-medium"
          >
            {passages.map((p, i) => (
              <option key={p.id} value={i}>
                Audio {i + 1}: {p.title.slice(0, 36)}...
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Audio Player Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        {/* Top badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 flex items-center space-x-1.5">
              {currentPassage.type === 'conversation' ? (
                <>
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Percakapan Kampus</span>
                </>
              ) : (
                <>
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Kuliah Akademik</span>
                </>
              )}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Audio {selectedPassageIndex + 1} dari {passages.length}
            </span>
          </div>

          {attempt && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              Skor Terakhir: {attempt.score}/{attempt.total} (
              {Math.round((attempt.score / attempt.total) * 100)}%)
            </span>
          )}
        </div>

        {/* Passage Title & Scenario Context */}
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {currentPassage.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 leading-relaxed">
            <b>Konteks:</b> {currentPassage.scenario}
          </p>
        </div>

        {/* Audio Player Controls */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            {!isPlaying ? (
              <button
                onClick={handlePlayAudio}
                className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-md shadow-amber-500/20 active:scale-95 transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Putar Audio</span>
              </button>
            ) : (
              <button
                onClick={handleStopAudio}
                className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 active:scale-95 transition-all"
              >
                <Square className="w-4 h-4 fill-current" />
                <span>Berhenti</span>
              </button>
            )}

            <span className="text-xs text-slate-500 font-medium">
              {isPlaying ? (
                <span className="text-amber-600 dark:text-amber-400 font-bold animate-pulse flex items-center space-x-1">
                  <Volume2 className="w-4 h-4" />
                  <span>Sedang Berbicara...</span>
                </span>
              ) : (
                'Tekan putar untuk mendengar'
              )}
            </span>
          </div>

          {/* Speed & Transcript buttons */}
          <div className="flex items-center space-x-3 text-xs">
            {/* Speed Selector */}
            <div className="flex items-center space-x-1 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="px-1 text-slate-400 font-semibold text-[11px]">Kecepatan:</span>
              {[0.75, 0.9, 1.0, 1.25].map((rate) => (
                <button
                  key={rate}
                  onClick={() => {
                    setSpeechRate(rate);
                    if (isPlaying) {
                      handleStopAudio();
                    }
                  }}
                  className={`px-2 py-0.5 rounded-lg font-bold text-[11px] transition-colors ${
                    speechRate === rate
                      ? 'bg-amber-500 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>

            {/* Toggle Transcript */}
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>{showTranscript ? 'Tutup Transkrip' : 'Lihat Transkrip'}</span>
            </button>
          </div>
        </div>

        {/* Collapsible Transcript */}
        {showTranscript && (
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2 animate-in fade-in duration-200">
            <h4 className="font-bold text-slate-900 dark:text-white flex items-center space-x-1.5">
              <FileText className="w-4 h-4 text-amber-500" />
              <span>Transkrip Percakapan / Kuliah:</span>
            </h4>
            <p className="font-mono text-xs whitespace-pre-wrap">{currentPassage.text}</p>
          </div>
        )}

        {/* Listening Questions */}
        <div className="space-y-5 pt-2">
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Pertanyaan Pemahaman Mendengar
          </h3>

          <div className="space-y-4">
            {currentPassage.qs.map((q, qIndex) => {
              const selectedOpt = answers[q.id];
              const isAnswered = selectedOpt !== undefined;

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3"
                >
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {qIndex + 1}. {q.q}
                  </p>

                  <div className="space-y-2">
                    {q.o.map((opt, oIdx) => {
                      const isChosen = selectedOpt === oIdx;
                      const isCorrect = oIdx === q.a;

                      let btnStyle =
                        'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-amber-400 text-slate-800 dark:text-slate-200';

                      if (isAnswered) {
                        if (isCorrect) {
                          btnStyle =
                            'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold';
                        } else if (isChosen) {
                          btnStyle =
                            'bg-rose-50 dark:bg-rose-950/70 border-rose-500 text-rose-900 dark:text-rose-100';
                        } else {
                          btnStyle = 'opacity-40 border-slate-200 dark:border-slate-800';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectAnswer(q.id, oIdx)}
                          className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <div className="flex items-center space-x-2.5">
                            <span className="font-mono font-bold text-slate-400">
                              {['A', 'B', 'C', 'D'][oIdx]}.
                            </span>
                            <span>{opt}</span>
                          </div>

                          {isAnswered && isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          )}
                          {isAnswered && isChosen && !isCorrect && (
                            <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 leading-relaxed animate-in fade-in duration-200">
                      <b>Pembahasan:</b> {q.e}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={handlePrev}
            className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Audio Sebelumnya</span>
          </button>

          <button
            onClick={handleNext}
            className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-colors shadow-sm"
          >
            <span>Audio Berikutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
