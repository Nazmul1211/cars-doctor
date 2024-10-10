import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl border border-[#E8E8E8]">
            <figure className="px-6 pt-6">
                <img
                    src={img}
                    alt={title}
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex text-[#FF3811]">
                    <p>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button><FaArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;