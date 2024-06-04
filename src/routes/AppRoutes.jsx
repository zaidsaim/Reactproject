import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { routesConstant } from "./AppRoutesConstants";
import EventTours from "../pages/EventTours";
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Admission from "../pages/Admission";
import Contact from "../pages/Contact";
import Nav from "../pages/Nav";
import  "../assets/css/style.css"
import "../assets/js/main.js"

const NotFound = () => <h1>404 - Not Found</h1>;

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routesConstant.homepage.path} element={<Home />} />
        <Route path={routesConstant.eventsTours.path} element={<EventTours />} />
        <Route path={routesConstant.aboutus.path} element={<About />} />
        <Route path={routesConstant.gallery.path} element={<Gallery />} />
        <Route path={routesConstant.admission.path} element={<Admission />} />
        <Route path={routesConstant.contact.path} element={<Contact />} />
        <Route path={routesConstant.nav.path} element={<Nav />} />
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
