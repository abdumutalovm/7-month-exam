import React, { useState } from 'react'
import logo from '../assets/header/logo.svg'

import { Link } from 'react-router-dom'

import Header_Basket from '../components/Header_Basket'

function Layout() {
    return (
        <div className='bg-black w-[1540px] mx-auto px-44 flex items-center'>
            <div className='w-[1540px] border border-t-0 border-l-0 border-r-0 border-zinc-600 flex items-center justify-between py-9'>
                <div className='logo'>
                    <Link to='/'><img src={logo} alt="logo img" /></Link>
                </div>
                <div className="menus uppercase flex items-center gap-10 text-[13px] font-semibold leading-[25px] tracking-[2px]">
                    <Link to='/' className='transition hover:text-orange-400'>home</Link>
                    <Link to='/headphones' className='transition hover:text-orange-400'>headphones</Link>
                    <Link to='/speakers' className='transition hover:text-orange-400'>speakers</Link>
                    <Link to='/earphones' className='transition hover:text-orange-400'>earphones</Link>
                </div>

                <Header_Basket></Header_Basket>

            </div>
        </div>
    )
}

export default Layout