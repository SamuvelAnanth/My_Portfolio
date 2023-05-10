import React from "react";
import './education.css';

export function Education(){
    return (
        <>  
            <h1 className="educationhead text-center" id="educate_head">Educational Details</h1>
            <div className="row container-fluid justify-content-around" id="educationdiv">
                <div class="card col-lg-3">
                    <div class="card-body text-center">
                        <h3 class="card-title">B.Sc Information Technology</h3>
                        <p class="card-title p-2 cert-inst">Virudhunagar Hindu Nadar's Senthikumara Nadar College</p>
                        <p class="card-text cert-year">Years Attended : 2016 - 2019</p>
                    </div>
                </div>
                <div class="card col-lg-3">
                    <div class="card-body text-center">
                        <h3 class="card-title">Higher Secondary Certification</h3>
                        <p class="card-title p-2 cert-inst">R.C Higher Secondary School of Virudhunagar</p>
                        <p class="card-text mt-4 cert-year">Years Attended : 2015 - 2016</p>
                    </div>
                </div>
                <div class="card col-lg-3">
                    <div class="card-body text-center">
                        <h3 class="card-title">Secondary School Leaving Certificate</h3>
                        <p class="card-title p-2 cert-inst">R.C Higher Secondary School of Virudhunagar</p>
                        <p class="card-text mt-4 cert-year">Years Attended : 2013 - 2014</p>
                    </div>
                </div>
            </div>
        </>
    );
}