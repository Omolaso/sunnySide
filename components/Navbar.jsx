import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/svgImages/logo.svg";
import Hamburger from "../public/svgImages/icon-hamburger.svg";
import Arrow from "../public/svgImages/icon-arrow-down.svg";

const Navbar = () => {
  const [fixedNav, setFixedNav] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const fixedScroll = () => {
    if (
      document.documentElement.scrollTop > 10 ||
      document.body.scrollTop > 10
    ) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  const toggleSidebar = () => {
    setSidebar((prevSidebar) => !prevSidebar);
  };

  useEffect(() => {
    window.addEventListener("scroll", fixedScroll);

    return () => window.removeEventListener("scroll", fixedScroll);
  }, [fixedNav]);

  return (
    <main className="relative min-h-screen flex flex-col text-white bg-[url('../public/mobileImages/image-header.jpg')] md:bg-[url('../public/desktopImages/image-header.jpg')] bg-no-repeat bg-cover bg-center w-full p-4 ">
      <nav
        className={
          fixedNav
            ? "fixed top-0 left-0 flex flex-row bg-lightBlue items-center justify-between w-full p-4 z-50"
            : "fixed top-0 left-0 flex flex-row items-center justify-between w-full p-4 z-50"
        }
      >
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>

        <ul className="hidden md:flex flex-row items-center justify-between font-semibold flex-1 max-w-[400px]">
          <li>
            <Link href="#" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="text-black bg-white min-h-[40px] rounded-2xl px-4 duration-300 ease-linear hover:text-white hover:bg-blue-300"
            >
              Contact
            </button>
          </li>
        </ul>
        <button
          type="button"
          onClick={() => toggleSidebar()}
          className="block md:hidden"
        >
          <Image src={Hamburger} alt="Hamburger" width="auto" height="auto" />
        </button>
      </nav>

      {/* sidebar */}
      <section
        className={
          sidebar
            ? "flex w-full left-0 px-4 items-center fixed top-[50px] min-h-[200px] text-footerText font-medium mt-8 scale-100 duration-300"
            : "flex w-full left-0 px-4 items-center fixed top-[50px] min-h-[200px] text-footerText font-medium mt-8 scale-0 duration-300"
        }
      >
        <ul className="flex flex-col items-center justify-between p-4 bg-white w-full min-h-[200px]">
          <li>
            <Link href="#" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="text-black bg-yellow min-h-[50px] rounded-3xl px-4 duration-300 ease-linear hover:text-white hover:bg-blue-300 min-w-[100px] max-w-[150px] w-full"
            >
              Contact
            </button>
          </li>
        </ul>
      </section>
      {/* sidebar concluded */}

      <section className="flex flex-col items-center justify-center text-center gap-5 mt-[150px] lg:mt-[120px]">
        <h1 className="font-bold text-[50px]">WE ARE CREATIVES</h1>
        <a href="#testimonies">
          <Image src={Arrow} alt="arrow-down" width="auto" height="auto" />
        </a>
      </section>
    </main>
  );
};

export default Navbar;
