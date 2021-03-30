import React from 'react';
import FooterBottom from './FooterBottom';
import FooterMain from './FooterMain';
import FooterEnd from './FooterEnd';

const Footer = () => {
    return (
        <>
        <hr />
            <FooterMain />
            <FooterEnd />
            <FooterBottom />
        </>
    );
};

export default Footer;