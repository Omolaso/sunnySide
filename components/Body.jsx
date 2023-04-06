import Image from "next/image";
import transform from "../public/desktopImages/image-transform.jpg";
import standout from "../public/desktopImages/image-stand-out.jpg";
import { data } from "../data";
import { motion } from "framer-motion";

const Body = () => {
  const { people, galleryDesktop, galleryMobile } = data;

  return (
    <>
      <main className="grid lg:grid-cols-2 grid-cols-1">
        <Image
          priority
          src={transform}
          alt="transform"
          className="w-full block lg:hidden"
        />
        <section className="flex items-center justify-center p-4 bg-white flex-1 min-h-[400px] w-full">
          <div className="flex flex-col gap-4 items-center text-center max-w-md md:text-left md:items-start">
            <h1 className="font-bold text-[40px]">Transform your brand</h1>
            <p className="font-normal text-[20px]">
              We are a full service creative agency specializing in helping
              brands grow at a fast rate. Engage your clients through compling
              visuals that do most of the marketing for you.
            </p>
            <button type="button" className="font-bold text-[24px]">
              Learn more
            </button>
          </div>
        </section>
        <Image
          priority
          src={transform}
          alt="transform"
          className="w-full hidden lg:block"
        />
        <Image priority src={standout} alt="standout" className="w-full" />
        <section className="flex items-center justify-center p-4 bg-white min-h-[400px] flex-1 w-full">
          <div className="flex flex-col gap-4 items-center max-w-md text-center md:text-left md:items-start">
            <h1 className="font-bold text-[40px]">
              Standout to the right audience
            </h1>
            <p className="font-normal text-[20px]">
              Using a collaborative formula of designers, researchers,
              photographs, videographs and copywriters, we&apos;ll build and
              extend your brand in digital places.
            </p>
            <button type="button" className="font-bold text-[24px]">
              Learn more
            </button>
          </div>
        </section>
        <section className="bg-[url('../public/mobileImages/image-graphic-design.jpg')] p-6 flex items-end justify-center min-h-[600px] lg:bg-[url('../public/desktopImages/image-graphic-design.jpg')] bg-no-repeat bg-cover bg-center w-full">
          <div className="flex flex-col gap-4 text-center items-center justify-center max-w-[400px] w-full text-black ">
            <h1 className="text-[35px] font-bold">Graphic Design</h1>
            <p className="text-[18px] font-medium">
              Great design makes you memorable. We deliver artworks that
              underscores your brand message and captures potential
              client&apos;s attention.
            </p>
          </div>
        </section>
        <section className="bg-[url('../public/mobileImages/image-photography.jpg')] p-6 flex items-end justify-center min-h-[600px] lg:bg-[url('../public/desktopImages/image-photography.jpg')] bg-no-repeat bg-cover bg-center w-full">
          <div className="flex flex-col gap-4 text-center items-center justify-center max-w-[400px] w-full text-black ">
            <h1 className="text-[35px] font-bold">Photography</h1>
            <p className="text-[18px] font-medium">
              Increase your credibility by getting the most stunning, high
              quality photos that improve your business image.
            </p>
          </div>
        </section>
      </main>

      <section
        id="testimonies"
        className="flex items-center justify-center min-h-screen p-6"
      >
        <div className="flex flex-col gap-8 items-center text-center">
          <h1 className="text-[25px] font-bold text-gray-600">
            CLIENT TESTIMONIES
          </h1>
          <div className="flex flex-row flex-wrap items-center justify-center gap-5">
            {people.map((person) => (
              <div
                key={person.id}
                className="flex flex-col gap-3 max-w-[350px] w-full p-3 justify-between items-center"
              >
                <Image
                  priority
                  src={person.imageURL}
                  alt={person.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <p className="text-[18px] font-medium ">{person.testimony}</p>
                <div className="flex flex-col">
                  <h1 className="text-[35px] font-bold">{person.name}</h1>
                  <small className="text-[14px] font-medium">
                    {person.role}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="hidden lg:grid grid-cols-4 w-full">
          {galleryDesktop.map((desktopImg) => (
            <>
              <Image
                priority
                key={desktopImg.id}
                src={desktopImg.imageURL}
                alt="features"
                width={500}
                height={500}
                className="w-full"
              />
            </>
          ))}
        </div>
        {/* MOBILE GALLERY */}
        <div className="lg:hidden grid grid-cols-2 w-full">
          {galleryMobile.map((mobileImg) => (
            <>
              <Image
                priority
                key={mobileImg.id}
                src={mobileImg.imageURL}
                alt="features"
                width={500}
                height={500}
                className="w-full"
              />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Body;
