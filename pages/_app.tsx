import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@dracula/dracula-ui/styles/dracula-ui.css'
import { AppProps } from 'next/app'
import Navigation from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'
import PlausibleProvider from 'next-plausible'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PlausibleProvider trackOutboundLinks={true} domain="ludoviko.xyz">
        <Head>
          <link rel="icon" href="/RingRingTechSupport.ico" />
          <meta property="og:title" content="Ludoviko" key="title" />
          <meta name="description" content="Ludoviko's little place on the internet" key="desc" />
          <meta property="og:description" content="Ludoviko's little place on the internet" key="og:desc" />
          <meta property="og:type" content="website" key="og:type" />
          <meta property="og:image" content="/RingRingTechSupport.png" key="og:img" />
          <meta name="keywords" content="Ludoviko, Programming, Minecraft, Game Development, Java, Blog, Kotlin" key="keyw" />
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:site" content="@Ludoviko_" />
          <meta name="twitter:creator" content="@Ludoviko_"/>
          <script type="text/javascript" src="/iubenda.js" />
          <script type="text/javascript" src="//cdn.iubenda.com/cs/tcf/stub-v2.js"></script>
          <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8" async></script>
          <script dangerouslySetInnerHTML = {{__html: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
          `}}></script>
        </Head>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </PlausibleProvider>
    </>
  )
}

export default App
