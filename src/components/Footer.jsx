
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/header/logo.svg'


function Footer() {

    return (
        <footer className='bg-black mx-auto px-44 pt-[75px] pb-[48px]'>

            <div className='top-info'>
                <div className='about flex items-center pb-[36px] justify-between'>
                    <Link to='/'><img src={logo} alt="logo img" /></Link>
                    <div className='uppercase flex items-center gap-[34px]'>
                        <Link to='/' className='transition hover:text-orange-400'>Home</Link>
                        <Link to='/headphones' className='transition hover:text-orange-400'>headphones</Link>
                        <Link to='/speakers' className='transition hover:text-orange-400'>speakers</Link>
                        <Link to='/earphones' className='transition hover:text-orange-400'>earphones</Link>
                    </div>
                </div>
            </div>

            <div className='bottom-info flex items-center justify-between'>

                <div className="about w-[530px] ">
                    <p className='text-[15px] leading-6 mb-14'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <h5 className='leading-6 text-[15px] font-semibold'>Copyright 2021. All Rights Reserved</h5>
                </div>

                <div className="social flex items-center gap-3 text-2xl">
                    <IoLogoFacebook className='hover:text-orange-400 cursor-pointer'></IoLogoFacebook>
                    <FaTwitter className='hover:text-orange-400 cursor-pointer'></FaTwitter>
                    <FaInstagram className='hover:text-orange-400 cursor-pointer'></FaInstagram>
                </div>

            </div>
        </footer>
    )
}

export default Footer