import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

const FooterEnd = () => {
    return (
        <>
        <div className="grid grid-cols-3 p-5">
            <div></div>
            <div className="flex justify-between">
                <a href="http://facebook.com" target="_blank"><FacebookIcon className="text-blue-900" /></a>
                <a href="http://twitter.com" target="_blank"><TwitterIcon className="text-blue-600" /></a>
                <a href="http://pinterest.com" target="_blank"><PinterestIcon className="text-green-900" /></a>
                <a href="http://youtube.com" target="_blank"><YouTubeIcon className="text-red-700" /></a>
                <a href="http://instagram.com" target="_blank"><InstagramIcon className="text-pink-500" /></a>
            </div>
            <div></div>
        </div>
        <hr/>
        </>
    )
};

export default FooterEnd;