import { useMemo, useRef, useState } from "react";
import { BiSearchAlt } from "react-icons/Bi";

function SearchBar() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const inputRef = useRef();

    const filteredItems = useMemo(() => {
        return items.filter((item) => {
            return item.toLowerCase().includes(query.toLowerCase());
        });
    }, [items, query]);

    function onSubmit(e) {
        e.preventDefault();

        const value = inputRef.current.value;
        if (value === "") return;
        setItems((prev) => {
            return [...prev, value];
        });

        inputRef.current.value = "";
    }

    return (
        <>
            <div className='bg-zinc-200'>
                <div className='flex items-center'>
                    <div className='relative w-300 mr-10'>
                        <BiSearchAlt className='absolute  top-1/2 right-1 transform -translate-y-1/2 text-2xl' />
                        <input
                            className='m-1 p-1 pl-4 pr-4 rounded-3xl shadow-lg'
                            placeholder='Search'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            type='search'
                            style={{ padding: "6px 28px", width: "100%" }}
                        />
                    </div>
                    <button type='submit' className='border m-1 p-1'>
                        Location
                    </button>
                    <button type='submit' className='border m-1 p-1'>
                        Recent
                    </button>
                    <button type='submit' className='border m-1 p-1'>
                        Add item
                    </button>
                </div>

                <br />
                <form onSubmit={onSubmit}>
                    New Item:{" "}
                    <input ref={inputRef} type='text' className='border m-1' />
                </form>
                <h3>Items:</h3>
                {filteredItems.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </>
    );
}

export default SearchBar;
