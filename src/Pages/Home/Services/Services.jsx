import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setService] = useState([]);

    useEffect( ()=>{
        fetch("http://localhost:4000/services")
        .then(res => res.json())
        .then(data =>setService(data));
    } , [])


    return (
        <div className='my-20'>
            <div className='text-center py-4'>
                <h3 className='text-md font-bold text-[#FF3811]'>Services</h3>
                <h1 className='text-4xl font-bold'>Our Service Area</h1>
                <p className='text-md w-3/5 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;