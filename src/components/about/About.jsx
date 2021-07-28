import React from 'react'
import '../about/about.scss';
import PH from '../../assets/38-mkt-ung-16273344756514.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
                    <span>Apotek Elinegård drivs av Apotekare Dan Johansson med personal. 
                        Vi är dedikerade till att skapa ett respektabelt varumärke som alltid kommer att 
                        imponera inte bara på service utan också på kvalitet. </span>
                        <br/>
                    <span>Dan Johansson skapade APOFARM AB som äger Apotek Elinegård i Limhamn.
                    Ambitionen är att driva ett apotek med ett stort fokus för god service och tillgänglighet för det lokala området
                    i Elinegård och omkringliggande områden i Malmö. 
                    Vår långsiktiga strategi är att kunna erbjuda apotekstjänster bortom det
                    lokala området och skapa långsiktiga relationer med både konsumenter och företag. 
                    </span>
                </div>
                </div>
            </div>
        </div>
    )
}
