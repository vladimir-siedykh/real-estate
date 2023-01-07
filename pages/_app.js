// import { Lora, Nunito } from '@next/font/google';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import '../styles/globals.css'

// const lora = Lora({
//   subsets: ['latin'],
// });

// const nunito = Nunito({
//   subsets: ['latin'],
// });

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <style jsx global>
        {`
          :root {
            --lora-font: ${lora.style.fontFamily};
            --nunito-font: ${nunito.style.fontFamily};
          }
        `}
      </style> */}
      <NextSeo
        title='Real Estate Agency'
        description='Real Estate Agency'
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
