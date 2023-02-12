import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global-style';
import '../../public/styles/font/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
