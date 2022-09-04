import { Typography } from '@mui/material';
import { QuizContainer } from '@quiz/features/quiz';
import React, { Suspense } from 'react';
import Layout from '../components/layout';
import styles from '../styles/quiz.module.css';

export default function Quiz() {
  return (
    <Layout>
      <main className={styles.main}>
        <Typography className={styles.title} variant="h2" gutterBottom={true}>
          Quiz
        </Typography>
        <Suspense fallback={<div>Loading...</div>}>
          <QuizContainer />
        </Suspense>
      </main>
    </Layout>
  );
}
