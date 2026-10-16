import React, { useState } from 'react';
import {
  Settings,
  PlusCircle,
  Download,
  Upload,
  RotateCcw,
  BookOpen,
  FileText,
  BookMarked,
  Headphones,
  Check,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import {
  VocabItem,
  QuestionItem,
  ReadingPassage,
  ListeningPassage,
  PartOfSpeech,
  DifficultyLevel
} from '../data/types';
import { CustomDataStore, saveCustomData, getCustomData } from '../services/storage';

interface AdminSectionProps {
  customData: CustomDataStore;
  onDataUpdated: () => void;
}

export const AdminSection: React.FC<AdminSectionProps> = ({
  customData,
  onDataUpdated
}) => {
  const [activeForm, setActiveForm] = useState<'vocab' | 'grammar' | 'reading' | 'listening' | 'json'>('vocab');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form 1: New Vocab
  const [vocabWord, setVocabWord] = useState('');
  const [vocabPos, setVocabPos] = useState<PartOfSpeech>('noun');
  const [vocabMeaning, setVocabMeaning] = useState('');
  const [vocabExample, setVocabExample] = useState('');
  const [vocabSynonym, setVocabSynonym] = useState('');

  // Form 2: New Grammar Question
  const [grammarQuestion, setGrammarQuestion] = useState('');
  const [grammarTopic, setGrammarTopic] = useState('Core Structure');
  const [grammarDifficulty, setGrammarDifficulty] = useState<DifficultyLevel>('Medium');
  const [grammarOptA, setGrammarOptA] = useState('');
  const [grammarOptB, setGrammarOptB] = useState('');
  const [grammarOptC, setGrammarOptC] = useState('');
  const [grammarOptD, setGrammarOptD] = useState('');
  const [grammarCorrect, setGrammarCorrect] = useState<number>(0);
  const [grammarExplanation, setGrammarExplanation] = useState('');

  // Form 3: JSON Import/Export
  const [jsonInput, setJsonInput] = useState('');

  const showNotification = (msg: string, isError = false) => {
    if (isError) {
      setErrorMessage(msg);
      setSuccessMessage(null);
    } else {
      setSuccessMessage(msg);
      setErrorMessage(null);
    }
    setTimeout(() => {
      setSuccessMessage(null);
      setErrorMessage(null);
    }, 4000);
  };

  // Add Vocab Handler
  const handleAddVocab = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vocabWord.trim() || !vocabMeaning.trim() || !vocabExample.trim()) {
      showNotification('Mohon lengkapi kata, arti, dan contoh kalimat.', true);
      return;
    }

    const newItem: VocabItem = {
      id: `custom_v_${Date.now()}`,
      word: vocabWord.trim().toLowerCase(),
      pos: vocabPos,
      meaning: vocabMeaning.trim(),
      example: vocabExample.trim(),
      synonym: vocabSynonym.trim() || undefined,
      isCustom: true
    };

    const current = getCustomData();
    current.vocab.push(newItem);
    saveCustomData(current);
    onDataUpdated();

    setVocabWord('');
    setVocabMeaning('');
    setVocabExample('');
    setVocabSynonym('');
    showNotification(`Kosakata "${newItem.word}" berhasil ditambahkan ke database!`);
  };

  // Add Grammar Handler
  const handleAddGrammar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!grammarQuestion.trim() || !grammarOptA || !grammarOptB || !grammarOptC || !grammarOptD) {
      showNotification('Mohon lengkapi pertanyaan dan seluruh pilihan jawaban A, B, C, D.', true);
      return;
    }

    const newQuestion: QuestionItem = {
      id: `custom_g_${Date.now()}`,
      section: 'Grammar',
      topic: grammarTopic.trim(),
      difficulty: grammarDifficulty,
      question: grammarQuestion.trim(),
      options: [grammarOptA.trim(), grammarOptB.trim(), grammarOptC.trim(), grammarOptD.trim()],
      answer: grammarCorrect,
      explanation: grammarExplanation.trim() || 'Pembahasan kunci jawaban.',
      isCustom: true
    };

    const current = getCustomData();
    current.questions.push(newQuestion);
    saveCustomData(current);
    onDataUpdated();

    setGrammarQuestion('');
    setGrammarOptA('');
    setGrammarOptB('');
    setGrammarOptC('');
    setGrammarOptD('');
    setGrammarExplanation('');
    showNotification('Soal Grammar baru berhasil disimpan ke database!');
  };

  // Import JSON Handler (Supports old toefl-tambahan.json structure or v2 objects)
  const handleImportJSON = () => {
    try {
      if (!jsonInput.trim()) {
        showNotification('Tempelkan teks JSON sebelum mengimpor.', true);
        return;
      }

      const parsed = JSON.parse(jsonInput);
      const current = getCustomData();

      let addedVocab = 0;
      let addedQuestions = 0;
      let addedListening = 0;

      // Handle raw array of vocab or object format from toefl-tambahan.json
      if (parsed.vocab && Array.isArray(parsed.vocab)) {
        parsed.vocab.forEach((item: any, idx: number) => {
          if (Array.isArray(item)) {
            // format: ["word", "pos", "meaning", "example"]
            current.vocab.push({
              id: `imported_v_${Date.now()}_${idx}`,
              word: item[0],
              pos: item[1] as PartOfSpeech,
              meaning: item[2],
              example: item[3] || '',
              isCustom: true
            });
            addedVocab++;
          } else if (item.word) {
            current.vocab.push({ ...item, id: `imported_v_${Date.now()}_${idx}`, isCustom: true });
            addedVocab++;
          }
        });
      }

      if (parsed.questions && Array.isArray(parsed.questions)) {
        parsed.questions.forEach((q: any, idx: number) => {
          current.questions.push({
            id: `imported_q_${Date.now()}_${idx}`,
            section: (q.t as any) || 'Grammar',
            topic: q.topic || 'General Structure',
            difficulty: q.difficulty || 'Medium',
            question: q.q,
            options: q.o || [],
            answer: q.a,
            explanation: q.e || '',
            isCustom: true
          });
          addedQuestions++;
        });
      }

      if (parsed.listening && Array.isArray(parsed.listening)) {
        parsed.listening.forEach((l: any, idx: number) => {
          current.listening.push({
            id: `imported_l_${Date.now()}_${idx}`,
            title: l.title || 'Listening Exercise',
            type: l.type || 'conversation',
            scenario: l.scenario || 'Percakapan kampus berbahasa Inggris.',
            difficulty: 'Medium',
            text: l.text,
            qs: (l.qs || []).map((q: any, qIdx: number) => ({
              id: `imported_lq_${Date.now()}_${idx}_${qIdx}`,
              q: q.q,
              o: q.o || [],
              a: q.a,
              e: q.e || 'Pembahasan audio listening.'
            })),
            isCustom: true
          });
          addedListening++;
        });
      }

      saveCustomData(current);
      onDataUpdated();
      setJsonInput('');
      showNotification(
        `Berhasil mengimpor: ${addedVocab} kosakata, ${addedQuestions} soal, dan ${addedListening} listening audio!`
      );
    } catch (err) {
      console.error(err);
      showNotification('Format JSON tidak valid. Pastikan sintaks kurung kurawal & tanda kutip benar.', true);
    }
  };

  // Export JSON Handler
  const handleExportJSON = () => {
    const data = getCustomData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `toefl_custom_dataset_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showNotification('File JSON berhasil diunduh ke komputer Anda!');
  };

  // Clear Custom Data
  const handleClearCustomData = () => {
    if (confirm('Hapus semua konten tambahan buatan Anda? Konten bawaan 500 vocab & 200 soal akan tetap ada.')) {
      saveCustomData({ vocab: [], questions: [], reading: [], listening: [] });
      onDataUpdated();
      showNotification('Semua data kustom berhasil dibersihkan.');
    }
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center space-x-2">
          <Settings className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          <span>Kelola & Tambah Konten Soal</span>
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Perkaya bank soal dan kosakata aplikasi Anda lewat formulir atau impor file JSON.
        </p>
      </div>

      {/* Notifications */}
      {successMessage && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center space-x-2 animate-in fade-in duration-200">
          <Check className="w-4 h-4 flex-shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs font-semibold flex items-center space-x-2 animate-in fade-in duration-200">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Sub-tab Pills */}
      <div className="flex flex-wrap gap-2 text-xs font-bold">
        <button
          onClick={() => setActiveForm('vocab')}
          className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl transition-all ${
            activeForm === 'vocab'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Tambah Kosakata</span>
        </button>

        <button
          onClick={() => setActiveForm('grammar')}
          className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl transition-all ${
            activeForm === 'grammar'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Tambah Soal Grammar</span>
        </button>

        <button
          onClick={() => setActiveForm('json')}
          className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl transition-all ${
            activeForm === 'json'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
          }`}
        >
          <Upload className="w-4 h-4" />
          <span>Impor / Ekspor JSON</span>
        </button>
      </div>

      {/* ================= FORM 1: VOCABULARY ================= */}
      {activeForm === 'vocab' && (
        <form
          onSubmit={handleAddVocab}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm max-w-2xl"
        >
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <PlusCircle className="w-5 h-5 text-indigo-600" />
            <span>Formulir Tambah Kosakata Baru</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Kata Bahasa Inggris *
              </label>
              <input
                type="text"
                required
                value={vocabWord}
                onChange={(e) => setVocabWord(e.target.value)}
                placeholder="Contoh: diminish, articulate"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Kelas Kata (Part of Speech) *
              </label>
              <select
                value={vocabPos}
                onChange={(e) => setVocabPos(e.target.value as PartOfSpeech)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 font-medium"
              >
                <option value="noun">Noun (Kata Benda)</option>
                <option value="verb">Verb (Kata Kerja)</option>
                <option value="adj">Adjective (Kata Sifat)</option>
                <option value="adv">Adverb (Kata Keterangan)</option>
              </select>
            </div>
          </div>

          <div className="text-xs">
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Arti dalam Bahasa Indonesia *
            </label>
            <input
              type="text"
              required
              value={vocabMeaning}
              onChange={(e) => setVocabMeaning(e.target.value)}
              placeholder="Contoh: berkurang, menyusut perlahan"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="text-xs">
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Contoh Kalimat Akademik (English) *
            </label>
            <input
              type="text"
              required
              value={vocabExample}
              onChange={(e) => setVocabExample(e.target.value)}
              placeholder="Contoh: The public interest in the proposal has steadily diminished."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="text-xs">
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Sinonim (Opsional)
            </label>
            <input
              type="text"
              value={vocabSynonym}
              onChange={(e) => setVocabSynonym(e.target.value)}
              placeholder="Contoh: decrease, lessen, shrink"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-colors"
          >
            Simpan Kosakata Baru
          </button>
        </form>
      )}

      {/* ================= FORM 2: GRAMMAR QUESTION ================= */}
      {activeForm === 'grammar' && (
        <form
          onSubmit={handleAddGrammar}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm max-w-2xl"
        >
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <PlusCircle className="w-5 h-5 text-emerald-600" />
            <span>Formulir Tambah Soal Grammar Baru</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Kategori / Topik Grammar
              </label>
              <input
                type="text"
                value={grammarTopic}
                onChange={(e) => setGrammarTopic(e.target.value)}
                placeholder="Contoh: Subject-Verb Agreement, Inversion"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Tingkat Kesulitan
              </label>
              <select
                value={grammarDifficulty}
                onChange={(e) => setGrammarDifficulty(e.target.value as DifficultyLevel)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 font-medium"
              >
                <option value="Easy">Mudah (Easy)</option>
                <option value="Medium">Menengah (Medium)</option>
                <option value="Hard">Sulit (Hard)</option>
              </select>
            </div>
          </div>

          <div className="text-xs">
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Teks Pertanyaan (Gunakan ___ untuk bagian rumpang) *
            </label>
            <textarea
              required
              rows={3}
              value={grammarQuestion}
              onChange={(e) => setGrammarQuestion(e.target.value)}
              placeholder="Contoh: The list of experimental parameters ___ on the professor's table."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Pilihan A *
              </label>
              <input
                type="text"
                required
                value={grammarOptA}
                onChange={(e) => setGrammarOptA(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Pilihan B *
              </label>
              <input
                type="text"
                required
                value={grammarOptB}
                onChange={(e) => setGrammarOptB(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Pilihan C *
              </label>
              <input
                type="text"
                required
                value={grammarOptC}
                onChange={(e) => setGrammarOptC(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Pilihan D *
              </label>
              <input
                type="text"
                required
                value={grammarOptD}
                onChange={(e) => setGrammarOptD(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Kunci Jawaban Benar *
              </label>
              <select
                value={grammarCorrect}
                onChange={(e) => setGrammarCorrect(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value={0}>A ({grammarOptA || 'Pilihan A'})</option>
                <option value={1}>B ({grammarOptB || 'Pilihan B'})</option>
                <option value={2}>C ({grammarOptC || 'Pilihan C'})</option>
                <option value={3}>D ({grammarOptD || 'Pilihan D'})</option>
              </select>
            </div>
          </div>

          <div className="text-xs">
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Pembahasan & Alasan (Bahasa Indonesia) *
            </label>
            <textarea
              required
              rows={3}
              value={grammarExplanation}
              onChange={(e) => setGrammarExplanation(e.target.value)}
              placeholder="Jelaskan alasan rumus gramatikal kenapa jawaban ini benar..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
          >
            Simpan Soal Grammar
          </button>
        </form>
      )}

      {/* ================= FORM 3: JSON IMPOR / EKSPOR ================= */}
      {activeForm === 'json' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm max-w-2xl">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <Upload className="w-5 h-5 text-indigo-600" />
              <span>Impor & Ekspor Format JSON</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Kompatibel dengan format file <code>toefl-tambahan.json</code> atau backup data kustom.
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
              Tempelkan JSON di sini:
            </label>
            <textarea
              rows={8}
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder={`{\n  "vocab": [["word", "noun", "arti", "contoh"]],\n  "questions": [{"t": "Grammar", "q": "...", "o": ["a","b","c","d"], "a": 0, "e": "penjelasan"}]\n}`}
              className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <button
              onClick={handleImportJSON}
              className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-colors"
            >
              <Upload className="w-4 h-4" />
              <span>Impor Data JSON</span>
            </button>

            <button
              onClick={handleExportJSON}
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-50 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Ekspor Backup (.json)</span>
            </button>

            <button
              onClick={handleClearCustomData}
              className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 font-bold text-xs hover:bg-rose-50 transition-colors ml-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Bersihkan Data Kustom</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
            Jumlah konten tambahan tersimpan saat ini: <b>{customData.vocab.length}</b> kosakata, <b>{customData.questions.length}</b> soal grammar, <b>{customData.listening.length}</b> listening audio.
          </div>
        </div>
      )}
    </div>
  );
};
