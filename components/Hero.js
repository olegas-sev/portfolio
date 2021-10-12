import portfolio from "../public/portfolio.jpg";
import Image from "next/image";
import Link from "next/link";

console.log(portfolio);
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit dapibus porta lorem morbi hendrerit. Maecenas
                            et, at quis purus.
                        </p>
                        <Link href="#">
                            <a className="text-lg font-semibold text-[#1a1a1a] transition duration-300 hover:opacity-60 ease-out underline">
                                Contact me
                            </a>
                        </Link>
                    </div>
                    <div className="home-hero-right items-center max-w-[298px]">
                        <img
                            src={portfolio.src}
                            className="rounded-2xl w-full max-w-[298px]"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
