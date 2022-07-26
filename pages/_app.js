import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../components/navbar.css';
import '../styles/layout.css';

const theme = {
  colors: {
    primary: '#0fd919',
  },
};

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="Hello Next.js" />
      </Head>
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <Navbar />

          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
