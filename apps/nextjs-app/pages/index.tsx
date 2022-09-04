import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Layout from '../components/layout';
import styles from '../styles/index.module.css';

export function Index() {
  const router = useRouter();

  const navigateToQuiz = useCallback(() => {
    router.push('/quiz');
  }, [router]);

  return (
    <Layout>
      <main className={styles.main}>
        <Typography className={styles.title} variant="h2" gutterBottom={true}>
          Quiz
        </Typography>
        <Button variant="contained" onClick={navigateToQuiz}>
          퀴즈 풀기
        </Button>
      </main>
    </Layout>
  );
}

export default Index;
