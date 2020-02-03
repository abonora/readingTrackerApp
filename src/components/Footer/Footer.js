import React from 'react';
import './Footer.scss';

const Footer = () => {
    let footerYear = new Date().getFullYear();
    return(
        <footer>
            <span>Copyright &copy; {footerYear} all rights reserved. albertobonora.com</span>
            <span>Built using React and data powered by Google Books API</span>
        </footer>
    );
}

export default Footer;