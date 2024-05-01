import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/header/logo.svg'
import basket from '../assets/header/basket.svg'
import bg_headphone from '../assets/header/Bitmap.png'
import img1 from '../assets/section/img1.png'
import img2 from '../assets/section/img2.png'
import img3 from '../assets/section/img3.png'
import shadow from '../assets/section/shadow.png'
import right from '../assets/section/Path 2.svg'
import zx9 from '../assets/section/zx9.png'
import zx7 from '../assets/section/zx7.png'
import yx1 from '../assets/section/yx1.png'
import men from '../assets/section/man.png'
import zx9bg from '../assets/section/zx9-bg.png'

function Home() {
    return (
        <div className='w-[1440px] bg-[#131313] mx-auto '>

            <header className=' flex items-center justify-between border border-l-0 border-t-0 border-r-0  px-44  border-b-2 border-zinc-700 py-8'>
                <div className='header-logo'>
                    <Link to='/home'><img src={logo} alt="company logo" /></Link>
                </div>

                <div className='header-menu flex items-center gap-9 text-sm mr-36'>
                    <Link to='/home' className='font-Manrope hover:text-orange-400'>HOME</Link>
                    <Link to='/headphones' className='font-Manrope hover:text-orange-400'>HEADPHONES</Link>
                    <Link to='/speakers' className='font-Manrope hover:text-orange-400'>SPEAKERS</Link>
                    <Link to='/earphones' className='font-Manrope hover:text-orange-400'>EARPHONES</Link>
                </div>

                <div className="header-basket">
                    <button><img src={basket} alt="basket img" className='hover:opacity-75' /></button>
                </div>

            </header>


            <main className='flex items-center mx-auto justify-between px-44'>

                <div className="about-main w-[379px] text-zinc-600 h-[346px]">
                    <h1 className='font-Manrope leading-5 tracking-[10px] mb-2'>NEW PRODUCT</h1>
                    <h2 className='font-Manrope tracking-[2px] font-semibold text-white text-[56px]'>
                        XX99 Mark II
                        HeadphoneS
                    </h2>
                    <p className='leading-6 text-zinc-300 mt-6 mb-12'>Experience natural, lifelike audio and exceptional
                        build quality made for the passionate music enthusiast.</p>
                    <Link to='/headphones' className='transition px-6 py-3 text-white bg-orange-500 text-[13px] font-semibold mt-18 hover:bg-orange-300'>SEE PRODUCT</Link>
                </div>

                <div className="top-44 mt-1 right-44"><img src={bg_headphone} alt="" /></div>


            </main>


            <section className='w-[1440px] mx-auto bg-white px-44 pt-56 pb-[200px]'>

                <div className='flex items-center justify-between'>
                    <div className='w-[350px] flex flex-col relative items-center justify-between h-[204px] text-center bg-[#F1F1F1] rounded-md'>
                        <img src={img1} className='bottom-32 absolute' alt="headphone img" />
                        <img src={shadow} className='absolute bottom-16' alt="shadow img" />
                        <h1 className='relative top-[120px] text-black font-semibold text-[18px]'>HEADPHONES</h1>
                        <Link to='/headphones' className='flex items-center mb-5 gap-3 font-semibold text-zinc-500 hover:text-orange-400'>SHOP <img src={right} className='mt-1' alt="" /></Link>
                    </div>

                    <div className='w-[350px] flex flex-col relative items-center justify-between h-[204px] text-center bg-[#F1F1F1] rounded-md'>
                        <img src={img2} className='bottom-32 absolute' alt="speaker img" />
                        <img src={shadow} className='absolute bottom-16' alt="shadow img" />
                        <h1 className='relative top-[120px] text-black font-semibold text-[18px]'>SPEAKERS</h1>
                        <Link to='/speakers' className='flex items-center mb-5 gap-3 font-semibold text-zinc-500 hover:text-orange-400'>SHOP <img src={right} className='mt-1' alt="" /></Link>
                    </div>

                    <div className='w-[350px] flex flex-col relative items-center justify-between h-[204px] text-center bg-[#F1F1F1] rounded-md'>
                        <img src={img3} className='bottom-32 absolute' alt="earphone img" />
                        <img src={shadow} className='absolute bottom-16' alt="shadow img" />
                        <h1 className='relative top-[120px] text-black font-semibold text-[18px]'>EARPHONES</h1>
                        <Link to='/earphones' className='flex items-center mb-5 gap-3 font-semibold text-zinc-500 hover:text-orange-400'>SHOP <img src={right} className='mt-1' alt="" /></Link>
                    </div>

                </div>

                <div className='bg-[#D87D4A] relative'>
                </div>
            </section>

            <section className='w-[1440px] relative bg-white mx-auto px-44 pb-[48px]'>
                <div className=''>
                    <div className='bg-[#D87D4A] w-[1110px] rounded-xl'>
                        <img src={zx9bg} alt="image" />
                    </div>
                    <img src={zx9} className='absolute bottom-[48px] left-[300px]' alt="" />
                </div>

                <div className='text-white font-semibold flex flex-col'>
                    <h1 className='absolute left-[855px] text-white font-semibold leading-[58px] text-[56px] w-[261px] bottom-[350px]'>ZX9
                        SPEAKER
                        <p className='absolute text-[15px] w-[355px] h-[75px] leading-[30px] mt-[24px] text-zinc-200'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                            <Link to='/speakers' className='absolute transition bg-black mt-16 px-[30px] py-[15px] tracking-[1px] leading-[18px] text-[13px] right-[200px] hover:bg-zinc-600 hover:text-white'>SEE PRODUCT</Link></p></h1>

                </div>
            </section>


            <section className='w-[1440px] bg-white mx-auto px-44 pb-[200px]'>
                <div className='w-[1110px] relative rounded-xl right-[200px]'>
                    <img src={zx7} alt="" className='mx-auto absolute left-[200px] rounded-xl' />
                    <h1 className='absolute font-bold top-[110px] tracking-[2px] left-[320px] leading-[38px] text-[28px] text-black'>ZX7 SPEAKER
                        <Link to='/speakers' className='absolute transition w-[160px] bg-zinc-600 mt-16 px-[30px] py-[15px] tracking-[1px] leading-[18px] text-[13px] right-[40px] text-white hover:bg-black hover:text-white'>SEE PRODUCT</Link></h1>
                </div>


            </section>

            <section className=' bg-white pt-[168px] mx-auto pl-5 pb-[200px]'>
                <div className='w-[1110px] flex justify-between mx-auto'>
                    <div className=''>
                        <img src={yx1} alt="" />
                    </div>

                    <div className='bg-[#F1F1F1] w-[540px] h-[320px] pt-[101px] pl-[95px] rounded-xl'>
                        <h1 className='font-bold top-[110px] tracking-[2px] mb-10 left-[320px] leading-[38px] text-[28px] text-black'>YX1 EARPHONES</h1>
                        <Link to='/earphones' className='transition w-[160px] bg-zinc-600 mt-16 px-[30px] py-[15px] tracking-[1px] leading-[18px] text-[13px] right-[40px] text-white hover:bg-black hover:text-white'>SEE PRODUCT</Link>
                    </div>
                </div>


            </section>


            <section className='bg-white px-44 flex items-center justify-between pb-[200px]'>

                <div className="about w-[445px] pt-[130px] pb-[200px]">
                    <h1 className='text-[40px] font-semibold text-black uppercase tracking-[1px] leading-[44px]'>Bringing you the <span className='text-orange-500'>best</span> audio gear</h1>
                    <p className='mt-7'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>

                <div className="image">
                    <img src={men} alt="" />
                </div>

            </section>


            <footer className='bg-black mx-auto px-44'>
                <div className='about'>

                </div>

                <div className='social'></div>
            </footer>


        </div>
    )
}

export default Home