import Head from "next/head";
// Layouts
import MainLayout from "../layouts/MainLayout";
// Compontents
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Divider from "../components/Divider";
import Technologies from "../components/Technologies";
import portfolio from "../public/assets/images/portfolio.jpg";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Olegas Sevcenko | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Olegas Sevcenko - Full Stack Developer | Portfolio" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={portfolio.src} />
                <meta property="og:description" content="Full Stack Developer with strong knowledge of Javascript, modern technologies & frameworks such as React, Vue & Express" />
                <meta property="og:url" content="https://www.olegas.vercel.app" />
                <meta property="twitter:site" content="@webdevhusky" />
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
