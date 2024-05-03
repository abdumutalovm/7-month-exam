import React from 'react'
import men from '../assets/section/man.png'
function MainLayout() {
    return (
        <section className='bg-white px-44 flex items-center justify-between pb-[200px]'>

            <div className="about w-[445px] pt-[130px] pb-[200px]">
                <h1 className='text-[40px] font-semibold text-black uppercase tracking-[1px] leading-[44px]'>Bringing you the <span className='text-orange-500'>best</span> audio gear</h1>
                <p className='mt-7'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>

            <div className="image">
                <img src={men} alt="men img" />
            </div>

        </section>
    )
}

export default MainLayout