/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

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
        <div className='md:flex md:flex-row md:justify-center md:items-start  md:mb-4 md:m-4 h-full sm:flex-col-reverse sm:mb-4 sm:items-center sm:m-4'>
            <div className='md:w-1/2 sm:w-full flex flex-col justify-center items-center mr-8'>
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
                                    image === mainImage
                                        ? "active "
                                        : "opacity-70"
                                } cover w-full h-full rounded-xl`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='md:w-1/2 py-4 sm:w-full'>
                <h1 className='text-4xl mb-4'>{title}</h1>
                <p className='mb-4'>{description}</p>
                <div className='ml-0 text-2xl px-3 py-2'>{location}</div>
                <div className='mt-4'>
                    <p>Name : {name}</p>
                    <p>Phone : {phone}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleItemCard;
