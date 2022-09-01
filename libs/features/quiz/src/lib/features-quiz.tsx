import styles from './features-quiz.module.css';

/* eslint-disable-next-line */
export interface FeaturesQuizProps {}

export function FeaturesQuiz(props: FeaturesQuizProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeaturesQuiz!</h1>
    </div>
  );
}

export default FeaturesQuiz;
