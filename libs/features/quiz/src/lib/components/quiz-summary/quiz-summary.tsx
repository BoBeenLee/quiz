import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Divider, List, ListItem, ListItemText } from '@mui/material';
import styles from './quiz-summary.module.css';

export interface QuizSummaryProps {
  className?: string;
  totalQuizCount: number;
  correctCount: number;
  incorrectCount: number;
  onHome: () => void;
  onRetry: () => void;
}

export function QuizSummary(props: QuizSummaryProps) {
  const { className, totalQuizCount, correctCount, incorrectCount } = props;
  return (
    <Card className={className} sx={{ maxWidth: 345 }}>
      <CardContent>
        <List component="ul">
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
        </List>
      </CardContent>
      <CardActions className={styles['actions']}>
        <Button variant="contained">홈</Button>
        <Button>다시 풀기</Button>
      </CardActions>
    </Card>
  );
}

export default QuizSummary;
