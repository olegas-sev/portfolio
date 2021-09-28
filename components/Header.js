import Link from "next/link";
import { useState } from "react";
function Header() {
    const [open, isOpen] = useState(false)
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <header className="sticky top-0 z-50 md:px-5 bg-[#FFF]">
            <div className="h-24 max-w-4xl mx-auto">
                <div className="flex flex-row items-center justify-between py-6 ">
                    <div className="flex flex-row items-center">
                        {/* Left */}
                        <h2 className="font-bold text-xl transition duration-300 hover:opacity-60 ease-out">
                            <Link href="/">
                                <a className="tracking-wide">Olegas Sev</a>
                            </Link>
                        </h2>
                        {/* Middle */}
                        <nav className="hidden md:flex ml-8">
                            <Link href="#">
                                <a className="navlink">About</a>
                            </Link>
                            <Link href="#">
                                <a className="navlink">Projects</a>
                            </Link>
                        </nav>
                    </div>
                    {/* Right */}
                    <div className="hidden md:flex items-center" >
                        <Link href="#">
                            <a className="ml-5 text-lg font-semibold text-[#1a1a1a] transition duration-300 hover:opacity-60 ease-out">
                                Contact me
                            </a>
                        </Link>
                    </div>
                    {/* Mobile */}
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button"
                        onClick={() => {
                            isOpen(!open)
                            console.log(open);
                        }
                        }
                        >
                            <svg
                                className="w-6 h-6 text-gray-500"
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                </div>
                <div className="divider" />
                <div className={classNames(!open ? 'hidden' : null, '  mobile-menu')}
                >
				<nav>
                    <Link href="/about">
                        <a className="block text-sm px-2 py-4 text-custom-gray bg-gray-50 font-semibold">About</a> 
                    </Link>
                    <Link href="/projects">
                        <a className="block text-sm px-2 py-4 text-custom-gray hover:bg-gray-50 transition duration-300 font-semibold">Projects</a> 
                    </Link>
				</nav>
			</div>
            </div>
        </header>
        
    );
}

export default Header;
