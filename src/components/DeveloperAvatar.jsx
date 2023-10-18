// components/DeveloperAvatar.js

import React from "react";

const DeveloperAvatar = ({ name, avatarUrl }) => {
    return (
        <div className='developer-avatar m-4 sm:m-2 md:m-2 lg:m-2 xl:m-2'>
            <img
                src={avatarUrl}
                alt={`${name}'s Avatar`}
                className='rounded-full w-20 h-20 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-16 xl:h-16 mx-auto'
            />
            <p className='mt-2 text-center text-lg font-semibold'>{name}</p>
        </div>
    );
};

export default DeveloperAvatar;
