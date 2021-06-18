import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer-wrapper font-sans">
            <section className="footer-social">
                <h2 className="footer-title text-center font-semibold text-2xl">socials</h2>
                <ul className="footer-social-list">
                    <li className="footer-social-icons font-semibold"><a href="https://github.com/ArmyaAli">A</a></li>
                    <li className="footer-social-icons font-semibold"><a href="https://github.com/RIngochui">R</a></li>
                    <li className="footer-social-icons font-semibold"><a href="https://gardio.net/">K</a></li>
                </ul>
            </section>

            <section className="footer-legal font-semibold">
                <ul className="footer-legal-list">
                    <li>Powered by ARK Team&trade;</li> 
                    <li>&copy; Copyright <i>Hot or Not Twitch</i>.</li>
                </ul>
            </section>
        </footer>
    )
}