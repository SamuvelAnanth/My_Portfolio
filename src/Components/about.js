import React from "react";
import './about.css';
import aboutpageimage from './Images/aboutpageimage.webp';

export function AboutMe(){
    return (
        <>
            <h1 className="aboutpageheader mt-3 text-center" id="aboutpagemainheader">ABOUT ME</h1>
            <div className="container-fluid row justify-content-around aboutpagediv">
                <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                    <img src={aboutpageimage} alt="no images found" width="650" className="pt-3 col-lg-12 col-md-12 col-sm-12 col-12"/>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                    <h2 className="text-center aboutpagecontent mt-5"> Hello, I am Samuvel Ananth. I am Certified Full Stack Developer. I can create a responsive website. And I can handle the both front end and back end as well as Alone. Comparitively other languages I have more known about HTML, CSS, JavaScript, Spring Boot, ReactJS and NodeJS</h2>
                </div>
            </div>
        </>
    );
}