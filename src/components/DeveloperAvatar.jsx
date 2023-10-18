import React from "react";
import Image from "next/image";

const DeveloperAvatar = ({ name, avatarUrl }) => {
    return (
        <div className='text-center'>
            <div className='relative w-24 h-24 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 mb-2 mx-auto'>
                <Image
                    src={avatarUrl}
                    alt={`${name}'s Avatar`}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-full'
                />
            </div>
            <p className='text-lg font-semibold'>{name}</p>
        </div>
    );
};

export default DeveloperAvatar;
