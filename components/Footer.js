import Link from "next/link"
import Divider from "./Divider"

function Footer() {
    return (
        <section className="section-padding">
            <div className="container-default text-center mt-10">
                <div className="flex items-center justify-center flex-col mb-10">
                    <h2 className="font-bold text-xl transition duration-300 hover:opacity-60 ease-out mb-5">
                        <Link href="/">
                            <a className="tracking-wide">Olegas Sev</a>
                        </Link>
                    </h2>
                    <ul className="flex items-center list-none pl-0">
                        <li className="py-3 ml-0 mb-0 mr-8">
                            <Link href="/">
                                <a className="p-3 text-[#848484] inline-block rounded hover:bg-[#ececec] hover:text-[#1a1a1a] font-medium">Home</a>
                            </Link>
                        </li>
                        <li className="py-3 ml-0 mb-0 mr-8">
                            <Link href="/">
                                <a className="p-3 text-[#848484] inline-block rounded hover:bg-[#ececec] hover:text-[#1a1a1a] font-medium">About</a>
                            </Link>
                        </li>
                        <li className="py-3 ml-0 mb-0">
                            <Link href="/">
                                <a className="p-3 text-[#848484] inline-block rounded hover:bg-[#ececec] hover:text-[#1a1a1a] font-medium">Projects</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="hidden md:flex items-center">
                        <Link href="/contact-me">
                            <a className="text-lg font-semibold text-[#1a1a1a] transition duration-300 hover:opacity-60 ease-out">
                                Contact Me
                            </a>
                        </Link>
                    </div>
                </div>
                <Divider />
            </div>
        </section>
    );
}

export default Footer;
