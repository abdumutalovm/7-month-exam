import React from 'react'
import logo from '../assets/header/logo.svg'
import basket from '../assets/header/basket.svg'
import { Link } from 'react-router-dom'

function Layout() {
    return (
        <div className='bg-black w-[1440px] mx-auto px-44 flex items-center'>
            <div className='w-[1110px] border border-t-0 border-l-0 border-r-0 border-zinc-600 flex items-center justify-between py-9'>
                <div className='logo'>
                    <Link to='/'><img src={logo} alt="logo img" /></Link>
                </div>
                <div className="menus uppercase flex items-center gap-8 text-[13px] font-semibold leading-[25px] tracking-[2px]">
                    <Link to='/' className='transition hover:text-orange-400'>home</Link>
                    <Link to='/headphones' className='transition hover:text-orange-400'>headphones</Link>
                    <Link to='/speakers' className='transition hover:text-orange-400'>speakers</Link>
                    <Link to='/earphones' className='transition hover:text-orange-400'>earphones</Link>
                </div>
                <div className="header-basket">
                    <button onClick={() => document.getElementById('my_modal_2').showModal()}><img src={basket} alt="basket img" className='hover:opacity-75' /></button>

                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click outside to close</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>

            </div>
        </div>
    )
}

export default Layout