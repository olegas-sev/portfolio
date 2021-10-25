import Link from "next/link";
import VueLogo from "../public/vuejs3.png";
import ReactLogo from "../public/react.png";
import VanillaJsLogo from "../public/vanilla-javascript.svg";

function Projects() {
    return (
        <section className="section-padding">
            <div className="container-default">
                <div className="mb-10">
                    <h2 className="section-title">Technologies</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
                    <div className="box-border block">
                        <Link href="/projects">
                            <a className="pt-10 px-8 pb-[50px] text-[#848484] no-underline overflow-hidden rounded-[27px] bg-[#f9f9f9] inline-block w-full hover:bg-[#f2f2f2] transition-all ease-out duration-300">
                                <div className="h-20 w-20 min-w-[80px] mb-8 border border-[#ececec] rounded-[22px]">
                                    <img
                                        src={VanillaJsLogo.src}
                                        alt="Javascript logo"
                                        className="w-full h-full object-cover bg-[#f0db4f] rounded-2xl"
                                    />
                                </div>
                                <h5 class="mb-3 text-lg text-[#848484] font-medium">
                                    Vanila JS
                                </h5>
                                <h6 class="text-[#1a1a1a] mb-[14px] text-2xl font-semibold">
                                    Frontend
                                </h6>
                                <p className="text-[#848484] font-medium">
                                    I mostly worked with Vanilla JS
                                </p>
                            </a>
                        </Link>
                    </div>
                    <div className="box-border block">
                        <Link href="/projects">
                            <a className="pt-10 px-8 pb-[50px] text-[#848484] no-underline overflow-hidden rounded-[27px] bg-[#f9f9f9] inline-block w-full hover:bg-[#f2f2f2] transition-all ease-out duration-300">
                                <div className="h-20 w-20 min-w-[80px] mb-8 border border-[#ececec] rounded-[22px]">
                                    <img
                                        src={ReactLogo.src}
                                        alt="React logo"
                                        className="w-full h-full object-cover bg-[#222222] rounded-2xl"
                                    />
                                </div>
                                <h5 class="mb-3 text-lg text-[#848484] font-medium">
                                    React
                                </h5>
                                <h6 class="text-[#1a1a1a] mb-[14px] text-2xl font-semibold">
                                    Frontend
                                </h6>
                                <p className="text-[#848484] font-medium">
                                    I've had a few projects using React/Next
                                </p>
                            </a>
                        </Link>
                    </div>
                    <div className="box-border block">
                        <Link href="/projects">
                            <a className="pt-10 px-8 pb-[50px] text-[#848484] no-underline overflow-hidden rounded-[27px] bg-[#f9f9f9] inline-block w-full hover:bg-[#f2f2f2] transition-all ease-out duration-300">
                                <div className="h-20 w-20 min-w-[80px] mb-8  rounded-[22px]">
                                    <img
                                        src={VueLogo.src}
                                        alt="Vue logo"
                                        className="w-full h-full object-cover bg-[#1A1C24] rounded-2xl p-2"
                                    />
                                </div>
                                <h5 class="mb-3 text-lg text-[#848484] font-medium">
                                    Vue
                                </h5>
                                <h6 class="text-[#1a1a1a] mb-[14px] text-2xl font-semibold">
                                    Frontend
                                </h6>
                                <p className="text-[#848484] font-medium">
                                    I've used Vue v2 for my school project
                                </p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="home-hero-wrapper sm:items-center flex justify-between flex-col sm:flex-row mb-8 md:mb-10">
                    {/* content */}
                </div>
            </div>
        </section>
    );
}

export default Projects;
