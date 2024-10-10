import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const { title, service_id, price, img} = service;
     const {user} = useContext(AuthContext);

    const haddleCheckOut = (event) =>{
        event.preventDefault();
        const form = event.target;
        // const firtsName = form.firtName.value;
        // const lastName = form.lastName.value;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const textArea = form.textarea.value;

        const booking = {
            customerName: name,
            email,
            img,
            date,
            textArea,
            service: title,
            service_id : service_id,
            price: price,
        }
        console.log(booking);

        fetch('http://localhost:4000/bookings', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Order place successfully');
                form.value == " ";
            }
        })
    }

    return (
        <div className="px-10 py-32 bg-[#F3F3F3] my-10 rounded-lg">
            <form onSubmit={haddleCheckOut} className="card-body w-full">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'> 
                    <div className="form-control">
                        <input type="text" defaultValue={user?.displayName} placeholder="You Name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="date" placeholder="Pick Date" name='date' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="email" defaultValue={user?.email} placeholder="Your Email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" defaultValue={'$ ' + price} placeholder='Due Price' name='price' className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-4">
                    <textarea className="textarea textarea-bordered text-[16px]" name='textarea' placeholder="Your Massage" required></textarea>
                </div>
                <div className="form-control mt-6 bg-[#FF3811] hover:bg-orange-500 py-4 text-white font-bold rounded-md">
                    <input type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;