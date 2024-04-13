import Preloader from "@/src/layout/Preloader";
import "@/styles/globals.css";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
const App = ({ Component, pageProps }) => {
 
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta
          name="google-site-verification"
          content="xhfzFSpNx2OMNikqE7QX6tDnIiwOFB3-P6prcQh1nc0"
        />
        <Helmet>
          <title>
            {" "}
            e360Solutions - Digital Marketing and Web Solutions | Australia
          </title>
          <meta
            name="description"
            content="e360 Solutions is a leading digital marketing agency in Australia, offering comprehensive web solutions including SEO, web design, and social media marketing. Contact us for tailored digital strategies to grow your online presence."
          />
          <meta
            name="description"
            content="e360 Solutions - Your Partner for Digital Success in Australia. We specialize in digital marketing, SEO, web design, and social media marketing. Grow your brand online with our tailored strategies."
          />
          <meta
            name="description"
            content="Evolve Marketing - Drive Online Growth with e360 Solutions - Australia's Leading Digital Marketing Agency. We're dedicated to enhancing your web presence through SEO, web development, and content marketing."
          />
          <meta
            name="keywords"
            content="digital marketing, web solutions, SEO, web design, social media marketing, Australia"
          />
          <meta name="author" content="e360 Solutions" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="geo.region" content="AU" />
          <meta name="geo.placename" content="Australia" />
          <meta name="geo.position" content="-25.2744;133.7751" />
          <meta name="ICBM" content="-25.2744, 133.7751" />
        </Helmet>

        <link
          rel="icon"
          href="https://res.cloudinary.com/denlhej9f/image/upload/v1694170671/siteicon_mmvewl.png"
        />
        {/* CSS only */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/css/bootstrap.min.css"
        />
        {/* Font Awesome 6 */}
        <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="assets/css/swiper.css" />
        {/* style */}
        <link rel="stylesheet" href="assets/css/style.css" />
        {/* responsive */}
        <link rel="stylesheet" href="assets/css/responsive.css" />
        {/* color */}
        <link rel="stylesheet" href="assets/css/color.css" />
      </Head>
      {/*<Preloader />*/}
      {!loader && <Component {...pageProps} />}
    </Fragment>

  
  );
};
export default App;
