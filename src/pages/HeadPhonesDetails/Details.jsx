import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Layout from '../../layout';
import img1 from '../../assets/headphones/img1.png';
import img2 from '../../assets/product-xx99-mark-two-headphones/desktop/img1.jpg';
import img3 from '../../assets/product-xx99-mark-two-headphones/desktop/img2.png';
import img4 from '../../assets/product-xx99-mark-two-headphones/desktop/img3.png';
import img5 from '../../assets/product-xx99-mark-two-headphones/desktop/img4.png';
import img6 from '../../assets/product-xx99-mark-two-headphones/desktop/img5.png';
import img7 from '../../assets/product-xx99-mark-two-headphones/desktop/img6.png';
import Category from '../../layout/indexCategory';
import MainLayout from '../../layout/mainLayout';
import Footer from '../../components/Footer';
import { toast } from 'react-toastify';

function Details() {
    const [data, setData] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const [counter, setCounter] = useState(1);
    const [reloadPage, setReloadPage] = useState(false);

    function dec() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    function inc() {
        setCounter(counter + 1);
    }

    useEffect(() => {
        if (params.id) {
            fetch(`http://localhost:3000/xx99-mark-two-headphones`)
                .then(res => res.json())
                .then(data => {
                    setData(data);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            navigate('/');
        }
    }, [params.id, navigate, reloadPage]);

    function handleAddCart() {
        setTimeout(() => {
            setTimeout(() => {
                toast.success("This product is add");
            }, 200);
        }, 600);
        const product = {
            id: data.id,
            name: data.name,
            price: data.price,
            count: counter
        };
        const existingItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedItems = [...existingItems, product];
        localStorage.setItem('cart', JSON.stringify(updatedItems));


    }

    function goMark1() {
        navigate('/product2/3');
    }
    function goZx59() {
        navigate('/product3/2');
    }

    function goZx9() {
        navigate('/product7/6');
    }


    return (
        <div className='bg-white w-[1540px] mx-auto'>
            <Layout />
            <div className='w-[1540px] mx-auto mt-[79px] px-44 '>
                <Link to='/headphones' className='leading-6 text-[15px] hover:underline'>Go back</Link>
            </div>

            <div className='bg-white flex items-center justify-between w-[1440px] px-44 mt-20 mx-auto'>
                <div className='image mb-[160px]'>
                    <img src={img1} alt="headphone img" />
                </div>
                <div className='about-product w-[445px]'>
                    <h1 className='font-Manrope leading-5 text-orange-400 tracking-[10px] mb-3'>NEW PRODUCT</h1>
                    <h2 className='font-Manrope tracking-[2px] font-semibold text-black leading-[44px] text-[40px]'>
                        {data?.name}
                    </h2>
                    <p className='leading-6 text-zinc-500 font-semibold mt-6 mb-12'>{data?.description}</p>
                    <h3 className='text-black tracking-[1px] leading-[25px font-bold mb-10'>$ {data?.price / 1000}</h3>
                    <div className='flex items-center gap-4'>
                        <div className="join">
                            <button className="px-4 py-3  bg-zinc-300 border-0 text-zinc-500 font-semibold hover:text-orange-400 bg-gray" onClick={dec}>-</button>
                            <h1 className="px-4 py-3  bg-zinc-300 border-0 text-black">{counter}</h1>
                            <button className="px-4 py-3  bg-zinc-300 border-0 text-zinc-500 font-semibold hover:text-orange-400 bg-gray" onClick={inc}>+</button>
                        </div>
                        <div className='join'>
                            <button onClick={handleAddCart} className='transition py-[14px] px-7 bg-orange-400 text-white text-[13px] font-semibold hover:opacity-50'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-[1540px] mx-auto flex justify-between px-44'>
                <div className='left w-[635px]'>
                    <h1 className='leading-9 text-black text-3xl font-semibold mb-8'>FEATURES</h1>
                    <p className='text-zinc-600 mb-[160px]'>{data?.features}</p>
                </div>
                <div className='right '>
                    <h1 className='leading-9 text-black text-3xl font-semibold mb-8'>IN THE BOX</h1>
                    <div className='flex flex-col gap-2'>
                        {data?.includes && data.includes.map((item, index) => (
                            <div className='flex items-center gap-4' key={index}>
                                <h1 className='text-orange-400'>{item.quantity}x</h1>
                                <h1 className='text-zinc-600 capitalize'>{item.item}</h1>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            <div className='w-[1110px] flex mb-[160px] items-center justify-between mx-auto '>
                <div className='h-[590px] flex flex-col justify-between'>
                    <img src={img4} alt="boy img" />
                    <img src={img3} alt="headphone img" />
                </div>
                <div>
                    <img src={img2} alt="black headphones img" />
                </div>
            </div>

            <div className='w-[1110px] mx-auto'>
                <h1 className='uppercase text-center mb-16 text-3xl text-black font-semibold'>you may also like</h1>
                <div className='flex items-center justify-between'>
                    <div className='w-[350px] h-[471px]'>
                        <div className='img w-[350px] h-[318px] bg-zinc-100 flex items-center justify-center'>
                            <img src={img5} alt="mark 2 img" />
                        </div>
                        <div className='about flex flex-col justify-between px-[80px]'>
                            <h1 className='text-center text-black font-semibold mt-[40px] mb-[32px] text-[24px] tracking-[2px] leading-5'>XX 99 MARK I</h1>
                            <button onClick={goMark1} className='px-6 mb-[160px] py-2.5 text-[13px] font-semibold bg-orange-500 text-white'>SEE PRODUCT</button>
                        </div>
                    </div>

                    <div className='w-[350px] h-[471px]'>
                        <div className='img w-[350px] h-[318px] bg-zinc-100 flex items-center justify-center'>
                            <img src={img6} alt="mark 2 img" />
                        </div>
                        <div className='about flex flex-col justify-between px-[80px]'>
                            <h1 className='text-center text-black font-semibold mt-[40px] mb-[32px] text-[24px] tracking-[2px] leading-5'>XX59</h1>
                            <button onClick={goZx59} className='px-6 mb-[160px] py-2.5 text-[13px] font-semibold bg-orange-500 text-white'>SEE PRODUCT</button>
                        </div>
                    </div>

                    <div className='w-[350px] h-[471px]'>
                        <div className='img w-[350px] h-[318px] bg-zinc-100 flex items-center justify-center'>
                            <img src={img7} alt="mark 2 img" />
                        </div>
                        <div className='about flex flex-col justify-between px-[80px]'>
                            <h1 className='text-center text-black font-semibold mt-[40px] mb-[32px] text-[24px] tracking-[2px] leading-5'>ZX9 Speaker</h1>
                            <button onClick={goZx9} className='px-6 mb-[160px] py-2.5 text-[13px] font-semibold bg-orange-500 text-white'>SEE PRODUCT</button>
                        </div>
                    </div>

                </div>
            </div>

            <Category />
            <MainLayout />
            <Footer />
        </div>
    );
}

export default Details;
