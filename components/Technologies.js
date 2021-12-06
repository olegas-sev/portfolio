import VueLogo from "../public/assets/images/vuejs.png";
import ReactLogo from "../public/assets/images/react.png";
import VanillaJsLogo from "../public/assets/images/vanilla-javascript.svg";
import NodeJsLogo from "../public/assets/images/node.png";

function Technologies() {
    return (
        <section className="section-padding">
            <div className="container-default">
                <div className="mb-10">
                    <h2 className="section-title">Technologies</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
                    <div className="box-border block">
                        <a href="https://github.com/olegas-sev/forkify" target="_blank" className="pt-10 px-8 pb-[50px] text-[#848484] no-underline overflow-hidden rounded-[27px] bg-[#f9f9f9] inline-block w-full hover:bg-[#f2f2f2] transition-all ease-out duration-300">
                            <div className="h-20 w-20 min-w-[80px] mb-8 border border-[#ececec] rounded-[22px]">
                                <img
                                    src={VanillaJsLogo.src}
                                    alt="Javascript logo"
                                    className="w-full h-full object-cover bg-[#f0db4f] rounded-2xl"
                                />
                            </div>
                            <h5 className="mb-1 text-lg text-[#848484] font-medium">
                                Vanila JS
                            </h5>
                            <h6 className="text-[#1a1a1a] mb-[14px] text-2xl font-semibold">
                                Frontend
                            </h6>
                            <p className="text-[#848484] font-medium">
                                I mostly worked with Vanilla JS
                            </p>
                        </a>
                    </div>
                    <div className="box-border block">
                        <a href="https://github.com/olegas-sev/airbnb-clone" target="_blank" className="pt-10 px-8 pb-[50px] text-[#848484] no-underline overflow-hidden rounded-[27px] bg-[#f9f9f9] inline-block w-full hover:bg-[#f2f2f2] transition-all ease-out duration-300">
                            <div className="h-20 w-20 min-w-[80px] mb-8 border border-[#ececec] rounded-[22px]">
                                <img
                                    src={ReactLogo.src}
                                    alt="React logo"
                                    className="w-full h-full object-cover bg-[#222222] rounded-2xl"
                                />
                            </div>
                            <h5 className="mb-1 text-lg text-[#848484] font-medium">
                                React
                            </h5>
                            <h6 className="text-[#1a1a1a] mb-[14px] text-2xl font-semibold">
                                Frontend
                            </h6>
                            <p className="text-[#848484] font-medium">
                                I've built a few projects using React/Next
                            </p>
                        </a>
                    </div>
                    <div className="box-border block">
                        <a href="https://github.com/olegas-sev/money-crm" target="_blank" className="pt-10 px-8 pb-[50px] text-[#848484] no-underline overflow-hidden rounded-[27px] bg-[#f9f9f9] inline-block w-full hover:bg-[#f2f2f2] transition-all ease-out duration-300">
                            <div className="h-20 w-20 min-w-[80px] mb-8  rounded-[22px]">
                                <img
                                    src={VueLogo.src}
                                    alt="Vue logo"
                                    className="w-full h-full object-cover bg-[#1A1C24] rounded-2xl p-2"
                                />
                            </div>
                            <h5 className="mb-1 text-lg text-[#848484] font-medium">
                                Vue
                            </h5>
                            <h6 className="text-[#1a1a1a] mb-[14px] text-2xl font-semibold">
                                Frontend
                            </h6>
                            <p className="text-[#848484] font-medium">
                                I've used Vue v2 for my school project
                            </p>
                        </a>
                    </div>
                    <div className="box-border block">
                        <a href="https://github.com/olegas-sev/EE19-ar3/tree/main/Node" target="_blank" className="pt-10 px-8 pb-[50px] text-[#848484] no-underline overflow-hidden rounded-[27px] bg-[#f9f9f9] inline-block w-full hover:bg-[#f2f2f2] transition-all ease-out duration-300">
                            <div className="h-20 w-20 min-w-[80px] mb-8  rounded-[22px]">
                                <img
                                    src={NodeJsLogo.src}
                                    alt="Node js logo"
                                    className="w-full h-full object-cover bg-[#333] rounded-2xl p-2"
                                />
                            </div>
                            <h5 className="mb-1 text-lg text-[#848484] font-medium">
                                Node
                            </h5>
                            <h6 className="text-[#1a1a1a] mb-[14px] text-2xl font-semibold">
                                Backend
                            </h6>
                            <p className="text-[#848484] font-medium">
                                Currently learning
                            </p>
                        </a>
                    </div>
                </div>
                <div className="home-hero-wrapper sm:items-center flex justify-between flex-col sm:flex-row mb-8 md:mb-10">
                    {/* content */}
                </div>
            </div>
        </section>
    );
}

export default Technologies;
