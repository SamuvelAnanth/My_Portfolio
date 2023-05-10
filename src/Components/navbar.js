import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./navbar.css";
import MainNavBarIcon from './Images/NavBarIcon.png';
import { Link as ScrollLink } from "react-scroll";

export function MainNavBar(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navb">
                <div className="row col-lg-12">
                    <div className="col-lg-6">
                        <a class="navbar-brand" href="#"><img src={MainNavBarIcon} alt="no images found" width="180"/></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse col-lg-6" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <ScrollLink activeclass="active" to="homepagediv" spy={true} smooth={true} duration={1500}><a class="nav-link active pr-4">Home</a></ScrollLink>
                            <ScrollLink activeclass="active" to="aboutpagemainheader" spy={true} smooth={true} duration={1500}><a class="nav-link active pr-4">About</a></ScrollLink>
                            <ScrollLink activeClass="active" to="certificateScroll" spy={true} smooth={true} duration={1500}><a class="nav-link active pr-4">Certificate</a></ScrollLink>
                            <ScrollLink activeClass="active" to="educate_head" spy={true} smooth={true} duration={1500}><a class="nav-link active pr-4">Education</a></ScrollLink>
                            <ScrollLink activeClass="active" to="technicalskilldiv" spy={true} smooth={true} duration={1500}><a class="nav-link active pr-4">Technical Skills</a></ScrollLink>
                            <ScrollLink activeClass="active" to="contactpagediv" spy={true} smooth={true} duration={1500}><a class="nav-link active pr-4">Contact</a></ScrollLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}