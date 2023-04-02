import Head from "next/head";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Sunnyside Agency</title>
      </Head>
      <div>
        <h1>I am the landing page</h1>
        <Link href="/">Back Home</Link>
      </div>
    </>
  );
};

export default LandingPage;
