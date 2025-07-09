import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, CloseButton } from 'react-bootstrap';

export default function ProductModal({ product, show, setShow }) {
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (product?.images?.length > 0) {
      setActiveImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return null;
  }

  const onClose = () => {
    setShow(false)
  }

  return (
    <Modal
      show={show}
      onHide={setShow}
      centered
      dialogClassName="product-details-modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Body className='m-0'>
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col md={6} className="d-flex flex-column modal-image-col">
              <div className="main-image-wrapper flex-grow-1 m-0">
                <Image src={activeImage} alt={product.name} fluid />
                <div className="main-image-gradient"></div>
              </div>

              {product.images && product.images.length > 1 && (
                <div className="thumbnail-container-bottom">
                  <div className="thumbnail-list">
                    {product.images.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        onClick={() => setActiveImage(img)}
                        className={`thumbnail-image ${activeImage === img ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </Col>

            <Col md={6} className="p-3 p-md-3 modal-details-content">
              <div className="modal-details-header d-flex justify-content-between align-items-center m-0 mb-2">
                <h2 className="modal-title-custom m-0">{product.name}</h2>
                <CloseButton onClick={onClose} />
              </div>

              <p className="modal-tagline">{product.tagline}</p>

              <p className="modal-description">{product.description}</p>

              <div className="col-md-12 text-end">
                  <Link to="/contact_us">
                      <button className='submit-btn'>
                          <span className="shadow"></span>
                          <span className="edge"></span>
                          <span className="front text">Inquire Now </span>
                      </button>
                  </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}