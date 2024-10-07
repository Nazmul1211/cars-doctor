import React from 'react';
import person from './../../../assets/images/about_us/person.jpg';
import parts from './../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-24">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute right-5 top-1/2 border-8 border-white w-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 lg:pl-5'>
                    <h3 className='text-xl text-[#FF3811] font-bold'>About Us</h3>
                    <h1 className="text-4xl font-bold w-2/3">We are qualified & of experience in this field</h1>
                    <p className="py-3 w-2/3 text-md">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <p className="w-2/3 text-md pb-3">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn bg-[#FF3811] text-white hover:bg-gray-500">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;