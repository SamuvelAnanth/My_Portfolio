import React from "react";
import './contact.css';
import gmailicon from './Icons/gmailicon.png';
import phoneicon from './Icons/phoneicon.png';

export function Contact(){
    return (
        <>
            <div className="contactpagediv">
                <h1 className="text-center contacthead pt-5 pb-3">Contact</h1>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                    <h3 className="contactdivhead text-center"><b><i>You can Reach me : </i></b></h3>
                    <img className="text-center" src={gmailicon} width="70" />
                    <label><b>samuvelananththiraviam@gmail.com</b></label><br/>
                    <img className="text-center pr-3" src={phoneicon} width="65"/>
                    <label><b>+91 82206 36040</b></label>
                </div>
            </div>
        </>
    );
}