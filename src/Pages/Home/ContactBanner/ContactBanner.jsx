import { SlCalender } from "react-icons/sl";
import { MdPermPhoneMsg } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactBanner = () => {
    return (
        <div className="place-content-center mb-14 md:mb-20">
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 py-20 px-14 bg-black rounded-xl text-white'>
                <div className="flex gap-4 items-center">
                    <div className="text-3xl text-red-500">< SlCalender /></div>
                    <div>
                        <p className="text-sm">We are open monday-friday</p>
                        <h3 className="text-2xl">7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="text-3xl text-red-500">< MdPermPhoneMsg /></div>
                    <div>
                        <p className="text-sm">Have a question?</p>
                        <h3 className="text-2xl">+2546 251 2658</h3>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="text-3xl text-red-500"><FaLocationDot /></div>
                    <div>
                        <p className="text-sm">Need a repair? our address</p>
                        <h3 className="text-2xl">Liza Street, New York</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;