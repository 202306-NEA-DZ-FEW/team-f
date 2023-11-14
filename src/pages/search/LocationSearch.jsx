import React, { useState } from "react";

import SearchComponent from "@/components/searching/SearchLocation";

const LocationSearch = () => {
    return (
        <div className='bg-[#eee] h-96 w-full'>
            <div className='flex flex-col items-center pt-24 m-auto'>
                <SearchComponent />
            </div>
        </div>
    );
};

export default LocationSearch;
