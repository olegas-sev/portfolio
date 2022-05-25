import Link from 'next/link';
import Divider from './Divider';

function Footer() {
  return (
    <section className="pb-5">
      <div className="container-default text-center mt-10">
        <div className="flex items-center justify-center flex-col  md:flex-row md:justify-between mb-10">
          <h2 className="font-bold text-xl transition duration-300 hover:opacity-60 ease-out mb-5">
            <Link href="/">
              <a className="tracking-wide">Olegas Sev</a>
            </Link>
          </h2>
          <ul className="flex items-center list-none pl-0">
            <li className="py-3 ml-0 mb-0 ">
              <Link href="/">
                <a className="p-3 text-[#848484] inline-block rounded hover:bg-[#ececec] hover:text-[#1a1a1a] font-medium">
                  Home
                </a>
              </Link>
            </li>
            <li className="py-3 ml-0 mb-0">
              <Link href="/projects">
                <a className="p-3 text-[#848484] inline-block rounded hover:bg-[#ececec] hover:text-[#1a1a1a] font-medium">
                  Projects
                </a>
              </Link>
            </li>
            {/* <li className="py-3 ml-0 mb-0">
              <a
                href="/assets/Resume.pdf"
                target="_blank"
                className="p-3 text-[#848484] inline-block rounded hover:bg-[#ececec] hover:text-[#1a1a1a] font-medium"
              >
                Resume
              </a>
            </li> */}
          </ul>
          <div className="hidden md:flex items-center">
            <Link href="mailto: sevcenko.olegas@gmail.com">
              <a className="text-lg font-semibold text-[#1a1a1a] transition duration-300 hover:opacity-60 ease-out">
                Contact Me
              </a>
            </Link>
          </div>
        </div>
        <Divider />
        <div className="small-print mt-5 ">
          Made with ❤️ by{' '}
          <a
            href="https://github.com/olegas-sev"
            target="_blank"
            className="text-[#1a1a1a] transition duration-300 hover:opacity-60 ease-out underline"
          >
            Olegas Sev
          </a>{' '}
          | Portfolio 2021
        </div>
      </div>
    </section>
  );
}

export default Footer;
