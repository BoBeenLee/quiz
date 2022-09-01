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

export interface QuizFormProps {
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
  const { data, onAnswer, onNext } = props;
  const { question, correctAnswer, incorrectAnswers } = data;
  const answers = [correctAnswer, ...incorrectAnswers];
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    setValue(null);
  }, [data]);

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    <div>
      <FormControl>
        <FormLabel id="quiz-group-label">{`${question}`}</FormLabel>
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
      <div>
        <Button variant="contained" onClick={onNext} disabled={value === null}>
          다음
        </Button>
      </div>
    </div>
  );
}

export default QuizForm;
