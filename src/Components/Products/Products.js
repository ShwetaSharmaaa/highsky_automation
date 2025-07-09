import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import { Layout } from '../Layout/Layout'
import ProductsData from "../Constants/ProductsData";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProductModal from './ProductModal';

export default function Products() {
  const [showProduct, setShowProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowProductModal = (product) => {
    setShowProduct(true) 
    setSelectedProduct(product)
  }

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Layout>
      <section className="products-section">
        <div className="container">
          <div>
            <div className="mb-5 text-center" data-aos="fade-up">
              <h3 className="heading mb-3 text-color">Our Products</h3>
              <p className="text-muted mb-2">
              Explore our innovative range of automation solutions designed to enhance
              productivity and precision in your industry.
              </p>
            </div>

            <div className="row g-4">
              {ProductsData.map((product) => (
                <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="product-card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="product-image-container">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="product-card-image"
                      />
                      <div className="product-image-overlay"></div>
                    </div>
                    <div className="product-card-body">
                      <h4 className="product-card-title m-0">{product.name}</h4>
                      <p className="product-card-tagline">{product.tagline}</p>
                      <button className="product-view-details-btn" onClick={() => handleShowProductModal(product)}>
                        View Details
                        <ArrowForwardIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ProductModal product={selectedProduct} show={showProduct} setShow={setShowProduct} />
    </Layout>
  );
}