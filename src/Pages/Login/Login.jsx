import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate( location?.state ? location?.state : '/' );
        })
        .catch(error => console.log(error));

    }


    return (
        <div className="hero min-h-scren mb-14">
            <div className="hero-content flex-col lg:flex-row">
                <div className="md:mr-16 md:w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 md:w-1/2  max-w-sm shrink-0 shadow-2xl border border-slate-400">
                    <h1 className="text-3xl font-semibold text-center py-8">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button ></button>
                            <input className="btn bg-[#FF3811] hover:bg-orange-500 text-white " type="submit" value="Sign In" />
                        </div>
                    </form>
                    <div >
                        <p className='text-black text-sm text-center'>Or Sign In with</p>
                        <div className='flex w-1/2 mx-auto gap-4 place-items-center mt-4 mb-5'>
                            <button className='text-2xl bg-slate-300 rounded-full p-3 hover:bg-slate-200 hover:text-blue-900'><FaFacebookF /></button>
                            <button className='text-2xl bg-slate-300 rounded-full p-3 hover:bg-slate-200 hover:text-blue-800'><FaLinkedinIn /></button>
                            <button className='text-2xl bg-slate-300 rounded-full p-3 hover:bg-slate-200 hover:text-blue-700'><FaGoogle /></button>
                        </div>
                        <p className='text-sm text-center mb-5'>Don't have an Account <Link className='text-[#FF3811] font-bold' to="/sign-up">Sign up</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;