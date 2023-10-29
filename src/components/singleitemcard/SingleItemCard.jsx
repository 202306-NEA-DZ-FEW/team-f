import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SingleItemCard = ({
    images,
    title,
    description,
    location,
    name,
    phone,
    email,
}) => {
    const [mainImage, setMainImage] = useState(images[0]); // Initialize main image with the first image

    const handleClickImage = (image) => {
        setMainImage(image);
    };

    return (
        <div className='flex mb-4 m-4 h-full'>
            <div className='w-1/2 flex flex-col justify-center items-center mr-8'>
                <div className='rounded-xl h-[400px] w-full align-middle justify-center '>
                    <img
                        src={mainImage}
                        alt={title}
                        className='cover w-full h-full rounded-xl'
                    />
                </div>
                <div className='flex w-full  '>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className='mr-2 ml-2 mt-2 w-1/3 rounded-xl'
                        >
                            <img
                                src={image}
                                alt={title}
                                onClick={() => handleClickImage(image)}
                                className={`${
                                    image === mainImage ? "active" : ""
                                } cover w-full h-full rounded-xl`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-1/2 py-4'>
                <h1 className='text-4xl mb-4'>{title}</h1>
                <p className='mb-4'>{description}</p>
                <div className='ml-0 text-2xl px-3 py-2'>
                    <FontAwesomeIcon
                        icon='fa-solid fa-location-dot'
                        style={{ color: "#ff0000" }}
                    />
                    {location}
                </div>
                <div className='mt-4'>
                    <FontAwesomeIcon icon='fa-solid fa-user' />
                    <p>Name : {name}</p>
                    <p>Phone : {phone}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleItemCard;
