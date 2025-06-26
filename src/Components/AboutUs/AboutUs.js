import React, { useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import AOS from "aos";
import "aos/dist/aos.css";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function AboutUs() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Layout>
      <section>
        <div className='container-fluid'>
          <div className="pt-5 pb-5">
            <div className="container">
              <div className="row align-items-center justify-content-center">

                {/* LEFT COLUMN - TEXT */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-5 mb-lg-0 z_99">
                  <h2 className="heading mb-40 mb-3">We are<span className='text-color'> Highsky</span></h2>
                  <h5 className="text-muted mb-4">Driving Industrial Innovation Since 2005</h5>

                  <p>
                    Highsky, under the name <strong>NECAS Automation Inc.</strong>, has been a trusted name in industrial automation since its inception in 2005.
                    We specialize in delivering advanced solutions including <strong>DCS, PLC, SCADA, AC Drives, Bently 3500, EXOR, DG Auto Synchronization, and Energy Management Systems</strong>.
                  </p>
                  <p>
                    With over <strong>600 successful turnkey, retrofit, and integration projects</strong> delivered, we are recognized for our technical depth, execution excellence, and long-standing customer relationships.
                  </p>
                  <p>
                    Backed by a strong team of 30+ highly skilled engineers, our head office and production facility in Gurgaon is equipped for agile project delivery and ongoing support.
                    Our engineers bring rich domain expertise and hands-on experience across diverse industrial environments.
                  </p>

                  <ul className="feature-list list-unstyled mt-4">
                    <li className="feature-item">
                      <div className="icon">
                        <i className="fa fa-industry" aria-hidden="true"></i>
                      </div>
                      <p>Proven capabilities across Oil & Gas, Power, Chemicals, Cement, Automotive, F&B, and more</p>
                    </li>
                    <li className="feature-item">
                      <div className="icon">
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                      </div>
                      <p>Seamless execution of projects, starting at design and concluding with commissioning</p>
                    </li>
                    <li className="feature-item">
                      <div className="icon">
                        <i className="fa fa-chart-line" aria-hidden="true"></i>
                      </div>
                      <p>Consistent growth driven by commitment to quality and customer satisfaction</p>
                    </li>
                  </ul>
                </div>

                {/* RIGHT COLUMN - IMAGES */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="image_boxes style_two" data-aos="fade-left" data-aos-duration="1000">
                    <img src="assets/img/backgroundImages/shape-1.png" className="background_image" alt="shape" />
                    <div className="image one" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                      <img src="assets/img/aboutUs/about-1.png" className="img-fluid" alt="about" />
                    </div>
                    <div className="image two" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
                      <img src="assets/img/aboutUs/about-1.png" className="img-fluid" alt="about" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* MISSION & VISION SECTION */}
          {/* <div className="mission-vision-section py-5">
        <div className="container">
          <div className="row justify-content-center gy-4">

            <div className="col-md-5">
              <div className="mv-card mv-card-mission p-4 position-relative overflow-hidden" data-aos="zoom-out-right">
                <div className="angle-bg"></div>
                <div className="icon-wrapper mb-3">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h4 className="mb-3">Our Mission</h4>
                <p>
                  To revolutionize industries with cutting‑edge automation that boosts efficiency, reduces costs, and drives sustainable growth for every client.
                </p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="mv-card mv-card-vision p-4 position-relative overflow-hidden" data-aos="zoom-out-left">
                <div className="angle-bg"></div>
                <div className="icon-wrapper mb-3">
                  <i className="fas fa-eye"></i>
                </div>
                <h4 className="mb-3">Our Vision</h4>
                <p>
                  To be the world's most trusted automation partner—setting new benchmarks in innovation, reliability, and customer success.
                </p>
              </div>
            </div>

          </div>
        </div>
          </div> */}

          <div className='mission-vision-section py-5'>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4" data-aos="fade-up-right">
                  <div className="mission-vision-cards card-style">
                    <div className="card-content">
                      <div className="content_inner">
                        <span className="">
                          <GpsFixedIcon className="mission-vission-icon" />
                        </span>
                        <small className="nom">01</small>
                        <h2><a>Mission</a></h2>
                        <p>Our mission is to provide innovative solutions that enhance the lives of our
                          customers and create a positive impact on society. We strive to deliver exceptional
                          products and services that exceed expectations, while fostering long-term
                          relationships based on trust and integrity.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mr_bottom_30"></div>
                </div>


                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4" data-aos="fade-up-left">
                  <div className="mission-vision-cards card-style">
                    <div className="card-content">
                      <div className="content_inner">
                        <span className="">
                          <VisibilityIcon className="mission-vission-icon" />
                        </span>

                        <small className="nom">02</small>
                        <h2><a>Vision</a></h2>
                        <p>Our vision is to be a global leader in our industry, recognized for our cutting-edge
                          technology, exceptional quality, and commitment to sustainability. We aim to
                          continuously evolve and adapt to the changing needs of our customers, staying ahead
                          of the curve and setting new benchmarks for excellence.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mr_bottom_30"></div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
