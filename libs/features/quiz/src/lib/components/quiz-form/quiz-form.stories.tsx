import { Story, Meta } from '@storybook/react';
import { QuizForm, QuizFormProps } from './quiz-form';

export default {
  component: QuizForm,
  title: 'QuizForm',
  argTypes: {},
} as Meta;

const Template: Story<QuizFormProps> = (args) => <QuizForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
