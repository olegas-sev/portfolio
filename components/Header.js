import Link from "next/link";

function Header() {
    return (
        <header className="sticky top-0 z-50 ">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-row items-center h-24 justify-between py-6 px-5">
                    <div className="flex flex-row items-center">
                        {/* Left */}
                        <h2 className="font-bold text-xl transition duration-300 hover:opacity-60 ease-out">
                            <Link href="/">
                                <a className="tracking-wide">Olegas Sev</a>
                            </Link>
                        </h2>
                        {/* Middle */}
                        <nav className="ml-8">
                            <Link href="#">
                                <a className="navlink">About</a>
                            </Link>
                            <Link href="#">
                                <a className="navlink">Projects</a>
                            </Link>
                        </nav>
                    </div>
                    {/* Right */}
                    <div>
                        <Link href="#">
                            <a className="ml-5 text-lg font-semibold text-[#1a1a1a] transition duration-300 hover:opacity-60 ease-out">
                                Contact me
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="divider" />
            </div>
        </header>
    );
}

export default Header;
