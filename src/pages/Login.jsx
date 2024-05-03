import React, { useRef } from 'react';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from '../assets/header/logo.svg';
import head1 from '../assets/header/head2.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/tokenSlice';
import { useEffect } from 'react';


function Register() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const users = useSelector(state => state.users.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            navigate('/');
        }
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        let user = users.find((el) => {
            return el.email === emailRef.current.value && el.password === passwordRef.current.value;
        });

        if (user) {
            dispatch(add(user.email));
            navigate('/');
        } else {
            alert('Password or email is incorrect');
            emailRef.current.value = null;
            passwordRef.current.value = null
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='container w-[1280px] max-w-screen-xl flex items-center rounded-xl mx-auto bg-[#060407] mt-10 p-5'>
                <div className="img w-[750px] ml-10">
                    <Link to='/' href="#" className='mx-auto'><img src={logo} alt="" className='mb-7 ml-40 mt-5' /></Link>
                    <img src={head1} alt="" className='w-[500px] animate-pulse' />
                </div>

                <div className="abouts mx-16">
                    <h1 className='text-3xl mb-5 text-white'><span className='text-orange-400'>L</span>ets <span className='text-orange-400'>G</span>o !</h1>
                    <p className='w-[400px] mb-10 text-xl'>Buy audio devices from <span className='text-orange-400'>audiophile</span> and enjoy bright and quality sound, very high quality products only from us</p>
                    <span className='relative'><MdEmail className='absolute top-[1px] left-3 text-xl'></MdEmail><input ref={emailRef} type="email" placeholder='Enter email' className='w-full indent-7 p-3 border-b-1 border-orange-400 rounded-t-xl border' /> </span>
                    <span className='relative'><FaLock className='absolute top-[1px] left-3 text-xl'></FaLock  ><input ref={passwordRef} type="password" placeholder='Enter password' className='w-full indent-7 p-3 border-b-1 border-orange-400 rounded-b-xl border' /> </span>

                    <div className="form-control mt-6">
                        <div className="flex items-center gap-5 justify-between">
                            <label className='flex items-center gap-3 cursor-pointer'>
                                <input type="checkbox" defaultChecked className="checkbox accent-orange-400 checkbox-warning" />
                                <h1 className="label-text">Remember me</h1>
                            </label>
                            <h1 className='text-orange-400 cursor-pointer hover:underline'>Forgot Password?</h1>
                        </div>
                        <div className='flex items-center justify-between gap-16 mt-10'>
                            <button type="submit" className='transition bg-orange-400 text-black font-bold px-3 py-3 rounded-lg w-[208px] hover:bg-orange-500 text-center'>Login</button>
                            <Link to='/register' className='transition text-orange-400 border border-orange-400 font-bold px-3 py-3 rounded-lg w-[208px] text-center hover:bg-orange-400 hover:text-black'>Create Account</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;
