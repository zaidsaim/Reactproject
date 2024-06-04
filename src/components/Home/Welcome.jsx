import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Fa500Px } from "react-icons/fa";


const Welcome = () => {



    return (
        <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                <p class="d-inline-block border rounded-pill py-1 px-4">Services</p>
                <h1>Our Prodcuts</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item bg-light rounded h-100 p-5">
                        <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                           style={{ width: '65px', height: '65px' }}>
                            <i class="fa fa-heartbeat text-primary fs-4"></i>
                        </div>
                        <h4 class="mb-3">UROLOGY</h4>
                        <p class="mb-4">
                        Urology is the branch of medicine that focuses on surgical and medical diseases of the male and female urinary tract system and the male rep.
                            </p>
                        <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>View More</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item bg-light rounded h-100 p-5">
                        <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                           style={{ width: '65px', height: '65px' }}>
                            <i class="fa fa-x-ray text-primary fs-4"></i>
                        </div>
                        <h4 class="mb-3">NEPHROLOGY
</h4>
                        <p class="mb-4">The branch of medicine that deals with the physiology and diseases of the kidneys. Here at Meditech Devices we offers wide range of Disposab.</p>
                        <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>View More</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item bg-light rounded h-100 p-5">
                        <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                           style={{ width: '65px', height: '65px' }}>
                            <i class="fa fa-brain text-primary fs-4"></i>
                        </div>
                        <h4 class="mb-3">ONCOLOGY
</h4>
                        <p class="mb-4">Oncology is a branch of medicine that deals with the prevention, diagnosis and treatment of cancer. We have full range of venous access prod

.</p>
                        <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>View More</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item bg-light rounded h-100 p-5">
                        <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                           style={{ width: '65px', height: '65px' }}>
                            <i class="fa fa-wheelchair text-primary fs-4"></i>
                        </div>
                        <h4 class="mb-3">ANESTHETIC & ICU</h4>
                        <p class="mb-4">We are specialized in critical care management system. We have central venous catheter, Arterial catheter, regional anesthetic product like.</p>
                        <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>View More</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item bg-light rounded h-100 p-5">
                        <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                           style={{ width: '65px', height: '65px' }}>
                            <i class="fa fa-tooth text-primary fs-4"></i>
                        </div>
                        <h4 class="mb-3">BIOPSY - RADIOLOGY
</h4>
                        <p class="mb-4">For identifying any tissue, we need to take samples of tissue and lab test it to identify the disease. We have wide range of biopsy instrume

.</p>
                        <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>View More</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item bg-light rounded h-100 p-5">
                        <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                           style={{ width: '65px', height: '65px' }}>
                            <i class="fa fa-vials text-primary fs-4"></i>
                        </div>
                        <h4 class="mb-3">GASTROENTEROLOGY</h4>
                        <p class="mb-4">In our surgery department we have skin stapler, pen marker, remover and stents, forceps, needles used in gastroentrology through endoscopy.

.</p>
                        <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>View More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Welcome
