import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const ItemCard = ({ item }) => {
    return (
        <div className='bg-white shadow-md rounded-xl ml-2 mr-2 mb-2 mt-2 px-2 py-2 overflow-hidden'>
            <div className='relative '>
                <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-48 object-cover rounded-xl'
                />
            </div>
            <div className='p-6'>
                <p className='ml-0 text-2xl px-3 py-2'>
                    <FontAwesomeIcon
                        icon='fa-solid fa-location-dot'
                        style={{ color: "#ff0000" }}
                    />{" "}
                    {item.location}
                </p>

                <h3 className='text-2xl  font-semibold text-gray-800 mb-2 '>
                    {item.title}
                </h3>
                <p className='text-gray-700'>{item.description}</p>
            </div>
        </div>
    );
};

export default ItemCard;
