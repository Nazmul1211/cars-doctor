import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, img, customerName, service, email, date, price, status } = booking;
    console.log(status);

    // const [text, setText] = useState('Pending');

    // const changeText = (newText) => {
    //     setText(newText);
    // }

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded h-24 w-24">
                        {img && <img src={img} alt={service} />}
                    </div>
                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>${price}</td>
            <td>{date}</td>
            <td>{email}</td>

            <th>
                {/* onMouseEnter={() => changeText('Confirm')} onMouseLeave={() => changeText('Pending')} */}

                {
                    status === 'confirm' ? <button className='btn border bg-[#FF3811] text-white text-sm'>Confirmed</button> :
                    <button onClick={() => handleBookingConfirm(_id)} className="btn border bg-[#FF3811] text-white text-sm">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;