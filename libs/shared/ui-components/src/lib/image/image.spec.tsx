import { getImages } from "@quiz/images";
import { render } from '@testing-library/react';

import Image from './image';

describe('Image', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Image source={{ uri: getImages().iconImages.storybook }} />
    );
    expect(baseElement).toBeTruthy();
  });
});
