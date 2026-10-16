import React, { useState, useMemo } from 'react';
import {
  Volume2,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  Check,
  Bookmark,
  Search,
  BookOpen,
  HelpCircle,
  List,
  Sparkles,
  Trophy,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VocabItem, PartOfSpeech } from '../data/types';
import { speakText, stopSpeaking } from '../services/storage';

interface VocabularySectionProps {
  vocabList: VocabItem[];
  knownVocab: string[];
  bookmarkedVocab: string[];
  onToggleKnown: (word: string) => void;
  onToggleBookmark: (word: string) => void;
}

export const VocabularySection: React.FC<VocabularySectionProps> = ({
  vocabList,
  knownVocab,
  bookmarkedVocab,
  onToggleKnown,
  onToggleBookmark
}) => {
  const [activeTab, setActiveTab] = useState<'flashcards' | 'list' | 'quiz'>('flashcards');

  // Flashcards state
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardFilter, setCardFilter] = useState<'all' | 'unknown' | 'known' | 'bookmarked'>('all');
  const [shuffledOrder, setShuffledOrder] = useState<number[]>([]);

  // List search & filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPos, setSelectedPos] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  // Quiz state
  const [quizMode, setQuizMode] = useState<'en_to_id' | 'id_to_en' | 'synonym'>('en_to_id');
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<
    { word: VocabItem; prompt: string; options: string[]; answerIndex: number; explanation: string }[]
  >([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  // Filtered flashcard indices
  const filteredFlashcardIndices = useMemo(() => {
    let indices = vocabList.map((_, i) => i);
    if (cardFilter === 'unknown') {
      indices = indices.filter((i) => !knownVocab.includes(vocabList[i].word));
    } else if (cardFilter === 'known') {
      indices = indices.filter((i) => knownVocab.includes(vocabList[i].word));
    } else if (cardFilter === 'bookmarked') {
      indices = indices.filter((i) => bookmarkedVocab.includes(vocabList[i].word));
    }

    if (shuffledOrder.length === vocabList.length && indices.length > 0) {
      indices.sort((a, b) => shuffledOrder[a] - shuffledOrder[b]);
    }

    return indices.length > 0 ? indices : [0];
  }, [vocabList, cardFilter, knownVocab, bookmarkedVocab, shuffledOrder]);

  const currentFlashcard = vocabList[filteredFlashcardIndices[cardIndex % filteredFlashcardIndices.length]] || vocabList[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % filteredFlashcardIndices.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + filteredFlashcardIndices.length) % filteredFlashcardIndices.length);
  };

  const handleShuffle = () => {
    const randomOrder = vocabList.map(() => Math.random());
    setShuffledOrder(randomOrder);
    setCardIndex(0);
    setIsFlipped(false);
  };

  const handlePlayVoice = (text: string) => {
    speakText(text, 0.85);
  };

  // Filtered word list
  const filteredList = useMemo(() => {
    return vocabList.filter((item) => {
      const matchesSearch =
        item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.synonym && item.synonym.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesPos = selectedPos === 'all' || item.pos === selectedPos;

      let matchesStatus = true;
      if (selectedStatus === 'known') {
        matchesStatus = knownVocab.includes(item.word);
      } else if (selectedStatus === 'unknown') {
        matchesStatus = !knownVocab.includes(item.word);
      } else if (selectedStatus === 'bookmarked') {
        matchesStatus = bookmarkedVocab.includes(item.word);
      }

      return matchesSearch && matchesPos && matchesStatus;
    });
  }, [vocabList, searchQuery, selectedPos, selectedStatus, knownVocab, bookmarkedVocab]);

  // Generate Quiz
  const startQuiz = (mode: 'en_to_id' | 'id_to_en' | 'synonym') => {
    setQuizMode(mode);
    const pool = [...vocabList].sort(() => Math.random() - 0.5);
    const selected10 = pool.slice(0, 10);

    const questions = selected10.map((item) => {
      const distractors = pool
        .filter((x) => x.word !== item.word)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      let prompt = '';
      let correctAnswer = '';
      let distractorAnswers: string[] = [];

      if (mode === 'en_to_id') {
        prompt = `Apa arti dari kata "${item.word}" (${item.pos})?`;
        correctAnswer = item.meaning;
        distractorAnswers = distractors.map((d) => d.meaning);
      } else if (mode === 'id_to_en') {
        prompt = `Pilih kata bahasa Inggris yang berarti: "${item.meaning}"`;
        correctAnswer = item.word;
        distractorAnswers = distractors.map((d) => d.word);
      } else {
        prompt = `Kata mana yang merupakan sinonim/padanan terdekat dari "${item.word}"?`;
        correctAnswer = item.synonym ? item.synonym.split(',')[0].trim() : distractors[0].word;
        distractorAnswers = distractors.map((d) => (d.synonym ? d.synonym.split(',')[0].trim() : d.word));
      }

      const options = [correctAnswer, ...distractorAnswers].sort(() => Math.random() - 0.5);
      const answerIndex = options.indexOf(correctAnswer);

      return {
        word: item,
        prompt,
        options,
        answerIndex,
        explanation: `Kata "${item.word}" (${item.pos}): ${item.meaning}. Contoh: "${item.example}"`
      };
    });

    setQuizQuestions(questions);
    setCurrentQuizIndex(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setQuizFinished(false);
    setQuizStarted(true);
  };

  const handleSelectQuizOption = (index: number) => {
    if (selectedAnswer !== null) return; // Prevent double answer
    setSelectedAnswer(index);
    const isCorrect = index === quizQuestions[currentQuizIndex].answerIndex;
    if (isCorrect) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    if (currentQuizIndex + 1 < quizQuestions.length) {
      setCurrentQuizIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
      if (quizScore >= 7) {
        confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
      }
    }
  };

  const isCurrentCardKnown = knownVocab.includes(currentFlashcard.word);
  const isCurrentCardBookmarked = bookmarkedVocab.includes(currentFlashcard.word);

  return (
    <div className="space-y-6 pb-16">
      {/* Header and Sub-tab selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span>Academic Vocabulary (500 AWL)</span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Daftar kata akademik frekuensi tinggi dalam tes TOEFL ITP & iBT dengan contoh dan audio.
          </p>
        </div>

        {/* Sub-tab pills */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-center">
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'flashcards'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Flashcards</span>
          </button>

          <button
            onClick={() => setActiveTab('list')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'list'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Daftar Kata (500)</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'quiz'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Kuis Vocab</span>
          </button>
        </div>
      </div>

      {/* ================= TAB 1: FLASHCARDS ================= */}
      {activeTab === 'flashcards' && (
        <div className="max-w-xl mx-auto space-y-4">
          {/* Controls Bar */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Kartu {cardIndex + 1} dari {filteredFlashcardIndices.length}
              </span>
              <span>·</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                {knownVocab.length} dikuasai
              </span>
            </div>

            {/* Filter filter options */}
            <select
              value={cardFilter}
              onChange={(e) => {
                setCardFilter(e.target.value as any);
                setCardIndex(0);
                setIsFlipped(false);
              }}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs rounded-lg px-2 py-1 text-slate-700 dark:text-slate-200"
            >
              <option value="all">Semua Kata ({vocabList.length})</option>
              <option value="unknown">Belum Dikuasai ({vocabList.length - knownVocab.length})</option>
              <option value="known">Sudah Dikuasai ({knownVocab.length})</option>
              <option value="bookmarked">Favorit / Bookmark ({bookmarkedVocab.length})</option>
            </select>
          </div>

          {/* Interactive Flip Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`min-h-[260px] p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between items-center text-center shadow-md select-none relative ${
              isFlipped
                ? 'bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-indigo-950/60 border-indigo-200 dark:border-indigo-800'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'
            }`}
          >
            {/* Top row badges on card */}
            <div className="w-full flex items-center justify-between">
              <span className="text-xs uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                {currentFlashcard.pos}
              </span>

              <div className="flex items-center space-x-1" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => handlePlayVoice(currentFlashcard.word + '. ' + currentFlashcard.example)}
                  className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Dengarkan pengucapan (Audio TTS)"
                >
                  <Volume2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </button>

                <button
                  onClick={() => onToggleBookmark(currentFlashcard.word)}
                  className={`p-2 rounded-xl transition-colors ${
                    isCurrentCardBookmarked
                      ? 'text-amber-500 bg-amber-50 dark:bg-amber-950'
                      : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  title={isCurrentCardBookmarked ? 'Hapus dari favorit' : 'Simpan ke favorit'}
                >
                  <Bookmark className={`w-5 h-5 ${isCurrentCardBookmarked ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Main Card Body */}
            <div className="my-auto py-4">
              {!isFlipped ? (
                <>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {currentFlashcard.word}
                  </h2>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-2 font-medium">
                    Ketuk untuk melihat arti & sinonim
                  </p>
                </>
              ) : (
                <div className="space-y-3 animate-in fade-in zoom-in-95 duration-200">
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {currentFlashcard.meaning}
                  </div>
                  {currentFlashcard.synonym && (
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Sinonim: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{currentFlashcard.synonym}</span>
                    </div>
                  )}
                  <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 italic max-w-md mx-auto">
                    "{currentFlashcard.example}"
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Card Hint */}
            <div className="text-[11px] text-slate-400 font-medium">
              {!isFlipped ? '💡 Klik atau ketuk kartu untuk membalik' : '🔄 Klik lagi untuk kembali'}
            </div>
          </div>

          {/* Action Navigation Buttons */}
          <div className="flex items-center justify-between gap-2 pt-2">
            <button
              onClick={handlePrevCard}
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold active:scale-95 transition-all shadow-sm"
              title="Kartu sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => handlePlayVoice(currentFlashcard.word)}
              className="flex items-center space-x-1.5 px-4 py-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 text-xs font-bold hover:bg-indigo-100 dark:hover:bg-indigo-900/80 transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              <span>Suara</span>
            </button>

            <button
              onClick={() => onToggleKnown(currentFlashcard.word)}
              className={`flex-1 flex items-center justify-center space-x-1.5 py-3 rounded-2xl text-xs font-bold transition-all shadow-sm active:scale-95 ${
                isCurrentCardKnown
                  ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-600'
              }`}
            >
              <Check className="w-4 h-4" />
              <span>{isCurrentCardKnown ? '✓ Dikuasai' : 'Tandai Dikuasai'}</span>
            </button>

            <button
              onClick={handleShuffle}
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold active:scale-95 transition-all shadow-sm"
              title="Acak urutan kartu"
            >
              <Shuffle className="w-5 h-5" />
            </button>

            <button
              onClick={handleNextCard}
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold active:scale-95 transition-all shadow-sm"
              title="Kartu berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* ================= TAB 2: COMPLETE VOCABULARY LIST ================= */}
      {activeTab === 'list' && (
        <div className="space-y-4">
          {/* Search and Filters */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari kata bahasa Inggris atau arti dalam bahasa Indonesia..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
              {/* POS filter */}
              <div className="flex items-center space-x-1">
                <span className="text-slate-400 font-medium mr-1">Kelas kata:</span>
                {['all', 'verb', 'noun', 'adj', 'adv'].map((pos) => (
                  <button
                    key={pos}
                    onClick={() => setSelectedPos(pos)}
                    className={`px-2.5 py-1 rounded-lg font-semibold uppercase text-[11px] transition-colors ${
                      selectedPos === pos
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {pos === 'all' ? 'Semua' : pos}
                  </button>
                ))}
              </div>

              {/* Status filter */}
              <div className="flex items-center space-x-1">
                <span className="text-slate-400 font-medium mr-1">Status:</span>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg px-2.5 py-1 text-xs border-0 font-medium"
                >
                  <option value="all">Semua Status</option>
                  <option value="known">Sudah Dikuasai</option>
                  <option value="unknown">Belum Dikuasai</option>
                  <option value="bookmarked">Favorit / Bookmark</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Counter */}
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between px-1">
            <span>Ditemukan <b>{filteredList.length}</b> kosakata</span>
            <span>{knownVocab.length} dari {vocabList.length} dikuasai</span>
          </div>

          {/* List Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filteredList.map((item) => {
              const isKnown = knownVocab.includes(item.word);
              const isBookmarked = bookmarkedVocab.includes(item.word);
              return (
                <div
                  key={item.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-slate-900 dark:text-white">
                          {item.word}
                        </span>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                          {item.pos}
                        </span>
                      </div>

                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => handlePlayVoice(item.word + '. ' + item.example)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                          title="Dengarkan pengucapan"
                        >
                          <Volume2 className="w-4 h-4 text-indigo-500" />
                        </button>

                        <button
                          onClick={() => onToggleBookmark(item.word)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            isBookmarked
                              ? 'text-amber-500'
                              : 'text-slate-300 hover:text-amber-500'
                          }`}
                          title="Bookmark kata"
                        >
                          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
                      {item.meaning}
                    </p>

                    {item.synonym && (
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Sinonim: <span className="text-slate-600 dark:text-slate-300">{item.synonym}</span>
                      </p>
                    )}

                    <p className="text-xs text-slate-500 dark:text-slate-400 italic mt-2 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg">
                      "{item.example}"
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <button
                      onClick={() => onToggleKnown(item.word)}
                      className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                        isKnown
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-600'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{isKnown ? 'Dikuasai' : 'Tandai Dikuasai'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================= TAB 3: VOCABULARY QUIZ ================= */}
      {activeTab === 'quiz' && (
        <div className="max-w-xl mx-auto space-y-6">
          {!quizStarted ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-sm">
                <Trophy className="w-8 h-8" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  Kuis Kosakata Akademik
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                  Uji ingatan Anda dengan 10 soal acak dari 500 Academic Word List pilihan.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => startQuiz('en_to_id')}
                  className="p-4 rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/40 hover:border-indigo-500 dark:hover:border-indigo-500 text-left transition-all group"
                >
                  <div className="font-bold text-xs text-indigo-700 dark:text-indigo-300">Mode 1</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 group-hover:text-indigo-600">
                    Tebak Arti Indonesia
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    English → Bahasa Indonesia
                  </div>
                </button>

                <button
                  onClick={() => startQuiz('id_to_en')}
                  className="p-4 rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/40 hover:border-blue-500 dark:hover:border-blue-500 text-left transition-all group"
                >
                  <div className="font-bold text-xs text-blue-700 dark:text-blue-300">Mode 2</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600">
                    Tebak Kata English
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Arti Indonesia → English
                  </div>
                </button>

                <button
                  onClick={() => startQuiz('synonym')}
                  className="p-4 rounded-2xl border border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/40 hover:border-purple-500 dark:hover:border-purple-500 text-left transition-all group"
                >
                  <div className="font-bold text-xs text-purple-700 dark:text-purple-300">Mode 3</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 group-hover:text-purple-600">
                    Tantangan Sinonim
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Cari persamaan kata
                  </div>
                </button>
              </div>
            </div>
          ) : quizFinished ? (
            /* Quiz Completed Result */
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-500 flex items-center justify-center mx-auto shadow-sm">
                <Trophy className="w-8 h-8" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  Kuis Selesai! 🎉
                </h2>
                <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 my-2">
                  {quizScore} / {quizQuestions.length}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {quizScore >= 8
                    ? 'Luar biasa! Kosakata Anda sangat kuat untuk level akademik.'
                    : quizScore >= 5
                    ? 'Bagus! Ulangi beberapa kali lagi untuk memantapkan ingatan.'
                    : 'Terus berlatih! Buka tab Flashcards untuk memperkuat kosakata baru.'}
                </p>
              </div>

              <div className="flex justify-center space-x-3">
                <button
                  onClick={() => startQuiz(quizMode)}
                  className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Ulangi Kuis</span>
                </button>
                <button
                  onClick={() => setQuizStarted(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  Pilih Mode Lain
                </button>
              </div>
            </div>
          ) : (
            /* Active Quiz Question */
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              {/* Question progress */}
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Soal {currentQuizIndex + 1} dari {quizQuestions.length}</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  Skor: {quizScore}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-600 h-full transition-all duration-300"
                  style={{ width: `${((currentQuizIndex + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>

              {/* Question Prompt */}
              <div className="text-center py-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {quizQuestions[currentQuizIndex].prompt}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {quizQuestions[currentQuizIndex].options.map((option, idx) => {
                  const isChosen = selectedAnswer === idx;
                  const isCorrect = idx === quizQuestions[currentQuizIndex].answerIndex;
                  let style = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-400';

                  if (selectedAnswer !== null) {
                    if (isCorrect) {
                      style = 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                    } else if (isChosen) {
                      style = 'bg-rose-50 dark:bg-rose-950/70 border-rose-500 text-rose-800 dark:text-rose-200';
                    } else {
                      style = 'opacity-50 border-slate-200 dark:border-slate-800';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectQuizOption(idx)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${style}`}
                    >
                      <span>
                        <b className="mr-2 text-slate-400 font-mono">
                          {['A', 'B', 'C', 'D'][idx]}.
                        </b>
                        {option}
                      </span>
                      {selectedAnswer !== null && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      )}
                      {selectedAnswer !== null && isChosen && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next button */}
              {selectedAnswer !== null && (
                <div className="space-y-4 pt-2 animate-in fade-in duration-200">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                    <p className="font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                      {selectedAnswer === quizQuestions[currentQuizIndex].answerIndex
                        ? '✅ Jawaban Benar!'
                        : '❌ Kurang Tepat!'}
                    </p>
                    <p>{quizQuestions[currentQuizIndex].explanation}</p>
                  </div>

                  <button
                    onClick={handleNextQuizQuestion}
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-colors"
                  >
                    {currentQuizIndex + 1 < quizQuestions.length ? 'Lanjut ke Soal Berikutnya →' : 'Lihat Hasil Akhir 🎉'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
