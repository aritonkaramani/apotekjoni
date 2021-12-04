import React from 'react'
import '../about/about.scss';
import PH from '../../assets/38-mkt-ung-16273344756514.png';

export default function About() {
    return (
        <div className="containerAbout" id="about">
            <div className="wrapperAbout">
                <div className="upperAbout">
                    <div className="upperTitle">
                    <h1>Om oss</h1>
                    </div>
                
                </div>
                <div className="lowerAbout">
                <div className="left">
                    <img src={PH} alt="" />
                </div>
                <div className="right">
                    <h3>Vilka är vi?
                    <br/>Vi är ett litet apotek med ett stort hjärta. </h3>
                    <span>Apotek Elinegård är ett apotek med tillstånd av Läkemedelsverket. </span>
                        <br/>
                    <span>Vår ambition är att ha ett stort fokus för god service och tillgänglighet för det lokala området i Elinegård
                        och omkringliggande områden i Malmö. Vår långsiktiga strategi är att kunna erbjuda apotekstjänster i det lokala området och skapa 
                        långsiktiga relationer med både konsumenter och företag.
                    </span>
                </div>
                </div>
            </div>
        </div>
    )
}
