import Head from 'next/head'
import Layout from '@/components/layout'
import '@/style/global.css'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Unik-CaboFrio - Site Exemplo 01</title>
        <link rel="icon" href="assets/favicon_black.ico" sizes="any" />
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}