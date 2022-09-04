import { act } from 'react-dom/test-utils';
import { MOCK_QUIZ_ITEMS } from '../../__mocks__/quiz';
import { useQuizStore } from './use-quiz-store';

describe('useQuizStore', () => {
  beforeEach(() => {
    const { getState } = useQuizStore;
    getState().reset();
  });

  test('should empty quizStore', () => {
    const { getState } = useQuizStore;
    expect(getState().quizItems.length).toBe(0);
    expect(getState().quizItemsAt).toBe(null);
  });

  test('should not empty quizStore', () => {
    const { getState } = useQuizStore;

    act(() => {
      getState().setQuizItems(MOCK_QUIZ_ITEMS);
    });

    expect(getState().quizItems.length).toBe(MOCK_QUIZ_ITEMS.length);
    expect(getState().quizItemsAt).not.toBe(null);
  });

  test('should be setAnswer', () => {
    const { getState } = useQuizStore;

    act(() => {
      getState().setQuizItems(MOCK_QUIZ_ITEMS);
      getState().setAnswer(MOCK_QUIZ_ITEMS[0].id, 'test');
    });

    expect(getState().quizItems[0].answer).toBe('test');
  });

  test('should be retry', () => {
    const { getState } = useQuizStore;

    act(() => {
      getState().setQuizItems(MOCK_QUIZ_ITEMS);
      getState().setAnswer(MOCK_QUIZ_ITEMS[0].id, 'test');
      getState().retry();
    });

    expect(getState().quizItems[0].answer).toBe(undefined);
  });

  test('should be reset', () => {
    const { getState } = useQuizStore;

    act(() => {
      getState().setQuizItems(MOCK_QUIZ_ITEMS);
      getState().setAnswer(MOCK_QUIZ_ITEMS[0].id, 'test');
      getState().reset();
    });

    expect(getState().quizItems.length).toBe(0);
    expect(getState().quizItemsAt).toBe(null);
  });
});
