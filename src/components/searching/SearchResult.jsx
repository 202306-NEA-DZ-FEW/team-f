import { useState } from "react";

const SearchResult = ({ result }) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
    };

    return (
        <div
            className={`p-1 search-result cursor-pointer ${
                selected ? "selected" : ""
            }`}
            onClick={handleClick}
        >
            {result.name}
        </div>
    );
};

export default SearchResult;
