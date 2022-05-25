import Head from 'next/head';
// Layouts
import MainLayout from '../layouts/MainLayout';
// Compontents
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Olegas Sevcenko | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Projects />
      </MainLayout>
    </div>
  );
}
