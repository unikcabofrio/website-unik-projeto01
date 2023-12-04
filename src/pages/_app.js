import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Layout from '@/components/Layout'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: Rubik, sans-serif;
  }

  a{
    text-decoration: none;
  }
`

const Theme = {
  colors:['#FFFFFF','#000000','#7634bf','#e03584','#161616','#f1f1f1'],
  colorsTrans:['#7634bf52','#00000021']
}
 
export default function App({ Component, pageProps }) {

  return (
    <> 
      <Head>
        <title>Unik-CaboFrio - Site Exemplo 01</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <GlobalStyle/>
      <ThemeProvider theme={Theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}