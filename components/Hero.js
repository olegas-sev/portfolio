import portfolioImg from "../public/assets/images/portfolio.jpg";

function Hero() {
    return (
        <section className="section-padding">
            <div className="container-default">
                <div className="home-hero-wrapper sm:items-center flex justify-between flex-col sm:flex-row">
                    <div className="home-hero-left max-w-[499px] mr-[20px] mb-10 sm:m-0">
                        <h1 className="text-custom-gray text-5xl font-semibold mb-6">
                            Hello, I am Olegas.
                            <br />A web developer.
                        </h1>
                        <p className="mb-10">
                            Full Stack Developer with strong knowledge of Javascript, modern technologies & frameworks such as React, Vue & Express
                        </p>
                        <a href="https://github.com/olegas-sev/" target="_blank" className="text-lg font-semibold text-[#1a1a1a] transition duration-300 hover:opacity-60 ease-out underline">
                            View my Github
                        </a>
                    </div>
                    <div className="home-hero-right items-center max-w-[298px]">
                        <img
                            src={portfolioImg.src}
                            className="rounded-2xl w-full max-w-[298px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
