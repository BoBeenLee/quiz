import { useCallback, useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { QuizItem } from '../../apis/quiz';
import styles from './quiz-form.module.css';

export interface QuizFormProps {
  isLast?: boolean;
  data: QuizItem;
  onAnswer: (id: string, answer: string) => void;
  onNext: () => void;
}

const Label = styled.div<{ isCorrect: boolean; isIncorrect: boolean }>`
  ${({ isCorrect }) =>
    isCorrect
      ? css`
          color: green;
        `
      : css``}
  ${({ isIncorrect }) =>
    isIncorrect
      ? css`
          color: red;
        `
      : css``}
`;

export function QuizForm(props: QuizFormProps) {
  const { isLast, data, onAnswer, onNext } = props;
  const { question, correctAnswer, incorrectAnswers } = data;
  const answers = [correctAnswer, ...incorrectAnswers];
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    setValue(null);
  }, [data.id]);

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value !== null) {
      return;
    }
    setValue((event.target as HTMLInputElement).value);
  };

  const onQuizAnswer = useCallback(
    (answer: string) => {
      const id = data.id;
      return () => onAnswer(id, answer);
    },
    [data.id, onAnswer]
  );

  return (
    <div className={styles['main']}>
      <FormControl>
        <FormLabel
          id="quiz-group-label"
          color="info"
        >{`${question}`}</FormLabel>
        <RadioGroup
          aria-labelledby="quiz-group-label"
          name="quiz-group"
          value={value}
          onChange={onChangeValue}
        >
          {answers.map((answer) => {
            const isCorrect = correctAnswer === answer && value === answer;
            const isIncorrect = correctAnswer !== answer && value === answer;

            return (
              <FormControlLabel
                key={answer}
                value={answer}
                control={
                  <Radio
                    {...(isCorrect ? { color: 'success' } : {})}
                    {...(isIncorrect ? { color: 'error' } : {})}
                  />
                }
                label={
                  <Label isCorrect={isCorrect} isIncorrect={isIncorrect}>
                    {answer}
                  </Label>
                }
                onClick={onQuizAnswer(answer)}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <Button
        role="next-button"
        className={styles['next-button']}
        variant="contained"
        onClick={onNext}
        disabled={value === null}
      >
        {isLast ? "결과보기" : "다음"}
      </Button>
    </div>
  );
}

export default QuizForm;
