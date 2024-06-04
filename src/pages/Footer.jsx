import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Address</h5>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social rounded-circle" href="/"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social rounded-circle" href="/"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social rounded-circle" href="/"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social rounded-circle" href="/"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Company</h5>
            <a className="btn btn-link" href="/">Home</a>
            <a className="btn btn-link" href="/">About</a>
            <a className="btn btn-link" href="/">Contact</a>
            <a className="btn btn-link" href="/">Enquiry</a>
            <a className="btn btn-link" href="/">Career</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <a className="btn btn-link" href="/">About Us</a>
            <a className="btn btn-link" href="/">Contact Us</a>
            <a className="btn btn-link" href="/">Our Services</a>
            <a className="btn btn-link" href="/">Terms & Condition</a>
            <a className="btn btn-link" href="/">Support</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
              <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="/">Your Site Name</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a className="border-bottom" href="#">HTML Codex</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
