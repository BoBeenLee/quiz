import { render } from '@testing-library/react';

import FeaturesQuiz from './features-quiz';

describe('FeaturesQuiz', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesQuiz />);
    expect(baseElement).toBeTruthy();
  });
});
