import React from 'react';
import {Link} from "@nextui-org/react";
import {Container} from "../../shared/Container";
import TelegIcon from "../../../public/socialMediaIcons/TelegIcon";
import InstagramIcon from "../../../public/socialMediaIcons/InstagramIcon";
import Logo from "../../../public/navbar/Logo";
import LogoGrayIcon from "../../../public/LogoGrayIcon";

const Footer = () => {
    return (
        <div className={'bg-content1 pb-10 pt-10 text-[#374151] m-auto text-tiny md:text-medium bg-opacity-20'} >
            <Container className={'flex items-center justify-around'} >
                <div><LogoGrayIcon/></div>
                <div>
                    <p>vc.ru</p>
                    <p>habr.com</p>
                </div>
                <div>
                    <p>+375 (33) 682-73-93</p>
                    <p>rostelecom.merc@rt.ru</p>
                </div>
                <div className={'flex items-center space-x-3'} >
                    <Link><TelegIcon/></Link>
                    <Link><InstagramIcon/></Link>
                </div>
            </Container>
        </div>
    );
};

export default Footer;