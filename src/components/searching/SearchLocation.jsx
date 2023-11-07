import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const SearchLocation = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    );
                });
                setResults(results);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className='bg-white h-2.5 px-5 py-6 rounded-2xl shadow-lg flex items-center w-68'>
            <FaLocationDot className='bg-transparent border-none h-96 text-3xl w-4 text-lime-700 ' />
            <input
                className='ml-3 text-input '
                placeholder='Location...'
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};

export default SearchLocation;
