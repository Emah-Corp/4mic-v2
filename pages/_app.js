import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        {/* Page Title */}
        <title>
          4MIC | Inversión y Capital
          Fintex - Consulting &amp; Financial Technology React NextJS Template
        </title>
        {/* Author & Description */}
        <meta name="author" content="4MIC | Inversión y Capital" />
        <meta name="description" content="Con honor y unidad, construimos realidades." />
        {/* og:meta */}
        <meta property="og:title" content="4MIC | Inversión y Capital" />
        <meta property="og:description" content="Con honor y unidad, construimos realidades." />
        <meta property="og:image" content="https://techgeeks.mx/assets/images/share.jpg" />
        <meta property="og:url" content="https://www.4mic.mx/" />
        <meta property="og:type" content="website" />
        {/* Keywords */}
        <meta name="keywords" content="" />
        
        {/*====== Favicon Icon ======*/}        
        <link href="img/favicon/favicon.ico" rel="icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/assets/images/favicon/site.webmanifest" />


        {/*====== FontAwesome css ======*/}
        <link
          rel="stylesheet"
          href="assets/fonts/fontawesome/css/all.min.css"
        />
        {/*====== Flaticon css ======*/}
        <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
        {/*====== Bootstrap css ======*/}
        <link
          rel="stylesheet"
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
        />
        {/*====== magnific-popup css ======*/}
        <link
          rel="stylesheet"
          href="assets/vendor/magnific-popup/dist/magnific-popup.css"
        />
        {/*====== Slick-popup css ======*/}
        <link rel="stylesheet" href="assets/vendor/slick/slick.css" />
        {/*====== Jquery UI css ======*/}
        <link
          rel="stylesheet"
          href="assets/vendor/jquery-ui/jquery-ui.min.css"
        />
        {/*====== Nice Select css ======*/}
        <link
          rel="stylesheet"
          href="assets/vendor/nice-select/css/nice-select.css"
        />
        {/*====== Animate css ======*/}
        <link rel="stylesheet" href="assets/vendor/animate.css" />
        {/*====== Default css ======*/}
        <link rel="stylesheet" href="assets/css/default.css" />
        {/*====== Style css ======*/}
        <link rel="stylesheet" href="assets/css/style.css" />
      </Head>
      {loader && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
