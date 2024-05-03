import React, { useEffect, useState } from 'react'
import Layout from '../layout/index'
import img1 from '../assets/headphones/img1.png'
import img2 from '../assets/headphones/img2.png'
import img3 from '../assets/headphones/img3.png'
import Category from '../layout/indexCategory'
import MainLayout from '../layout/mainLayout'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Headphones() {
    const [firstProduct, setFirsProduct] = useState([]);
    const [secondProduct, setSecondProduct] = useState([]);
    const [thirdProduct, setThirdProduct] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/xx99-mark-two-headphones`)
            .then(res => res.json())
            .then(data => {
                setFirsProduct(data);
            })
            .catch(err => {
                console.log(err);
            })

        fetch(`http://localhost:3000/xx99-mark-one-headphones`)
            .then(res => res.json())
            .then(data => {
                setSecondProduct(data);
            })
            .catch(err => {
                console.log(err);
            })

        fetch(`http://localhost:3000/xx59-headphones`)
            .then(res => res.json())
            .then(data => {
                setThirdProduct(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function handleDetail(id) {
        navigate(`/product/${id}`);
    }
    function handleDetail2(id) {
        navigate(`/product2/${id}`);
    }
    function handleDetail3(id) {
        navigate(`/product3/${id}`);
    }



    return (
        <div className='w-[1540px] mx-auto'>
            <Layout></Layout>
            <div className='w-[1540px] mx-auto px-44 py-[97px] bg-black'>
                <h1 className='text-center text-white mt-46 text-semibold text-5xl tracking-[2px] leading-[44px]'>HEADPHONES</h1>
            </div>


            <div className='bg-white flex items-center justify-between w-[1540px] px-44 py-44 mx-auto'>
                <div className='image'>
                    <img src={img1} alt="headphone img" />
                </div>
                <div className='about-product w-[445px]'>
                    <h1 className='font-Manrope leading-5 text-orange-400 tracking-[10px] mb-3'>NEW PRODUCT</h1>
                    <h2 className='font-Manrope tracking-[2px] font-semibold text-black leading-[44px] text-[40px]'>
                        {firstProduct?.name}
                    </h2>
                    <p className='leading-6 text-zinc-500 font-semibold mt-6 mb-12'>{firstProduct?.description}</p>
                    <button onClick={() => { handleDetail(firstProduct.id) }} className='transition px-6 py-3 text-white bg-orange-500 text-[13px] font-semibold mt-18 hover:bg-orange-300'>SEE PRODUCT</button>
                </div>
            </div>


            <div className='bg-white flex items-center justify-between w-[1540px] px-44 mx-auto'>
                <div className='about-product w-[445px]'>
                    <h2 className='font-Manrope tracking-[2px] font-semibold text-black leading-[44px] text-[40px]'>
                        {secondProduct?.name}
                    </h2>
                    <p className='leading-6 text-zinc-500 font-semibold mt-6 mb-12'>{secondProduct?.description}</p>
                    <button onClick={() => { handleDetail2(secondProduct.id) }} className='transition px-6 py-3 text-white bg-orange-500 text-[13px] font-semibold mt-18 hover:bg-orange-300'>SEE PRODUCT</button>
                </div>

                <div className='image'>
                    <img src={img2} alt="headphone img" />
                </div>

            </div>

            <div className='bg-white flex items-center justify-between w-[1540px] px-44 pt-44 mx-auto'>

                <div className='image'>
                    <img src={img3} alt="headphone img" />
                </div>

                <div className='about-product w-[445px]'>
                    <h2 className='font-Manrope tracking-[2px] font-semibold text-black leading-[44px] text-[40px]'>
                        {thirdProduct?.name}
                    </h2>
                    <p className='leading-6 text-zinc-500 font-semibold mt-6 mb-12'>{thirdProduct?.description}</p>
                    <button onClick={() => { handleDetail3(thirdProduct.id) }} className='transition px-6 py-3 text-white bg-orange-500 text-[13px] font-semibold mt-18 hover:bg-orange-300'>SEE PRODUCT</button>
                </div>
            </div>


            <Category></Category>
            <MainLayout></MainLayout>
            <Footer></Footer>


        </div>
    )
}

export default Headphones