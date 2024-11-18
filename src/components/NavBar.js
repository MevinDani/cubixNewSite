import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import './NavBar.css'

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from 'react-icons/io';

import NavLogo from '../images/logo_cubix_svg_file.svg'

const NavBar = () => {

    const location = useLocation();
    const isRootPage = location.pathname === "/";

    const navigate = useNavigate()

    const [showNavMenu, setShowNavMenu] = useState(false)

    return (
        <>
            <div className='NavBarWrap'>

                <div className='NavLogoCont'>
                    <img className='NavLogo' src={NavLogo} alt="" />
                </div>

                <div className='NavLinksCont'>

                    <div className='NavLinks'>Home</div>
                    <div className='NavLinks'>About Us</div>
                    <div className='NavLinks'>Products</div>
                    <div className='NavLinks'>Services</div>
                    <div className='NavLinks'>Careers</div>
                    <div className='NavLinks'>Contact Us</div>
                </div>

                <div className='NavBarRightMobItem'>

                    <div onClick={() => setShowNavMenu(!showNavMenu)}>
                        <RxHamburgerMenu color={'black'} style={{ fontSize: '26px' }} />
                    </div>
                </div>

            </div>

            {/* navMenu */}

            {

                showNavMenu &&

                <div className='NavBarMenu'>

                    <div className='NavBarMenuCloseCont'>
                        <div onClick={() => setShowNavMenu(false)}>
                            <IoMdClose fontSize={40} color='red' />
                        </div>
                    </div>

                    <div className='NavBarMenuItemsCont'>
                        <div className='NavBarMenuItems' onClick={() => {
                            navigate('/')
                            setShowNavMenu(false)
                        }}>Home</div>

                        <div className='NavBarMenuItems' onClick={() => {
                            navigate('/about-us')
                            setShowNavMenu(false)
                        }}>
                            About Us
                        </div>
                        <div className='NavBarMenuItems'>Products</div>
                        <div className='NavBarMenuItems'>Services</div>
                        <div className='NavBarMenuItems'>Careers</div>
                        <div className='NavBarMenuItems' onClick={() => {
                            navigate('/contact-us')
                            setShowNavMenu(false)
                        }}> Contact Us</div>
                    </div>

                </div>
            }
        </>
    )
}

export default NavBar