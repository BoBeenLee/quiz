// eslint-disable-next-line import/no-webpack-loader-syntax
import styles from './styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ImageOptimizationProvider } from '../src/lib/providers/image-optimization-provider';

const storybookStyles = document.createElement('style');
storybookStyles.innerHTML = styles;
document.body.appendChild(storybookStyles);

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <ImageOptimizationProvider unoptimized={true}>
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    </ImageOptimizationProvider>
  ),
];
