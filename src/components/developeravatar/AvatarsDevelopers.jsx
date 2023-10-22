import Image from "next/image";
import Link from "next/link";
import React from "react";

const DeveloperAvatar = ({ name, avatarUrl, description }) => {
    return (
        <Link href='/user/[id]' as={`/user/${name}`}>
            <a>
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
                    <p className='text-gray-600 text-sm'>{description}</p>{" "}
                    {/* Added description */}
                </div>
            </a>
        </Link>
    );
};

export default DeveloperAvatar;
