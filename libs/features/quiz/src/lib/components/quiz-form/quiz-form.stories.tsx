import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { MOCK_QUIZ_ITEMS } from '../../__mocks__/quiz';
import { QuizForm, QuizFormProps } from './quiz-form';

export default {
  component: QuizForm,
  title: 'QuizForm',
  argTypes: {},
} as Meta;

const Template: Story<QuizFormProps> = (args) => <QuizForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: MOCK_QUIZ_ITEMS[0],
  onAnswer: action("onAnswer")
};
