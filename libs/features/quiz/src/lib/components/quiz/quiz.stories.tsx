import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { MOCK_QUIZ_ITEMS } from '../../__mocks__/quiz';
import { Quiz, QuizProps } from './quiz';
import { QuizContainer } from './quiz-container';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  component: Quiz,
  title: 'Quiz',
  argTypes: {},
} as Meta;

const Template: Story<QuizProps> = (args) => <Quiz {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  quizItems: MOCK_QUIZ_ITEMS,
  onAnswer: action('onAnswer'),
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const nextButton = canvas.getByRole("next-button");;

  for(const quizItem of MOCK_QUIZ_ITEMS) {
    await userEvent.click(canvas.getByLabelText(quizItem.correctAnswer));
    await userEvent.click(nextButton);
  }
  
  await expect(
    canvas.getByText(
      '결과보기'
    )
  ).toBeInTheDocument();
};

const TemplateContainer: Story<QuizProps> = (args) => (
  <QuizContainer {...args} />
);

export const PrimaryContainer = TemplateContainer.bind({});
PrimaryContainer.args = {};
