import React from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';

const Nav = () => {
    const [open, setOpen] = React.useState(false);

    // const handleClickBurgerMenu = () => {
    //     setOpen(true);
    //     if (open) {
    //         document.querySelector('body').style.overflow = 'hidden';
    //     } else {
    //         document.querySelector('body').style.overflow = 'scroll';
    //     }
    // };

    console.log(open);

    return (
        <header className="padding-x py-8 fixed bg-white  z-50 w-full">
            <nav className="flex justify-between items-center max-container">
                <Link spy={true} smooth={true} duration={500} to={navLinks[0].href}>
                    <img
                        className="max-sm:w-3/5 cursor-pointer"
                        src={headerLogo}
                        alt="headerLogo"
                        width={130}
                        height={29}
                    />
                </Link>

                <ul className={`flex justify-center items-center gap-16 max-lg:hidden`}>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                to={link.href}
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="font-monts errat leading-normal text-lg text-slate-gray cursor-pointer">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden max-lg:block">
                    {open ? (
                        <IoMdClose
                            style={{
                                width: '25px',
                                height: '25px',
                                position: 'relative',
                                zIndex: '100',
                            }}
                            onClick={() => setOpen(false)}
                        />
                    ) : (
                        <img
                            onClick={() => setOpen(true)}
                            src={hamburger}
                            alt="hamburger"
                            width={25}
                            height={25}
                            className="cursor-pointer"
                        />
                    )}
                </div>
            </nav>

            <>
                <div
                    className={`bg-white w-full h-screen fixed z-50 left-0 top-0  ${
                        open ? 'scale-100 transition-all ease-in-out 0.3s' : 'scale-0'
                    }`}>
                    <ul className="flex justify-center items-left flex-col mt-10">
                        {navLinks.map((link) => (
                            <li className="py-10 ml-10" key={link.label}>
                                <Link
                                    to={link.href}
                                    spy={true}
                                    onClick={() => setOpen(false)}
                                    smooth={true}
                                    duration={500}
                                    className="font-monts errat leading-normal text-lg text-coral-red font-bold cursor-pointer">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        </header>
    );
};

export default Nav;
