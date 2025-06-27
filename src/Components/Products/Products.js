import React from "react";
import ProductsData from "../Products/ProductsData";
import { Layout } from "../Layout/Layout";

export default function Products() {
  return (
    <Layout>
    <section className="whoweare-section bg-grey">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 col-md-12">
            <div className="whoweare-dis">
          <div className="mb-5 text-center" data-aos="fade-up">
            <h3 className="heading mb-3 text-color">Explore Our Products</h3>
            {/* <p className="text-muted mb-2">
              Discover the range of specialized services Highsky Automation provides. Click on any offering to see a brief overview, and then proceed to view full details.
            </p> */}
          </div>
          <div className="row">
            {ProductsData.map((product) => (
              <div className="col-md-6 col-lg-4 mb-4" key={product.id}>
                <div className="card h-100 shadow-sm">
                  {/* Image Carousel */}
                  <div id={`carousel${product.id}`} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      {product.images.map((img, index) => (
                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                          <img src={img} className="d-block w-100" alt={`Product ${product.id} Image ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                    {product.images.length > 1 && (
                      <>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${product.id}`} data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#carousel${product.id}`} data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary">Enquire Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}