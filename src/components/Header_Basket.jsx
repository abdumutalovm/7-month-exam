import React, { useState, useEffect } from 'react';
import basket from '../assets/header/basket.svg';
import mark2 from '../assets/headphones/img1.png';
import yx1 from '../assets/product-yx1-earphones/desktop/earphones-page.jpg'
import mark1 from '../assets/product-xx99-mark-one-headphones/desktop/mark1.jpg'
import xx59 from '../assets/headphones/img3.png'
import zx9 from '../assets/product-zx9-speaker/desktop/img1.png'
import zx7 from '../assets/product-zx7-speaker/desktop/img1.png'
import { useNavigate } from 'react-router-dom';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Header_Basket() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart'));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleIncrement = (index) => {
        const updatedCart = [...cartItems];
        updatedCart[index].count += 1;
        setCartItems(updatedCart);
    };

    const handleDecrement = (index) => {
        const updatedCart = [...cartItems];
        if (updatedCart[index].count > 1) {
            updatedCart[index].count -= 1;
            setCartItems(updatedCart);
        }
    };

    const getTotalPrice = () => {
        if (cartItems.length === 0) {
            return 0;
        }

        return cartItems.reduce((total, item) => total + (item.price * item.count), 0);
    };

    const handleCheckOut = () => {
        navigate('/checkout')
    };

    const removeAllProducts = () => {
        localStorage.removeItem('cart');
        setCartItems([]);
    };

    return (

        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="header-basket">
                <button onClick={() => document.getElementById('my_modal_2').showModal()}>
                    <img src={basket} alt="basket img" className='hover:opacity-75' />
                </button>
                <dialog id="my_modal_2" className="modal mt-[-10px] fixed w-[377px] ml-[950px]">
                    <div className="modal-box bg-white rounded-lg w-[377px] ">
                        <div className='flex items-center justify-between'>
                            <h3 className="font-semibold text-lg text-black mb-5">CART ({cartItems.length})</h3>
                            <button onClick={removeAllProducts} className='text-zinc-500 hover:underline'>Remove all</button>
                        </div>
                        {cartItems.map((item, index) => (
                            <div key={index} className='flex items-center mb-5'>
                                <img src={item.price === 599 ? yx1 : zx7 && item.price === 2999 ? mark2 : zx7 && item.price === 1750 ? mark1 : zx7 && item.price === 899 ? xx59 : zx7 && item.price === 4500 ? zx9 : zx7 && item.price === 3500 ? zx7 : zx7} alt="" className='rounded-lg w-[64px] h-[64px]' />
                                <div className='flex flex-col justify-center gap-1 ml-3 mr-14'>
                                    <h1 className='text-black font-semibold'>{item.name}</h1>
                                    <h1 className='text-zinc-600 font-semibold'>$ {item.price}</h1>
                                </div>
                                <div className="join">
                                    <button className="px-4 py-4 flex flex-col justify-center bg-zinc-200 border-0 btn-xs text-zinc-500 font-semibold hover:text-orange-400 bg-gray" onClick={() => handleDecrement(index)}>-</button>
                                    <h1 className="text-xs px-4 py-2 flex flex-col justify-center bg-zinc-200 border-0 text-black">{item.count}</h1>
                                    <button className="btn-xs px-4 py-4 flex flex-col justify-center bg-zinc-200 border-0 text-zinc-500 font-semibold hover:text-orange-400 bg-gray" onClick={() => handleIncrement(index)}>+</button>
                                </div>
                            </div>
                        ))}
                        <div className='mt-8'>
                            <div className='flex items-center justify-between'>
                                <h1 className='mb-8 text-zinc-500'>TOTAL</h1>
                                <h2 className='mb-8 text-[18px] text-black font-semibold'>$ {getTotalPrice()}</h2>
                            </div>
                            <button className='w-full px-2 py-3 bg-orange-400 text-white' onClick={handleCheckOut}>CHECKOUT</button>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </>
    );
}

export default Header_Basket;
