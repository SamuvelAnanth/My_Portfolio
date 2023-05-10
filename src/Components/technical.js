import React from "react";
import './technical.css';
import htmlicon from './Icons/htmlicon.svg';
import cssicon from './Icons/cssicon.svg';
import javascripticon from './Icons/javascripticon.svg';
import mysqlicon from './Icons/mysqlicon.png';
import javaicon from './Icons/javaicon.svg';
import springbooticon from './Icons/springbooticon.svg'
import reacticon from './Icons/reacticon.svg';
import nodeicon from './Icons/nodeicon.svg';

export function Technical(){
    return (
        <>
            <h1 className="text-center techheader pt-5 pb-3">Technical Skills</h1>
            <div className="technicalskilldiv text-center justify-content-around container-fluid row">
                <div className="col-lg-1">  
                    <img src={htmlicon} width="75"/><br/>
                    <label><b>HTML 5</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={cssicon} width="75"/><br/>
                    <label><b>CSS 3</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={javascripticon} width="87"/><br/>
                    <label><b>JavaScript</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={mysqlicon} width="97"/><br/>
                    <label><b>MySQL</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={javaicon} width="75"/><br/>
                    <label><b>Java</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={springbooticon} width="94"/><br/>
                    <label><b>SpringBoot</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={reacticon} width="92"/><br/>
                    <label><b>ReactJS</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={nodeicon} width="80"/><br/>
                    <label><b>NodeJS</b></label>
                </div>
            </div>
        </>
    );
}