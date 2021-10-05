import Head from 'next/head'
import Hero from '../components/Hero'
import MainLayout from '../layouts/MainLayout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Olegas Sevcenko | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <MainLayout>


      <Hero />
      <div className="container-default">
        <div className="divider"></div>
      </div>
      {/* Hero */}
      {/* Projects */}
      {/* Contact */}


      </MainLayout>

    </div>
  )
}
