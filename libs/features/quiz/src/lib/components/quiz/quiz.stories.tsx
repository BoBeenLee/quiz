import { Story, Meta } from '@storybook/react';
import { MOCK_QUIZ_ITEMS } from '../../__mocks__/quiz';
import { Quiz, QuizProps } from './quiz';

export default {
  component: Quiz,
  title: 'Quiz',
  argTypes: {},
} as Meta;

const Template: Story<QuizProps> = (args) => <Quiz {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  quizItems: MOCK_QUIZ_ITEMS,
};
