import React, { useEffect, useRef } from 'react'
import { Layout } from '../Layout/Layout';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const yearsRef = useRef(null);
  const projectsRef = useRef(null);
  const clientsRef = useRef(null);
  const engineersRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
  
    const animateCounter = (ref, target) => {
      let count = 0;
      const increment = target / 100;
  
      const updateCounter = () => {
        if (!isMounted || !ref.current) return; // Prevent update if unmounted
        if (count < target) {
          count += increment;
          ref.current.innerText = Math.ceil(count);
          setTimeout(updateCounter, 20);
        } else {
          ref.current.innerText = target;
        }
      };
      updateCounter();
    };
  
    animateCounter(yearsRef, 20);
    animateCounter(projectsRef, 250);
    animateCounter(clientsRef, 150);
    animateCounter(engineersRef, 100);
  
    return () => {
      isMounted = false; // This stops updateCounter after unmount
    };
  }, []);  

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, });
    AOS.refresh();
  }, []);

  return (
    <Layout>
      {/* Carousel section */}
      <section className='pt-100'>
        {/* <div className='container-fluid'> */}
        <div className=''>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-6 col-md-12 m-0">
                    <div className="carousel-content">
                      <h1 className="heading">Food Industry <span className="text-color">Automation</span></h1>
                      {/* <p>Automating food production processes to ensure faster output, consistent quality, and enhanced safety while meeting growing demand.</p> */}
                      <p>Transforming food manufacturing with automated solutions that increase production speed, ensure top-quality standards, and reduce operational costs.</p>
                      <Link to="" className="sasco-btn mt-5">Discover More </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 abs">
                    <div className="about-thumb">
                      {/* <img src="assets/img/food_industry/food_industry.png" alt="about us" className="w-100" /> */}
                      <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/food_industry/food_industry.png`} alt="about us" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 col-md-12 m-0">
                    <div className="carousel-content">
                      <h1 className="heading">Industrial <span className="text-color">Automation</span></h1>
                      {/* <p>Streamlining industrial processes with innovative automation technologies that enhance operational efficiency, reduce downtime, and improve safety.</p> */}
                      <p>Optimizing industrial processes with cutting-edge automation solutions that boost productivity, safety, and operational efficiency.</p>
                      <Link to="" className="sasco-btn mt-5">Discover More </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 abs">
                    <div className="about-thumb">
                      {/* <img src="assets/img/food_industry/food_industry.png" alt="about us" className="w-100" /> */}
                      <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/food_industry/food_industry.png`} alt="about us" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6 col-md-12 m-0">
                    <div className="carousel-content">
                      <h1 className="heading">Automobiles</h1>
                      <p>Major manufacturers are investing heavily in sustainable solutions to reduce their carbon footprint and meet global emission standards.</p>
                      <Link to="" className="sasco-btn mt-5">Discover More </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 abs">
                    <div className="about-thumb">
                      {/* <img src="assets/img/food_industry/food_industry.png" alt="about us" className="w-100" /> */}
                      <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/food_industry/food_industry.png`} alt="about us" className="w-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section className="pt-100 service-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="sub-title">OUR SERVICES</span>
              <h2 className="heading">Elevate Your Automation with <br />Highsky <span className="text-color">Industrial Solutions</span></h2>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-right">
              <div className="service-thumb">
                <Link to="#">
                  {/* <img src="assets/img/services/plc3.jpg" alt="Servo Drive" className="w-100" /> */}
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/services/plc3.jpg`} alt="Servo Drive" className="w-100" />
                  <div className="service-content">
                    <h4>Servo Drives</h4>
                    <p>Achieve precise speed and torque control with our advanced servo drive solutions. Perfect for automation systems requiring high accuracy, our drives ensure smooth, consistent performance across various applications.</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="service-thumb">
                <Link to="#">
                  {/* <img src="assets/img/services/plc1.jpg" alt="Servo Drive" className="w-100" /> */}
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/services/plc1.jpg`} alt="Servo Drive" className="w-100" />
                  <div className="service-content">
                    <h4>AC Drives</h4>
                    <p>Optimize motor control with our high-efficiency AC drives. Ideal for variable speed control, our AC drive solutions offer energy savings, smooth acceleration, and superior performance across industries.</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-left">
              <div className="service-thumb">
                <Link to="#">
                  {/* <img src="assets/img/services/plc4.jpg" alt="Servo Drive" className="w-100" /> */}
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/services/plc4.jpg`} alt="Servo Drive" className="w-100" />
                  <div className="service-content">
                    <h4>PLC</h4>
                    <p>Unlock the power of automated industrial control with our high-performance PLC systems. Designed for precision, reliability, and ease of use, our PLC solutions optimize your production processes for greater efficiency.</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-right">
              <div className="service-thumb">
                <Link to="#">
                  {/* <img src="assets/img/services/plc5.jpg" alt="Servo Drive" className="w-100" /> */}
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/services/plc5.jpg`} alt="Servo Drive" className="w-100" />
                  <div className="service-content">
                    <h4>Soft Starters</h4>
                    <p>Prevent motor damage and improve operational lifespan with our smart soft starter systems. Our solutions allow for smoother start-ups and optimal motor protection, ensuring energy-efficient performance in any application.</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="service-thumb">
                <Link to="#">
                  {/* <img src="assets/img/services/plc4.jpg" alt="Servo Drive" className="w-100" /> */}
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/services/plc4.jpg`} alt="Servo Drive" className="w-100" />
                  <div className="service-content">
                    <h4>HMI</h4>
                    <p>Enhance operator efficiency and safety with our intuitive HMI solutions. Designed to provide real-time feedback and control over automated systems, our HMIs offer seamless interaction for streamlined operations.</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-left">
              <div className="service-thumb">
                <Link to="#">
                  {/* <img src="assets/img/services/plc.webp" alt="Servo Drive" className="w-100" /> */}
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/services/plc.webp`} alt="Servo Drive" className="w-100" />
                  <div className="service-content">
                    <h4>HMI</h4>
                    <p>Enhance operator efficiency and safety with our intuitive HMI solutions. Designed to provide real-time feedback and control over automated systems, our HMIs offer seamless interaction for streamlined operations.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Feature section */}
      <section className="pt-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="sub-title">WHAT WE OFFER</span>
              <h2 className="heading fs-34 mb-40">All The Features  <span className="text-color">You Need</span></h2>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-right">
              <div className='card box-shadow'>
                <div className="whatwe-icon">
                  <div className='offer-icon'>
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="whatwe-content">
                    <h4>Single Touch Control</h4>
                    <p>Manage your home’s devices with a single touch. Our user-friendly interface simplifies home management, making it easier than ever.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className='card box-shadow'>
                <div className="whatwe-icon">
                  <div className='offer-icon'>
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="whatwe-content">
                    <h4>Biometric Control</h4>
                    <p>Our biometric systems offer advanced security with minimal effort. Enjoy a seamless, wireless setup that removes the need for complicated installations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-left">
              <div className='card box-shadow'>
                <div className="whatwe-icon">
                  <div className='offer-icon'>
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="whatwe-content">
                    <h4>Control From Anywhere</h4>
                    <p>Custom Control System is tailored to integrate all your lighting solutions into one user-friendly interface, giving you complete control.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-right">
              <div className='card box-shadow'>
                <div className="whatwe-icon">
                  <div className='offer-icon'>
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="whatwe-content">
                    <h4>Voice Control</h4>
                    <p>Control your home with just your voice. Our systems integrate with leading voice assistants, giving you hands-free command over your environment.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className='card box-shadow'>
                <div className="whatwe-icon">
                  <div className='offer-icon'>
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="whatwe-content">
                    <h4>Scheduling</h4>
                    <p>Automate your daily routines. Schedule your devices to operate according to your lifestyle, ensuring your home is always in sync with your needs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-left">
              <div className='card box-shadow'>
                <div className="whatwe-icon">
                  <div className='offer-icon'>
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <div className="whatwe-content">
                    <h4>Tech Support</h4>
                    <p>We’re here for you. Our dedicated tech support team is always available to assist you with any questions or issues, ensuring your smart home runs smoothly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className='card box-shadow'>
                        <div className="whatwe-icon">
                            <div className='offer-icon'>
                              <i className="fa-solid fa-thumbs-up"></i>
                            </div>
                            <div className="whatwe-content">
                                <h4>Tech Support</h4>
                                <p>We’re here for you. Our dedicated tech support team is always available to assist you with any questions or issues, ensuring your smart home runs smoothly.</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <p className="title">BACK</p>
                      <p>Image</p>
                    </div>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </section>

      <section className="experience-sec pt-100" data-aos="zoom-in">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <span className="sub-title">OUR EXPERTISE</span>
              <h2 className="heading fs-34">
                Proven Success in Automation
              </h2>
            </div>
          </div>
          <div className="row text-center">
            {/* Years of Experience */}
            <div className="col-lg-3 col-md-6">
              <div className="experience-item">
                <h3 className="experience-number" ref={yearsRef}>0</h3>
                <p className="experience-title">Years of Experience</p>
              </div>
            </div>

            {/* Completed Projects */}
            <div className="col-lg-3 col-md-6">
              <div className="experience-item">
                <h3 className="experience-number" ref={projectsRef}>0</h3>
                <p className="experience-title">Completed Projects</p>
              </div>
            </div>

            {/* Clients */}
            <div className="col-lg-3 col-md-6">
              <div className="experience-item">
                <h3 className="experience-number" ref={clientsRef}>0</h3>
                <p className="experience-title">Happy Clients</p>
              </div>
            </div>

            {/* Engineers */}
            <div className="col-lg-3 col-md-6">
              <div className="experience-item">
                <h3 className="experience-number" ref={engineersRef}>0</h3>
                <p className="experience-title">Expert Engineers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="experience-sec">
        <div className="container">
          <span className="sub-title">OUR EXPERTISE</span>
          <h2 className="heading">Proven Success in Automation</h2>

          <div className="row justify-content-center">
            <div className="col-md-3 col-6 mb-5">
              <div className="stat-circle">
                <div className="stat-number" ref={yearsRef}>0</div>
              </div>
              <div className="stat-title">Years of Experience</div>
            </div>

            <div className="col-md-3 col-6 mb-5">
              <div className="stat-circle">
                <div className="stat-number" ref={projectsRef}>0</div>
              </div>
              <div className="stat-title">Completed Projects</div>
            </div>

            <div className="col-md-3 col-6 mb-5">
              <div className="stat-circle">
                <div className="stat-number" ref={clientsRef}>0</div>
              </div>
              <div className="stat-title">Happy Clients</div>
            </div>

            <div className="col-md-3 col-6 mb-5">
              <div className="stat-circle">
                <div className="stat-number" ref={engineersRef}>0</div>
              </div>
              <div className="stat-title">Expert Engineers</div>
            </div>
          </div>
        </div>
      </section> */}


      {/* Clients Section */}
      <section className="pb-100 pt-100" data-aos="zoom-in">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="heading fs-34">We Have as Clients</h2>
            </div>
            <div className="col-md-12 mt-5 clientsSection">
              <div className="client-section">
                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/toshiba.png`} alt="Toshiba" className="w-100 img-height" />
                </div>

                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/hero.png`} alt="Hero" className="w-100 img-height" />
                </div>

                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/honda.png`} alt="Honda" className="w-100 img-height" />
                </div>

                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/itc.png`} alt="ITC" className="w-100 img-height" />
                </div>

                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/britannia.png`} alt="Britannia" className="w-100 img-height" />
                </div>
              </div>

              <div className="client-section">
                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/schneider.png`} alt="Schneider" className="w-100 img-height" />
                </div>

                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/patanjali.png`} alt="Patanjali" className="w-100 img-height" />
                </div>

                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/cremica.png`} alt="Cremica" className="w-100 img-height" />
                </div>

                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/general_electric.png`} alt="General Electric" className="w-100 img-height" />
                </div>

                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/parle.svg`} alt="Parle" className="w-100 img-height" />
                </div>
              </div>

              <div className="client-section border-0">
                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/hmel.png`} alt="Hmel" className="w-100 img-height" />
                </div>

                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/priyagold.jpg`} alt="Priyagold" className="w-100 img-height" />
                </div>

                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/raja1.png`} alt="Raja" className="w-100 img-height" />
                </div>

                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/woodward.png`} alt="Woodward" className="w-100 img-height" />
                </div>

                <div className="client-img">
                  <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/clients/anmol.jpeg`} alt="Anmol" className="w-100 img-height" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      {/* <section className="pb-100 pt-0" style={{ overflow: 'hidden' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading fs-34 text-center">Associated Brands</h2>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <article className="wrapper">
            <div className="marquee">
              <div className="marquee__group">
                <img src="assets/img/clients/toshiba.png" alt="Caterlux" />
                <img src="assets/img/clients/toshiba.png" alt="abb" />
                <img src="assets/img/clients/toshiba.png" alt="Control" />
                <img src="assets/img/clients/toshiba.png" alt="KKef" />
                <img src="assets/img/clients/toshiba.png" alt="Busch Jaeger logo" />
                <img src="assets/img/clients/toshiba.png" alt="Definitive technology" />
                <img src="assets/img/clients/toshiba.png" alt="Denon" />
                <img src="assets/img/clients/toshiba.png" alt="Marantz" />
                <img src="assets/img/clients/toshiba.png" alt="Cool automation" />
                <img src="assets/img/clients/toshiba.png" alt="polk" />
              </div>

              <div aria-hidden="true" className="marquee__group">
                <img src="assets/img/clients/toshiba.png" alt="ABB" />
                <img src="assets/img/clients/toshiba.png" alt="KNX" />
                <img src="assets/img/clients/toshiba.png" alt="Snao One" />
                <img src="assets/img/clients/toshiba.png" alt="Yamaha Revs Your Heart" />
                <img src="assets/img/clients/toshiba.png" alt="Prima Automation" />
                <img src="assets/img/clients/toshiba.png" alt="Benq" />
                <img src="assets/img/clients/toshiba.png" alt="Triad" />
                <img src="assets/img/clients/toshiba.png" alt="EPSON logo" />
                <img src="assets/img/clients/toshiba.png" alt="Recliners india" />
                <img src="assets/img/clients/toshiba.png" alt="Ubiquiti" />
              </div>
            </div>

            <div className="marquee marquee--reverse">
              <div className="marquee__group">
                <img src="assets/img/clients/toshiba.png" alt="Ubiquiti" />
                <img src="assets/img/clients/toshiba.png" alt="Recliners india" />
                <img src="assets/img/clients/toshiba.png" alt="EPSON logo" />
                <img src="assets/img/clients/toshiba.png" alt="Triad" />
                <img src="assets/img/clients/toshiba.png" alt="Benq" />
                <img src="assets/img/clients/toshiba.png" alt="Prima Automation" />
                <img src="assets/img/clients/toshiba.png" alt="Yamaha Revs Your Heart" />
                <img src="assets/img/clients/toshiba.png" alt="Snao One" />
                <img src="assets/img/clients/toshiba.png" alt="KNX" />
                <img src="assets/img/clients/toshiba.png" alt="ABB" />
              </div>

              <div aria-hidden="true" className="marquee__group">
                <img src="assets/img/clients/toshiba.png" alt="polk" />
                <img src="assets/img/clients/toshiba.png" alt="Cool automation" />
                <img src="assets/img/clients/toshiba.png" alt="Marantz" />
                <img src="assets/img/clients/toshiba.png" alt="Denon" />
                <img src="assets/img/clients/toshiba.png" alt="Definitive technology" />
                <img src="assets/img/clients/toshiba.png" alt="Busch Jaeger logo" />
                <img src="assets/img/clients/toshiba.png" alt="KKef" />
                <img src="assets/img/clients/toshiba.png" alt="Control" />
                <img src="assets/img/clients/toshiba.png" alt="abb" />
                <img src="assets/img/clients/toshiba.png" alt="Caterlux" />
              </div>
            </div>
          </article>
        </div>
      </section> */}
    </Layout>
  );
}