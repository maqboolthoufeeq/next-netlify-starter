import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <a href="RRTTS/FAIZ-2022-02-02101000-3084274.pdf" download></a>
        <a href="pages/RRTTS/FAIZ-2022-02-02101000-3084274.pdf" download></a>
        <a href="/pages/RRTTS/FAIZ-2022-02-02101000-3084274.pdf" download></a>        

        <a href="RRTTS/HENNA-2022-02-02101500-3084275.pdf" download></a>
        <a href="pages/RRTTS/HENNA-2022-02-02101500-3084275.pdf" download></a>
        <a href="/pages/RRTTS/HENNA-2022-02-02101500-3084275.pdf" download></a>
       
      </main>

      <Footer />
    </div>
  )
}
