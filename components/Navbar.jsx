import Link from "next/link";
import Image from "next/image";
import Logo from "../public/svgImages/logo.svg";
import Hamburger from "../public/svgImages/icon-hamburger.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const handleScrollDown = () => {
    window.scrollTo(100, 100);
  };

  return (
    <main className="relative min-h-screen flex flex-col gap-[8rem] text-white bg-[url('../public/mobileImages/image-header.jpg')] md:bg-[url('../public/desktopImages/image-header.jpg')] bg-no-repeat bg-cover bg-center w-full p-4 md:p-8">
      <nav className="flex flex-row items-center justify-between w-full">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>

        <ul className="hidden md:flex flex-row items-center justify-between flex-1 max-w-[320px]">
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <button type="button">Contact</button>
          </li>
        </ul>
        <button type="button" className="block md:hidden">
          <Image src={Hamburger} alt="Hamburger" />
        </button>
      </nav>

      <section className="flex flex-col items-center justify-center text-center gap-5">
        <h1 className="font-bold text-[50px]">WE ARE CREATIVES</h1>
        <button
          type="button"
          className="font-bold text-[30px]"
          onClick={() => handleScrollDown()}
        >
          <FontAwesomeIcon icon={faArrowDownLong} beat size="2xl" />
        </button>
      </section>
    </main>
  );
};

export default Navbar;
