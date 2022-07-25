import Head from 'next/head';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/footer';
import '../styles/layout.css';

const theme = {
  colors: {
    primary: '#0fd919',
  },
};

function MyApp({ Component, pageProps }) {
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
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
