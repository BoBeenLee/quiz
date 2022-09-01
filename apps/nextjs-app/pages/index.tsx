import { test } from '@quiz/shared-apis';
import { Bold, Image } from '@quiz/shared-ui-components';
import {
  todosByOrderDESCSelector,
  useTodoStore,
} from '@quiz/features-todo';
import { useEffect } from 'react';
import { env } from '../libs/env';
import Layout from '../components/layout';
import { getImages } from '@quiz/images';

export function Index() {
  const todos = useTodoStore(todosByOrderDESCSelector);

  useEffect(() => {
    const fetchTest = async () => {
      const testData = await test<{
        status: string;
      }>({
        url: '/api/healthz',
      });
      console.log(testData);
    };
    fetchTest();
  }, []);

  return (
    <Layout>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <Bold.Bold20>
              <span> Hello there, </span>
              Welcome quiz 👋 Todo List (API_URL={env.API_URL})
            </Bold.Bold20>
            <Image
              style={{
                width: 100,
                height: 100,
              }}
              alt="storybook"
              source={{ uri: getImages().iconImages.storybook }}
            />
            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>{todo.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
