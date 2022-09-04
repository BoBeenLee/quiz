import { QuizSummaryContainer } from '@quiz/features/quiz';
import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/result.module.css';

export default function Result() {
  return (
    <Layout>
      <main className={styles.main}>
        <QuizSummaryContainer />
      </main>
    </Layout>
  );
}
