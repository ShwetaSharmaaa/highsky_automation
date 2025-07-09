import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react'
import WarehouseIcon from '@mui/icons-material/Warehouse';
import { industryData, services } from '../Constants/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const STATS_CONTENT = {
  superTitle: "OUR EXPERTISE",
  title: "Proven Success in",
  highlightedTitle: "Automation",
  description: "Our journey since 2012 is marked by tangible achievements. These numbers represent more than just data; they are milestones of trust, dedication, and the successful partnerships we've built with clients across industries.",
  stats: [
    {
      value: "12+",
      label: "YEARS OF EXPERIENCE",
      icon: <EventAvailableIcon className='text-color' sx={{ fontSize: { xs: 30, sm: 40 } }} />
    },
    {
      value: "40K",
      label: "SQ.FT. MFG. UNIT",
      icon: <WarehouseIcon className='text-color' sx={{ fontSize: { xs: 30, sm: 40 } }} />
    },
    {
      value: "30+",
      label: "EXPERT ENGINEERS",
      icon: <EngineeringIcon className='text-color' sx={{ fontSize: { xs: 30, sm: 40 } }} />
    },
  ]
};

// --- Reusable Animated Counter ---
const AnimatedCounter = ({ end, duration = 2000, isInView }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) { setCount(0); return; };
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) { window.requestAnimationFrame(step); }
    };
    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);
  return <span>{count}</span>;
};

// --- Stat Item with its own Animation Logic ---
const StatItem = ({ stat, index }) => {
  const itemRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const numericValue = parseInt(stat.value, 10);
  const suffix = stat.value.replace(String(numericValue), '').trim();
  const isNumeric = !isNaN(numericValue);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.6 });
    if (itemRef.current) { observer.observe(itemRef.current); }
    return () => {
      if (itemRef.current) { observer.unobserve(itemRef.current); }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`stat-item m-0 ${isInView ? 'is-in-view' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* <div className={`timeline-dot ${isInView ? 'is-in-view' : ''}`} /> */}
      <div className="icon-wrapper">{stat.icon}</div>
      <div className="m-0 text-start">
        <p className="stat-value">
          {isNumeric ? <AnimatedCounter end={numericValue} isInView={isInView} /> : stat.value}
          {isNumeric && suffix}
        </p>
        <p className="stat-label mb-0">{stat.label}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const yearsRef = useRef(null);
  const projectsRef = useRef(null);
  const clientsRef = useRef(null);
  const engineersRef = useRef(null);

  // State to keep track of the active tab's index. Defaults to the first item (0).
  const [activeIndex, setActiveIndex] = useState(0);

  // Get the currently active industry based on the activeIndex
  const activeIndustry = industryData[activeIndex];

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

  const HERO_IMAGES = {
    imageUrls: [
      'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=2787&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=2787&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=2787&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=2787&auto=format&fit=crop',
    ],
  };

  return (
    <Layout>
      {/* Carousel section */}
      <section className="pt-100">
        <div className="container-fluid">
          <div className="align-items-center g-5">
            <Row className='align-items-center'>
              <Col lg={7} className="text-center text-lg-start">
                <div className='d-flex flex-column justify-content-between align-items-start'>
                  <h1 className="heading m-0 mb-5">Cutting-Edge Industrial <br /><span className="text-color">Automation</span></h1>
                  <p className="mx-auto mx-lg-0 max-x-xl max-width-35">Since 2012, we've delivered end-to-end automation and control system integration, enhancing efficiency, safety, and performance across diverse industries.</p>
                  {/* <Link to="" className="sasco-btn m-0 mt-4">Discover More →</Link> */}
                  <Link
                    to="#"
                    className="m-0 mt-4 text-decoration-none fw-semibold border-bottom border-primary text-primary d-inline-block discover-link"
                  >
                    Discover More →
                  </Link>
                </div>
              </Col>

              <Col lg={5}>
                <Row className="g-4">
                  <Col xs={4}>
                    <img src={HERO_IMAGES.imageUrls[0]} alt="Automation 1" className="img-cover rounded-3 shadow-lg" data-aos="fade-up" data-aos-delay="0" data-aos-duration="800" />
                  </Col>
                  <Col xs={8}>
                    <img src={HERO_IMAGES.imageUrls[1]} alt="Automation 2" className="img-cover rounded-3 shadow-lg" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" />
                  </Col>
                  <Col xs={8}>
                    <img src={HERO_IMAGES.imageUrls[2]} alt="Automation 3" className="img-cover rounded-3 shadow-lg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" />
                  </Col>
                  <Col xs={4}>
                    <img src={HERO_IMAGES.imageUrls[3]} alt="Automation 4" className="img-cover rounded-3 shadow-lg" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="pt-100 service-sec">
        <div className="container-fluid">
          <div className="col-md-12 text-center mb-5">
            <span className="sub-title">OUR SERVICES</span>
            <h2 className="heading">
              Elevate Your Automation with <br />
              Highsky <span className="text-color">Industrial Solutions</span>
            </h2>
          </div>
          <div className="row">
            {services.map((service, idx) => (
              <div className="col-lg-4 col-md-6 col-12 mb-4" key={idx} data-aos={service.aosPosition}>
                <div className="service-thumb">
                  <Link to="#">
                    <img src={service.image} alt={service.title} className="w-100" />
                    <div className="service-content">
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Feature section */}
      <section className="pt-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="sub-title">OUR CORE EXPERTISE</span>
              <h2 className="heading fs-34 mb-40">Comprehensive Solutions for <span className="text-color">Every Need</span></h2>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-right">
              <div className='card box-shadow'>
                <div className="whatwe-icon">
                  <div className='offer-icon'>
                    <i className="fa-solid fa-microchip"></i>
                  </div>
                  <div className="whatwe-content">
                    <h4 className='fw-bold'>DCS & PLC-Based Panels</h4>
                    <p>Design, development, and commissioning of sophisticated PLC and DCS-based control panels for any industrial application.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className='card box-shadow'>
                <div className="whatwe-icon">
                  <div className='offer-icon'>
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <div className="whatwe-content">
                    <h4 className='fw-bold'>LT Power Panels</h4>
                    <p>Manufacturing of high-quality LT Power Panels ensuring safe and efficient electricity distribution for your facility.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-left">
              <div className='card box-shadow'>
                <div className="whatwe-icon">
                  <div className='offer-icon'>
                    <i className="fa-solid fa-arrows-rotate"></i>
                  </div>
                  <div className="whatwe-content">
                    <h4 className='fw-bold'>DG Synchronization</h4>
                    <p>Expertise in creating auto synchronization panels for multiple DG sets, ensuring uninterrupted power.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-right">
              <div className='card box-shadow'>
                <div className="whatwe-icon">
                  <div className='offer-icon'>
                    <i className="fa-solid fa-sliders-h"></i>
                  </div>
                  <div className="whatwe-content">
                    <h4 className='fw-bold'>SCADA & HMI Programming</h4>
                    <p>Developing user-friendly SCADA systems and HMI interfaces for seamless process control and monitoring.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className='card box-shadow'>
                <div className="whatwe-icon">
                  <div className='offer-icon'>
                    <i className="fa-solid fa-cogs"></i>
                  </div>
                  <div className="whatwe-content">
                    <h4 className='fw-bold'>System Integration & AMC</h4>
                    <p>Providing complete system integration and offering Annual Maintenance Contracts to ensure long-term operational excellence.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-left">
              <div className='card box-shadow'>
                <div className="whatwe-icon">
                  <div className='offer-icon'>
                    <i className="fa-solid fa-plug"></i>
                  </div>
                  <div className="whatwe-content">
                    <h4 className='fw-bold'>Relay-Based Control Panels</h4>
                    <p>Delivering reliable and cost-effective relay-based control panels for a wide range of automation tasks.</p>
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

      <section className="pt-100 industries-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="sub-title">INDUSTRIES WE SERVE</span>
              <h2 className="heading mb-40">
                Providing Automation Solutions Across{' '}
                <span className="text-color">Key Sectors</span>
              </h2>
            </div>
          </div>

          <div className="industry-flex-container">
            <div className="industry-tabs-wrapper">
              {industryData.map((industry, index) => (
                <div
                  key={index}
                  className={`industry-tab m-0 ${index === activeIndex ? 'active' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="icon-wrapper m-0 me-3">
                    <i className={industry.icon}></i>
                  </div>
                  <span className='m-0'>{industry.name}</span>
                </div>
              ))}
            </div>

            {/* Right Column: Image Display */}
            <div className="industry-image-display">
              {industryData.map((industry, index) => (
                <img
                  key={industry.name}
                  src={industry.image}
                  alt={industry.name}
                  className={`industry-image ${index === activeIndex ? 'visible' : ''}`}
                />
              ))}
              <div className="image-caption">
                <h4>{industryData[activeIndex].name}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-100">
        <div className='experience-sec'>
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Years of Experience */}
              <div className="col-lg-6 text-center text-lg-start">
                <div className="section-header">
                  <span className="sub-title">OUR EXPERTISE</span>
                  <h2 className="heading text-white">
                    Proven Success in <span className="text-color">Automation</span>
                  </h2>
                  <p className="description ms-0 me-0">Our journey since 2012 is marked by tangible achievements. These numbers represent more than just data; they are milestones of trust, dedication, and the successful partnerships we've built with clients across industries.</p>
                </div>
              </div>

              {/* Completed Projects */}
              <div className="col-lg-6">
                <div className="timeline-wrapper">
                  {/* <div className="timeline-line" /> */}
                  <div className="timeline-items" data-aos="zoom-in">
                    {STATS_CONTENT.stats.map((stat, index) => (
                      <StatItem key={index} stat={stat} index={index} />
                    ))}
                  </div>
                </div>
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