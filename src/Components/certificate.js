import React from "react";
import htmlcertificate from './Images/htmlcertificate.png';
import csscertificate from './Images/csscertificate.png';
import javascriptcertificate from './Images/javascriptcertificate.png';
import metafrontend from './Images/metafrontend.png';
import mongodbcertificate from './Images/mongodbcertificate.png';
import metabackend from './Images/metabackend.png';
import javacertificate from './Images/javacertificate.png';
import mysqlcertificate from './Images/mysqlcertificate.png';
import fullstackassesment from './Images/fullstackasses.png';
import techfoundation from './Images/techfoundation.png';
import javascriptskills from './Images/javascriptskills.png';
import htmlintrocertificate from './Images/htmlintrocertificate.png';
import './certificate.css';

export function Certificate(){
    return (
        <>
            <h1 className="text-center pt-3 pb-3" id="certificateScroll">Certificate</h1>
            <div className="row container-fluid justify-content-around p-2">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <img src={htmlcertificate} alt="no images found" width="400" className="certimage col-sm-12 col-12"/><br/>
                    <label className="text-center certfont p-1">Full Stack Development (MERN) - HTML</label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <img src={csscertificate} alt="no images found" width="400" className="certimage col-sm-12 col-12"/><br/>
                    <label className="text-center certfont p-1">Full Stack Development (MERN) - CSS</label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <img src={javascriptcertificate} alt="no images found" width="400" className="certimage col-sm-12 col-12"/><br/>
                    <label className="text-center certfont p-1">Programming with JavaScript - META</label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <img src={javacertificate} alt="no images found" width="400" className="certimage col-sm-12 col-12"/><br/>
                    <label className="text-center certfont p-1">Basic of Java Programming</label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <img src={fullstackassesment} alt="no images found" width="400" className="certimage col-sm-12 col-12"/><br/>
                    <label className="text-center certfont p-1">Full Stack Developer Assessment - IBM</label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <img src={mysqlcertificate} alt="no images found" width="400" className="certimage col-sm-12 col-12"/><br/>
                    <label className="text-center certfont p-1">Introduction to RDBMS - IBM</label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <img src={metafrontend} alt="no images found" width="400" className="certimage col-sm-12 col-12"/><br/>
                    <label className="text-center certfont p-1">Front End Development - META</label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <img src={mongodbcertificate} alt="no images found" width="400" className="certimage col-sm-12 col-12"/><br/>
                    <label className="text-center certfont p-1">CRUD Opertions using MongoDB</label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <img src={metabackend} alt="no images found" width="400" className="certimage col-sm-12 col-12"/><br/>
                    <label className="text-center certfont p-1">Back End Development - META</label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <img src={techfoundation} alt="no images found" width="400" className="certimage col-sm-12 col-12"/><br/>
                    <label className="text-center certfont p-1">Tech Foundation for Web Development</label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <img src={javascriptskills} alt="no images found" width="400" className="certimage col-sm-12 col-12"/><br/>
                    <label className="text-center certfont p-1">Become a JavaScript Pro with these 7 Skills</label>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                    <img src={htmlintrocertificate} alt="no images found" width="400" className="certimage col-sm-12 col-12"/><br/>
                    <label className="text-center certfont p-1">Introduction to HTML</label>
                </div>
            </div>
        </>
    );
}