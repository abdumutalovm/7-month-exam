import { useEffect, useState } from 'react'
import img1 from '../assets/earphones/img1.png'
import Layout from '../layout'
import Category from '../layout/indexCategory'
import MainLayout from '../layout/mainLayout'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'




function Earphones() {
    const [firstProduct, setFirstProduct] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3000/yx1-earphones`)
            .then(res => res.json())
            .then(data => {
                setFirstProduct(data);
            })
            .catch(err => {
                console.log(err);
            });
    })

    function handleDetail() {
        navigate(`/product4/${firstProduct.id}`)
    }

    return (
        <div className='w-[1540px] mx-auto'>
            <Layout></Layout>
            <div className='w-[1540px] mx-auto px-44 py-[97px] bg-black'>
                <h1 className='text-center text-white mt-46 text-semibold text-5xl tracking-[2px] leading-[44px]'>EARPHONES</h1>
            </div>

            <div className='bg-white flex items-center justify-between w-[1540px] px-44 pt-44 mx-auto'>

                <div className='image'>
                    <img src={img1} alt="headphone img" />
                </div>

                <div className='about-product w-[445px]'>
                    <h1 className='font-Manrope leading-5 text-orange-400 tracking-[10px] mb-4'>NEW PRODUCT</h1>
                    <h2 className='font-Manrope tracking-[2px] font-semibold text-black leading-[44px] text-[40px]'>
                        YX1 WIRELESS
                        EARPHONES
                    </h2>
                    <p className='leading-6 text-zinc-500 font-semibold mt-6 mb-12'>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                    <button onClick={() => { handleDetail(firstProduct.id) }} className='transition px-6 py-3 text-white bg-orange-500 text-[13px] font-semibold mt-18 hover:bg-orange-300'>SEE PRODUCT</button>
                </div>
            </div>



            <Category></Category>
            <MainLayout></MainLayout>
            <Footer></Footer>


        </div>
    )
}

export default Earphones