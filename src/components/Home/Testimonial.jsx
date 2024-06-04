import React from 'react'
// import test1 from '../../assets/testimonial-1.jpg'
// import test2 from '../../assets/testimonial-2.jpg'
// import test3 from '../../assets/testimonial-3.jpg'

import test1 from '../../assets/img/testimonial-1.jpg'
import test2 from '../../assets/img/testimonial-2.jpg'
import test3 from '../../assets/img/testimonial-3.jpg'



const Testimonial = () => {
  return (
    <div>
    <div class="container-xxl py-5">
    <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }} >
            <p class="d-inline-block border rounded-pill py-1 px-4">Testimonial</p>
            <h1>What Say Our Patients!</h1>
        </div>
        <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div class="testimonial-item text-center">
                <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={test1}  alt="hhhhh"
                     style={{ width: '100px', height: '100px' }}/>
                <div class="testimonial-text rounded text-center p-4">
                    <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
                        ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea
                        clita.</p>
                    <h5 class="mb-1">Patient Name</h5>
                    <span class="fst-italic">Profession</span>
                </div>
            </div>
            <div class="testimonial-item text-center">
                <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={test2}  alt="hhhhh"
                     style={{ width: '100px', height: '100px' }}/>
                <div class="testimonial-text rounded text-center p-4">
                    <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
                        ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea
                        clita.</p>
                    <h5 class="mb-1">Patient Name</h5>
                    <span class="fst-italic">Profession</span>
                </div>
            </div>
            <div class="testimonial-item text-center">
                <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={test3}  alt="hhhhh"
                     style={{ width: '100px', height: '100px' }}/>
                <div class="testimonial-text rounded text-center p-4">
                    <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
                        ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea
                        clita.</p>
                    <h5 class="mb-1">Patient Name</h5>
                    <span class="fst-italic">Profession</span>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Testimonial
