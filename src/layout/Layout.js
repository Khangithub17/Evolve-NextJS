import Head from "next/head";
import { Fragment } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";
const Layout = ({
  children,
  headerExtraClass,
  noHeaderBg,
  blackLogo,
  pageName,
}) => {
  return (
    <Fragment>
      <Head>
        <title>Evolve Marketing - Development Agency {pageName}</title>
        <meta name="Evolve Marketing | Boost Your Online Presence" content="Discover result-driven digital marketing strategies at Evolve. We specialize in SEO, PPC, social media, and web design services to boost your brand's online success. Partner with us today" />
        <meta name="Evolve Marketing | Development Agency" content="Best Development Agency in Australia,Website Development,Wordpress Design,Graphic Designing,Branding," />
      </Head>
      <VideoPopup />
      <ImageView />
      
      <Header
        headerExtraClass={headerExtraClass}
        noHeaderBg={noHeaderBg}
        blackLogo={blackLogo}
      />
      {children}
      <Footer />
      <ScrollTop />
    </Fragment>
    
  );
};
export default Layout;
