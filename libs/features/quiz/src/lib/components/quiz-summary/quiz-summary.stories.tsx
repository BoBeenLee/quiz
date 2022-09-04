import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { QuizSummary, QuizSummaryProps } from './quiz-summary';

export default {
  component: QuizSummary,
  title: 'QuizSummary',
  argTypes: {},
} as Meta;

const Template: Story<QuizSummaryProps> = (args) => <QuizSummary {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  totalQuizCount: 10,
  correctCount: 6,
  incorrectCount: 4,
  durationTime: 1000,
  onHome: action('onHome'),
  onRetry: action('onRetry'),
};
