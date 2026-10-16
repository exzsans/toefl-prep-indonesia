import React, { useState, useMemo } from 'react';
import {
  FileText,
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Filter,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Search,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { GrammarLesson, QuestionItem, DifficultyLevel } from '../data/types';

interface GrammarSectionProps {
  lessons: GrammarLesson[];
  questions: QuestionItem[];
  answeredQuestions: Record<string, { selected: number; isCorrect: boolean; timestamp: number }>;
  bookmarkedQuestions: string[];
  onAnswerQuestion: (questionId: string, selectedIndex: number, isCorrect: boolean) => void;
  onToggleBookmarkQuestion: (questionId: string) => void;
}

export const GrammarSection: React.FC<GrammarSectionProps> = ({
  lessons,
  questions,
  answeredQuestions,
  bookmarkedQuestions,
  onAnswerQuestion,
  onToggleBookmarkQuestion
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'practice' | 'lessons'>('practice');

  // Lessons filter & search
  const [lessonSearch, setLessonSearch] = useState('');
  const [lessonCategory, setLessonCategory] = useState('all');
  const [expandedLessonId, setExpandedLessonId] = useState<string | null>(lessons[0]?.id || null);

  // Practice filters
  const [topicFilter, setTopicFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | DifficultyLevel>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unanswered' | 'answered' | 'wrong' | 'bookmarked'>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Unique topics from questions
  const availableTopics = useMemo(() => {
    return Array.from(new Set(questions.map((q) => q.topic))).sort();
  }, [questions]);

  // Unique lesson categories
  const availableCategories = useMemo(() => {
    return Array.from(new Set(lessons.map((l) => l.category))).sort();
  }, [lessons]);

  // Filtered practice questions
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchTopic = topicFilter === 'all' || q.topic === topicFilter;
      const matchDifficulty = difficultyFilter === 'all' || q.difficulty === difficultyFilter;

      const answerInfo = answeredQuestions[q.id];
      let matchStatus = true;
      if (statusFilter === 'unanswered') {
        matchStatus = !answerInfo;
      } else if (statusFilter === 'answered') {
        matchStatus = !!answerInfo;
      } else if (statusFilter === 'wrong') {
        matchStatus = !!answerInfo && !answerInfo.isCorrect;
      } else if (statusFilter === 'bookmarked') {
        matchStatus = bookmarkedQuestions.includes(q.id);
      }

      return matchTopic && matchDifficulty && matchStatus;
    });
  }, [questions, topicFilter, difficultyFilter, statusFilter, answeredQuestions, bookmarkedQuestions]);

  const activeQuestion = filteredQuestions[currentQuestionIndex % (filteredQuestions.length || 1)] || questions[0];
  const activeAnswerInfo = activeQuestion ? answeredQuestions[activeQuestion.id] : null;
  const isQuestionBookmarked = activeQuestion ? bookmarkedQuestions.includes(activeQuestion.id) : false;

  const handleSelectOption = (idx: number) => {
    if (!activeQuestion) return;
    const isCorrect = idx === activeQuestion.answer;
    onAnswerQuestion(activeQuestion.id, idx, isCorrect);
  };

  const handleNextQuestion = () => {
    if (filteredQuestions.length === 0) return;
    setCurrentQuestionIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  const handlePrevQuestion = () => {
    if (filteredQuestions.length === 0) return;
    setCurrentQuestionIndex((prev) => (prev - 1 + filteredQuestions.length) % filteredQuestions.length);
  };

  // Filtered lessons
  const filteredLessons = useMemo(() => {
    return lessons.filter((l) => {
      const matchCat = lessonCategory === 'all' || l.category === lessonCategory;
      const matchSearch =
        l.title.toLowerCase().includes(lessonSearch.toLowerCase()) ||
        l.description.toLowerCase().includes(lessonSearch.toLowerCase()) ||
        l.examples.some((ex) => ex.toLowerCase().includes(lessonSearch.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [lessons, lessonCategory, lessonSearch]);

  return (
    <div className="space-y-6 pb-16">
      {/* Header and Sub-tab selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
            <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <span>Structure & Written Expression (200 Soal)</span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Latihan soal grammar bertingkat kesulitan & 20 materi rumus TOEFL lengkap berbahasa Indonesia.
          </p>
        </div>

        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-center">
          <button
            onClick={() => setActiveSubTab('practice')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'practice'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Latihan Soal (200)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('lessons')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeSubTab === 'lessons'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Materi & Rumus (20)</span>
          </button>
        </div>
      </div>

      {/* ================= PRACTICE SUB-TAB ================= */}
      {activeSubTab === 'practice' && (
        <div className="space-y-4">
          {/* Practice Filters Bar */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 dark:text-slate-300">
              <Filter className="w-3.5 h-3.5 text-emerald-600" />
              <span>Filter Soal:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              {/* Topic Filter */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                  Kategori / Topik
                </label>
                <select
                  value={topicFilter}
                  onChange={(e) => {
                    setTopicFilter(e.target.value);
                    setCurrentQuestionIndex(0);
                  }}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 text-xs font-medium focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">Semua Topik ({questions.length})</option>
                  {availableTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic} ({questions.filter((q) => q.topic === topic).length})
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                  Tingkat Kesulitan
                </label>
                <select
                  value={difficultyFilter}
                  onChange={(e) => {
                    setDifficultyFilter(e.target.value as any);
                    setCurrentQuestionIndex(0);
                  }}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 text-xs font-medium focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">Semua Kesulitan</option>
                  <option value="Easy">Mudah (Easy)</option>
                  <option value="Medium">Menengah (Medium)</option>
                  <option value="Hard">Sulit (Hard)</option>
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                  Status Pengerjaan
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value as any);
                    setCurrentQuestionIndex(0);
                  }}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 text-xs font-medium focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">Semua Status</option>
                  <option value="unanswered">Belum Dikerjakan</option>
                  <option value="answered">Sudah Dijawab</option>
                  <option value="wrong">Jawaban Salah</option>
                  <option value="bookmarked">Ditandai / Bookmark</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          {filteredQuestions.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center space-y-3">
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                Tidak ada soal yang cocok dengan filter yang dipilih.
              </p>
              <button
                onClick={() => {
                  setTopicFilter('all');
                  setDifficultyFilter('all');
                  setStatusFilter('all');
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
              >
                Reset Semua Filter
              </button>
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              {/* Card Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    Soal {currentQuestionIndex + 1} dari {filteredQuestions.length}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-semibold">
                    {activeQuestion.topic}
                  </span>
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                      activeQuestion.difficulty === 'Easy'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                        : activeQuestion.difficulty === 'Medium'
                        ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                        : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                    }`}
                  >
                    {activeQuestion.difficulty}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onToggleBookmarkQuestion(activeQuestion.id)}
                    className={`p-2 rounded-xl transition-colors ${
                      isQuestionBookmarked
                        ? 'text-amber-500 bg-amber-50 dark:bg-amber-950'
                        : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                    title={isQuestionBookmarked ? 'Hapus bookmark' : 'Bookmark soal ini'}
                  >
                    <Bookmark className={`w-4 h-4 ${isQuestionBookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="py-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                  {activeQuestion.question}
                </h3>
              </div>

              {/* Multiple Choice Options */}
              <div className="space-y-2.5">
                {activeQuestion.options.map((option, idx) => {
                  const hasAnswered = activeAnswerInfo !== null;
                  const isSelected = activeAnswerInfo?.selected === idx;
                  const isCorrect = idx === activeQuestion.answer;

                  let optionStyle =
                    'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-800 dark:text-slate-200';

                  if (hasAnswered) {
                    if (isCorrect) {
                      optionStyle =
                        'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold';
                    } else if (isSelected) {
                      optionStyle =
                        'bg-rose-50 dark:bg-rose-950/70 border-rose-500 text-rose-900 dark:text-rose-100';
                    } else {
                      optionStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={hasAnswered}
                      className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${optionStyle}`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold font-mono flex items-center justify-center text-slate-700 dark:text-slate-300">
                          {['A', 'B', 'C', 'D'][idx]}
                        </span>
                        <span className="font-medium">{option}</span>
                      </div>

                      {hasAnswered && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      )}
                      {hasAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Card */}
              {activeAnswerInfo && (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center space-x-2 text-xs font-bold">
                    {activeAnswerInfo.isCorrect ? (
                      <span className="text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Jawaban Anda Benar!</span>
                      </span>
                    ) : (
                      <span className="text-rose-600 dark:text-rose-400 flex items-center space-x-1">
                        <XCircle className="w-4 h-4" />
                        <span>Kurang Tepat. Kunci Jawaban: {['A', 'B', 'C', 'D'][activeQuestion.answer]}</span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <b>Pembahasan:</b> {activeQuestion.explanation}
                  </p>
                </div>
              )}

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrevQuestion}
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Sebelumnya</span>
                </button>

                <div className="text-xs text-slate-400 font-medium hidden sm:block">
                  Pilih opsi untuk melihat pembahasan langsung
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <span>Berikutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= LESSONS & FORMULAS SUB-TAB ================= */}
      {activeSubTab === 'lessons' && (
        <div className="space-y-4">
          {/* Lessons Filter & Search */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                value={lessonSearch}
                onChange={(e) => setLessonSearch(e.target.value)}
                placeholder="Cari materi rumus (contoh: Inversion, Conditionals, Subjunctive, Agreement)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <button
                onClick={() => setLessonCategory('all')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                  lessonCategory === 'all'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                Semua Kategori ({lessons.length})
              </button>
              {availableCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setLessonCategory(cat)}
                  className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                    lessonCategory === cat
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Lessons Accordion List */}
          <div className="space-y-3">
            {filteredLessons.map((lesson) => {
              const isExpanded = expandedLessonId === lesson.id;
              return (
                <div
                  key={lesson.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedLessonId(isExpanded ? null : lesson.id)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {lesson.number}
                      </span>
                      <div>
                        <h3 className="font-bold text-base text-slate-900 dark:text-white">
                          {lesson.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                          {lesson.category}
                        </span>
                      </div>
                    </div>

                    <div className="text-slate-400">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-6 pt-1 space-y-4 border-t border-slate-100 dark:border-slate-800 text-sm">
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {lesson.description}
                      </p>

                      {/* Formula Box */}
                      {lesson.formula && (
                        <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-l-4 border-emerald-500 font-mono text-xs text-slate-800 dark:text-slate-200">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1">
                            Pola Rumus
                          </span>
                          {lesson.formula}
                        </div>
                      )}

                      {/* Examples */}
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block mb-2">
                          Contoh Kalimat:
                        </span>
                        <div className="space-y-1.5">
                          {lesson.examples.map((ex, idx) => (
                            <div
                              key={idx}
                              className="p-2.5 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/30 text-xs text-slate-800 dark:text-slate-200 border border-emerald-100 dark:border-emerald-900/40"
                              dangerouslySetInnerHTML={{ __html: ex }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* TOEFL Tip */}
                      {lesson.toeflTip && (
                        <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200">
                          <b className="font-bold">💡 Tips Jebakan TOEFL:</b> {lesson.toeflTip}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
