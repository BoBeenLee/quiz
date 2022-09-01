import { Story, Meta } from '@storybook/react';
import { Quiz, QuizProps } from './quiz';

export default {
  component: Quiz,
  title: 'Quiz',
  argTypes: {},
} as Meta;

const Template: Story<QuizProps> = (args) => <Quiz {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
