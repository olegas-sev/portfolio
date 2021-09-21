function Hero() {
    return (
        <section>
            <div className="main-container py-28 flex flex-row" >
                <div className="homer-hero-wrapper flex items-center justify-between py-5">
                    <div className="homer-hero-left mr-5">
                    <h1 className="text-custom-gray text-5xl font-semibold mb-8">
                    Hello, I am Olegas.<br />A web developer.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit dapibus porta lorem morbi hendrerit. Maecenas et, at quis purus.
                </p>
                    </div>
                    <div className="homer-hero-right">
                        <img src="https://assets.website-files.com/5fd908fb4e19797598a2f9ed/5fd923e456b71f08e5899b2e_image-home-hero-portfolio-x-template.jpg" className="rounded-2xl w-full max-w-md" alt="pic" />
                    </div>
                </div>

            </div>
        </section>
    )
}
 
export default Hero
