import React from "react";
import { Layout } from "../Layout/Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import ServicesData from "../Constants/ServicesData";

function ServiceDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const service = ServicesData.find((s) => s.id === parseInt(id));

    if (!service) return <p>Service not found.</p>;

    return (
        <Layout>
            <section>
                <div className="contact-form-section pt-50 pb-50">
                    <div className="container max-width-1460" style={{ maxWidth: "1460px" }}>
                        {/* Back Link */}
                        <div className="mb-4">
                            <Link
                                onClick={() => navigate(-1)}
                                className="d-inline-flex align-items-center text-decoration-none back-link fw-semibold"
                                style={{
                                    color: "#d64741",
                                    transition: "all 0.3s ease",
                                    fontSize: "1.1rem",
                                }}
                                onMouseOver={(e) => (e.target.style.color = "#084298")}
                                onMouseOut={(e) => (e.target.style.color = "#d64741")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="me-2"
                                    style={{ width: "20px", height: "20px" }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                    />
                                </svg>
                                Back to Services
                            </Link>
                        </div>

                        {/* Content */}
                        <div className="row align-items-start g-4">
                            {/* Image */}
                            <div className="col-md-5">
                                <div className="position-relative p-3 text-center image-wrapper">
                                    <div
                                        className="position-absolute top-50 start-50 translate-middle bg-gradient rounded-circle"
                                        style={{
                                            width: "280px",
                                            height: "280px",
                                            zIndex: 0,
                                            background: "radial-gradient(circle at center, #dbeafe 0%, #e0f2fe 100%)",
                                            opacity: 0.4,
                                        }}
                                    ></div>
                                    <img
                                        src={service.imgUrl}
                                        alt={service.name}
                                        className="img-fluid rounded creative-img mb-3"
                                        style={{
                                            position: "relative",
                                            zIndex: 1,
                                            transition: "transform 0.3s ease, boxShadow 0.3s ease",
                                            borderRadius: "1rem",
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="col-md-7">
                                <div className="card service-card p-4 shadow mt-0">
                                    <div className="d-flex justify-content-center align-items-center mb-3">
                                        <div className="icon-circle me-3 p-1" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '2.5rem',
                                            width: '2.5rem',
                                            borderRadius: '9999px',
                                            backgroundColor: '#0c94c5',
                                            color: 'white',
                                            transition: 'background-color 0.2s ease'
                                        }}>
                                        {service.icon}
                                        </div>
                                        <h2 className="fw-bold mb-0">{service.name}</h2>
                                    </div>
                                    <p className="fst-italic mb-3">{service.description}</p>
                                    <div style={{ lineHeight: "1.7", color: "#444" }}>
                                        {service.detailedDescription.map((para, idx) => (
                                            <p key={idx}>{para}</p>
                                        ))}
                                    </div>
                                    <hr />
                                    <div className="col-md-12 mt-3">
                                        <Link to="/contact_us">
                                            <button className='submit-btn'>
                                                <span className="shadow"></span>
                                                <span className="edge"></span>
                                                <span className="front text">Inquire About This Service
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default ServiceDetail;