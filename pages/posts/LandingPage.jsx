import Head from "next/head";
import { Navbar, Body, Footer } from "../../components";
import logo from "../../public/svgImages/logo.svg";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Sunnyside Agency</title>
        <link rel="icon" href={logo.src} />
      </Head>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
};

export default LandingPage;
