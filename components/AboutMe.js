import Link from 'next/link'

function AboutMe() {
    return (
        <section className="section-padding">
            <div className="container-default">
                <h2 className="section-title">About me</h2>
                <div className="home-hero-wrapper sm:items-center flex justify-between flex-col sm:flex-row mb-8 md:mb-10">
                    <div className="about-left pb-2 sm:p-0 sm:pr-2.5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Modi eum placeat sapiente repellendus in magni
                            exercitationem molestiae aliquam dolorum fugiat?
                        </p>
                    </div>
                    <div className="about-right pb-2 sm:p-0">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Modi eum placeat sapiente repellendus in magni
                            exercitationem molestiae aliquam dolorum fugiat?
                        </p>
                    </div>
                </div>
                <Link href="#">
                    <a className="text-lg font-semibold text-[#1a1a1a] transition duration-300 hover:opacity-60 ease-out underline">
                        More about me
                    </a>
                </Link>
            </div>
        </section>
    );
}

export default AboutMe;
