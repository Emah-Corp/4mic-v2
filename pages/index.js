import Link from "next/link";
import Slider from "react-slick";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});
import FeedbackSectionChart from "../src/components/FeedbackSectionChart";
import SimpleFaq from "../src/components/SimpleFaq";
import LatestServices from "../src/components/slider/LatestServices";
import Layout from "../src/layout/Layout";
import { partnerSliderOne, projectsSliderOne } from "../src/sliderProps";
const Index = () => {
  return (
    <Layout>
      {/*====== Start Hero Section ======*/}
      <section
        className="banner-one bg_cover p-r z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-bg-1.jpg)" }}
      >
        <div className="shape shape-one">
          <span>
            <img src="assets/images/hero/hero-one_shape-1.png" alt="" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/hero/circel.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-10">
              {/*=== Hero Content ===*/}
              <div className="hero-content text-white">
                <span className="tag-line wow fadeInDown" data-wow-delay=".5s">
                  4MIC Inversión y Capital
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".7s">
                  Impulsamos el talento, lideramos el cambio
                </h1>
                <div className="hero-button wow fadeInUp" data-wow-delay=".9s">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn btn-red">Conócenos</a>
                  </Link>
                  <Link legacyBehavior href="/services">
                    <a className="main-btn filled-btn filled-white">
                      Nuestros servicios
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section-one pt-125 pb-70">
        <div className="shape shape-one">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="293px"
              height="849px"
            >
              <path
                fillRule="evenodd"
                fill="rgb(250, 250, 250)"
                d="M292.858,848.283 L45.529,527.037 L183.238,230.105 L0.311,0.959 L292.858,0.959 L292.858,848.283 Z"
              />
            </svg>
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-content-box content-box-gap wow fadeInLeft mb-50">
                <div className="section-title section-title-left">
                  <span className="sub-title">About Company</span>
                  <h2>Help to Create Great Business Future </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque
                  abillo inventore veritatis quasi architecto beatae vitae dicta
                  sunt explicabo nemo enim ipsam voluptatem quia.
                </p>
                <Link legacyBehavior href="/about">
                  <a className="btn-link">Learn More Us</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Quote Box One ===*/}
              <div className="quote-box-one ml-lg-70 mb-50">
                <h2>Effective method for disease detection.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section p-r z-1 pb-85">
        <div className="shape shape-one">
          <span />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              {/*=== FEatures Image Box ===*/}
              <div className="features-one_img-box mb-50">
                <img
                  src="assets/images/features/img-1.jpg"
                  className="features-img-one wow fadeInDown"
                  alt="Features Image"
                />
                <img
                  src="assets/images/features/img-2.jpg"
                  className="features-img-two wow fadeInUp"
                  alt="Features Image"
                />
                <div className="quote-box-two wow fadeInLeft">
                  <h3>Work Hard to Success</h3>
                </div>
                <div className="big-logo wow fadeInRight">
                  <Link legacyBehavior href="/">
                    <a>
                      <img
                        src="assets/images/logo/big-logo-1.png"
                        alt="Site logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Features Content Box ===*/}
              <div className="features-one_content-box pl-lg-70 mb-10">
                <div className="section-title section-title-left mb-35 wow fadeInDown">
                  <span className="sub-title">What We Do ?</span>
                  <h2>Easy Way to Success Your Business</h2>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    {/*=== Features Item ===*/}
                    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-stats" />
                      </div>
                      <div className="text">
                        <h4 className="title">Strategy and Innovation</h4>
                        <p>Natus error sit volupte atem accusa dolore</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/*=== Features Item ===*/}
                    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-support" />
                      </div>
                      <div className="text">
                        <h4 className="title">Quality Insure Compliance</h4>
                        <p>Natus error sit volupte atem accusa dolore</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/*=== Features Item ===*/}
                    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-digital-strategy" />
                      </div>
                      <div className="text">
                        <h4 className="title">Sales &amp; Market Research</h4>
                        <p>Natus error sit volupte atem accusa dolore</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/*=== Features Item ===*/}
                    <div className="features-item animate-hover-icon mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-data" />
                      </div>
                      <div className="text">
                        <h4 className="title">Data Analytics Solutions</h4>
                        <p>Natus error sit volupte atem accusa dolore</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Service Section ======*/}
      <section
        className="service-section bg_cover pt-125 p-r z-1 pb-150"
        style={{ backgroundImage: "url(assets/images/bg/service-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center text-white mb-60 wow fadeInDown">
                <span className="sub-title">Latest Services</span>
                <h2>Amazing Business Services</h2>
              </div>
            </div>
          </div>
          {/*=== Service Slider ===*/}
          <LatestServices />
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Fact Section ======*/}
      <section className="fact-section p-r z-1 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-12">
              {/*=== Fact image box ===*/}
              <div className="fact-img_one-box text-right pr-lg-70 mb-50">
                <div className="quote-box-three text-left wow fadeInLeft z-1">
                  <h3>
                    We Have 25 Years Of Experience in Business Consulting
                    Services
                  </h3>
                  <div className="author-thumb-title d-flex align-items-center">
                    <div className="author-thumb">
                      <img
                        src="assets/images/author-1.jpg"
                        alt="Author Image"
                      />
                    </div>
                    <div className="author-title">
                      <h4 className="title">Joseh G. Coleman</h4>
                      <p className="position">CEO &amp; Founder</p>
                    </div>
                  </div>
                </div>
                <img
                  src="assets/images/gallery/img-1.jpg"
                  className="wow fadeInDown"
                  alt="Fact image"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-12">
              {/*=== Fact content Box ===*/}
              <div className="fact-one_content-box mb-10">
                <div className="section-title section-title-left wow fadeInDown">
                  <span className="sub-title">Who We Are</span>
                  <h2>We’re Committed to Creating Change</h2>
                </div>
                <p className="wow fadeInUp">
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium totam rem apereaque abillo
                  inventore veritatis quasi architecto beatae
                </p>
                <div className="single-counter-item d-flex align-items-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <a href="#">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <div className="text d-flex justify-content-between align-items-center">
                    <h2 className="number">
                      <Counter end={2359} />
                    </h2>
                    <h5>Projects Completed in Last 5 Years</h5>
                  </div>
                </div>
                <div className="single-counter-item d-flex align-items-center mb-40 wow fadeInDown">
                  <div className="icon">
                    <a href="#">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                  <div className="text d-flex justify-content-between">
                    <h2 className="number">
                      <Counter end={5368} />
                    </h2>
                    <h5>Happy Global Customers Who Trusted Us</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section
        className="cta-section bg_cover p-r z-1 pt-70 pb-50"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/*=== Common Heading ===*/}
              <div className="section-title text-white mb-30 wow fadeInLeft">
                <h2>Get Free Consultations! We’re Ready to Work Together</h2>
              </div>
            </div>
            <div className="col-lg-5">
              {/*=== CTA Button ===*/}
              <div className="cta-button float-lg-right mb-30 wow fadeInRight">
                <Link legacyBehavior href="/team">
                  <a className="main-btn btn-white">Get Free Consultations</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
 

    </Layout>
  );
};
export default Index;
