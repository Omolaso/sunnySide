import Head from "next/head";
import { Navbar, Body } from "../../components";
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
    </>
  );
};

export default LandingPage;
