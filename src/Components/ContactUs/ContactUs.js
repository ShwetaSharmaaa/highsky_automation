import React from 'react'
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import { Layout } from '../Layout/Layout';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import StepLabel from '@mui/material/StepLabel';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import StepConnector from '@mui/material/StepConnector';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ContactUs() {
  // Custom StepConnector (Line)
  const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
    [`& .MuiStepConnector-line`]: {
      borderColor: '#00000038',
      borderWidth: 1.5,
      borderStyle: 'solid',
      margin: 10,
      // marginTop: 10,
      zIndex: 0
    },
    [`& .MuiStepConnector-alternativeLabel`]: {
      top: '20px',
    },
    [`& .MuiStepConnector-active`]: {
      borderColor: '#ff6347',
    }
  }));
  
  return (
      <Layout>
        <div className="contact-us">
          <div className="container">
              <div className="row d-flex justfify-content-center align-items-center">
                  <div className="col-md-12">
                      <div className="contact-detail">
                          <h1 className="heading mb-3">Contact <span className="text-color">Us</span></h1>
                          <p className='mt-3'>Get in touch for expert industrial automation and custom control panel solutions that ensure optimal performance.</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className='pt-100 pb-100'>
          <div className='container'>
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={-1} alternativeLabel connector={<CustomStepConnector />} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
              {/* Call Us Step */}
              <Step>
                <StepLabel className="step-label" icon={<PhoneIcon className='step-labels-icon' sx={{ fontSize: { xs: 30, sm: 40 } }} />}>
                  <div>
                    <h2>Call Us</h2>
                    <p>+91-124-4203372</p>
                  </div>
                </StepLabel>
              </Step>

              {/* Mail Us Step */}
              <Step>
                <StepLabel className="step-label" icon={<MailIcon className='step-labels-icon' sx={{ fontSize: { xs: 30, sm: 40 } }} />}>
                  <div>
                    <h2>Mail Us</h2>
                    <p>info@highsky.co.in</p>
                  </div>
                </StepLabel>
              </Step>

              {/* Address Step */}
              <Step>
                <StepLabel className="step-label" icon={<LocationOnIcon className='step-labels-icon' sx={{ fontSize: { xs: 30, sm: 40 } }} />}>
                  <div>
                    <h2>Address</h2>
                    <p>#56, Hartron Complex, Electronic City<br />
                      Sector-18, Gurugram, Haryana-122015</p>
                  </div>
                </StepLabel>
              </Step>
            </Stepper>
          </Box>
          </div>
        </div>
        <div className='contact-form-section pt-50 pb-50'>
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-6 mb-3 mb-md-0">
                      <div className="heading-contactus">
                          <span className="span">Contact Us</span>
                          <h2>Connect with Us Today</h2>
                          <div className="mb-4"></div>
                          <p>
                              We’re here to provide the best automation solutions for your needs. Whether you're looking for advanced automation systems or project execution support, we’re here to help you achieve success in industries like Oil & Gas, Power, and more.
                          </p>
                      </div>
                  </div>

                  <div className="col-lg-6 mb-3 mb-md-0">
                      <div className="contact-form">
                          <div className="heading-contactus">
                              <h3>Get in touch with us</h3>
                              {/* <div className="mb-4"></div> */}
                              <p className='mb-0'>
                                  Our response time is within 30 minutes during business hours
                              </p>
                          </div>
                          {/* <div className="mb-2"></div> */}

                          <form id="contact_form" method="post">
                              <input name="form_name" type="hidden" value="contactUs" />
                              <div className="row">
                                  <div className="col-md-6">
                                      <div className="single-input">
                                          <input type="text" name="fname" id="fname" placeholder="First Name" required="" />
                                          <small className="text-danger error-fname"></small>
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="single-input">
                                          <input type="text" name="lname" id="lname" placeholder="Last Name" required="" />
                                          <small className="text-danger error-lname"></small>
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="single-input">
                                          <input type="email" name="email" id="email" placeholder="Email" required="" />
                                          <small className="text-danger error-email"></small>
                                      </div>
                                  </div>

                                  <div className="col-md-6">
                                      <div className="single-input">
                                          <input type="number" name="phone" id="phone" placeholder="Phone" required="" />
                                          <small className="text-danger error-phone"></small>
                                      </div>
                                  </div>

                                  <div className="col-md-12">
                                      <div className="single-input">
                                          <input type="text" name="subject" id="subject" placeholder="Subject" required="" />
                                          <small className="text-danger error-subject"></small>
                                      </div>
                                  </div>

                                  <div className="col-md-12">
                                      <div className="single-input">
                                          <textarea rows="4" name="message" id="message" placeholder="Message" required=""></textarea>
                                          <small className="text-danger error-message"></small>
                                      </div>
                                  </div>

                                  {/* <div className="col-sm-12 text-left">
                                      <div className="g-recaptcha" data-sitekey="6LeIA_EqAAAAAD3-AG_Laqtvs16jakoxNL4QL3U4">
                                        <div style={{width: '304px', height: '78px'}} className='ms-0'>
                                          <div>
                                            <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-pu54szwuq9x6" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeIA_EqAAAAAD3-AG_Laqtvs16jakoxNL4QL3U4&amp;co=aHR0cHM6Ly9leHBlcnR0YWwuY29tOjQ0Mw..&amp;hl=en&amp;v=EGO3I7Q26cZ-jBw3BEtzIx7-&amp;size=normal&amp;cb=akmpkjb0axh0"></iframe>
                                          </div>
                                          <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '250px', height: '40px',border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}}></textarea>
                                        </div>
                                        <iframe style={{display: 'none'}}></iframe>
                                      </div>
                                      <small className="text-danger error-g-recaptcha-response"></small>
                                  </div> */}

                                  <div className="col-md-12 text-end mt-3">
                                      <button className='submit-btn'>
                                        <span className="shadow"></span>
                                        <span className="edge"></span>
                                        <span className="front text"> Submit Now
                                        </span>
                                      </button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </Layout>
  );
}