import React from 'react'
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    {/* Company description */}
                    <div className="col-lg-3 col-md-12">
                        <div className="footer-logo">
                            {/* <img src="/assets/img/logo/highsky-logoo.png" className="w-100" /> */}
                            <img src={`${process.env.REACT_APP_BASE_URL}/assets/img/logo/HIGHSKY LOGO.png`} alt="HighSky" />
                        </div>
                        <p className='text-wrap'>
                            {/* At HighSky Automation, we specialize in providing cutting-edge control panel solutions for various industries. Our focus is on delivering innovative, reliable, and efficient automation technologies that streamline operations, improve performance, and empower businesses to achieve greater success. */}
                            At HighSky Automation, we deliver innovative and reliable control panel solutions for diverse industries, enhancing operations and performance through advanced automation technologies.
                        </p>

                    </div>

                    {/* Footer content and useful links */}
                    <div className="col-lg-9 col-md-12">
                        <div className="row">
                            {/* Contact No. */}
                            <div className="col-lg-4 col-md-4">
                                <div className="address-bar">
                                    {/* <span className='footer-icons'><img src="/assets/img/icons/phone.svg" width="40" /></span> */}
                                    <LocalPhoneRoundedIcon className='text-color footer-icons' />
                                    <p><b>Phone</b><br /><Link to="tel:011-47529525">+91-124-4203372</Link></p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="col-lg-4 col-md-4">
                                <div className="address-bar">
                                    {/* <span className='footer-icons'><img src="/assets/img/icons/email.svg" width="40" /></span> */}
                                    <AttachEmailRoundedIcon className='text-color footer-icons' />
                                    <p><b>Email</b><br /><Link to="mailto:info@highskyautomation.com">info@highskyautomation.com</Link></p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="col-md-4 col-md-4">
                                <div className="address-bar">
                                    {/* <span><img src="/assets/img/icons/location.svg" width="50" /></span> */}
                                    <LocationOnRoundedIcon className='text-color footer-icons' />
                                    <p><b>Location</b><br />#56,Hartron Complex, Electronic City
                                    Sector-18, Gurugram, Haryana-122015</p>
                                </div>
                            </div>

                            {/* Line below contact-links */}
                            <div className="col-md-12">
                                <div className="line-hr"></div>
                            </div>

                            {/* Quick Links */}
                            <div className="col-lg-4 col-md-4 quck ms-0">
                                <div className="ft-inner">
                                    <h6>Quick Links<span><Divider className='divider mt-2' variant="outset"/></span></h6>
                                    <ul>
                                        <li><Link to="/about_us">About us</Link></li>
                                        <li><Link to="/about_us">Vision / Mission</Link></li>
                                        <li><Link to="">Training</Link></li>
                                        <li><Link to="/contact_us">Contact Us </Link></li>
                                    </ul>
                                </div>
                            </div>
                            
                            {/* Service Links */}
                            <div className="col-lg-4 col-md-4 quck ms-0">
                                {/* <div className="ft-inner services"> */}
                                <div className="ft-inner">
                                    <h6>Services<span><Divider className='divider mt-2' variant="outset"/></span></h6>
                                    <ul>
                                        <li><Link to="">PLC</Link></li>
                                        <li><Link to="">HMI</Link></li>
                                        <li><Link to="">AC-Drive</Link></li>
                                        <li><Link to="">Softstaters</Link></li>
                                        <li><Link to="">Servo Drive</Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Service Links */}
                            <div className="col-lg-4 col-md-4 col-12 me-0">
                                <div className="ft-inner">
                                    <h6>Get in touch<span><Divider className='divider mt-2' variant="outset"/></span></h6>
                                    <Link to="/about_us" target="_blank">
                                        <span className='footer-icons'><img src={`${process.env.REACT_APP_BASE_URL}/assets/img/icons/linkedin.svg`} width="40" /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Line above Copyright */}
                    <div className="col-md-12">
                        <div className="line-hr copyright-hr"></div>
                    </div>

                    {/* Copyright  */}
                    <div className="copy-right">
                        <div className="row">
                            <div className="col-md-12">
                                <p className='text-end'>© 2025 HighSky. All Right Reserved. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}