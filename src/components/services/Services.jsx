import React from 'react'
import "../services/services.scss";
import AccessTimeTwoToneIcon from '@material-ui/icons/AccessTimeTwoTone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; 
import HelpOutlineTwoToneIcon from '@material-ui/icons/HelpOutlineTwoTone';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';
import LocationCityTwoToneIcon from '@material-ui/icons/LocationCityTwoTone';
import AssignmentTwoToneIcon from '@material-ui/icons/AssignmentTwoTone';
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ReactComponent as PharmacyLogo} from '../../assets/pharmacist-pharmacy-counter-drug-store-svgrepo-com.svg';

export default function Services() {
    return (
        <div className="container" id="services">
                <div className="wrapper">
                    <div className="upper">
                        <div className="serviceintro">
                        <h1>Våra tjänster</h1>
                        <p>Apotek Elinegård vill vara mer än ett vanligt apotek. 
                            Vår filosofi sträcker sig utanför det traditionella apoteket och 
                            strävan är att med stort driv, skapa goda erbjudanden för våra kunder.
                        </p>
                        </div>
                        
                    </div>
                    <div className="lower">
                        <div className="advice">
                            <PharmacyLogo className="pharmLogo"/>
                            <h3>Farmaceutisk rådgivning</h3>
                            <p>Låt oss förse dig med god farmaceutisk rådgivning utifrån dina behov. Vi erbjuder rådgivning både på plats och över telefon av legitimerade farmacuter. </p>
                        </div>
                        <div className="customer">
                            <AccountCircleIcon className="icon"/>
                            <h3>KUNDEN FÖRST</h3>
                            <p>Vi värderar våra kunder högst och strävar alltid att ge bäst service. På Apotek Elinegård ska man alltid känna sig sedd och välkommen.</p>
                        </div>
                        <div className="hours">
                            <AccessTimeTwoToneIcon className="icon"/>
                            <h3>Öppettider</h3>
                            <ul>
                                <li>Måndag-Fredag: 09-18</li>
                                <li>Lördag: 10-14</li>
                                <li>Söndag: Stängt</li>
                            </ul>
                        </div>

                        <div className="company">
                            <LocationCityTwoToneIcon className="icon"/>
                            <h3>Apotek för vårdgivare &amp; företag</h3>
                            <p>Oavsett om det är en vårdcentral, veterinär, tandläkare eller ett äldreboende så vill vi gärna erbjuda kostnadseffektiva och trygga tjänster till er. </p>
                        </div>
                        <div className="subscriptions">
                            <AssignmentTwoToneIcon className="icon"/>
                            <h3>Läkemedelsabonnemang</h3>
                            <p>Fokusera på annat. Låt våra legitimerade farmaceuter hålla koll på dina läkemedel. Vi beställer och levererar punktligt och kostnadsfritt i god tid innan din medicin tar slut. Ring oss på 0729 97 97 97 för att veta mer. </p>
                        </div>
                    </div>
                    <a href="#about"><ExpandMoreIcon className="icon"/></a>
                </div>

        </div>
    )
}
/*                         
                        <div className="delivery">
                            <LocalShippingTwoToneIcon className="icon"/>
                            <h4>Kostnadsfri hemleverans</h4>
                            <p>Ring oss enkelt på 0729 97 97 97 och beställ din medicin. Legitimera dig tryggt över telefon med Mobilt BankID. Få hemlevererat gratis. </p>
                        </div>

*/
