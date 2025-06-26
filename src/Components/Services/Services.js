import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import ServicesData from "../Constants/ServicesData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

export default function Services() {
  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Layout>
      <section className="whoweare-section bg-grey" id="vision-mission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="whoweare-dis">

                <div className="mb-5 text-center" data-aos="fade-up">
                  <h3 className="heading mb-3 text-color">Explore Our Services</h3>
                  <p className="text-muted mb-2">
                    Discover the range of specialized services Highsky Automation provides. Click on any offering to see a brief overview, and then proceed to view full details.
                  </p>
                </div>
                {ServicesData.map((service, index) => (
                  <Accordion
                    key={service.id}
                    expanded={expanded === `panel${service.id}`}
                    onChange={handleChange(`panel${service.id}`)}
                    // data-aos="zoom-in-up"
                    // data-aos-delay={index * 100}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon className="MuiAccordionSummary-expandIcon" />}
                      id={`panel${service.id}bh-header`}
                      aria-controls={`panel${service.id}bh-content`}
                    >
                      {/* <ErrorOutlineIcon className="me-2 text-danger" style={{ marginRight: 8, marginLeft: 0, color: 'red' }} /> */}
                      <div className="d-flex align-items-center" style={{marginLeft: 0, marginRight: 0}}>
                          <div className="icon-circle me-3 p-1" style={{
                              marginRight: 8, 
                              marginLeft: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              height: '2.5rem',
                              width: '2.5rem',
                              borderRadius: '9999px', // full rounding
                              backgroundColor: '#d64741', // bg-sky-600/30
                              color: 'white', // text-sky-400
                              transition: 'background-color 0.2s ease'
                          }}>
                          {service.icon}
                          </div>
                      </div>
                      <Typography component="span" className="fw-bold">
                        {service.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{service.description}</Typography>
                      <div className="mt-3 text-start">
                        <Link to={`/service_detail/${service.id}`}>
                          <button className='submit-btn'>
                            <span className="shadow"></span>
                            <span className="edge"></span>
                            <span className="front text">View Full Details <span className="ms-2">&rarr;</span>
                            </span>
                          </button>
                        </Link>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}