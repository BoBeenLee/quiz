import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Layout from '../components/layout';

export function Index() {
  const router = useRouter();

  const navigateToQuiz = useCallback(() => {
    router.push('/quiz');
  }, [router]);

  return (
    <Layout>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <span>Quiz</span>
            <Button onClick={navigateToQuiz}>퀴즈 풀기</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
