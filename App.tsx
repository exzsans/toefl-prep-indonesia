/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, TabType } from './components/Navbar';
import { HomeDashboard } from './components/HomeDashboard';
import { VocabularySection } from './components/VocabularySection';
import { GrammarSection } from './components/GrammarSection';
import { ReadingSection } from './components/ReadingSection';
import { ListeningSection } from './components/ListeningSection';
import { SimulationSection } from './components/SimulationSection';
import { StatisticsSection } from './components/StatisticsSection';
import { AdminSection } from './components/AdminSection';
import { DeploymentGuideSection } from './components/DeploymentGuideSection';
import {
  getSavedProgress,
  saveProgress,
  getCustomData,
  getAllVocabulary,
  getAllGrammarLessons,
  getAllGrammarQuestions,
  getAllReadingPassages,
  getAllListeningPassages
} from './services/storage';
import { UserProgress, SimulationResult } from './data/types';

export default function App() {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('toefl_prep_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  // Active navigation tab
  const [currentTab, setCurrentTab] = useState<TabType>('beranda');

  // User progress state
  const [progress, setProgress] = useState<UserProgress>(getSavedProgress);

  // Trigger to reload custom data when updated via Admin
  const [dataVersion, setDataVersion] = useState(0);

  // Synchronize dark theme class on document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      try {
        localStorage.setItem('toefl_prep_theme', 'dark');
      } catch (e) {}
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      try {
        localStorage.setItem('toefl_prep_theme', 'light');
      } catch (e) {}
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Re-fetch data on version change
  const vocabList = getAllVocabulary();
  const grammarLessons = getAllGrammarLessons();
  const grammarQuestions = getAllGrammarQuestions();
  const readingPassages = getAllReadingPassages();
  const readingQuestionsCount = readingPassages.reduce((acc, p) => acc + p.questions.length, 0);
  const listeningPassages = getAllListeningPassages();
  const customDataStore = getCustomData();

  // Progress Update Helpers
  const updateProgress = (updater: (prev: UserProgress) => UserProgress) => {
    setProgress((prev) => {
      const next = updater(prev);
      saveProgress(next);
      return next;
    });
  };

  // Vocabulary handlers
  const handleToggleKnownVocab = (word: string) => {
    updateProgress((prev) => {
      const exists = prev.knownVocab.includes(word);
      const knownVocab = exists
        ? prev.knownVocab.filter((w) => w !== word)
        : [...prev.knownVocab, word];
      return { ...prev, knownVocab };
    });
  };

  const handleToggleBookmarkVocab = (word: string) => {
    updateProgress((prev) => {
      const exists = prev.bookmarkedVocab.includes(word);
      const bookmarkedVocab = exists
        ? prev.bookmarkedVocab.filter((w) => w !== word)
        : [...prev.bookmarkedVocab, word];
      return { ...prev, bookmarkedVocab };
    });
  };

  // Question Answer handler
  const handleAnswerQuestion = (questionId: string, selectedIndex: number, isCorrect: boolean) => {
    updateProgress((prev) => {
      return {
        ...prev,
        answeredQuestions: {
          ...prev.answeredQuestions,
          [questionId]: {
            selected: selectedIndex,
            isCorrect,
            timestamp: Date.now()
          }
        }
      };
    });
  };

  const handleToggleBookmarkQuestion = (questionId: string) => {
    updateProgress((prev) => {
      const exists = prev.bookmarkedQuestions.includes(questionId);
      const bookmarkedQuestions = exists
        ? prev.bookmarkedQuestions.filter((id) => id !== questionId)
        : [...prev.bookmarkedQuestions, questionId];
      return { ...prev, bookmarkedQuestions };
    });
  };

  // Listening attempt handler
  const handleSaveListeningAttempt = (passageId: string, score: number, total: number) => {
    updateProgress((prev) => {
      return {
        ...prev,
        listeningAttempts: {
          ...prev.listeningAttempts,
          [passageId]: {
            score,
            total,
            timestamp: Date.now()
          }
        }
      };
    });
  };

  // Simulation result handler
  const handleSaveSimulationResult = (result: SimulationResult) => {
    updateProgress((prev) => {
      return {
        ...prev,
        simulationHistory: [...prev.simulationHistory, result]
      };
    });
  };

  // Reset Progress handler
  const handleResetProgress = () => {
    const emptyProgress: UserProgress = {
      knownVocab: [],
      bookmarkedVocab: [],
      bookmarkedQuestions: [],
      answeredQuestions: {},
      listeningAttempts: {},
      simulationHistory: []
    };
    setProgress(emptyProgress);
    saveProgress(emptyProgress);
  };

  // Accuracy calculation
  const totalAnswered = Object.keys(progress.answeredQuestions).length;
  const correctCount = Object.values(progress.answeredQuestions).filter((q) => q.isCorrect).length;
  const accuracyPercent = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col transition-colors selection:bg-indigo-500 selection:text-white">
      {/* Top sticky navigation bar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        knownVocabCount={progress.knownVocab.length}
        totalVocabCount={vocabList.length}
        accuracyPercent={accuracyPercent}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {currentTab === 'beranda' && (
          <HomeDashboard
            onNavigate={setCurrentTab}
            progress={progress}
            totalVocabCount={vocabList.length}
            totalGrammarQuestionsCount={grammarQuestions.length}
            totalReadingQuestionsCount={readingQuestionsCount}
            totalListeningCount={listeningPassages.length}
          />
        )}

        {currentTab === 'simulasi' && (
          <SimulationSection
            allGrammarQuestions={grammarQuestions}
            allReadingPassages={readingPassages}
            allListeningPassages={listeningPassages}
            onSaveSimulationResult={handleSaveSimulationResult}
          />
        )}

        {currentTab === 'vocab' && (
          <VocabularySection
            vocabList={vocabList}
            knownVocab={progress.knownVocab}
            bookmarkedVocab={progress.bookmarkedVocab}
            onToggleKnown={handleToggleKnownVocab}
            onToggleBookmark={handleToggleBookmarkVocab}
          />
        )}

        {currentTab === 'grammar' && (
          <GrammarSection
            lessons={grammarLessons}
            questions={grammarQuestions}
            answeredQuestions={progress.answeredQuestions}
            bookmarkedQuestions={progress.bookmarkedQuestions}
            onAnswerQuestion={handleAnswerQuestion}
            onToggleBookmarkQuestion={handleToggleBookmarkQuestion}
          />
        )}

        {currentTab === 'reading' && (
          <ReadingSection
            passages={readingPassages}
            answeredQuestions={progress.answeredQuestions}
            bookmarkedQuestions={progress.bookmarkedQuestions}
            onAnswerQuestion={handleAnswerQuestion}
            onToggleBookmarkQuestion={handleToggleBookmarkQuestion}
          />
        )}

        {currentTab === 'listening' && (
          <ListeningSection
            passages={listeningPassages}
            listeningAttempts={progress.listeningAttempts}
            onSaveAttempt={handleSaveListeningAttempt}
          />
        )}

        {currentTab === 'statistik' && (
          <StatisticsSection
            progress={progress}
            totalVocabCount={vocabList.length}
            totalGrammarQuestionsCount={grammarQuestions.length}
            totalReadingQuestionsCount={readingQuestionsCount}
            totalListeningCount={listeningPassages.length}
            onResetProgress={handleResetProgress}
          />
        )}

        {currentTab === 'admin' && (
          <AdminSection
            customData={customDataStore}
            onDataUpdated={() => setDataVersion((v) => v + 1)}
          />
        )}

        {currentTab === 'deploy' && <DeploymentGuideSection />}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} TOEFL Prep Indonesia. Platform persiapan TOEFL ITP & iBT mandiri.</p>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentTab('deploy')}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold"
            >
              Panduan Deploy Gratis
            </button>
            <span>·</span>
            <button
              onClick={() => setCurrentTab('admin')}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold"
            >
              Kelola Soal
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
