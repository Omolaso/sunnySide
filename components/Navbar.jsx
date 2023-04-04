import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/svgImages/logo.svg";
import Hamburger from "../public/svgImages/icon-hamburger.svg";
import Arrow from "../public/svgImages/icon-arrow-down.svg";

const Navbar = () => {
  const [fixedNav, setFixedNav] = useState(false);

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
        <button type="button" className="block md:hidden">
          <Image src={Hamburger} alt="Hamburger" />
        </button>
      </nav>

      <section className="flex flex-col items-center justify-center text-center gap-5 mt-[150px] lg:mt-[120px]">
        <h1 className="font-bold text-[50px]">WE ARE CREATIVES</h1>
        <a href="#footer">
          <Image src={Arrow.src} alt="arrow-down" width={50} height={50} />
        </a>
      </section>
    </main>
  );
};

export default Navbar;
