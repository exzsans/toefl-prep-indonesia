import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  FileText,
  Headphones,
  Timer,
  BarChart3,
  Settings,
  Sun,
  Moon,
  Sparkles,
  Rocket,
  Menu,
  X,
  BookMarked
} from 'lucide-react';

export type TabType =
  | 'beranda'
  | 'simulasi'
  | 'vocab'
  | 'grammar'
  | 'reading'
  | 'listening'
  | 'statistik'
  | 'admin'
  | 'deploy';

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  knownVocabCount: number;
  totalVocabCount: number;
  accuracyPercent: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  isDark,
  onToggleTheme,
  knownVocabCount,
  totalVocabCount,
  accuracyPercent
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'beranda', label: 'Beranda', icon: GraduationCap },
    { id: 'simulasi', label: 'Simulasi Ujian', icon: Timer },
    { id: 'vocab', label: 'Vocabulary', icon: BookOpen },
    { id: 'grammar', label: 'Grammar', icon: FileText },
    { id: 'reading', label: 'Reading', icon: BookMarked },
    { id: 'listening', label: 'Listening', icon: Headphones },
    { id: 'statistik', label: 'Statistik', icon: BarChart3 },
    { id: 'admin', label: 'Kelola Data', icon: Settings },
    { id: 'deploy', label: 'Panduan Deploy', icon: Rocket }
  ];

  const handleSelect = (id: TabType) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleSelect('beranda')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  TOEFL Prep
                </span>
                <span className="ml-1 text-xs font-semibold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                  ID
                </span>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:block -mt-1 font-medium">
                  Persiapan Tes Standar & Komprehensif
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 shadow-sm'
                        : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : ''}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Quick Metrics and Theme Toggle */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="hidden sm:flex items-center space-x-3 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <span className="flex items-center space-x-1" title="Kata dikuasai">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-bold text-slate-800 dark:text-slate-100">
                    {knownVocabCount}
                  </span>
                  <span className="text-slate-400">/{totalVocabCount}</span>
                </span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span title="Akurasi latihan">
                  Akurasi:{' '}
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    {accuracyPercent}%
                  </span>
                </span>
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={onToggleTheme}
                aria-label="Ubah tema gelap/terang"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title={isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                aria-label="Buka menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-1 shadow-xl animate-in slide-in-from-top duration-150">
            <div className="flex sm:hidden items-center justify-between py-2 px-3 mb-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
              <span>Kosakata Dikuasai: <b>{knownVocabCount}/{totalVocabCount}</b></span>
              <span>Akurasi: <b className="text-indigo-600 dark:text-indigo-400">{accuracyPercent}%</b></span>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-left transition-all ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom Quick Bar */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 pb-safe">
        <div className="grid grid-cols-5 px-1 py-1">
          <button
            onClick={() => handleSelect('beranda')}
            className={`flex flex-col items-center py-1.5 px-1 rounded-lg text-[10px] font-semibold transition-colors ${
              currentTab === 'beranda'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <GraduationCap className="w-5 h-5 mb-0.5" />
            <span>Beranda</span>
          </button>

          <button
            onClick={() => handleSelect('simulasi')}
            className={`flex flex-col items-center py-1.5 px-1 rounded-lg text-[10px] font-semibold transition-colors ${
              currentTab === 'simulasi'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Timer className="w-5 h-5 mb-0.5" />
            <span>Simulasi</span>
          </button>

          <button
            onClick={() => handleSelect('vocab')}
            className={`flex flex-col items-center py-1.5 px-1 rounded-lg text-[10px] font-semibold transition-colors ${
              currentTab === 'vocab'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <BookOpen className="w-5 h-5 mb-0.5" />
            <span>Vocab</span>
          </button>

          <button
            onClick={() => handleSelect('grammar')}
            className={`flex flex-col items-center py-1.5 px-1 rounded-lg text-[10px] font-semibold transition-colors ${
              currentTab === 'grammar'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <FileText className="w-5 h-5 mb-0.5" />
            <span>Grammar</span>
          </button>

          <button
            onClick={() => handleSelect('listening')}
            className={`flex flex-col items-center py-1.5 px-1 rounded-lg text-[10px] font-semibold transition-colors ${
              currentTab === 'listening'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Headphones className="w-5 h-5 mb-0.5" />
            <span>Listening</span>
          </button>
        </div>
      </nav>
    </>
  );
};
