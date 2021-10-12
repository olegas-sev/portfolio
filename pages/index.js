import Head from 'next/head'
import Hero from '../components/Hero'
import MainLayout from '../layouts/MainLayout'
import Divider from '../components/Divider'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Olegas Sevcenko | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <MainLayout>

      <Hero />
      <Divider />

      
      {/* Hero */}
      {/* Projects */}
      {/* Contact */}


      </MainLayout>

    </div>
  )
}
