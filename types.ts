export type PartOfSpeech = 'noun' | 'verb' | 'adj' | 'adv' | 'phrase';

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export interface VocabItem {
  id: string;
  word: string;
  pos: PartOfSpeech;
  meaning: string;
  example: string;
  synonym?: string;
  category?: string;
  isCustom?: boolean;
}

export interface GrammarLesson {
  id: string;
  number: number;
  title: string;
  category: string;
  description: string;
  formula?: string;
  examples: string[];
  toeflTip?: string;
}

export interface QuestionItem {
  id: string;
  section: 'Grammar' | 'Reading' | 'Vocabulary';
  topic: string;
  difficulty: DifficultyLevel;
  question: string;
  options: string[];
  answer: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanation: string;
  passageId?: string;
  passageText?: string;
  isCustom?: boolean;
}

export interface ReadingPassage {
  id: string;
  title: string;
  category: string;
  difficulty: DifficultyLevel;
  passage: string;
  questions: QuestionItem[];
  isCustom?: boolean;
}

export interface ListeningQuestion {
  id: string;
  q: string;
  o: string[];
  a: number;
  e: string;
}

export interface ListeningPassage {
  id: string;
  title: string;
  type: 'conversation' | 'lecture';
  scenario: string;
  text: string;
  qs: ListeningQuestion[];
  difficulty: DifficultyLevel;
  isCustom?: boolean;
}

export interface SimulationResult {
  id: string;
  date: string;
  durationMinutes: number;
  timeSpentSeconds: number;
  listening: {
    correct: number;
    total: number;
    scaled: number;
  };
  structure: {
    correct: number;
    total: number;
    scaled: number;
  };
  reading: {
    correct: number;
    total: number;
    scaled: number;
  };
  totalScaledScore: number;
  answers: Record<string, number>;
}

export interface UserProgress {
  knownVocab: string[]; // words or ids
  bookmarkedVocab: string[];
  bookmarkedQuestions: string[];
  answeredQuestions: Record<string, { selected: number; isCorrect: boolean; timestamp: number }>;
  listeningAttempts: Record<string, { score: number; total: number; timestamp: number }>;
  simulationHistory: SimulationResult[];
}
