import React, { useRef } from 'react';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from '../assets/header/logo.svg';
import head1 from '../assets/header/head1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../redux/userSlice';

function Register() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        localStorage.setItem('user', JSON.stringify(user));

        dispatch(register(user));
        emailRef.current.value = null;
        passwordRef.current.value = null;

        navigate('/login');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='container w-[1280px] max-w-screen-xl flex items-center rounded-xl mx-auto bg-black mt-10 p-5'>
                <div className="img w-[750px] ml-10">
                    <Link to='/' href="#" className='mx-auto'><img src={logo} alt="" className='mb-7 ml-40 mt-5' /></Link>
                    <img src={head1} alt="" className='w-[500px] animate-pulse' />
                </div>

                <div className="abouts mx-16">
                    <h1 className='text-3xl mb-5 text-white'><span className='text-orange-400'>W</span>elcome <span className='text-orange-400'>B</span>ack !</h1>
                    <p className='w-[400px] mb-10 text-xl'>Buy audio devices from <span className='text-orange-400'>audiophile</span> and enjoy bright and quality sound, very high quality products only from us</p>
                    <span className='relative'><MdEmail className='absolute top-[1px] left-3 text-xl'></MdEmail><input ref={emailRef} type="email" placeholder='hakeem@example.com' className='w-full indent-7 p-3 border-b-1 border-orange-400 rounded-t-xl border outline-orange-400' /> </span>
                    <span className='relative'><FaLock className='absolute top-[1px] left-3 text-xl'></FaLock  ><input ref={passwordRef} type="password" placeholder='123example' className='w-full indent-7 p-3 border-b-1 border-orange-400 rounded-b-xl border outline-orange-400' /> </span>

                    <div className="form-control mt-6">
                        <div className="flex items-center gap-5 justify-between">
                            <label className='flex items-center gap-3 cursor-pointer'>
                                <input type="checkbox" defaultChecked className="checkbox accent-orange-400 checkbox-warning" />
                                <h1 className="label-text">Remember me</h1>
                            </label>
                            <h1 className='text-orange-400 cursor-pointer hover:underline'>Forgot Password?</h1>
                        </div>
                        <div className='flex items-center justify-between gap-16 mt-10'>
                            <button className='transition bg-orange-400 text-black font-bold px-3 py-3 rounded-lg w-[208px] hover:bg-orange-500 text-center'>Register</button>
                            <Link to='/login' className='transition text-orange-400 border border-orange-400 font-bold px-3 py-3 rounded-lg w-[208px] text-center hover:bg-orange-400 hover:text-black'>Login Page</Link>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
}

export default Register;
