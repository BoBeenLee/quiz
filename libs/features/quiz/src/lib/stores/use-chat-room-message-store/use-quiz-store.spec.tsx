import { useQuizStore } from './use-quiz-store';

describe('useQuizStore', () => {
  beforeEach(() => {
    const { getState } = useQuizStore;
    getState().reset();
  });

  test('should empty messages', () => {
    const { getState } = useQuizStore;
    expect(getState().quizItems.length).toEqual(0);
  });
});
