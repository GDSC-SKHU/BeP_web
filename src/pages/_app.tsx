import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global-style';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import newStore from '../components/Store/module';
function App({ Component, pageProps }: AppProps) {
  const persistNewStore = persistStore(newStore);
  return (
    <>
      <Provider store={newStore}>
        <PersistGate loading={null} persistor={persistNewStore}></PersistGate>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
