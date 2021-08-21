/*eslint-disable*/
import React from "react";
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Footer from './components/Footer';
import Stepsinfo from './components/Stepsinfo';
import Testimonials from "./components/Testimonials";

function allcomponents() {
    return (
        <>
            <Header />
            <Hero />
            <Steps />
            <Stepsinfo />
            <Testimonials />
            <br />
            <Footer />
        </> 
    )
}

export default allcomponents;
