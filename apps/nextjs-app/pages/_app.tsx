import { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../libs/query-client';
import '../styles/styles.css';

interface PageProps {
  dehydratedState: unknown;
}

function CustomApp({ Component, pageProps }: AppProps) {
  const { dehydratedState } = pageProps as PageProps;
  return (
    <>
      <Head>
        <title>Welcome to quiz!</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default CustomApp;
