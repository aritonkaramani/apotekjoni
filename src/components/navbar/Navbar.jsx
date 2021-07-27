import React from 'react'
import '../navbar/navbar.scss';
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp';

export default function navbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                <a href="#intro" className="logo"><LocalHospitalSharpIcon className="plusIkon"/>Apotek Elinegård</a>
                </div>
                <div className="right">
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="#intro">Start</a>
                            </li>
                            <li>
                                <a href="#services">Våra Tjänster</a>
                            </li>
                            <li>
                                <a href="#about">Om Oss</a>
                            </li>
                            <li>
                                <a href="#contact">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
