import React, { useEffect, useState } from 'react';
import img1 from '../assets/speakers/img1.png';
import img2 from '../assets/speakers/img2.png';
import Layout from '../layout';
import Category from '../layout/indexCategory';
import MainLayout from '../layout/mainLayout';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function Speakers() {
    const navigate = useNavigate();
    const [firstProduct, setFirstProduct] = useState({});
    const [secondProduct, setSecondProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/zx9-speaker`)
            .then(res => res.json())
            .then(data => {
                setFirstProduct(data);
            })
            .catch(err => {
                console.log(err);
            });

        fetch(`http://localhost:3000/zx7-speaker`)
            .then(res => res.json())
            .then(data => {
                setSecondProduct(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    function handleDetail1() {
        navigate(`/product7/${firstProduct.id}`);
    }

    function handleDetail2() {
        navigate(`/product8/${secondProduct.id}`);
    }

    return (
        <div className='w-[1540px] mx-auto'>
            <Layout />
            <div className='w-[1540px] mx-auto px-44 py-[97px] bg-black'>
                <h1 className='text-center text-white mt-46 text-semibold text-5xl tracking-[2px] leading-[44px]'>SPEAKERS</h1>
            </div>

            <div className='bg-white flex items-center justify-between w-[1540px] px-44 py-44 mx-auto'>
                <div className='image'>
                    <img src={img1} alt="headphone img" />
                </div>

                <div className='about-product w-[445px]'>
                    <h1 className='font-Manrope leading-5 text-orange-400 tracking-[10px] mb-4'>NEW PRODUCT</h1>
                    <h2 className='font-Manrope tracking-[2px] font-semibold text-black leading-[44px] text-[40px]'>
                        ZX9 SPEAKER
                    </h2>
                    <p className='leading-6 text-zinc-500 font-semibold mt-6 mb-12'>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                    <button onClick={handleDetail1} className='transition px-6 py-3 text-white bg-orange-500 text-[13px] font-semibold mt-18 hover:bg-orange-300'>SEE PRODUCT</button>
                </div>
            </div>

            <div className='bg-white flex items-center justify-between w-[1540px] px-44 mx-auto'>
                <div className='about-product w-[445px]'>
                    <h2 className='font-Manrope tracking-[2px] font-semibold text-black leading-[44px] text-[40px]'>
                        ZX7 SPEAKER
                    </h2>
                    <p className='leading-6 text-zinc-500 font-semibold mt-6 mb-12'>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                    <button onClick={handleDetail2} className='transition px-6 py-3 text-white bg-orange-500 text-[13px] font-semibold mt-18 hover:bg-orange-300'>SEE PRODUCT</button>
                </div>

                <div className='image'>
                    <img src={img2} alt="headphone img" />
                </div>
            </div>

            <Category />
            <MainLayout />
            <Footer />
        </div>
    );
}

export default Speakers;
