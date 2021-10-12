import Head from 'next/head'
// Layouts
import MainLayout from '../layouts/MainLayout'
// Compontents
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
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
      <AboutMe />
      <Divider />
      
      {/* Hero */}
      {/* Projects */}
      {/* Contact */}


      </MainLayout>

    </div>
  )
}
