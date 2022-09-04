import produce from 'immer';
import create from 'zustand';
import { QuizItem } from '../../apis/quiz';
import { todayTime } from '../../utils/datetime';

interface QuizWithAnswer extends QuizItem {
  answer?: string;
  answerAt?: number;
}

interface QuizStoreProps {
  quizItems: QuizWithAnswer[];
  quizItemsAt: number | null;
  reset: () => void;
  retry: () => void;
  setAnswer: (id: string, answer: string) => void;
  setQuizItems: (quizItems: QuizWithAnswer[]) => void;
}

export const useQuizStore = create<QuizStoreProps>((set, __) => ({
  quizItems: [],
  quizItemsAt: null,
  reset: () => {
    set(
      produce<QuizStoreProps>((state) => {
        state.quizItems = [];
        state.quizItemsAt = null;
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
        state.quizItemsAt = todayTime();
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
        selected.answerAt = todayTime();
      })
    );
  },
  setQuizItems: (quizItems: QuizWithAnswer[]) => {
    set(
      produce<QuizStoreProps>((state) => {
        state.quizItems = quizItems;
        state.quizItemsAt = todayTime();
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
  const durationTime =
    (state.quizItems[state.quizItems.length].answerAt ??
      state.quizItemsAt ??
      0) - (state.quizItemsAt ?? 0);

  return {
    totalQuizCount,
    correctCount,
    incorrectCount,
    durationTime,
  };
};
