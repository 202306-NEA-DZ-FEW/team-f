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
    const [mainImage, setMainImage] = useState(images[0]);

    const handleClickImage = (image) => {
        setMainImage(image);
    };

    return (
        <div className='flex flex-col md:flex-row justify-center items-center mb-8 mx-4 md:mx-auto max-w-4xl mt-10'>
            <div className='md:w-1/2 md:mr-8 mb-4 md:mb-0'>
                <div className='rounded-xl overflow-hidden h-[400px] w-full'>
                    <img
                        src={mainImage}
                        alt={title}
                        className='object-cover w-full h-full rounded-xl'
                    />
                </div>
                <div className='flex mt-2'>
                    {images.map((image, index) => (
                        <div key={index} className='mr-2 w-1/3 cursor-pointer'>
                            <img
                                src={image}
                                alt={title}
                                onClick={() => handleClickImage(image)}
                                className={`${
                                    image === mainImage
                                        ? "border-2 border-green-500"
                                        : "opacity-70"
                                } object-cover w-full h-20 rounded-md`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='md:w-1/2 py-4'>
                <h1 className='text-4xl mb-4 font-bold'>{title}</h1>
                <p className='mb-4'>{description}</p>
                <div className='text-xl bg-gray-100 rounded-md'>
                    <span className='font-bold'>Location: </span> {location}
                </div>
                <div className='mt-4'>
                    <p className='text-lg'>
                        <span className='font-bold'>Name:</span> {name}
                    </p>
                    <p className='text-lg'>
                        <span className='font-bold'>Phone:</span> {phone}
                    </p>
                    <p className='text-lg'>
                        <span className='font-bold'>Email:</span> {email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleItemCard;
