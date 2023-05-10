import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"
import homepageimage from './Images/homepageimage.jpg';

export function HomePage(){
    return(
        <>
            <div className="mainbodydiv homepagediv mt-3">
            <h1 className="homepageheader text-center pt-3">HOME</h1>
                <div className="container-fluid row justify-content-around col-lg-12">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-3">
                        <h4 className="container ml-auto mr-auto justify-content-center homepagepara">A Full-stack developer is proficient in both front-end and back-end development. Their duties include designing, creating and maintaining fully developed platforms with servers or databases. These servers may require any additional third-party software to create a full network from the start. Full-stack developers will be required to manage a project from conception to final product.</h4>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-3">
                        <img src={homepageimage} width="650" className="col-md-12 col-sm-12 col-12"/>
                    </div>
                </div>
            </div>
        </>
    );
}