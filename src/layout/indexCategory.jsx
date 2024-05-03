import React from 'react'
import img1 from '../assets/section/img1.png'
import img2 from '../assets/section/img2.png'
import img3 from '../assets/section/img3.png'
import shadow from '../assets/section/shadow.png'
import right from '../assets/section/Path 2.svg'
import { Link } from 'react-router-dom'

function Category() {
    return (
        <section className='w-[1540px] mx-auto bg-white px-44 pt-56 pb-[200px]'>

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
    )
}

export default Category