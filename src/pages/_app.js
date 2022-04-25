import Header from '@components/Header';
import Script from 'next/script';
import Head from 'next/head';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <>
      <Head>
        <title>BebeAhorro</title>
      </Head>
      <AppContext.Provider value={initialState}>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DMKKTWRND0" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-DMKKTWRND0');
          `}
        </Script>
        <Header />
        <Component {...pageProps} />;
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
