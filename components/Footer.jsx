import Image from "next/image";
import Link from "next/link";
import { data } from "../data";

const Footer = () => {
  const { footerLogo } = data;
  return (
    <footer className="flex items-center justify-center bg-footerBg min-h-[40vh] p-4">
      <main className="flex flex-col items-center min-h-[20vh] justify-between text-center w-full gap-5">
        <section className="flex flex-col gap-4 w-full max-w-[220px]">
          <h1 className="text-[24px] font-extrabold text-footerText">
            sunnyside
          </h1>
          <div className="flex w-full flex-row items-center justify-between">
            <Link
              href="#"
              className="text-footerText font-medium hover:text-white duration-300 ease-linear"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-footerText font-medium hover:text-white duration-300 ease-linear"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-footerText font-medium hover:text-white duration-300 ease-linear"
            >
              Projects
            </Link>
          </div>
        </section>

        <section className="flex flex-row w-full max-w-[150px] items-center justify-between">
          {footerLogo.map((logo) => (
            <button
              type="button"
              key={logo.id}
              className="hover:scale-125 duration-300 ease-linear"
            >
              <Image
                src={logo.imageURL}
                alt={logo.name}
                width={50}
                height={50}
                className="w-full"
              />
            </button>
          ))}
        </section>
      </main>
    </footer>
  );
};

export default Footer;
