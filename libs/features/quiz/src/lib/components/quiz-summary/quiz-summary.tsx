import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import styles from './quiz-summary.module.css';
import { getMinutesAndSeconds } from '../../utils/datetime/datetime';
import QuizSummaryChart from '../quiz-summary-chart/quiz-summary-chart';

export interface QuizSummaryProps {
  className?: string;
  totalQuizCount: number;
  correctCount: number;
  incorrectCount: number;
  durationTime: number;
  onHome: () => void;
  onRetry: () => void;
}

export function QuizSummary(props: QuizSummaryProps) {
  const {
    className,
    totalQuizCount,
    correctCount,
    incorrectCount,
    durationTime,
    onHome,
    onRetry,
  } = props;
  const { minutes: durationMinutes, seconds: durationSeconds } =
    getMinutesAndSeconds(durationTime);
  return (
    <Card
      className={className}
      sx={{ width: '100%', maxWidth: 400, margin: 'auto' }}
    >
      <CardContent>
        <List component="ul">
          <ListItem>
            <Typography
              className={styles['title']}
              variant="h3"
              gutterBottom={true}
            >
              Quiz
            </Typography>
          </ListItem>
          <ListItem>
            <QuizSummaryChart
              className={styles['chart']}
              correctCount={correctCount}
              incorrectCount={incorrectCount}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="총 퀴즈수" secondary={`${totalQuizCount}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="정답수" secondary={`${correctCount}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="오답수" secondary={`${incorrectCount}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="소요시간"
              secondary={`${durationMinutes}분 ${durationSeconds}초`}
            />
          </ListItem>
        </List>
      </CardContent>
      <CardActions className={styles['actions']}>
        <Button variant="contained" onClick={onHome}>
          홈
        </Button>
        <Button onClick={onRetry}>다시 풀기</Button>
      </CardActions>
    </Card>
  );
}

export default QuizSummary;
