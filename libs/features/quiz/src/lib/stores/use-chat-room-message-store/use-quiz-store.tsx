import produce from 'immer';
import create from 'zustand';
import { QuizItem } from '../../apis/quiz';

interface QuizWithAnswer extends QuizItem {
  answer?: string;
}

interface QuizStoreProps {
  quizItems: QuizWithAnswer[];
  reset: () => void;
  retry: () => void;
  setAnswer: (id: string, answer: string) => void;
  hydrate: (quizItems: QuizWithAnswer[]) => void;
}

export const useQuizStore = create<QuizStoreProps>((set, __) => ({
  quizItems: [],
  reset: () => {
    set(
      produce<QuizStoreProps>((state) => {
        state.quizItems = [];
      })
    );
  },
  retry: () => {
    set(
      produce<QuizStoreProps>((state) => {
        state.quizItems = state.quizItems.map((item) => {
          return {
            ...item,
            answer: undefined,
          };
        });
      })
    );
  },
  setAnswer: (id: string, answer: string) => {
    set(
      produce<QuizStoreProps>((state) => {
        const selected = state.quizItems.find((item) => item.id === id);
        if (!selected) {
          return;
        }
        selected.answer = answer;
      })
    );
  },
  hydrate: (quizItems: QuizWithAnswer[]) => {
    set(
      produce<QuizStoreProps>((state) => {
        state.quizItems = quizItems;
      })
    );
  },
}));

export const quizSummary = (state: QuizStoreProps) => {
  const totalQuizCount = state.quizItems.length;
  const correctCount = state.quizItems.filter(
    (item) => item.answer === item.correctAnswer
  ).length;
  const incorrectCount = totalQuizCount - correctCount;

  return {
    totalQuizCount,
    correctCount,
    incorrectCount,
  };
};