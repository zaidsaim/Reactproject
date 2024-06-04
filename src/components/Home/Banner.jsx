import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { Container } from 'react-bootstrap';
import logo from '../../assets/img/logo.jpg'
import banner1 from '../../assets/img/banner1.png'
import { IoMdArrowDown } from 'react-icons/io';
import carousel_1 from '../../assets/img/carousel-1.jpg'
import carousel_2 from '../../assets/img/carousel-2.jpg'
import carousel_3 from '../../assets/img/carousel-3.jpg'
import product3 from '../../assets/img/product3.jpg'
import bio from '../../assets/img/bio.jpg'
import banner2 from '../../assets/img/banner2.png'
import { AiFillCaretDown } from "react-icons/ai";
const Banner = () => {




  return (
    <div class="container-fluid header bg-primary p-0 mb-5">
      <div class="row g-0 align-items-center flex-column-reverse flex-lg-row">
        <div class="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
          <h1 class="display-4 text-white mb-5">Good Health Is The Root Of All Heppiness</h1>
          <div class="row g-4">
            <div class="col-sm-4">
              <div class="border-start border-light ps-4">
                <h2 class="text-white mb-1" data-toggle="counter-up">123</h2>
                <p class="text-light mb-0">Products</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="border-start border-light ps-4">
                <h2 class="text-white mb-1" data-toggle="counter-up">1234</h2>
                <p class="text-light mb-0">Medical Products</p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="border-start border-light ps-4">
                <h2 class="text-white mb-1" data-toggle="counter-up">12345</h2>
                <p class="text-light mb-0">Total Products</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div class="owl-carousel header-carousel">
            <div class="owl-carousel-item position-relative">
              <img class="img-fluid" src={product3} alt="hhhhhh" />
              <div class="owl-carousel-text">
                <h1 class="display-1 text-white mb-0">Cardiology</h1>
              </div>
            </div>
            <div class="owl-carousel-item position-relative">
              <img class="img-fluid" src={carousel_2} alt="hhhhh" />
              <div class="owl-carousel-text">
                <h1 class="display-1 text-white mb-0">Neurology</h1>
              </div>
            </div>
          </div>
          <div class="owl-carousel-item position-relative">
            <img class="img-fluid" src={bio} alt="hhhhh" />
            <div class="owl-carousel-text">
              <h1 class="display-1 text-white mb-0">Meditech</h1>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
