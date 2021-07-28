import React from 'react'
import "../intro/intro.scss";
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Intro() {
    return (
        <div className="entrance" id="intro">
            <div className="logo">
            <LocalHospitalSharpIcon className="plusIkon"/> <h2>Apotek Elinegård</h2>
            
            
            </div> 
            <div className="titletext">
            <p>Planerad öppning för Apotek Elinegård är oktober 2021</p>
            </div>
            <a href="#services">
                    <ExpandMoreIcon className="icon"/>
            </a>
        </div>
    )
}

