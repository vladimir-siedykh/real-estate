import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import '../styles/globals.css'

import { Nunito } from '@next/font/google';
const nunito = Nunito({
  display: 'fallback',
  weights: ['100 900'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --nunito-font: ${nunito.style.fontFamily};
          }
        `}
      </style>
      <NextSeo
        title='Real Estate Agency'
        description='Real Estate Agency'
      />
      <div className={nunito.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default MyApp
