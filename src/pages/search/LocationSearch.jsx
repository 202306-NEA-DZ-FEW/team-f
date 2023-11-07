import { useState } from "react";

import SearchLocation from "@/components/searching/SearchLocation";
import SearchResultsList from "@/components/searching/SearchResultsList";

const LocationSearch = () => {
    const [results, setResults] = useState([]);

    return (
        <div className='bg-[#eee] h-96 w-full'>
            <div className='flex flex-col items-center pt-24 w-2/6 m-auto'>
                <SearchLocation setResults={setResults} />
                <SearchResultsList results={results}/>
            </div>
        </div>
    );
};

export default LocationSearch;
