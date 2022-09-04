import { Story, Meta } from '@storybook/react';
import { QuizSummary, QuizSummaryProps } from './quiz-summary';

export default {
  component: QuizSummary,
  title: 'QuizSummary',
  argTypes: {},
} as Meta;

const Template: Story<QuizSummaryProps> = (args) => <QuizSummary {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
