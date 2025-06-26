import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
    const location = useLocation();
    const [progress, setProgress] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to update the scroll progress
    const updateProgressBar = () => {
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPosition = window.scrollY;
        const scrollPercent = (scrollPosition / scrollHeight) * 100;
        setProgress(scrollPercent);
    };

    // UseEffect to add the event listener for scroll
    useEffect(() => {
        window.addEventListener("scroll", updateProgressBar);
        return () => {
            window.removeEventListener("scroll", updateProgressBar);
        };
    }, []);

    return (
        <>
            {/* Progress bar */}
            <div id="progressBar" style={{ width: `${progress}%` }}></div>

            {/* Header */}
            <nav className="navbar navbar-light navbar-expand-lg bg-body-tertiary fixed navbar-fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img src="/assets/img/logo/highsky-logoo.png" alt="HighSky" width={100} height={50} />
                        {/* <img src="/assets/img/logo/HIGHSKY LOGO.png" alt="HighSky" height={50} /> */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleMenu}>
                        <span className={`navbar-toggler-icon ${isMenuOpen ? 'cross' : ''}`}></span>
                    </button>
                    <div className="collapse navbar-collapse main-nav" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`} to="/">Home</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/about_us' ? 'nav-link-active' : ''}`} to="/about_us">About Us</Link></li>
                            <li className="nav-item dropdown">
                                <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'nav-link-active' : ''}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services  <i className="fa fa-angle-down" aria-hidden="true"></i>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="nav-link" to="#">PLC</Link></li>
                                    <li><Link className="nav-link" to="#">HMI</Link></li>
                                    <li><Link className="nav-link" to="#">AC-Drive</Link></li>
                                    <li><Link className="nav-link" to="#">Softstaters</Link></li>
                                    <li><Link className="nav-link" to="#">Servo Drive</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === '/services' ? 'nav-link-active' : ''}`}  to="/services">Services</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about_us">Products</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact_us">Contact Us</Link></li>
                        </ul>
                        {/* <Link className="getin-touch" onClick={handleEnquireClick}> ENQUIRE NOW</Link> */}
                        {/* <button className="getin-touch button" onClick={handleEnquireClick} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            ENQUIRE NOW
                            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                <path
                                clip-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                fill-rule="evenodd"
                                ></path>
                            </svg>
                        </button> */}
                        <button className="enquire-now" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Enquire Now</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Enquire now Offcanvas */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Enquire Now</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                <form>
                    <div className="mb-3">
                        <label for="fullName" className="form-label">Name</label>
                        <input type="name" className="form-control" id="fullName" name="fullName" aria-describedby="fullName"/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="purpose" className="form-label">Purpose</label>
                        <input type="name" className="form-control" id="purpose" name="purpose" aria-describedby="purpose"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="4" required></textarea>
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                        <button className="cssbuttons-io"><span>Submit</span></button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
}