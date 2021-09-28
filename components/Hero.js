import portfolio from '../public/portfolio.jpg'
import Image from 'next/image'

console.log(portfolio);
function Hero() {
    return (
        <section>
            <div className="main-container py-28 flex flex-row" >
                <div className="homer-hero-wrapper flex flex-col items-center justify-between py-5 sm:flex-row">
                    <div className="homer-hero-left mr-5 w-[65%]">
                    <h1 className="text-custom-gray text-5xl font-semibold mb-8">
                    Hello, I am Olegas.<br />A web developer.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit dapibus porta lorem morbi hendrerit. Maecenas et, at quis purus.
                </p>
                    </div>
                    <div className="homer-hero-right relative h-[298px] w-[35%]">
                        <Image 
                        src={portfolio.src} 
                        className="rounded-2xl w-full max-w-md" 
                        layout="fill"
                        objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Hero
