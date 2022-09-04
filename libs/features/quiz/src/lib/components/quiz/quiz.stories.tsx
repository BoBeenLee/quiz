import { action } from "@storybook/addon-actions";
import { Story, Meta } from '@storybook/react';
import { MOCK_QUIZ_ITEMS } from '../../__mocks__/quiz';
import { Quiz, QuizProps } from './quiz';
import { QuizContainer } from './quiz-container';

export default {
  component: Quiz,
  title: 'Quiz',
  argTypes: {},
} as Meta;

const Template: Story<QuizProps> = (args) => <Quiz {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  quizItems: MOCK_QUIZ_ITEMS,
  onAnswer: action("onAnswer")
};

const TemplateContainer: Story<QuizProps> = (args) => (
  <QuizContainer {...args} />
);

export const PrimaryContainer = TemplateContainer.bind({});
PrimaryContainer.args = {};
