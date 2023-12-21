import React from 'react';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';
import { copyrightSign } from '../assets/icons';

const Footer = () => {
    return (
        <footer className="bg-black max-sm: p-10">
            <div className="max-container flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="mt-10 flex flex-col items-start">
                    <a href="/">
                        <img src={footerLogo} alt="footerLogo" width={150} height={46} />
                    </a>
                    <p className="mt-6 text-base leading-7 text-white-400 sm:max-w-sm font-montserrat">
                        Get shoes ready for the new term at your nearest Nike store. Find Your
                        perfect Size In Store. Get Rewards
                    </p>

                    <div className=" flex items-center gap-5 mt-8">
                        {socialMedia.map((social) => (
                            <div
                                key={social.alt}
                                className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                                <img src={social.src} alt="" width={24} height={24} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {footerLinks.map((links) => (
                        <div key={links.title}>
                            <h4 className="text-white mt-10 font-montserrat text-2xl leading-normal font-medium">
                                {links.title}
                            </h4>

                            <ul>
                                {links.links.map((link) => (
                                    <li
                                        key={link.name}
                                        className="mt-3 text-white font-montserrat leading-normal text-base hover:text-slate-gray cursor-pointer">
                                        <a href="">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-container flex text-white-400 justify-between items-center mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <img
                        src={copyrightSign}
                        alt="copy"
                        width={20}
                        height={20}
                        className="rounded-full m-0"
                    />

                    <p>Copyrigth. All rigths reserved.</p>
                </div>

                <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
            </div>
        </footer>
    );
};

export default Footer;
