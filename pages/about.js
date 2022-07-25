import Head from 'next/head';
import Footer from '../components/footer';
import styles from '../styles/About.module.scss';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
      </Head>
      <div className={styles.content}>
        <h2>About Page</h2>
      </div>
    </>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
