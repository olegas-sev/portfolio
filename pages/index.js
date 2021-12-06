import Head from "next/head";
// Layouts
import MainLayout from "../layouts/MainLayout";
// Compontents
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Divider from "../components/Divider";
import Technologies from "../components/Technologies";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Olegas Sevcenko | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Olegas Sevcenko - Full Stack Developer | Portfolio" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://olegas.vercel.app/_next/static/image/public/assets/images/portfolio.98a414c70aae1ce9c0d9163bfbf2c72c.jpg" />
                <meta property="og:url" content="https://www.olegas.vercel.app" />
            </Head>
            <MainLayout>
                <Hero />
                <Divider />
                <AboutMe />
                <Divider />
                <Technologies />
            </MainLayout>
        </div>
    );
}
