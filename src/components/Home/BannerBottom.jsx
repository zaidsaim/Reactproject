import React from 'react'
import { Container } from 'react-bootstrap'
import about1 from '../../assets/img/about-1.jpg'
import about2 from '../../assets/img/about-2.jpg'
import product3 from '../../assets/img/product3.jpg'
import bio from '../../assets/img/bio.jpg'
const BannerBottom = () => {
    return (
        <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="d-flex flex-column">
                        <img class="img-fluid rounded w-75 align-self-end" src={bio} alt=""/>
                        <img class="img-fluid rounded w-50 bg-white pt-3 pe-3" src={bio} alt=""
                        style={{ marginTop: '-25%' }}/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p class="d-inline-block border rounded-pill py-1 px-4">About Us</p>
                    <h1 class="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                        erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum
                        amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
                    </p>
                    <p><i class="far fa-check-circle text-primary me-3"></i>Quality Producs</p>
                    <p><i class="far fa-check-circle text-primary me-3"></i>Only Qualified Products</p>
                    <p><i class="far fa-check-circle text-primary me-3"></i>Research Professionals Products</p>
                    <a class="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BannerBottom
