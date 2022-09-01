import { Bold } from '@quiz/shared-ui-components';
import { useRouter } from "next/router";
import Layout from '../components/layout';

export function Index() {
  const router = useRouter();
  
  return (
    <Layout>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <Bold.Bold20>
              <span>Quiz</span>
            </Bold.Bold20>
            <button>퀴즈 풀기</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
