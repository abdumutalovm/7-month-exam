import React, { useEffect } from 'react'
import Layout from '../layout'
import { Link } from 'react-router-dom'
import mark2 from '../assets/headphones/img1.png';
import yx1 from '../assets/product-yx1-earphones/desktop/earphones-page.jpg'
import mark1 from '../assets/product-xx99-mark-one-headphones/desktop/mark1.jpg'
import xx59 from '../assets/headphones/img3.png'
import zx9 from '../assets/product-zx9-speaker/desktop/img1.png'
import zx7 from '../assets/product-zx7-speaker/desktop/img1.png'
import { useState } from 'react';

function CheckOut() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart'));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);


    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2);
    };


    return (
        <>
            <Layout></Layout>
            <div className='w-[1110px] mx-auto mt-20 mb-14'>
                <Link to='/' className='hover:underline'>Go back</Link>
            </div>
            <div className='w-[1110px] flex justify-between mx-auto'>
                <div className="checkout mb-[141px] pt-[54px] pb-[48px] px-[48px] w-[730px] mx-auto rounded-lg bg-white">

                    <h1 className='text-3xl text-black font-semibold tracking-[1px] mb-10'>CHECKOUT</h1>
                    <span className='text-orange-400 text-sm uppercase font-semibold tracking-[1px] mb-6 block'>Billing Details</span>

                    <div className='flex items-center justify-between gap-4 mb-6'>
                        <div>
                            <label htmlFor="name" className='font-semibold text-sm text-black mb-3 block'>Name</label>
                            <input type="text" id='name' placeholder="Alexei Ward" className="bg-white border border-zinc-300 input input-bordered w-[309px]" />
                        </div>
                        <div>
                            <label htmlFor="eamil" className='font-semibold text-sm text-black mb-3 block'>Email Addres</label>
                            <input type="email" id='email' placeholder="alexei@mail.com" className="w-[309px] input input-bordered bg-white border border-zinc-300 " />
                        </div>
                    </div>

                    <div className='flex flex-col' >
                        <label htmlFor="number" className='font-semibold text-sm text-black mb-3 block'>Phone Number</label>
                        <input type="number" id='number' placeholder="+1 202-555-0136" className="w-[309px] mb-14 input input-bordered bg-white border border-zinc-300" />
                    </div>

                    <h1 className='text-orange-400 text-sm uppercase font-semibold tracking-[1px] mb-6 block'>shipping info</h1>
                    <div className='flex flex-col'>
                        <label className='font-semibold text-sm text-black mb-3 block' htmlFor="address">Address</label>
                        <input type="text" id='address' placeholder="1137 Williams Avenue" className="w-full mb-6 input input-bordered bg-white border border-zinc-300" />
                    </div>

                    <div className='flex items-center justify-between'>
                        <div>
                            <label htmlFor="zip" className='font-semibold text-sm text-black mb-3 block'>ZIP Code</label>
                            <input type="number" id='zip' placeholder="10001" className="w-[309px] mb-6 input input-bordered bg-white border border-zinc-300" />
                        </div>
                        <div>
                            <label htmlFor="city" className='font-semibold text-sm text-black mb-3 block'>City</label>
                            <input type="text" id='city' placeholder="New York" className="w-[309px] mb-6 input input-bordered bg-white border border-zinc-300" />
                        </div>
                    </div>
                    <div className='flex flex-col mb-[61px]'>
                        <label htmlFor="country" className='font-semibold text-sm text-black mb-3 block'>Country</label>
                        <input type="text" id='country' placeholder="United States" className="w-[309px] input input-bordered bg-white border border-zinc-300" />
                    </div>
                    <h1 className='text-orange-400 text-sm uppercase font-semibold tracking-[1px] mb-4 block'>payment details</h1>
                    <div className='flex justify-between'>
                        <div>
                            <label htmlFor="payment" className='font-bold text-sm text-black block mb-[136px]'>Payment Method</label>
                        </div>
                        <div>
                            <button className='w-[309px] px-[16px] mb-[16px] py-[18px] rounded-lg border-orange-400 border flex items-center gap-4 text-black font-bold'><input type="radio" name='radio_6' className=" radio ring-orange-400 radio-warning" />e-Money</button>
                            <button className='w-[309px] px-[16px] mb-[24px] py-[18px] rounded-lg border-orange-400 border flex items-center gap-4 text-black font-bold'><input type="radio" name='radio_6' className=" radio ring-orange-400 radio-warning" />Cash on Delivery</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
                            <label htmlFor="e_money_number" className='font-semibold text-sm text-black mb-3 block'>e-Money Number</label>
                            <input type="number" id='e_money_number' placeholder="238521993" className=" w-[309px] input input-bordered bg-white border border-zinc-300" />
                        </div>
                        <div>
                            <label htmlFor="e_money_pass" className='font-semibold text-sm text-black mb-3 block'>e-Money PIN</label>
                            <input type="password" id='e_money_pass' placeholder="6891" className="w-[309px] input input-bordered bg-white border border-zinc-300" />
                        </div>
                    </div>

                </div>

                <div className='summary w-[350px] h-full bg-white p-[33px] rounded-lg'>
                    <h1 className='font-bold mb-[31px] text-black'>SUMMARY</h1>
                    {cartItems.map((item, index) => (
                        <div key={index} className='flex items-center justify-between mb-3'>
                            <div className='w-[64px]'>
                                <img src={item.price === 599 ? yx1 : zx7 && item.price === 2999 ? mark2 : zx7 && item.price === 1750 ? mark1 : zx7 && item.price === 899 ? xx59 : zx7 && item.price === 4500 ? zx9 : zx7 && item.price === 3500 ? zx7 : zx7} alt={item.name} className='mr-[16px] w-[64px] h-[64px] object-cover rounded-lg' />
                            </div>
                            <div className='mr-[70px] ml-[16px]'>
                                <h1 className='text-black font-bold'>{item.name}</h1>
                                <h1 className='text-zinc-500 font-bold'>$ {item.price}</h1>
                            </div>
                            <div>
                                <h1 className='text-zinc-500 font-bold'>x{item.count}</h1>
                            </div>
                        </div>
                    ))}
                    <div className='flex items-center justify-between'>
                        <h1>TOTAL</h1>
                        <h1>$ {calculateTotal()}</h1>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h1>SHIPPING</h1>
                        <h1>$ 50</h1>
                    </div>

                    <div className='flex items-center justify-between'>
                        <h1>VAT (INCLUDED)</h1>
                        <h1>$ 1,079</h1>
                    </div>

                    <div className='flex items-center justify-between'>
                        <h1 className='mb-7'>GRAND TOTAL</h1>
                        <h1>$ 5,446</h1>
                    </div>

                    <label htmlFor="my_modal_7" className='transition px-8 cursor-pointer py-3 text-[13px] text-white font-semibold bg-orange-400 hover:opacity-60'>CONTINUE & PAY</label>

                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box bg-white">
                            <h3 className="text-lg font-bold">Hello!</h3>
                            <p className="py-4">This modal works with a hidden checkbox!</p>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CheckOut;
