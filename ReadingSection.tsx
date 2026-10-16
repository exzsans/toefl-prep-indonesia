import React, { useState } from 'react';
import {
  BookMarked,
  CheckCircle2,
  XCircle,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Filter,
  ZoomIn,
  ZoomOut,
  Info
} from 'lucide-react';
import { ReadingPassage } from '../data/types';

interface ReadingSectionProps {
  passages: ReadingPassage[];
  answeredQuestions: Record<string, { selected: number; isCorrect: boolean; timestamp: number }>;
  bookmarkedQuestions: string[];
  onAnswerQuestion: (questionId: string, selectedIndex: number, isCorrect: boolean) => void;
  onToggleBookmarkQuestion: (questionId: string) => void;
}

export const ReadingSection: React.FC<ReadingSectionProps> = ({
  passages,
  answeredQuestions,
  bookmarkedQuestions,
  onAnswerQuestion,
  onToggleBookmarkQuestion
}) => {
  const [selectedPassageIndex, setSelectedPassageIndex] = useState(0);
  const [fontSizeClass, setFontSizeClass] = useState<'text-xs' | 'text-sm' | 'text-base'>('text-sm');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = Array.from(new Set(passages.map((p) => p.category))).sort();

  const filteredPassages = passages.filter((p) => {
    return selectedCategory === 'all' || p.category === selectedCategory;
  });

  const currentPassage = filteredPassages[selectedPassageIndex % (filteredPassages.length || 1)] || passages[0];

  const handleNextPassage = () => {
    setSelectedPassageIndex((prev) => (prev + 1) % filteredPassages.length);
  };

  const handlePrevPassage = () => {
    setSelectedPassageIndex((prev) => (prev - 1 + filteredPassages.length) % filteredPassages.length);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
            <BookMarked className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <span>Reading Comprehension (100 Soal)</span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            25 passage akademik bertema biologi, sejarah, teknologi, arkeologi & ekologi dengan soal model TOEFL.
          </p>
        </div>

        {/* Text Size Controls & Category Filter */}
        <div className="flex items-center space-x-2 self-start sm:self-center">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs">
            <button
              onClick={() => setFontSizeClass('text-xs')}
              className={`px-2 py-1 rounded-lg font-bold ${fontSizeClass === 'text-xs' ? 'bg-white dark:bg-slate-900 text-purple-600 shadow-sm' : 'text-slate-500'}`}
              title="Font kecil"
            >
              A-
            </button>
            <button
              onClick={() => setFontSizeClass('text-sm')}
              className={`px-2 py-1 rounded-lg font-bold ${fontSizeClass === 'text-sm' ? 'bg-white dark:bg-slate-900 text-purple-600 shadow-sm' : 'text-slate-500'}`}
              title="Font normal"
            >
              A
            </button>
            <button
              onClick={() => setFontSizeClass('text-base')}
              className={`px-2 py-1 rounded-lg font-bold ${fontSizeClass === 'text-base' ? 'bg-white dark:bg-slate-900 text-purple-600 shadow-sm' : 'text-slate-500'}`}
              title="Font besar"
            >
              A+
            </button>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedPassageIndex(0);
            }}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 font-medium"
          >
            <option value="all">Semua Kategori ({passages.length} Teks)</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Passage & Questions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Passage Display */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4 sticky lg:top-20">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                Passage {selectedPassageIndex + 1} / {filteredPassages.length}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {currentPassage.category}
              </span>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={handlePrevPassage}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                title="Passage sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextPassage}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
                title="Passage berikutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
            {currentPassage.title}
          </h2>

          {/* Passage Body */}
          <div className={`text-slate-700 dark:text-slate-300 leading-relaxed font-serif ${fontSizeClass} bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-5 rounded-2xl border border-slate-100 dark:border-slate-800 max-h-[500px] overflow-y-auto space-y-3`}>
            {currentPassage.passage.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="indent-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
            <span>💡 4 soal latihan untuk passage ini</span>
            <span>Tingkat: <b className="text-purple-600 dark:text-purple-400">{currentPassage.difficulty}</b></span>
          </div>
        </div>

        {/* Right Column: Passage Questions */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              Soal Pemahaman Bacaan
            </h3>
            <span className="text-xs text-slate-400">
              {currentPassage.questions.length} Pertanyaan
            </span>
          </div>

          {currentPassage.questions.map((q, qIndex) => {
            const answerInfo = answeredQuestions[q.id];
            const hasAnswered = !!answerInfo;
            const isBookmarked = bookmarkedQuestions.includes(q.id);

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3"
              >
                {/* Question Header */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-full bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold flex items-center justify-center text-[11px]">
                      {qIndex + 1}
                    </span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {q.topic}
                    </span>
                  </div>

                  <button
                    onClick={() => onToggleBookmarkQuestion(q.id)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isBookmarked
                        ? 'text-amber-500 bg-amber-50 dark:bg-amber-950'
                        : 'text-slate-300 hover:text-amber-500'
                    }`}
                    title={isBookmarked ? 'Hapus bookmark' : 'Bookmark soal ini'}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Question Prompt */}
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-normal">
                  {q.question}
                </p>

                {/* Options */}
                <div className="space-y-2">
                  {q.options.map((opt, oIndex) => {
                    const isSelected = answerInfo?.selected === oIndex;
                    const isCorrect = oIndex === q.answer;

                    let optClass =
                      'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-purple-400 text-slate-800 dark:text-slate-200';

                    if (hasAnswered) {
                      if (isCorrect) {
                        optClass =
                          'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold';
                      } else if (isSelected) {
                        optClass =
                          'bg-rose-50 dark:bg-rose-950/70 border-rose-500 text-rose-900 dark:text-rose-100';
                      } else {
                        optClass = 'opacity-40 border-slate-200 dark:border-slate-800';
                      }
                    }

                    return (
                      <button
                        key={oIndex}
                        onClick={() => {
                          if (!hasAnswered) {
                            onAnswerQuestion(q.id, oIndex, oIndex === q.answer);
                          }
                        }}
                        disabled={hasAnswered}
                        className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${optClass}`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className="font-mono font-bold text-slate-400">
                            {['A', 'B', 'C', 'D'][oIndex]}.
                          </span>
                          <span>{opt}</span>
                        </div>

                        {hasAnswered && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        )}
                        {hasAnswered && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {hasAnswered && (
                  <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60 text-xs text-purple-900 dark:text-purple-200 leading-relaxed animate-in fade-in duration-200">
                    <p className="font-semibold mb-0.5">
                      {answerInfo.isCorrect ? '✅ Benar!' : '❌ Jawaban Salah.'}
                    </p>
                    <p>{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
