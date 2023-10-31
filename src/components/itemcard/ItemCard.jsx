import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const ItemCard = ({ image, title, location, description }) => {
    return (
        <div className='bg-white shadow-md rounded-xl mt-2 mb-8 p-2 w-48 h-56 overflow-hidden'>
            {/* <div className='relative '>
                <Image
                    src={image}
                    alt={title}
                    className='w-10 h-48 object-cover rounded-xl'
                />
            </div> */}
            <div className='pt-3 pl-1 mt-28'>
                <p className='text-base px-3'>
                    <FontAwesomeIcon
                        icon='fa-solid fa-location-dot'
                        style={{ color: "#ff0000" }}
                    />{" "}
                    {location}
                </p>

                <h3 className='text-base font-semibold text-gray-800'>
                    {title}
                </h3>
                <p className='text-gray-700 text-xs'>{description}</p>
            </div>
        </div>
    );
};

export default ItemCard;
