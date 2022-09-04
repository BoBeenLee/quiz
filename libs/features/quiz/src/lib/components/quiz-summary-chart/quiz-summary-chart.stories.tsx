import { Story, Meta } from '@storybook/react';
import { QuizSummaryChart, QuizSummaryChartProps } from './quiz-summary-chart';

export default {
  component: QuizSummaryChart,
  title: 'QuizSummaryChart',
  argTypes: {},
} as Meta;

const Template: Story<QuizSummaryChartProps> = (args) => (
  <QuizSummaryChart {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  correctCount: 20,
  incorrectCount: 10,
};
