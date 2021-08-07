import React from 'react';
import './contact.scss';

export default function Contact() {
    return (
            <div className="contact" id="contact">

            <div className="upper">
            <h1>Kontakt</h1>
            </div>
            <div className="card">
                
                <div className="left">
                    <h2>Kontakta Oss</h2>
                    <div id="contact-form" className="form">
                        <form action="https://formspree.io/f/mjvjazga" method="POST">
                        <input type="hidden" name="_subject" value="Contact request from Portfolio Website" />
                        <input type="name" name="name" placeholder="Namn" required/>
                        <input type="email" name="replyto" placeholder="Mailaddress" required/>
                        <textarea name="message" placeholder="Skriv ett meddelande" required></textarea>
                        <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <h2>Följ Oss</h2>
                <p>
                Kontakta oss med alla typer av företagsförfrågningar och samarbetsinitiativ. 
                Vi är öppna för att dela vår vision och redo för nya samarbeten med kreativa individer och företag.
                </p>
                <ul>
                    <li>Telefon: 0729 97 97 97</li>
                    <li>Email: kundservice@apofarm.se</li>
                    <li>Besöksaddress: Högatan 2, 216 33, Limhamn</li>
                </ul>
                <ul>
                    <li>Öppettider:</li>
                    <li>Måndag-Fredag 09-18</li>
                    <li>Lördag 10-14</li>
                    <li>Söndag Stängt</li>
                </ul>
 

                <p>APOFARM AB, 559301-1363</p>
                </div>
                    
        </div>
    </div>
    )
}
