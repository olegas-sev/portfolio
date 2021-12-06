import Head from "next/head";
// Layouts
import MainLayout from "../layouts/MainLayout";
// Compontents
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Divider from "../components/Divider";
import Technologies from "../components/Technologies";
import coverImg from "../public/assets/images/cover.png";
import portfolioImg from "../public/assets/images/portfolio.jpg";


export default function Home() {
    console.log();
    return (
        <div>
            <Head>
                <title>Olegas Sevcenko | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content="Olegas Sevcenko | Portfolio" />
                <meta property="og:description" content="Full Stack Developer with strong knowledge of Javascript, modern technologies & frameworks such as React, Vue & Express" />
                <meta property="og:url" content="https://olegas.vercel.app" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={"https://olegas.vercel.app" + coverImg.src} />
                <meta property="og:image:secure_url" content={"https://olegas.vercel.app" + coverImg.src} />
                <meta property="og:image:width" content={coverImg.width} />
                <meta property="og:image:height" content={coverImg.height} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image" content={"https://olegas.vercel.app" + coverImg.src} />
                <meta property="twitter:site" content="@webdevhusky" />

                {/* <meta name="description" content="Full Stack Developer with strong knowledge of Javascript, modern technologies & frameworks such as React, Vue & Express" />
                <meta property="og:url" content="https://www.olegas.vercel.app" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Olegas Sevcenko | Portfolio" />
                <meta property="og:description" content="Full Stack Developer with strong knowledge of Javascript, modern technologies & frameworks such as React, Vue & Express" />
                <meta property="og:image" content={coverImg.src} /> */}
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
